import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Building2, Briefcase, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Who We Are
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Family Legacy Meets
            <br />
            <span className="text-primary">Global Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Zweifel Capital is a family office co-founded by Kurt and Delfina Zweifel. We are investors with decades of
            experience managing agricultural assets, building international networks, and executing cross-border
            investment strategies.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Kurt Zweifel */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Kurt Zweifel</h3>
                  <p className="text-primary font-medium">Co-Founder</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Kurt is a businessman based in Buenos Aires, with a deep understanding of global corporate culture and
                Latin American business realities. Beyond his corporate career with leading Swiss companies such as
                Sulzer, Kurt has managed for more than 40 years extensive agricultural lands in Buenos Aires.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">Buenos Aires, Argentina</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="h-4 w-4 text-accent" />
                  <span className="text-muted-foreground">40+ years in agriculture & Swiss corporates</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delfina Zweifel */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">Delfina Zweifel</h3>
                  <p className="text-accent font-medium">Co-Founder</p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Delfina brings over 20 years of international investment and client experience. She began her career at
                J.P. Morgan in New York, working in Credit Lending, EM Fixed Income Research, and Private Banking for
                Latin America.
              </p>

              <div className="space-y-3">
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
            </CardContent>
          </Card>
        </div>

        {/* Family Legacy Timeline */}
        <div className="bg-card rounded-lg p-8 border border-border">
          <h3 className="text-2xl font-serif font-bold text-center mb-8 text-foreground">
            Four Decades of Investment Excellence
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">80s</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Foundation</h4>
              <p className="text-sm text-muted-foreground">
                Kurt begins managing large-scale agricultural lands in Buenos Aires, establishing relationships with
                global players like Cargill.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent font-bold">00s</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Expansion</h4>
              <p className="text-sm text-muted-foreground">
                Delfina builds her career at J.P. Morgan and expands into investor relations, co-founding Faro Capital
                Investors.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary font-bold">Now</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Zweifel Capital</h4>
              <p className="text-sm text-muted-foreground">
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
