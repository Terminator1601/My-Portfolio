"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Backend Developer Intern",
      company: "WhatBytes",
      location: "Bangalore, India",
      period: "Jan 2025 – Present",
      responsibilities: [
        "Developed an API to filter investor details for each saved search list of users, improving query efficiency and data retrieval.",
        "Built the complete backend system for vitals sign monitoring, including authentication, data processing, and Stripe payment integration.",
        "Integrated emotion and posture detection into an existing AI model, expanding its capabilities for real-time user analysis.",
      ],
    },
    {
      title: "Intern",
      company: "Bhabha Atomic Research Centre (BARC)",
      location: "Mumbai, India",
      period: "June 2024 – July 2024",
      responsibilities: [
        "Implemented a Bloom Filter to optimize searches in a database of 12 million entries, achieving O(k) complexity for faster results.",
        "Built a troubleshooting chatbot with features like spell checks, feedback integration, media support, multi-query handling, and an admin dashboard. Used React for the frontend, Django for the backend, and PostgreSQL for data management.",
        "Deployed Sysmon to track detailed system activity, reducing response time by 40%. Integrated it with PostgreSQL to analyze over 500k events daily for better security and visibility.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2 px-4 py-1 border-primary/20 bg-primary/5">
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            My Professional Journey
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start md:justify-center"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary border border-primary/20 shadow-md md:absolute md:left-1/2 md:-translate-x-1/2 z-10">
                  <Briefcase className="w-5 h-5" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="w-full md:w-[calc(50%-2.5rem)] md:ml-auto"
                >
                  <Card className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl text-primary/90">{experience.title}</CardTitle>
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-1 bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>{experience.period}</span>
                        </Badge>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {experience.company}, {experience.location}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                        {experience.responsibilities.map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
