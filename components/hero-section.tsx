"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-6">
            Family Office & Alternative Investments
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-foreground mb-8 leading-[1.1] tracking-tight">
            Dream Big,
            <br />
            <span className="text-primary">Act Bigger.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-light">
            A family-owned investment platform dedicated to alternative investments across
            Latin America and Spain. Real assets. Patient capital. Trusted partnerships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
              onClick={() => scrollToSection("about")}
            >
              Discover Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border text-foreground hover:bg-secondary hover:text-foreground px-8 py-6 text-base font-medium"
              onClick={() => scrollToSection("strategy")}
            >
              View Strategy
            </Button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 mt-24 pt-12 border-t border-border/50 max-w-3xl">
          <div>
            <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">40+</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wider">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">2</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wider">Continents</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-serif font-medium text-foreground mb-2">100%</div>
            <div className="text-muted-foreground text-sm uppercase tracking-wider">Family Capital</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowDown className="h-6 w-6 animate-bounce" />
      </button>
    </section>
  )
}
