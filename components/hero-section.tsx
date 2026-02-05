"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-farmland.jpg"
          alt="Agricultural landscape"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm text-amber-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-amber-500/30">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span>40+ Years of Investment Excellence</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Alternative Investments
            <br />
            <span className="text-amber-400">for Real Assets</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            A family-owned investment platform dedicated to alternative investments across Latin America and Spain,
            with a distinctive focus on agriculture, land, and real assets.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold px-8 py-6 text-base cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              Discover Our Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent cursor-pointer"
              onClick={() => scrollToSection("strategy")}
            >
              View Strategy
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-10 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">40+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">2</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Continents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">100%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Family Capital</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">4</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-xs uppercase tracking-wider mb-2">Scroll</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>
    </section>
  )
}
