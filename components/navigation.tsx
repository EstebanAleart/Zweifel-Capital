"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Strategy", id: "strategy" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white border-b border-slate-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button onClick={() => scrollToSection("home")} className="flex-shrink-0 cursor-pointer">
            <Image
              src="/images/logo.png"
              alt="Zweifel Capital"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-700 hover:text-blue-800 transition-colors font-medium text-sm cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <Button
              className="bg-blue-800 hover:bg-blue-900 text-white font-semibold cursor-pointer"
              onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=delfina@zweifelcapital.com&su=Investment+Inquiry&body=Hello,+I+would+like+to+learn+more+about+investment+opportunities+with+Zweifel+Capital.", "_blank")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-slate-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-slate-200">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-4 py-3 text-slate-700 hover:text-blue-800 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold cursor-pointer"
                  onClick={() => window.open("https://mail.google.com/mail/?view=cm&to=delfina@zweifelcapital.com&su=Investment+Inquiry&body=Hello,+I+would+like+to+learn+more+about+investment+opportunities+with+Zweifel+Capital.", "_blank")}
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
