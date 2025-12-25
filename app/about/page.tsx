"use client";

import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

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
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Three.js",
      "WebGL",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "MongoDB",
      "PostgreSQL",
      "Supabase",
    ],
  },
  {
    category: "AI / ML",
    items: [
      "Python",
      "YOLO",
      "OpenCV",
      "LLMs",
      "RAG Pipelines",
      "Vector Databases (Pinecone)",
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git & GitHub",
      "Docker",
      "Vercel",
      "Netlify",
      "AWS (Basics)",
      "Linux",
    ],
  },
];


  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-20">
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
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
                  I'm a full-stack developer and computer engineering student
                  with a strong passion for building modern, interactive, and
                  performance-driven web applications. I enjoy blending clean UI
                  design with robust backend logic to create meaningful digital
                  experiences.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My journey started with curiosity about how systems work,
                  which evolved into hands-on experience with technologies like
                  React, Next.js, Node.js, MongoDB, and Three.js. I've worked on
                  projects ranging from AI-powered platforms and real-time
                  systems to 3D-rich web interfaces and hackathon solutions.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Beyond coding, I actively explore generative AI, WebGL, and
                  emerging web technologies, contribute to collaborative
                  projects, and share knowledge through communities and events.
                  I'm always eager to learn, experiment, and push the boundaries
                  of what's possible on the web.
                </p>
              </motion.div>

              {/* Image/Visual */}
              <motion.div
                variants={itemVariants}
                className="relative  md:h-full border-6 bg-[#d3fcff] border-white md:-translate-y-18 shadow rounded-full overflow-hidden"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 rounded-full  "
                />
                <img
                  src="/parthjoshi.png"
                  alt="About Me Illustration"
                  className="relative w-full h-full -translate-x-10 object-contain rounded-2xl"
                />
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
                        <h3 className="text-xl font-bold text-secondary mb-4">
                          {skill.category}
                        </h3>
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
  );
}
