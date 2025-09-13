import GridFooter from "../components/footers/grid-footer"
import MinimalFooter from "../components/footers/minimal-footer"
import ComprehensiveFooter from "../components/footers/comprehensive-footer"
import AccordionFooter from "../components/footers/accordion-footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="font-serif text-3xl font-bold text-slate-900">Marketplace Footer Designs</h1>
          <p className="text-slate-600 mt-2">Responsive footer components for e-commerce marketplaces</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Grid Footer */}
          <section>
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Grid Footer</h2>
              <p className="text-slate-600">
                Classic 4-column layout with company info, buyer/seller links, and contact details
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <GridFooter />
            </div>
          </section>

          {/* Minimal Footer */}
          <section>
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Minimal Footer</h2>
              <p className="text-slate-600">Clean and simple design with trust indicators and essential links</p>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <MinimalFooter />
            </div>
          </section>

          {/* Comprehensive Footer */}
          <section>
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Comprehensive Footer</h2>
              <p className="text-slate-600">
                Feature-rich footer with newsletter signup, trust badges, and extensive navigation
              </p>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <ComprehensiveFooter />
            </div>
          </section>

          {/* Accordion Footer */}
          <section>
            <div className="mb-8">
              <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Accordion Footer</h2>
              <p className="text-slate-600">Mobile-optimized with collapsible sections, expands to grid on desktop</p>
            </div>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <AccordionFooter />
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
