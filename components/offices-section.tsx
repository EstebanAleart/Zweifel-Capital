import Image from "next/image"
import { MapPin } from "lucide-react"

export function OfficesSection() {
  const offices = [
    {
      city: "London",
      country: "United Kingdom",
      address: "1 Knightsbridge Green",
      postal: "SW1X 7NE, London",
      image: "/images/london.jpg",
      description: "Our European headquarters in the heart of Knightsbridge",
    },
    {
      city: "Nassau",
      country: "Bahamas",
      address: "Lyford Cay Drive",
      postal: "P.O. Box N-7776",
      image: "/images/nassau.jpg",
      description: "Caribbean operations and international client services",
    },
  ]

  return (
    <section id="offices" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Our Presence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Global Offices
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Strategically positioned to serve international investors with local expertise
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Background Image */}
              <div className="relative h-80 md:h-96">
                <Image
                  src={office.image}
                  alt={`${office.city} office`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">{office.city}</h3>
                    <p className="text-amber-400 font-medium mb-3">{office.country}</p>
                    <p className="text-slate-300 text-sm mb-1">{office.address}</p>
                    <p className="text-slate-300 text-sm mb-4">{office.postal}</p>
                    <p className="text-slate-400 text-sm">{office.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Office Images */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/office-london.jpg"
              alt="London office interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/20" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-sm font-medium px-3 py-1 rounded-full">
                London Office
              </span>
            </div>
          </div>
          <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/nassau2.jpg"
              alt="Nassau office view"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-slate-900/20" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/90 backdrop-blur-sm text-slate-900 text-sm font-medium px-3 py-1 rounded-full">
                Nassau Office
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
