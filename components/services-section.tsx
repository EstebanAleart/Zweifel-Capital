import { Card, CardContent } from "@/components/ui/card"
import { Building, Globe, HandHeart, Wheat, CheckCircle, Shield, Users, Landmark } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const investmentFocus = [
    {
      icon: Building,
      title: "Real Estate Investments and Financing",
      description:
        "Participation in real-estate-backed debt and equity and co-investments alongside experienced sponsors.",
      image: "/images/construction.jpg",
    },
    {
      icon: Wheat,
      title: "Land & Sustainable Investments",
      description:
        "Selective exposure to productive and environmentally responsible developments.",
      image: "/images/hero-farmland.jpg",
    },
  ]

  const additionalFocus = [
    {
      icon: HandHeart,
      title: "Co-Investment Partnerships",
      description: "Investing alongside partners with our own capital, reinforcing long-term alignment and disciplined investment selection.",
    },
    {
      icon: Globe,
      title: "Cross-Border Access",
      description: "Facilitating investment flows through deep local knowledge and institutional-grade processes.",
    },
  ]

  const principles = [
    "Real Assets & Productive Land — Investments in agriculture, land-based opportunities, real estate, and select real-asset developments.",
    "Principal Capital & Co-Investment — Alignment through investing our own capital alongside partners.",
    "Capital Preservation & Compounding — Focus on downside protection, resilient cash flows, and sustainable long-term value creation.",
    "Cross-Border Execution — Connecting European capital with opportunities across Iberia and Latin America through trusted local relationships.",
    "Institutional Investment Discipline — Rigorous underwriting, structured transactions, and responsible capital allocation.",
  ]

  const edges = [
    {
      icon: Users,
      title: "Partnership Alignment",
      description: "Acting as co-investors and capital partners alongside leading managers and sponsors.",
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Cross-border reach between Europe, Latin America, and select U.S. partnerships.",
    },
    {
      icon: Shield,
      title: "Transparency & Governance",
      description: "Commitment to clear processes, responsible oversight, and institutional standards.",
    },
    {
      icon: Landmark,
      title: "Responsible Stewardship",
      description: "Long-term capital stewardship across real assets, partnerships, and communities.",
    },
  ]

  return (
    <section id="strategy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Investment Strategy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Real Assets. Patient Capital.
            <br />
            <span className="text-emerald-600">Long-Term Value.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            We allocate capital and co-invest across Europe and Latin America, focusing on tangible, cash-flowing
            investments anchored in real assets and disciplined stewardship. As a family-owned investment platform
            established in 1995, Zweifel Capital pursues alternative investments supported by long-term fundamentals,
            capital preservation, and responsible growth.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our approach combines principal capital, real-asset operating experience, and institutional investment
            discipline to identify opportunities where patient capital, local expertise, and cross-border partnerships
            can generate durable long-term value.
          </p>
        </div>

        {/* Investment Focus Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {investmentFocus.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {additionalFocus.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Investment Principles */}
        <div className="bg-slate-50 rounded-2xl p-8 md:p-12 mb-20">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-10 text-slate-900">
            Investment Principles
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {principles.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Our Edge */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-white">
            Our Edge
          </h3>
          <p className="text-emerald-400 text-center font-medium mb-4">
            Stewardship, Discipline, and Long-Term Partnership
          </p>
          <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
            A family-office approach to investing built on responsibility, trust, and multi-generational capital
            preservation. Our edge is rooted in the combination of family-office capital, real-asset operating experience,
            institutional investment discipline, and a long-term partnership mindset.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {edges.map((edge, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-emerald-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <edge.icon className="h-7 w-7 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{edge.title}</h4>
                <p className="text-sm text-slate-400">{edge.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-6 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              <span className="text-emerald-400 font-medium">Multi-Generational Values</span> — Preserving and growing
              capital across generations through discipline, trust, precision, and enduring relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
