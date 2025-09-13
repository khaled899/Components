import { Button } from "@/components/ui/button"

export function MainContent() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto">
        {/* Phone X Section */}
        <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-sm bg-green-500 px-3 py-1 rounded-full inline-block mb-4">New</div>
            <h2 className="text-4xl font-bold mb-2">Phone X</h2>
            <p className="text-lg mb-6 opacity-90">Redesigned from the ground up</p>
            <Button className="bg-white text-gray-800 hover:bg-gray-100">Shop Now</Button>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64">
            <img src="/modern-smartphone.png" alt="Phone X" className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Laptop Section */}
        <div className="bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-2">Laptop</h2>
            <p className="text-lg mb-6 opacity-90">Most Popular</p>
            <Button className="bg-white text-gray-800 hover:bg-gray-100">Shop Now</Button>
          </div>
          <div className="absolute right-0 top-0 w-64 h-64">
            <img src="/modern-laptop.png" alt="Laptop" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* Flash Deals Section */}
      <section className="p-8 max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-red-500 mb-8">Flash Deals</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative">
                <img
                  src={`/generic-product-display.png?height=200&width=200&query=product ${item}`}
                  alt={`Product ${item}`}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-xs rounded">Sale</span>
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-2">Product {item}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">$99.00</span>
                  <span className="text-sm text-gray-500 line-through">$149.00</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shopify Trial Banner */}
      <div className="fixed bottom-4 left-4 right-4 bg-yellow-400 text-black p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Enjoy 3 months of Shopify for $1/month - Start your FREE TRIAL</span>
          <span className="text-xl">→</span>
        </div>
        <button className="text-black hover:text-gray-700">×</button>
      </div>
    </main>
  )
}
