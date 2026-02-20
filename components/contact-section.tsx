export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-emerald-600 text-sm font-semibold uppercase tracking-wider mb-3">
          Contact
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif" }}>
          Zweifel Capital
        </h2>
        <a
          href="mailto:info@zweifelcapital.com"
          className="text-xl text-slate-600 hover:text-blue-900 transition-colors tracking-wide"
        >
          info@zweifelcapital.com
        </a>
      </div>
    </section>
  )
}
