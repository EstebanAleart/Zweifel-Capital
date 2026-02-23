import { Card, CardContent } from "@/components/ui/card"
import { Building, Globe, Wheat, CheckCircle, Shield, Users, Landmark, TrendingUp } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const investmentFocus = [
    {
      icon: Building,
      title: "Real Estate Investments & Financing",
      description:
        "Participation in real-estate-backed debt and equity, and co-investments alongside experienced sponsors.",
      image: "/images/construction.jpg",
    },
    {
      icon: Wheat,
      title: "Land & Sustainable Investments",
      description:
        "Selective exposure to productive land and environmentally responsible developments, anchored in long-term value creation.",
      image: "/images/hero-farmland4.jpg",
    },
  ]

  const principles = [
    {
      title: "Real Assets & Productive Land",
      description: "Investing in agriculture, land-based opportunities, real estate, and select real-asset developments anchored in tangible value.",
    },
    {
      title: "Principal Capital & Co-Investment",
      description: "Alignment through the commitment of our own capital alongside trusted partners.",
    },
    {
      title: "Capital Preservation & Compounding",
      description: "Emphasis on downside protection, resilient cash flows, and disciplined long-term value creation.",
    },
    {
      title: "Cross-Border Execution",
      description: "Connecting European capital with opportunities across the Caribbean and Latin America through established local relationships.",
    },
    {
      title: "Institutional Investment Discipline",
      description: "Rigorous underwriting, structured transactions, and responsible capital allocation.",
    },
  ]

  const pillars = [
    {
      icon: Users,
      title: "Partnership Alignment",
      description: "Investing as co-principals alongside leading managers and sponsors, with interests fully aligned across the capital structure.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "A cross-border platform connecting Europe, Latin America, the Caribbean, and select U.S. partnerships.",
    },
    {
      icon: Shield,
      title: "Transparency & Governance",
      description: "A commitment to rigorous processes, responsible oversight, and institutional-grade governance standards.",
    },
    {
      icon: Landmark,
      title: "Responsible Stewardship",
      description: "Long-term stewardship of capital across real assets, operating partnerships, and the communities in which we invest.",
    },
  ]

  return (
    <section id="strategy" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Investment Strategy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif" }}>
            Real Assets. Patient Capital.
            <br />
            <span className="text-emerald-600">Long-Term Value.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            We allocate capital and co-invest across Europe and Latin America, focusing on tangible, cash-flowing
            investments anchored in real assets and disciplined stewardship.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            As a family-owned investment platform established in 1995, Zweifel Capital pursues alternative investments
            supported by long-term fundamentals, capital preservation, and responsible growth.
          </p>
        </div>

        {/* 1. Direct Investment Approach */}
        <div className="mb-20">
          <h3 className="font-semibold text-slate-900 mb-8 tracking-widest uppercase text-xs" style={{ letterSpacing: "0.1em" }}>
            Direct Investment Approach
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {investmentFocus.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-72">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 2. Investment Principles */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-20">
          <h3 className="font-semibold text-slate-900 mb-10 tracking-widest uppercase text-xs text-center" style={{ letterSpacing: "0.1em" }}>
            Investment Principles
          </h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {principles.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-slate-900">{item.title}</span>
                  <span className="text-slate-600"> — {item.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Our Value Creation Framework */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
          <h3 className="font-semibold text-white mb-3 tracking-widest uppercase text-xs text-center" style={{ letterSpacing: "0.1em" }}>
            Our Value Creation Framework
          </h3>
          <h4 className="text-2xl md:text-3xl font-bold text-center mb-4 text-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif" }}>
            Our Pillars
          </h4>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            A family-office approach to investing built on responsibility, trust, and multi-generational capital preservation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-blue-900/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <pillar.icon className="h-7 w-7 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{pillar.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-8 border-t border-slate-700">
            <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              <span className="font-semibold text-white">Multi-Generational Values</span>
              {" "}— Preserving and compounding capital across generations through discipline, trust, precision, and enduring relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
