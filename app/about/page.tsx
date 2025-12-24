"use client"

import { motion } from "motion/react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
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

  const skills = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel"] },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-20">
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">About </span>
                <span className="gradient-text">Me</span>
              </h1>
              <div className="w-20 h-1 bg-secondary rounded-full" />
            </motion.div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
              {/* Text Content */}
              <motion.div variants={itemVariants} className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate developer with a keen eye for design and a love for solving complex problems. With 5+
                  years of experience in web development, I've worked with startups and established companies to bring
                  their digital visions to life.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey began with a curiosity about how things work, which led me to explore computer science and
                  eventually specialize in full-stack development. I'm constantly learning and staying updated with the
                  latest technologies.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you can find me exploring new design trends, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </motion.div>

              {/* Image/Visual */}
              <motion.div variants={itemVariants} className="relative h-80 md:h-full">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl border border-secondary/30"
                />
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-secondary/30">
                  👨‍💻
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div variants={itemVariants} className="mb-20">
              <h2 className="text-3xl font-bold mb-12">
                <span className="text-white">Technical </span>
                <span className="gradient-text">Skills</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill, i) => (
                  <motion.div key={i} whileHover={{ y: -5 }} className="group">
                    <Card className="bg-card border-border hover:border-secondary transition-all hover:glow h-full">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-secondary mb-4">{skill.category}</h3>
                        <ul className="space-y-2">
                          {skill.items.map((item, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 }}
                              className="text-muted-foreground flex items-center"
                            >
                              <span className="text-secondary mr-3">→</span>
                              {item}
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
