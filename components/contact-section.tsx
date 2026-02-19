"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Ready to Explore
            <br />
            <span className="text-emerald-600">Investment Opportunities?</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Connect with our team to discuss how Zweifel Capital can help you access alternative investment
            opportunities in Latin America and Spain.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card className="border-0 shadow-lg bg-slate-50">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-slate-900">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Email</h4>
                  <a href="mailto:delfina@zweifelcapital.com" className="text-slate-600 hover:text-emerald-600 transition-colors block">
                    delfina@zweifelcapital.com
                  </a>
                  <a href="mailto:kurt@zweifelcapital.com" className="text-slate-600 hover:text-emerald-600 transition-colors block">
                    kurt@zweifelcapital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Phone / WhatsApp</h4>
                  <p className="text-slate-600">+44 077 359 36395</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Locations</h4>
                  <p className="text-slate-600 mb-2">
                    <span className="font-medium text-slate-800">United Kingdom:</span>
                    <br />1 Knightsbridge Green, SW1X 7NE, London
                  </p>
                  <p className="text-slate-600">
                    <span className="font-medium text-slate-800">Bahamas:</span>
                    <br />
                    Lyford Cay Drive, P.O. Box N-7776, Nassau
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Card */}
          <Card className="border-0 shadow-lg bg-slate-900 text-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl text-white">Schedule a Consultation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-slate-300 leading-relaxed">
                We work exclusively with sophisticated investors and family offices. Our team is ready to discuss how
                our expertise in Latin American real assets can complement your investment strategy.
              </p>

              <div className="space-y-4">
                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-6 cursor-pointer"
                  onClick={() =>
                    (window.location.href =
                      "mailto:delfina@zweifelcapital.com?subject=Investment Inquiry&body=Hello, I would like to learn more about investment opportunities with Zweifel Capital.")
                  }
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send us an Email
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-slate-600 text-white hover:bg-slate-800 py-6 bg-transparent cursor-pointer"
                  onClick={() => {
                    const phoneNumber = "4407735936395"
                    const message =
                      "Hello, I would like to learn more about investment opportunities with Zweifel Capital."
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
                  }}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Message
                </Button>
              </div>

              <div className="pt-4 border-t border-slate-700">
                <p className="text-sm text-slate-400">
                  <span className="font-medium text-slate-300">Response Time:</span> We typically respond within 24 hours during business days.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
