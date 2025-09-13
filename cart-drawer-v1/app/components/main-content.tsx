"use client"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface MainContentProps {
  onAddToCart: (product: Product) => void
}

export function MainContent({ onAddToCart }: MainContentProps) {
  const flashDealsProducts = [
    {
      id: 101,
      name: "Premium Product 1",
      price: 99.99,
      image: "/generic-product-display.png",
    },
    {
      id: 102,
      name: "Premium Product 2",
      price: 99.99,
      image: "/generic-product-display.png",
    },
    {
      id: 103,
      name: "Premium Product 3",
      price: 99.99,
      image: "/generic-product-display.png",
    },
    {
      id: 104,
      name: "Premium Product 4",
      price: 99.99,
      image: "/generic-product-display.png",
    },
  ]

  return (
    <main className="flex-1">
      <section className="relative bg-gradient-to-r from-yellow-400 to-orange-500 py-12 sm:py-16 lg:py-20 xl:py-24 mb-8 sm:mb-12 lg:mb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-white text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
                Phone X
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 opacity-90 max-w-md mx-auto lg:mx-0">
                Discover amazing products with cutting-edge technology
              </p>
              <button className="bg-white text-orange-500 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors text-base sm:text-lg touch-manipulation">
                Shop Now
              </button>
            </div>
            <div className="relative order-first lg:order-last">
              <img
                src="/modern-smartphone.png"
                alt="Phone X"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-pink-400 to-purple-500 py-12 sm:py-16 lg:py-20 mb-8 sm:mb-12 lg:mb-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative">
              <img
                src="/modern-laptop.png"
                alt="Laptop"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
            <div className="text-white text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6">
                Laptop
              </h2>
              <p className="text-base sm:text-lg lg:text-xl opacity-90">Most Popular</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500 mb-8 lg:mb-12 text-center lg:text-left">
            Flash Deals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {flashDealsProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl lg:rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-red-500 text-white px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full font-semibold">
                    Sale
                  </span>
                </div>
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="font-semibold text-base sm:text-lg mb-3 text-gray-800">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-red-500">${product.price}</span>
                    <span className="text-sm sm:text-base text-gray-500 line-through">$149.99</span>
                  </div>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 sm:py-3 rounded-lg font-medium transition-colors touch-manipulation"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
