"use client";

import { motion } from "motion/react";
import { cubicBezier } from "motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        ease: cubicBezier(0.42, 0, 0.58, 1),
        repeat: Number.POSITIVE_INFINITY,
      },
    },
  };

  const projects = [
    {
      title: "ChatPDF",
      image: "/chatpdf-project.png",
      description:
        "AI-powered ChatPDF solution with semantic search and natural language interaction for documents.",
      tags: [
        "PostgreSQL",
        "Next.js",
        "Node.js",
        "RAG",
        "OpenAI",
        "PDF Processing",
        "LLM",
      ],
      github: "https://github.com/ParthJoshi19/chatpdf",
      link: "https://chatpdf-three-beige.vercel.app",
    },
    {
      image: "/borocella.png",
      title: "BoroCella",
      description:
        "Modern interactive website integrating Three.js for real-time 3D graphics and React.js for component-based architecture",
      tags: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind"],
      link: "https://borocella.vercel.app",
      github: "https://github.com/ParthJoshi19/BOROCELLA",
    },
    {
      image:
        "https://trafficinfratech.com/wp-content/uploads/2022/08/New-Project-2022-08-01T122206.059.jpg",
      title: "Smart Traffic Management System",
      description:
        "It’s a Smart Traffic Management System using Machine Learning, focused on Pune, India.",
      tags: ["Python", "Flask", "YOLO", "OpenCV"],
      link: "https://github.com/ParthJoshi19/CEP-PROJECT",
      github: "https://github.com/ParthJoshi19/CEP-PROJECT",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-20 font-[michroma]">
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 overflow-hidden">
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-20 left-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                delay: 1,
              }}
              className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.div className="flex md:flex-row sm:flex-col justify-between">
              {" "}
              {/* Main Hero Content */}
              <motion.div>
                <motion.div variants={itemVariants} className="mb-8">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-secondary text-lg mb-4 font-medium"
                  >
                    Welcome to my portfolio
                  </motion.p>
                  <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    <span className="text-white">Building Digital</span>
                    <br />
                    <span className="gradient-text">Experiences</span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                    I’m a full-stack developer with a strong focus on building
                    high-performance, visually engaging web applications. I
                    specialize in modern web technologies, interactive 3D
                    experiences, and AI-powered systems, transforming complex
                    ideas into scalable, real-world solutions.
                  </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4 mb-16"
                >
                  <Link href="/projects">
                    <Button className="bg-secondary text-black hover:bg-secondary/90 px-8 py-6 text-lg">
                      View My Work <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg bg-transparent"
                    >
                      Get In Touch
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="hidden md:block w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-white overflow-hidden
             shadow-[0_0_30px_rgba(255,255,255,0.8),0_0_60px_rgba(255,255,255,0.6),inset_0_0_30px_rgba(255,255,255,0.2)]"
              >
                <motion.img
                  src="https://res.cloudinary.com/dhc7gkyi8/image/upload/v1759646942/Parth_Joshi_twf1dq.png"
                  alt="Parth Joshi"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </motion.div>
            {/* Circular Glowing Element */}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6">
              <motion.a
                href="https://github.com/ParthJoshi19"
                target="_blank_"
                whileHover={{ scale: 1.1, color: "#42f6f0" }}
                className="text-white hover:text-secondary transition-colors"
              >
                <Github className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/parth-joshi-9ab997306/"
                target="_blank_"
                whileHover={{ scale: 1.1, color: "#42f6f0" }}
                className="text-white hover:text-secondary transition-colors"
              >
                <Linkedin className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="mailto:parthjoshi1973@gmail.com"
                target="_blank_"
                whileHover={{ scale: 1.1, color: "#42f6f0" }}
                className="text-white hover:text-secondary transition-colors"
              >
                <Mail className="h-8 w-8" />
              </motion.a>
            </motion.div>

            {/* Floating Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20"
            >
              {[
                { label: "Projects", value: "15+" },
                { label: "Experience", value: "2+ Years" },
                { label: "Technologies", value: "15+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  variants={floatingVariants}
                  animate="animate"
                  className="bg-card border border-border rounded-lg p-6 backdrop-blur-sm hover:border-secondary transition-colors"
                >
                  <p className="text-secondary text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Featured Projects Section */}
            <section className="px-6 py-20 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="text-white">Featured </span>
                    <span className="gradient-text">Projects</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    A showcase of my recent work in full-stack development and
                    design.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.2 }}
                      whileHover={{ y: -10 }}
                      className="group"
                    >
                      <Card className="bg-card border-border hover:border-secondary transition-all h-full">
                        <CardContent className="p-6 pb-0 flex flex-col h-full">
                          <div className="">
                            <motion.img
                              src={project.image}
                              alt={`${project.title} logo`}
                              className="h-48 w-full object-contain rounded-md mb-4"
                            />
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                              {project.title}
                            </h3>
                          </div>
{/*                     
                          <div className="flex gap-4">
                            <motion.a
                              href={project.link}
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" />
                              <span className="text-sm">Visit</span>
                            </motion.a>
                            <motion.a
                              href={project.github}
                              whileHover={{ x: 5 }}
                              className="flex items-center gap-2 text-secondary hover:text-white transition-colors"
                            >
                              <Github className="h-4 w-4" />
                              <span className="text-sm">GitHub</span>
                            </motion.a>
                          </div> */}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-center">
                  <Link href="/projects">
                    <Button className="bg-secondary text-black hover:bg-secondary/90 px-8 py-6 text-lg">
                      Explore More Projects{" "}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </section>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
