export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-3 text-white tracking-wide">Zweifel Capital Ltd.</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Co-Investment Platform<br />
              Alternative Investments · Real Assets
            </p>
            <div className="mt-6">
              <p className="text-slate-500 text-xs uppercase tracking-wider mb-2">Contact</p>
              <a
                href="mailto:info@zweifelcapital.com"
                className="text-slate-400 hover:text-emerald-400 transition-colors text-sm"
              >
                info@zweifelcapital.com
              </a>
            </div>
          </div>

          {/* Nassau */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Nassau</h4>
            <div className="text-slate-400 text-sm leading-relaxed">
              <p>Lyford Cay Club</p>
              <p>Lyford Cay Drive</p>
              <p>Nassau, Bahamas</p>
            </div>
          </div>

          {/* Buenos Aires */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">Buenos Aires</h4>
            <div className="text-slate-400 text-sm leading-relaxed">
              <p>Zenteno 3190</p>
              <p>CABA, Provincia de Buenos Aires</p>
              <p>Argentina</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-600 text-xs leading-relaxed mb-6 max-w-4xl">
            <span className="font-semibold text-slate-500">Disclaimer —</span> Zweifel Capital does not offer investment
            advice or public solicitations. Information is illustrative and intended for professional or sophisticated
            investors. All investments involve risk, including potential loss of capital. Past performance is not
            indicative of future results.
          </p>
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Zweifel Capital Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
