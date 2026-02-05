import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Building2, Briefcase, GraduationCap, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-6xl font-serif font-medium text-foreground mb-8">
            Family Legacy Meets
            <br />
            <span className="text-primary">Global Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Zweifel Capital is a family office co-founded by Kurt and Delfina Zweifel. We are investors with decades of
            experience managing agricultural assets, building international networks, and executing cross-border
            investment strategies.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Kurt Zweifel */}
          <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              {/* Photo */}
              <div className="relative w-full aspect-square bg-secondary">
                <Image
                  src="/images/kurt-zweifel.jpg"
                  alt="Kurt Zweifel"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">Kurt Zweifel</h3>
                  <p className="text-primary font-medium">Co-Founder</p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Kurt is a businessman based in Buenos Aires, with a deep understanding of global corporate culture and
                  Latin American business realities. Beyond his corporate career with leading Swiss companies such as
                  Sulzer, Kurt has managed for more than 40 years extensive agricultural lands in Buenos Aires.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">Buenos Aires, Argentina</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">40+ years in agriculture & Swiss corporates</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="mailto:kurt@zweifelcapital.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delfina Zweifel */}
          <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all duration-300 overflow-hidden">
            <CardContent className="p-0">
              {/* Photo */}
              <div className="relative w-full aspect-square bg-secondary">
                <Image
                  src="/images/delfina-zweifel.jpg"
                  alt="Delfina Zweifel"
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground mb-1">Delfina Zweifel</h3>
                  <p className="text-accent font-medium">Co-Founder</p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Delfina brings over 20 years of international investment and client experience. She began her career at
                  J.P. Morgan in New York, working in Credit Lending, EM Fixed Income Research, and Private Banking for
                  Latin America.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">New York, London, Nassau</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">J.P. Morgan, Vivaldi Group, Faro Capital</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-accent" />
                    <span className="text-muted-foreground">BBA Emory University (Finance & Marketing)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-[#0077B5] text-[#0077B5] hover:bg-[#0077B5] hover:text-white"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/delfina-zweifel-b9030241/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="mailto:delfina@zweifelcapital.com">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Family Legacy Timeline */}
        <div className="bg-card/30 rounded-2xl p-10 border border-border/50">
          <h3 className="text-3xl font-serif font-medium text-center mb-12 text-foreground">
            Four Decades of Investment Excellence
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-serif text-xl">80s</span>
              </div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">Foundation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Kurt begins managing large-scale agricultural lands in Buenos Aires, establishing relationships with
                global players like Cargill.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-accent font-serif text-xl">00s</span>
              </div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">Expansion</h4>
              <p className="text-muted-foreground leading-relaxed">
                Delfina builds her career at J.P. Morgan and expands into investor relations, co-founding Faro Capital
                Investors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-primary font-serif text-xl">Now</span>
              </div>
              <h4 className="font-semibold text-foreground mb-3 text-lg">Zweifel Capital</h4>
              <p className="text-muted-foreground leading-relaxed">
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
