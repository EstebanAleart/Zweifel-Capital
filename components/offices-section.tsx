import { MapPin } from "lucide-react"

export function OfficesSection() {
  const offices = [
    {
      city: "London",
      description: "European hub for investor relations and partnerships",
      address: "7 Stratton Street, Mayfair",
      postal: "W1J 8LE, London",
    },
    {
      city: "Buenos Aires",
      description: "Operational roots and local partnerships",
      address: "Buenos Aires",
      postal: "Argentina",
    },
  ]

  return (
    <section id="presence" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Our Presence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Where We Operate
          </h2>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {offices.map((office, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{office.city}</h3>
                  <p className="text-emerald-600 font-medium text-sm mb-3">{office.description}</p>
                  <p className="text-slate-500 text-sm">{office.address}</p>
                  <p className="text-slate-500 text-sm">{office.postal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
