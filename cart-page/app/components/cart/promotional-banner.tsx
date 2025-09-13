export function PromotionalBanner() {
  return (
    <div className="bg-cyan-400 text-white py-2 px-4 text-center text-sm font-medium overflow-hidden">
      <div className="flex items-center justify-center gap-2 animate-marquee whitespace-nowrap">
        <span className="text-red-500">⚡</span>
        <span className="hidden sm:inline">SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH</span>
        <span className="sm:hidden">SPECIAL OFFER: 3 MONTHS SHOPIFY $1/MONTH</span>
        <span className="text-red-500">⚡</span>
        <span className="hidden sm:inline">SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH</span>
        <span className="sm:hidden">SPECIAL OFFER: 3 MONTHS SHOPIFY $1/MONTH</span>
        <span className="text-red-500">⚡</span>
      </div>
    </div>
  )
}
