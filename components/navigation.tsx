"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false) // Close mobile menu after clicking
  }

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection("home")} className="flex-shrink-0">
            <span className="text-xl font-semibold text-foreground">Zweifel Capital</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("strategy")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Strategy
              </button>
              <button
                onClick={() => scrollToSection("offices")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Offices
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("strategy")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
              >
                Strategy
              </button>
              <button
                onClick={() => scrollToSection("offices")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
              >
                Offices
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-primary"
              >
                Contact
              </button>
              <div className="px-3 py-2">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={() => scrollToSection("contact")}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
