"use client"

import { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

const heroImages = [
  "/images/hero-farmland1.jpg",
  "/images/hero-farmland2.jpg",
  "/images/hero-farmland3.jpg",
]

export function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with crossfade */}
      {heroImages.map((src, index) => (
        <div
          key={src}
          className="absolute inset-0 z-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: index === currentImage ? 1 : 0 }}
        >
          <Image
            src={src}
            alt="Agricultural landscape"
            fill
            className="object-cover"
            priority={index === 0}
            quality={90}
          />
        </div>
      ))}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight tracking-tight" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif" }}>
            Real Assets.
            <br />
            Real Partnerships.
            <br />
            <span className="text-emerald-400">Real Returns.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
            A family-owned investment platform dedicated to alternative investments across Europe, Latin America,
            and the Caribbean, with a distinctive focus on agriculture, land, and real assets.
            Building trusted partnerships with patient capital.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mt-24 pt-10 border-t border-white/20">
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">55+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Years of Investment Heritage</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">3</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Independent Ownership</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image indicators — white */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              index === currentImage ? "bg-white w-8" : "bg-white/40 w-2"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator — neutral */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-white/40 hover:text-white/70 transition-colors cursor-pointer"
        >
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
