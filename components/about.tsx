"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const education = [
    {
      degree: "B.Tech. in Computer Science",
      institution: "Sardar Vallabhbhai National Institute of Technology, Surat",
      year: "2021-2025",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge
            variant="outline"
            className="mb-2 px-4 py-1 border-primary/20 bg-primary/5"
          >
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Get to know me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10">
              <Image
                src="/profile.jpeg?height=320&width=320"
                alt="Rishi Kumar Sharma"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary/90">
              Who am I?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm a Computer Science student at SVNIT Surat, deeply passionate
              about backend development, DevOps, and intelligent systems. With
              hands-on experience across diverse technologies and frameworks, I
              love architecting scalable, resilient applications that solve
              real-world problems.
            </p>
            <p className="text-muted-foreground mb-6">
              Currently, I&apos;m working as a Backend Developer Intern at
              WhatBytes, where I develop APIs, build backend systems, and
              enhance AI models. I&apos;ve also interned at Bhabha Atomic
              Research Centre (BARC), where I optimized databases and developed
              a troubleshooting chatbot.
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-primary/90">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Card className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-all duration-300">
                      <div className="h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-bold">{item.degree}</h4>
                            <p className="text-sm text-muted-foreground">
                              {item.institution}
                            </p>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {item.year}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
