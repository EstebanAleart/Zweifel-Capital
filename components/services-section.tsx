import { Card, CardContent } from "@/components/ui/card"
import { Wheat, Building, Globe, HandHeart, TrendingUp, Home } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: TrendingUp,
      title: "Capital Markets",
      description:
        "Access to global capital markets with deep expertise in emerging market fixed income and cross-border investment strategies.",
      image: "/images/construction3.jpg",
    },
    {
      icon: Wheat,
      title: "Agriculture & Land",
      description:
        "Direct investments in agricultural assets, farmland, and sustainable land management across Argentina and Latin America.",
      image: "/images/hero-farmland.jpg",
    },
    {
      icon: Building,
      title: "Premium Real Estate",
      description:
        "Strategic investments in luxury properties and premium real estate developments in high-growth markets.",
      image: "/images/nassau.jpg",
    },
    {
      icon: Home,
      title: "Residential Development",
      description:
        "Investment in residential construction projects with focus on quality developments in select markets across Spain and Latin America.",
      image: "/images/construction2.jpg",
    },
  ]

  return (
    <section id="strategy" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-8">
            Real Assets.
            <br />
            <span className="text-accent">Real Partnerships.</span>
            <br />
            <span className="text-primary">Real Returns.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We invest alongside like-minded partners through aligned co-investment with clear governance and transparent
            reporting. Our platform provides access to direct deal flow supported by trusted local operators.
          </p>
        </div>

        {/* Services Grid with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card/30 border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-56 bg-secondary overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Edge */}
        <div className="bg-card/30 rounded-2xl p-10 border border-border/50">
          <h3 className="text-3xl font-serif font-medium text-center mb-12 text-foreground">Our Competitive Edge</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HandHeart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">Family Investors</h4>
              <p className="text-muted-foreground leading-relaxed">
                We invest our own capital and align with partners for long-term success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">Global Standards</h4>
              <p className="text-muted-foreground leading-relaxed">
                Deep local ties with institutional-grade processes and governance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">Proven Track Record</h4>
              <p className="text-muted-foreground leading-relaxed">
                40+ years in agriculture and 20+ years in cross-border relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Wheat className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">ESG Awareness</h4>
              <p className="text-muted-foreground leading-relaxed">
                Sustainable land management and community engagement focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
