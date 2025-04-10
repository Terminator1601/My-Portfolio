"use client"

import { useEffect } from "react"

// This component handles smooth scrolling to sections
export default function ScrollToSection() {
  useEffect(() => {
    // Handle anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a[href^="#"]')

      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute("href")

        if (targetId && targetId !== "#") {
          const targetElement = document.querySelector(targetId)

          if (targetElement) {
            // Close mobile menu if open
            const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]')
            if (mobileMenuButton && window.innerWidth < 768) {
              ;(mobileMenuButton as HTMLButtonElement).click()
            }

            // Smooth scroll to the target section
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for header
              behavior: "smooth",
            })
          }
        }
      }
    }

    // Add event listener
    document.addEventListener("click", handleAnchorClick)

    // Handle initial hash in URL
    if (window.location.hash) {
      const targetElement = document.querySelector(window.location.hash)
      if (targetElement) {
        setTimeout(() => {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          })
        }, 500)
      }
    }

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}
