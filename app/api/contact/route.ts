import nodemailer from "nodemailer"

// Simple IP-based rate limiter (in-memory).
// Note: In serverless deployments, use a shared store (e.g., Redis/Upstash).
const RATE_LIMIT_WINDOW_MS = Number(process.env.CONTACT_RATE_LIMIT_WINDOW_MS ?? 60_000) // 1 minute
const RATE_LIMIT_MAX = Number(process.env.CONTACT_RATE_LIMIT_MAX ?? 5)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function getClientIp(req: Request) {
  const xfwd = req.headers.get("x-forwarded-for") || req.headers.get("X-Forwarded-For")
  if (xfwd) return xfwd.split(",")[0].trim()
  const real = req.headers.get("x-real-ip") || req.headers.get("X-Real-IP")
  if (real) return real
  const cf = req.headers.get("cf-connecting-ip") || req.headers.get("CF-Connecting-IP")
  if (cf) return cf
  const vercel = req.headers.get("x-vercel-forwarded-for") || req.headers.get("X-Vercel-Forwarded-For")
  if (vercel) return vercel.split(",")[0].trim()
  return "unknown"
}

function checkRateLimit(ip: string) {
  const now = Date.now()
  const record = rateLimitMap.get(ip)
  if (!record || now >= record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return { limited: false, remaining: RATE_LIMIT_MAX - 1, resetMs: RATE_LIMIT_WINDOW_MS }
  }
  if (record.count >= RATE_LIMIT_MAX) {
    return { limited: true, remaining: 0, resetMs: Math.max(0, record.resetAt - now) }
  }
  record.count += 1
  rateLimitMap.set(ip, record)
  return { limited: false, remaining: RATE_LIMIT_MAX - record.count, resetMs: Math.max(0, record.resetAt - now) }
}

export const runtime = "nodejs"

type ContactPayload = {
  name?: string
  email?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    // Rate limiting per IP
    const ip = getClientIp(req)
    const rl = checkRateLimit(ip)
    const commonHeaders: Record<string, string> = {
      "Content-Type": "application/json",
      "X-RateLimit-Limit": String(RATE_LIMIT_MAX),
      "X-RateLimit-Remaining": String(rl.remaining),
      "X-RateLimit-Reset": String(Math.ceil(rl.resetMs / 1000)),
    }
    if (rl.limited) {
      return new Response(
        JSON.stringify({ error: "Too many requests. Please try again later." }),
        { status: 429, headers: { ...commonHeaders, "Retry-After": String(Math.ceil(rl.resetMs / 1000)) } }
      )
    }

    const body: ContactPayload = await req.json()

    const name = (body.name || "").trim()
    const email = (body.email || "").trim()
    const message = (body.message || "").trim()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const host = process.env.SMTP_HOST
    const port = Number(process.env.SMTP_PORT || 587)
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const to = process.env.MAIL_TO || process.env.SMTP_USER
    const from = process.env.MAIL_FROM || process.env.SMTP_USER

    if (!host || !user || !pass || !to || !from) {
      return new Response(JSON.stringify({ error: "SMTP environment variables are not configured" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      })
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    })

    const subject = `New contact form submission from ${name}`
    const html = `
      <div style="font-family: Arial, sans-serif; line-height:1.6;">
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      </div>
    `

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html,
    })

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: commonHeaders,
    })
  } catch (err) {
    console.error("Contact API error:", err)
    return new Response(JSON.stringify({ error: "Failed to send message" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
