import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Mail } from "lucide-react"
import Image from "next/image"

const offices = [
  {
    city: "London",
    country: "United Kingdom",
    address: "1 Knightsbridge Green, SW1X 7NE",
    image: "/images/london.jpg",
    email: "delfina@zweifelcapital.com",
  },
  {
    city: "Nassau",
    country: "Bahamas",
    address: "Lyford Cay Drive, P.O. Box N-7776",
    image: "/images/nassau2.jpg",
    email: "delfina@zweifelcapital.com",
  },
]

export function OfficesSection() {
  return (
    <section id="offices" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Our Presence
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-8">
            Global Reach,
            <br />
            <span className="text-primary">Local Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Strategically located to serve our international clients and partners across the Americas and Europe.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {offices.map((office, index) => (
            <Card
              key={index}
              className="bg-card/30 border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 bg-secondary overflow-hidden">
                <Image
                  src={office.image}
                  alt={`${office.city} Office`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-3xl font-serif font-medium text-white mb-1">{office.city}</h3>
                  <p className="text-white/70">{office.country}</p>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{office.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <a
                    href={`mailto:${office.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
