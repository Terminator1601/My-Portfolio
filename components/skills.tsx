"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Server, Terminal, Cpu } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["C/C++", "Python", "Java", "HTML/HTML5", "CSS", "JavaScript", "TypeScript", "SQL", "Shell Scripting"],
    },
    {
      name: "Technologies / Frameworks",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "React.js",
        "Node.js",
        "Express.js",
        "Next.js",
        "Django",
        "Flask",
        "MongoDB",
        "PostgreSQL",
        "Firebase",
        "REST",
      ],
    },
    {
      name: "Other Skills",
      icon: <Terminal className="h-6 w-6" />,
      skills: ["WebSocket programming", "Performance optimization", "Git/GitHub", "Docker"],
    },
    {
      name: "Computer Science",
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        "Data Structures and Algorithms",
        "Database Management System",
        "Object Oriented Programming",
        "Software Development Life Cycle",
        "Computer Networks",
        "Operating Systems",
        "Computer organization",
        "Design and Analysis of Algorithms",
        "Cloud Computing",
      ],
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2 px-4 py-1 border-primary/20 bg-primary/5">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I&apos;ve developed a diverse set of skills throughout my education and work experience.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="mr-4 p-3 bg-primary/10 text-primary rounded-md">{category.icon}</div>
                    <h3 className="text-xl font-bold text-primary/90">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="px-3 py-1 bg-primary/5 text-primary hover:bg-primary/10 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
