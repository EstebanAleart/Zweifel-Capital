import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-emerald-400">Zweifel</span> Capital
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Co-Investment Platform
            </p>
            <p className="text-slate-500 text-sm leading-relaxed">
              Alternative Investments &bull; Real Assets
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-400 text-sm">
                  <p>delfina@zweifelcapital.com</p>
                  <p>kurt@zweifelcapital.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-slate-400 text-sm">
                  <p>+44 7868 140 409</p>
                  <p>+54 9 2392 40-1456</p>
                </div>
              </div>
            </div>
          </div>

          {/* London Office */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">London</h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-slate-400 text-sm">
                <p>7 Stratton Street, Mayfair</p>
                <p>W1J 8LE, London</p>
              </div>
            </div>
          </div>

          {/* Nassau Office */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Nassau</h4>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <div className="text-slate-400 text-sm">
                <p>Lyford Cay Club</p>
                <p>Lyford Cay Drive</p>
                <p>Nassau, Bahamas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-slate-800/50 rounded-xl p-6 mb-8">
            <h5 className="font-semibold text-emerald-400 mb-3 text-sm">Disclaimer</h5>
            <p className="text-slate-400 text-sm leading-relaxed">
              Zweifel Capital does not offer investment advice or public solicitations. Information is illustrative and
              intended for professional or sophisticated investors. All investments involve risk, including potential loss
              of capital. Past performance is not indicative of future results.
            </p>
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Zweifel Capital. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="https://www.linkedin.com/in/delfina-zweifel-b9030241/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-400 transition-colors text-sm"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
