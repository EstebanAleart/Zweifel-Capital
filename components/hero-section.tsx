"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

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
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-8">
            <TrendingUp className="h-4 w-4" />
            <span>40+ Years of Agricultural Investment Excellence</span>
            <ArrowRight className="h-4 w-4" />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 text-balance">
            Alternative Investments
            <br />
            <span className="text-primary">for Real Assets</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
            We are a family-owned investment platform dedicated to alternative investments across Latin America and
            Spain, with a distinctive focus on agriculture, land, and real assets. Building trusted partnerships with
            patient capital.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              onClick={() => scrollToSection("about")}
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 bg-transparent"
              onClick={() => scrollToSection("strategy")}
            >
              View Our Strategy
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">40+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">2</div>
              <div className="text-muted-foreground">Continents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Family Capital</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
