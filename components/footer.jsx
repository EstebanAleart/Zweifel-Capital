export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold text-foreground mb-4">Zweifel Capital</h3>
            <p className="text-muted-foreground text-sm">
              Family Office & Alternative Investments
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="text-muted-foreground text-sm space-y-2">
              <p>Delfina Zweifel</p>
              <p>+44 077 359 36395</p>
              <p>delfina@zweifelcapital.com</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">London</h4>
            <div className="text-muted-foreground text-sm">
              <p>1 Knightsbridge Green</p>
              <p>SW1X 7NE, London</p>
              <p>United Kingdom</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Nassau</h4>
            <div className="text-muted-foreground text-sm">
              <p>Lyford Cay Drive</p>
              <p>P.O. Box N-7776</p>
              <p>Bahamas</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} Zweifel Capital. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs max-w-xl text-center md:text-right">
              This site does not constitute investment advice. Information is for professional/sophisticated investors only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
