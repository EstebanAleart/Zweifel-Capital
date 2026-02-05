import { Card, CardContent } from "@/components/ui/card"
import { Wheat, Building, Globe, HandHeart, CheckCircle } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: Wheat,
      title: "Agriculture & Land",
      description:
        "Direct investments in agricultural assets, farmland, and sustainable land management across Latin America.",
      image: "/images/hero-farmland.jpg",
    },
    {
      icon: Building,
      title: "Real Estate & Development",
      description:
        "Strategic real estate investments and land developments in high-growth markets across Spain and Latin America.",
      image: "/images/construction.jpg",
    },
  ]

  const edges = [
    {
      icon: HandHeart,
      title: "Family Investors",
      description: "We invest our own capital and align with partners for long-term success.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Deep local ties with institutional-grade processes and governance.",
    },
    {
      icon: Building,
      title: "Proven Track Record",
      description: "40+ years in agriculture and 20+ years in cross-border relationships.",
    },
    {
      icon: Wheat,
      title: "ESG Awareness",
      description: "Sustainable land management and community engagement focus.",
    },
  ]

  return (
    <section id="strategy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Investment Strategy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Real Assets.
            <span className="text-amber-600"> Real Partnerships.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We invest alongside like-minded partners through aligned co-investment with clear governance and transparent
            reporting. Our platform provides access to direct deal flow supported by trusted local operators.
          </p>
        </div>

        {/* Main Investment Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Investment Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/construction2.jpg"
              alt="Construction development"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/30" />
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/capital-markets.jpg"
              alt="Capital markets"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/30" />
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/construction3.jpg"
              alt="Real estate development"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/30" />
          </div>
        </div>

        {/* Our Edge */}
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-4 text-white">
            Our Competitive Edge
          </h3>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            What sets Zweifel Capital apart in the alternative investment landscape
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edges.map((edge, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <edge.icon className="h-7 w-7 text-amber-400" />
                </div>
                <h4 className="font-semibold text-white mb-2">{edge.title}</h4>
                <p className="text-sm text-slate-400">{edge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-xl p-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6">Investment Principles</h4>
            <ul className="space-y-4">
              {[
                "Aligned co-investment with clear governance",
                "Transparent reporting and communication",
                "Direct deal flow with trusted operators",
                "Long-term partnership approach",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-50 rounded-xl p-8">
            <h4 className="text-xl font-bold text-slate-900 mb-6">Geographic Focus</h4>
            <ul className="space-y-4">
              {[
                "Argentina - Agricultural heartland",
                "Spain - Real estate opportunities",
                "Latin America - Emerging markets",
                "Cross-border investment facilitation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
