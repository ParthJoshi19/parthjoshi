"use client";

import { motion } from "motion/react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";

export default function Experience() {
  const experiences = [
    {
      company: "PCCOE ACM Student Chapter",
      role: "Senior Web Master",
      employmentType: "Full-time",
      period: "Jul 2025 - Present",
      location: "Pune, Maharashtra, India",
      description:
        "Leading web development initiatives for the PCCOE ACM Student Chapter, overseeing architecture decisions, backend integration, and overall system stability.",
      achievements: [
        "Promoted from Junior Webmaster to Senior Web Master",
        "Worked on backend web development using Node.js",
        "Contributed to scalable and maintainable web solutions",
      ],
    },
    {
      company: "International Relations Cell, PCCOE",
      role: "Full-Stack Developer",
      employmentType: "Full-time",
      period: "Jun 2025 - Present",
      location: "Pune, Maharashtra, India",
      description:
        "Engineered the complete high-traffic backend for the PCCOE IGC website, managing authentication, APIs, and optimized data flow for large-scale registrations.",
      achievements: [
        "Designed and implemented secure authentication systems",
        "Optimized APIs and database queries to handle 1,000+ registrations",
        "Ensured real-time updates and system reliability under high traffic",
      ],
    },
    {
      company: "DeCloud Labs",
      role: "Intern",
      employmentType: "Internship",
      period: "Jun 2025 - Jul 2025",
      location: "Remote",
      description:
        "Worked on AI-powered cloud solutions and agent-driven applications, with hands-on exposure to blockchain fundamentals and automated meeting bot systems.",
      achievements: [
        "Contributed to AI-integrated backend and cloud-native features",
        "Built and tested an automated meeting bot for joining meetings and handling real-time workflows",
        "Explored beginner-level blockchain concepts and implemented basic smart contract interactions",
        "Worked with agent-based application workflows and automation pipelines",
      ],
    },
    {
      company: "PCCOE ACM Student Chapter",
      role: "Junior Webmaster",
      employmentType: "Full-time",
      period: "Sep 2024 - Jun 2025",
      location: "Pune, Maharashtra, India",
      description:
        "Contributed to the development and maintenance of ACM chapter websites with a focus on backend services and integrations.",
      achievements: [
        "Worked on backend development using Node.js",
        "Collaborated with senior team members on live deployments",
        "Gained hands-on experience with production-level systems",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-20">
        <section className="px-6 py-20 max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">Work </span>
                <span className="gradient-text">Experience</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                A timeline of my professional journey and career milestones.
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary via-secondary to-transparent transform md:-translate-x-1/2" />

              {/* Experience Cards */}
              <motion.div variants={containerVariants} className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    variants={itemVariants}
                    className={`relative ${
                      i % 2 === 0 ? "md:pr-1/2 md:ml-0" : "md:pl-1/2 md:ml-auto"
                    } md:w-1/2 ml-8 md:ml-0`}
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(66, 246, 240, 0.4)",
                          "0 0 0 10px rgba(66, 246, 240, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: i * 0.3,
                      }}
                      className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-secondary rounded-full transform -translate-x-1.5 md:-translate-x-1/2"
                    />

                    {/* Content Card */}
                    <Card
                      className={`bg-card border-border hover:border-secondary transition-all hover:glow ${
                        i % 2 === 0 ? "md:mr-12" : "md:ml-12"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="mb-2">
                          <p className="text-secondary text-sm font-medium">
                            {exp.period}
                          </p>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                        </div>

                        <p className="text-muted-foreground mb-4">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: j * 0.1 }}
                              className="text-sm text-muted-foreground flex items-start"
                            >
                              <span className="text-secondary mr-3 mt-1">
                                ✓
                              </span>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
