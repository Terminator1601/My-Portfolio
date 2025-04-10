"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Ask Your Dost",
      description:
        "A business directory platform connecting users with local and international businesses, increasing engagement by 40% and reducing service search time by 20%.",
      image: "/AYD.png?height=400&width=600",
      technologies: ["TypeScript", "JavaScript", "React", "Firebase"],
      link: "https://ask-your-dost.vercel.app/",
      github: "https://github.com/Terminator1601/AskYourDost",
      achievements: [
        "Created a platform connecting users with local and international businesses, increasing engagement by 40% and reducing service search time by 20%.",
        "Integrated Firebase to manage over 10,000 entries of users and service providers, enhancing data retrieval speed by 30%.",
        "Implemented cookie-based session management to improve efficiency by 35%, ensuring a seamless user experience.",
        "Planned and began integrating Google Maps API for displaying business locations, improving navigation by 25%.",
      ],
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
      image: "/portfolio.png?height=400&width=600",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      link: "https://example.com",
      github: "https://github.com",
      achievements: [
        "Designed and developed a responsive portfolio website with modern UI/UX principles.",
        "Implemented smooth animations and transitions using Framer Motion.",
        "Created a dark/light mode toggle for better user experience.",
        "Built a contact form with email integration.",
      ],
    },
    {
      title: "News Scrapper",
      description:
        "A web-based tool that scrapes and displays the latest news articles using custom Python scripts, enabling real-time updates and data extraction from multiple news sources.",
      image: "/news-scrapper.png?height=400&width=600",
      technologies: [
        "Python",
        "BeautifulSoup",
        "Flask",
        "Requests",
        "HTML",
        "CSS",
      ],
      link: "",
      github: "https://github.com/Terminator1601/news-scrapper",
      achievements: [
        "Built a Python-based web scraper to extract real-time news headlines and articles from multiple sources using BeautifulSoup and Requests.",
        "Developed a clean Flask-powered UI to display scraped content dynamically with smooth routing and minimal latency.",
        "Implemented modular architecture to allow easy addition of new news sources and content types.",
        "Optimized scraping logic to reduce response time by 40% and ensure reliable data extraction despite frequent website structure changes.",
      ],
    },

    {
      title: "TVS Credits - Risk Management",
      description:
        "A machine learning-powered web application designed to predict loan approval outcomes and assess risk levels based on customer profiles, improving financial decision-making efficiency.",
      image: "/tvs-risk-management.png?height=400&width=600",
      technologies: [
        "Python",
        "Flask",
        "Pandas",
        "Scikit-learn",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      link: "",
      github: "https://github.com/Terminator1601/TVS_Credits-Risk_Management",
      achievements: [
        "Developed a risk assessment tool using logistic regression and decision tree models to predict loan approval status with high accuracy.",
        "Integrated a Flask backend with a user-friendly frontend to allow financial institutions to input customer data and get real-time risk insights.",
        "Engineered robust data preprocessing pipelines using Pandas to handle missing values, categorical encoding, and feature scaling.",
        "Improved prediction accuracy through iterative model tuning and cross-validation, aiding more informed loan approvals.",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-muted/10 to-background"
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
            Projects
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            My Recent Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project has
            helped me grow as a developer and solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden h-full flex flex-col border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-1 bg-gradient-to-r from-primary to-primary/50"></div>
                <div className="relative h-48 w-full overflow-hidden group">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="mr-2 text-white border-white hover:bg-white/20"
                    >
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-primary/90">
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-primary/20 hover:bg-primary/5"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    asChild
                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80"
                  >
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
