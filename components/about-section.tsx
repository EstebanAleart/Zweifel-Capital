"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Briefcase, GraduationCap, LinkedinIcon, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutSection() {
  const [showKurtBio, setShowKurtBio] = useState(false)
  const [showDelfinaBio, setShowDelfinaBio] = useState(false)

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-6">
            Family Legacy Meets
            <br />
            <span className="text-emerald-600">Global Investment Expertise</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Zweifel Capital is a family office co-founded by Kurt and Delfina Zweifel, bringing together decades of
            experience across global industrial sector experience, sustainable real asset investment and management,
            financial engineering and commodities markets.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            With a network spanning Europe, Latin America, the United States, and the Caribbean, the firm focuses on
            building long-term international partnerships and executing cross-border investment strategies, bridging
            cultural perspectives and market expertise.
          </p>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Zweifel Capital co-invests its own capital alongside institutional partners, family offices, and independent
            sponsors, combining deep regional knowledge in Latin America with European and American standards of
            structure, governance, and execution.
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
                className="object-cover object-[50%_0%] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Kurt Zweifel</h3>
                  <p className="text-emerald-400 font-medium">Co-Founder & Chief Investment Officer</p>
                </div>
                <Link
                  href="https://www.linkedin.com/in/kurt-zweifel/"
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
                Swiss investor and entrepreneur with more than 40 years of experience across real-asset investing,
                agribusiness, and international industry in Latin America, Europe, and the United States. Formerly with
                Sulzer and Lockwood, Greene &amp; Co. Long-standing agribusiness and land investor in Argentina, with
                enduring commercial relationships with global commodity firms including Cargill.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                A long-term investor focused on capital preservation across generations, Kurt leads investment strategy,
                capital allocation, and underwriting at Zweifel Capital, combining operating experience with rigorous
                financial analysis and financial-engineering discipline across real-asset investments.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">Buenos Aires, Zurich</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">Sulzer, Lockwood Greene, Agribusiness Entrepreneur</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">Diplom-Ingenieur ETH Zürich</span>
                </div>
              </div>

              {/* Expandable Full Bio */}
              <button
                onClick={() => setShowKurtBio(!showKurtBio)}
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm cursor-pointer transition-colors"
              >
                {showKurtBio ? "Hide Biography" : "Read Full Biography"}
                {showKurtBio ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {showKurtBio && (
                <div className="mt-6 pt-6 border-t border-slate-200 space-y-4 text-slate-600 leading-relaxed">
                  <h4 className="font-semibold text-slate-900">Kurt Zweifel — Global Entrepreneur &amp; Agribusiness Pioneer</h4>
                  <p>
                    Kurt Zweifel is a Swiss entrepreneur based in Buenos Aires, whose career weaves together the heritage
                    and precision of European industry, the pragmatism and scale of American business, and the resilience
                    and entrepreneurial spirit of Latin America. Having lived and worked in Switzerland, across Europe,
                    the United States, and Argentina, Kurt embodies a truly global outlook, shaped as much by multinational
                    boardrooms as by the realities of agricultural fields.
                  </p>
                  <p>
                    An engineer by training, Kurt graduated from the prestigious ETH Zürich (Swiss Federal Institute of
                    Technology). This education provided the analytical and technical foundation for a career that would
                    span industries, continents, and more than four decades.
                  </p>
                  <p>
                    Kurt began his professional journey with Sulzer in Argentina, the renowned Swiss multinational
                    industrial engineering and manufacturing company. At Sulzer, he gained early exposure to the precision
                    and discipline of Swiss industry while navigating the complex realities of Latin American markets.
                  </p>
                  <p>
                    He was later transferred to Europe, where he played a key role in expanding Sulzer&apos;s presence
                    across Eastern Europe. There he experienced first-hand the innovation, rigor, and cultural diversity
                    of European business, building cross-border partnerships and forging new opportunities during a period
                    of rapid transformation and integration.
                  </p>
                  <p>
                    In the United States, Kurt broadened his perspective through his work with Lockwood, Greene &amp; Co.,
                    a pioneering engineering and consultancy firm. There he absorbed the pragmatism, deal-making energy,
                    and sense of scale that define American business culture, complementing his European precision and
                    Latin American adaptability.
                  </p>
                  <p>
                    Back in Latin America, Kurt built on this foundation to become a long-standing force in agribusiness,
                    managing extensive agricultural landholdings in Buenos Aires province for more than 40 years. His
                    operations have produced and traded grains with global buyers such as Cargill, establishing deep trust
                    in international commodity markets. From Latin America he drew the qualities of resilience, adaptability,
                    and entrepreneurial courage, which continue to shape his approach to business today.
                  </p>
                  <p>
                    Fluent in six languages, Kurt cultivates enduring relationships with partners and investors across
                    Europe, the Americas, and beyond.
                  </p>
                  <p>
                    Today, as Founder and Chief Investment Officer of Zweifel Capital, he channels this unique
                    trajectory—European rigor, American pragmatism, and Latin American resilience—into investment solutions
                    in agriculture, land development, real estate, and sustainable projects. His mission is to bridge global
                    capital with global opportunity, offering investors access to high-quality, long-term projects that unite
                    international vision with local execution.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Delfina Zweifel */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow bg-white">
            <div className="relative h-96 lg:h-[600px]">
              <Image
                src="/images/delfina-zweifel.jpg"
                alt="Delfina Zweifel"
                fill
                className="object-cover object-[60%_15%] grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Delfina Zweifel</h3>
                  <p className="text-emerald-400 font-medium">Co-Founder & Chief Executive Officer</p>
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
                Investment professional with over 20 years of international experience across institutional finance and
                private capital in Europe and the United States. Former J.P. Morgan professional in New York and London,
                she currently serves as Head of Investor Relations at Welz, a private-debt platform specializing in
                real-estate direct lending in Iberia.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Zweifel Capital, Delfina leads strategic partnerships, investor relations, and global capital
                allocations, focusing on real-estate asset-backed financing, private credit, and co-investment
                opportunities across Europe and Latin America.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">New York, London, Nassau, Geneva</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">J.P. Morgan, Vivaldi Group, Faro Capital, Welz</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-slate-600">Goizueta Business School, Southern Methodist University</span>
                </div>
              </div>

              {/* Expandable Full Bio */}
              <button
                onClick={() => setShowDelfinaBio(!showDelfinaBio)}
                className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm cursor-pointer transition-colors"
              >
                {showDelfinaBio ? "Hide Biography" : "Read Full Biography"}
                {showDelfinaBio ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </button>

              {showDelfinaBio && (
                <div className="mt-6 pt-6 border-t border-slate-200 space-y-4 text-slate-600 leading-relaxed">
                  <h4 className="font-semibold text-slate-900">Delfina Zweifel — International Investment Professional</h4>
                  <p>
                    Delfina Zweifel is an international investment professional with more than 20 years of experience
                    across institutional finance, private capital, client outreach, investor relations, and capital
                    formation. Throughout her career, she has built and nurtured an extensive network across Latin America,
                    the United States, the Caribbean, and Europe, assisting investors in navigating markets and identifying
                    investment opportunities across asset classes. Having lived and worked across these regions and fluent
                    in four languages, she brings a truly global perspective to long-term investment partnerships.
                  </p>
                  <p>
                    Educated in business and finance at Goizueta Business School and Southern Methodist University,
                    Delfina developed an early foundation in capital markets, investment strategy, and investor engagement
                    that would shape her professional career.
                  </p>
                  <p>
                    She began her professional journey at J.P. Morgan in New York, where she spent more than eight years
                    working across Credit Lending, Emerging Markets Fixed Income Research, and Private Banking for Latin
                    America. There she gained first-hand experience in credit markets, investment analysis, and cross-border
                    capital flows, working with institutional investors and private clients. She later continued her work
                    with international investors in London, further expanding her exposure to global financial markets.
                  </p>
                  <p>
                    Following this experience, Delfina joined Vivaldi Group, a global branding and strategy consultancy,
                    where she focused on corporate marketing and strategic positioning, advising companies on growth
                    strategy, communication, and investor engagement. She later co-founded Faro Capital Investors, a
                    family office based in Nassau, The Bahamas, dedicated to wealth management and fostering long-term
                    relationships with high-net-worth investors. This experience deepened her understanding of private
                    capital, family-office investing, and multi-generational wealth stewardship.
                  </p>
                  <p>
                    Today, she serves as Head of Investor Relations at Welz, a private-debt platform specializing in
                    real-estate direct lending in Spain, where she manages relationships with institutional and
                    family-office investors across Europe and supports capital formation initiatives in asset-backed
                    financing strategies.
                  </p>
                  <p>
                    As Co-Founder and Chief Executive Officer of Zweifel Capital, Delfina brings together her experience
                    in institutional finance, investor relations, and private capital to build long-term partnerships
                    between global investors and real-asset opportunities. She oversees partnerships, co-investments,
                    investor engagement, and strategic positioning for the firm across Europe and Latin America.
                  </p>
                  <p>
                    Her work focuses on real-estate asset-backed financing, private-credit transactions, and alternative
                    investments that combine European institutional discipline with Latin American opportunities, helping
                    connect international capital with long-term investment strategies grounded in real assets.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
