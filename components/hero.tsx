"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Youtube } from "lucide-react";
import Link from "next/link";
import Header from "./header";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const phrases = [
    "Backend Developer",
    "Software Engineer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  useEffect(() => {
    const typingSpeed = 150; // Speed for typing
    const deletingSpeed = 100; // Speed for deleting
    const delayBeforeDeleting = 2000; // How long to pause at full phrase
    const delayBeforeNextPhrase = 1000; // How long to pause before next phrase

    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      const currentPhrase = phrases[index];

      if (!isDeleting) {
        // Typing
        if (text.length < currentPhrase.length) {
          timer = setTimeout(() => {
            setText(currentPhrase.slice(0, text.length + 1));
          }, typingSpeed);
        } else {
          // Finished typing, wait before starting to delete
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, delayBeforeDeleting);
        }
      } else {
        // Deleting
        if (text.length > 0) {
          timer = setTimeout(() => {
            setText(text.slice(0, -1));
          }, deletingSpeed);
        } else {
          // Finished deleting, move to next phrase
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % phrases.length);
          timer = setTimeout(() => {
            // Small delay before starting next phrase
          }, delayBeforeNextPhrase);
        }
      }
    };

    handleTyping();

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, phrases]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center bg-gradient-to-b from-background to-background/95"
    >
      <Header />
      <div className="container mx-auto px-4 pt-20 flex flex-col items-center justify-center flex-grow text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
              Hi, I&apos;m Rishi Kumar Sharma
            </h1>
          </motion.div>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 h-8">
            <span className="text-primary">{text}</span>
            <span className="animate-blink">|</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Engineering Scalable Backends, Streamlining DevOps Pipelines, and
            Powering Intelligence with Machine Learning & Deep Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 transition-all duration-300"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-primary/20 hover:bg-primary/5 transition-all duration-300"
            >
              <Link href="#resume">View Resume</Link>
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-8 space-x-4"
          >
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <Link
                href="https://github.com/Terminator1601"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <Link
                href="https://www.linkedin.com/in/rishi-sharma-0b340623b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <Link
                href="https://www.youtube.com/@CodePurann"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="rounded-full hover:bg-primary/10 transition-all duration-300"
            >
              <Link href="mailto:rishisharma4201@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <Button
          variant="ghost"
          size="icon"
          asChild
          className="rounded-full hover:bg-primary/10 transition-all duration-300"
        >
          <Link href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}
