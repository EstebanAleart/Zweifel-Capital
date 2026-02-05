import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Briefcase, GraduationCap, LinkedinIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-amber-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Family Legacy Meets
            <br />
            <span className="text-amber-600">Global Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Zweifel Capital is a family office co-founded by Kurt and Delfina Zweifel. We are investors with decades of
            experience managing agricultural assets, building international networks, and executing cross-border
            investment strategies.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Kurt Zweifel */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <div className="relative h-96 lg:h-[600px]">
              <Image
                src="/images/kurt-zweifel.jpg"
                alt="Kurt Zweifel"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-1">Kurt Zweifel</h3>
                <p className="text-amber-400 font-medium">Co-Founder</p>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-slate-600 mb-6 leading-relaxed">
                Kurt is a businessman based in Buenos Aires, with a deep understanding of global corporate culture and
                Latin American business realities. Beyond his corporate career with leading Swiss companies such as
                Sulzer, Kurt has managed for more than 40 years extensive agricultural lands in Buenos Aires.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-slate-600">Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-slate-600">40+ years in agriculture & Swiss corporates</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delfina Zweifel */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <div className="relative h-96 lg:h-[600px]">
              <Image
                src="/images/delfina-zweifel.jpg"
                alt="Delfina Zweifel"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Delfina Zweifel</h3>
                  <p className="text-amber-400 font-medium">Co-Founder</p>
                </div>
                <Link
                  href="https://www.linkedin.com/in/delfina-zweifel-b9030241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <LinkedinIcon className="h-5 w-5 text-white" />
                </Link>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-slate-600 mb-6 leading-relaxed">
                Delfina brings over 20 years of international investment and client experience. She began her career at
                J.P. Morgan in New York, working in Credit Lending, EM Fixed Income Research, and Private Banking for
                Latin America.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-slate-600">New York, London, Nassau</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-slate-600">J.P. Morgan, Vivaldi Group, Faro Capital</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-amber-600" />
                  </div>
                  <span className="text-slate-600">BBA Emory University (Finance & Marketing)</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Family Legacy Timeline */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-12 text-slate-900">
            Four Decades of Investment Excellence
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-amber-600 font-bold text-lg">80s</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 text-lg">Foundation</h4>
              <p className="text-slate-600 leading-relaxed">
                Kurt begins managing large-scale agricultural lands in Buenos Aires, establishing relationships with
                global players like Cargill.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">00s</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 text-lg">Expansion</h4>
              <p className="text-slate-600 leading-relaxed">
                Delfina builds her career at J.P. Morgan and expands into investor relations, co-founding Faro Capital
                Investors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">Now</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2 text-lg">Zweifel Capital</h4>
              <p className="text-slate-600 leading-relaxed">
                Combining experience and networks under one platform, connecting international investors with Latin
                American real assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
