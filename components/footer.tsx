"use client"

import { motion } from "motion/react"
import { Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-black border-t border-border py-12 font-[michroma] "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-2">Parth Joshi</h3>
            <p className="text-muted-foreground">Full-stack developer building amazing digital experiences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              {["Home", "About", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <motion.a href="#" whileHover={{ x: 5, color: "#42f6f0" }} className="transition-colors">
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              {["GitHub", "LinkedIn", "Twitter"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1, color: "#42f6f0" }}
                  className="text-muted-foreground transition-colors text-sm"
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
            <p>© {currentYear} Portfolio. All rights reserved.</p>
            <motion.p className="flex items-center gap-1" whileHover={{ scale: 1.05 }}>
              Made with <Heart className="w-4 h-4 text-secondary fill-secondary" /> by Parth Joshi
            </motion.p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
