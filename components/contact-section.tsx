"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, MessageCircle, AlertTriangle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            Get in Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6 text-balance">
            Ready to Explore
            <br />
            <span className="text-primary">Investment Opportunities?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Connect with our team to discuss how Zweifel Capital can help you access alternative investment
            opportunities in Latin America and Spain.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">delfina@zweifelcapital.com</p>
                  <p className="text-muted-foreground">kurt@zweifelcapital.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">+44 077 359 36395</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Locations</h4>
                  <p className="text-muted-foreground mb-2">
                    <strong>United Kingdom:</strong>
                    <br />1 Knightsbridge Green, SW1X 7NE, London
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Bahamas:</strong>
                    <br />
                    Lyford Cay Drive, P.O. Box N-7776, Nassau
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="border-border bg-gradient-to-br from-primary/5 to-accent/5">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Schedule a Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                We work exclusively with sophisticated investors and family offices. Our team is ready to discuss how
                our expertise in Latin American real assets can complement your investment strategy.
              </p>

              <div className="space-y-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() =>
                    (window.location.href =
                      "mailto:delfina@zweifelcapital.com?subject=Investment Inquiry&body=Hello, I would like to learn more about investment opportunities with Zweifel Capital.")
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send us an Email
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                  onClick={() => {
                    const phoneNumber = "4407735936395"
                    const message =
                      "Hello, I would like to learn more about investment opportunities with Zweifel Capital."
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Send us a Message
                </Button>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> We typically respond within 24 hours during business days.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <Card className="border-destructive/20 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Important Disclaimer</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zweifel Capital does not offer investment advice or solicitations to the public. Information is
                  illustrative and intended for professional/sophisticated investors. Investments involve risk,
                  including loss of capital. Past performance is not indicative of future results.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
