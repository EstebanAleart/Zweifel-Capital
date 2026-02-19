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
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm text-emerald-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-emerald-500/30">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span>35+ Years of Investment Heritage</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Real Assets.
            <br />
            Real Partnerships.
            <br />
            <span className="text-emerald-400">Real Returns.</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            A family-owned investment platform dedicated to alternative investments across Latin America and Spain,
            with a distinctive focus on agriculture, land, and real assets. Building trusted partnerships with patient capital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-6 text-base cursor-pointer"
              onClick={() => scrollToSection("about")}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent cursor-pointer"
              onClick={() => scrollToSection("strategy")}
            >
              View Our Strategy
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 pt-10 border-t border-white/20">
          <div className="grid grid-cols-3 gap-8 max-w-3xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">35+</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Years of Investment Heritage</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">2</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Continents</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400 mb-1">100%</div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">Independent Ownership</div>
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
