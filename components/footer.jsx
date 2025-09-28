export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ZWEIFELCAPITAL</h3>
            <p className="text-slate-300 text-sm">Family Office • Alternative Investments</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-slate-300 text-sm space-y-2">
              <p>Delfina Zweifel</p>
              <p>+44 077 359 36395</p>
              <p>delfina@zweifelcapital.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <div className="text-slate-300 text-sm space-y-2">
              <p>
                United Kingdom
                <br />1 Knightsbridge Green, SW1X 7NE, London
              </p>
              <p>
                Bahamas
                <br />
                Lyford Cay Drive, P.O. Box N-7776, Nassau
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="mb-6 p-4 bg-slate-800 rounded-lg">
            <h4 className="font-semibold text-amber-400 mb-2">Important Disclaimer</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              Zweifel Capital does not offer investment advice or solicitations to the public. Information is
              illustrative and intended for professional/sophisticated investors. Investments involve risk, including
              loss of capital. Past performance is not indicative of future results.
            </p>
          </div>

          <div className="text-center text-slate-400 text-sm">
            <p>&copy; 2025 Zweifel Capital. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
