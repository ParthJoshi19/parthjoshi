"use client"

import { motion } from "motion/react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "ChatPDF",
      image:"/chatpdf.png",
      description: "AI-powered ChatPDF solution with semantic search and natural language interaction for documents.",
      tags: ["PostgreSQL", "Next.js", "Node.js", "RAG", "OpenAI", "PDF Processing","LLM"],
      github: "https://github.com/ParthJoshi19/chatpdf",
      link: "https://chatpdf-three-beige.vercel.app",
    },
    {
      image:"/borocella.png",
      title: "BoroCella",
      description: "Modern interactive website integrating Three.js for real-time 3D graphics and React.js for component-based architecture",
      tags: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind"],
      link: "https://borocella.vercel.app",
      github: "https://github.com/ParthJoshi19/BOROCELLA",
    },
    {
      image:"https://trafficinfratech.com/wp-content/uploads/2022/08/New-Project-2022-08-01T122206.059.jpg",
      title: "Smart Traffic Management System",
      description: "It’s a Smart Traffic Management System using Machine Learning, focused on Pune, India.",
      tags: ["Python", "Flask", "YOLO", "OpenCV"],
      link: "https://github.com/ParthJoshi19/CEP-PROJECT",
      github: "https://github.com/ParthJoshi19/CEP-PROJECT",
    },
    {
      image:"/hookrelay.png",
      title: "HookRelay-Webhook Management Platform",
      description: "HookRelay is a webhook relay and automation platform that captures, transforms, and forwards events between services in real time.",
      tags: ["React", "Node", "Express", "MongoDB", "Webhooks"],
      link: "https://hook-relay-home.vercel.app/",
      github: "https://github.com/ParthJoshi19/HookRelay",
    },
    {
      title: "TaskFlow",
      description: "Taskflow is a task management platform that helps users organize, track, and manage tasks efficiently with real-time updates and role-based workflows.",
      image:"/taskflow.png",
      tags: ["Next.js", "JWT", "RBAC", "Authentication"],
      link: "https://taskflow-one-zeta.vercel.app",
      github: "https://github.com/ParthJoshi19/taskflow",
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-20">
        <section className="px-6 py-20 max-w-6xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Featured </span>
                <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Explore a selection of my recent projects showcasing full-stack development, design, and problem-solving
                skills.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, i) => (
                <motion.div key={i} variants={itemVariants} whileHover={{ y: -10 }} className="group">
                  <Card className="bg-card border-border hover:border-secondary transition-all h-full hover:glow">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Project Header with Glow */}
                      <div className="mb-4">
                        <motion.img
                          src={project.image}
                          alt={`${project.title} logo`}
                          className="h-48 w-full object-contain  rounded-md mb-4"
                        />
                        {/* <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg mb-3 flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                        >
                        </motion.div> */}
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, j) => (
                          <Badge key={j} className="bg-secondary/20 text-secondary border-secondary/30">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="text-sm">Visit</span>
                        </motion.a>
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4" />
                          <span className="text-sm">GitHub</span>
                        </motion.a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
