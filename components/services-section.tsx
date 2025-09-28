import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Wheat, Building, Globe, HandHeart } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Wheat,
      title: "Agriculture & Land Investments",
      description:
        "Direct investments in agricultural assets, farmland, and sustainable land management across Latin America.",
      color: "text-accent",
    },
    {
      icon: Building,
      title: "Real Estate & Developments",
      description:
        "Strategic real estate investments and land developments in high-growth markets across Spain and Latin America.",
      color: "text-primary",
    },
    {
      icon: Globe,
      title: "Cross-Border Access",
      description:
        "Facilitating international investment flows with deep local knowledge and institutional-grade processes.",
      color: "text-accent",
    },
    {
      icon: HandHeart,
      title: "Co-Investment Partnerships",
      description: "Aligned co-investments with clear governance, transparent reporting, and shared long-term vision.",
      color: "text-primary",
    },
  ]

  return (
    <section id="strategy" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            What We Offer
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Real Assets.
            <br />
            <span className="text-accent">Real Partnerships.</span>
            <br />
            <span className="text-primary">Real Returns.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We invest alongside like-minded partners through aligned co-investment with clear governance and transparent
            reporting. Our platform provides access to direct deal flow supported by trusted local operators.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                    <service.icon className={`h-6 w-6 ${service.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Edge */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-serif font-bold text-center mb-8 text-foreground">Our Competitive Edge</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <HandHeart className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Family Investors</h4>
              <p className="text-sm text-muted-foreground">
                We invest our own capital and align with partners for long-term success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Global Standards</h4>
              <p className="text-sm text-muted-foreground">
                Deep local ties with institutional-grade processes and governance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Proven Track Record</h4>
              <p className="text-sm text-muted-foreground">
                40+ years in agriculture and 20+ years in cross-border relationships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wheat className="h-8 w-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">ESG Awareness</h4>
              <p className="text-sm text-muted-foreground">
                Sustainable land management and community engagement focus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
