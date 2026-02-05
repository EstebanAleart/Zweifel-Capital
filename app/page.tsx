import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { OfficesSection } from "@/components/offices-section"
import { ContactSection } from "@/components/contact-section"
import Footer from "../components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OfficesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
