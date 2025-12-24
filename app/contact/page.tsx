"use client"

import type React from "react"

import { motion } from "motion/react"
import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      if (res.ok) {
        setName("")
        setEmail("")
        setMessage("")
      } else {
        console.error("Failed to send message")
      }
    } catch (err) {
      console.error("Error sending message", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "parthjoshi1973@gmail.com",
      href: "mailto:parthjoshi1973@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8380982758",
      href: "tel:+918380982758",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "https://www.google.com/maps/place/Pune,+Maharashtra/@18.5246164,73.8629674,27076m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bc2bf2e67461101:0x828d43bf9d9ee343!8m2!3d18.5246091!4d73.8786239!16zL20vMDE1eTJx?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-20">
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16 text-center max-w-2xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Let's </span>
                <span className="gradient-text">Connect</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Have a project in mind or want to collaborate? I'd love to hear from you. Feel free to reach out
                anytime.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>

                {contactInfo.map((info, i) => {
                  const Icon = info.icon
                  return (
                    <motion.a
                      key={i}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-card transition-colors"
                    >
                      <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-secondary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </motion.a>
                  )
                })}

                {/* Social Links */}
                <div className="pt-8 border-t border-border">
                  <p className="text-white font-semibold mb-4">Follow Me</p>
                  <div className="flex gap-4">
                    {[{icon:"GitHub",url:"https://github.com/parthjoshi19"}, {icon:"LinkedIn",url:"https://www.linkedin.com/in/parth-joshi-9ab997306"}, {icon:"Instagram",url:"https://www.instagram.com/parth_joshi999/"}].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                        whileHover={{ y: -5 }}
                        className="px-4 py-2 bg-card border border-border rounded-lg text-secondary hover:border-secondary transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                variants={itemVariants}
                onSubmit={handleSubmit}
                className="space-y-6 bg-card border border-border rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold text-white">Send me a Message</h2>

                {/* Name Input */}
                <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.1 }}>
                  <label className="block text-sm font-medium text-white mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </motion.div>

                {/* Email Input */}
                <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.2 }}>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-secondary transition-colors"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </motion.div>

                {/* Message Input */}
                <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ delay: 0.3 }}>
                  <label className="block text-sm font-medium text-white mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-border rounded-lg text-white placeholder-muted-foreground focus:outline-none focus:border-secondary transition-colors resize-none"
                    placeholder="Your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-secondary text-black font-bold py-3 rounded-lg hover:bg-secondary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                        className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
