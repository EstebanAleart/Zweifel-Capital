"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

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
        </div>

        {/* Contact Cards - One per person */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Delfina */}
          <Card className="border-0 shadow-lg bg-slate-50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Delfina Zweifel</h3>
              <p className="text-emerald-600 font-medium text-sm mb-6">Co-Founder & CEO</p>

              <div className="space-y-4">
                <a
                  href="mailto:delfina@zweifelcapital.com"
                  className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-sm">delfina@zweifelcapital.com</span>
                </a>

                <a
                  href="tel:+447868140409"
                  className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-sm">+44 7868 140 409</span>
                </a>
              </div>

              <div className="mt-6">
                <Button
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-5 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&to=delfina@zweifelcapital.com&su=Investment+Inquiry&body=Hello,+I+would+like+to+learn+more+about+investment+opportunities+with+Zweifel+Capital.",
                      "_blank"
                    )
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Delfina
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Kurt */}
          <Card className="border-0 shadow-lg bg-slate-50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Kurt Zweifel</h3>
              <p className="text-emerald-600 font-medium text-sm mb-6">Co-Founder & CIO</p>

              <div className="space-y-4">
                <a
                  href="mailto:kurt@zweifelcapital.com"
                  className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-sm">kurt@zweifelcapital.com</span>
                </a>

                <a
                  href="tel:+5492392401456"
                  className="flex items-center gap-3 text-slate-600 hover:text-emerald-600 transition-colors"
                >
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-emerald-600" />
                  </div>
                  <span className="text-sm">+54 9 2392 40-1456</span>
                </a>
              </div>

              <div className="mt-6">
                <Button
                  className="w-full bg-blue-800 hover:bg-blue-900 text-white font-semibold py-5 cursor-pointer"
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&to=kurt@zweifelcapital.com&su=Investment+Inquiry&body=Hello,+I+would+like+to+learn+more+about+investment+opportunities+with+Zweifel+Capital.",
                      "_blank"
                    )
                  }
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Kurt
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
