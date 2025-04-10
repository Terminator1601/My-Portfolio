"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Award, Trophy } from "lucide-react"
import Link from "next/link"

export default function Resume() {
  const certifications = [
    "J.P. Morgan's Software Engineering, Certificate of Completion - May 2024",
    "Walmart USA's Advanced Software Engineering, Certificate of Completion - May 2024",
    "Goldman Sachs's Software Engineering, Certificate of Completion - May 2024",
    "Google Cloud's Introduction to Generative AI, Certificate of Completion - May 2024",
  ]

  const achievements = [
    "Solved 200+ DSA questions over different coding platforms",
    "Achieved a peak rating of 835 on CodeChef",
    "Participated in Xiaomi Ode2code, Hackathon.2023",
    "Secured 5th Rank Globally, TVS Credit EPIC Hackathon.2023",
    "Completed Google Cloud Campaign, Participated in google cloud campaign.2022",
  ]

  return (
    <section id="resume" className="py-20 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-2 px-4 py-1 border-primary/20 bg-primary/5">
            Resume
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            My Resume
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Download my resume or view my certifications and achievements below.
          </p>
          <div className="mt-6">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-300"
            >
              <Link href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="h-1 bg-gradient-to-r from-primary to-primary/50"></div>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary/90">Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {certifications.map((certification, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary h-6 w-6 mr-3 mt-0.5 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{certification}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="overflow-hidden border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="h-1 bg-gradient-to-r from-primary to-primary/50"></div>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-md bg-primary/10">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-primary/90">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <span className="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary h-6 w-6 mr-3 mt-0.5 text-sm">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
