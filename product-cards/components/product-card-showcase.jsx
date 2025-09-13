import { ProductCardModern } from "./product-cards/product-card-modern"
import { ProductCardMinimal } from "./product-cards/product-card-minimal"
import { ProductCardLuxury } from "./product-cards/product-card-luxury"
import { ProductCardGlassmorphism } from "./product-cards/product-card-glassmorphism"
import { ProductCardNeon } from "./product-cards/product-card-neon"
import { ProductCardBrutalist } from "./product-cards/product-card-brutalist"
import { ProductCardCompact } from "./product-cards/product-card-compact"

const sampleProduct = {
  id: "1",
  name: "Handcrafted Leather Crossbody Bag",
  description: "Premium Italian leather with sustainable sourcing",
  price: 129,
  originalPrice: 179,
  image: "/luxury-brown-crossbody.png",
  rating: 4.8,
  reviews: 124,
  features: ["Sustainably sourced", "Free 2-day shipping", "Lifetime warranty"],
  inStock: true,
  isWishlisted: false,
}

const sampleProducts = [
  sampleProduct,
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    description: "Soft, breathable, and ethically made",
    price: 45,
    originalPrice: null,
    image: "/placeholder-nhr0h.png",
    rating: 4.6,
    reviews: 89,
    features: ["Organic cotton", "Fair trade", "Machine washable"],
    inStock: true,
    isWishlisted: true,
  },
  {
    id: "3",
    name: "Wireless Noise-Canceling Headphones",
    description: "Premium audio with active noise cancellation",
    price: 299,
    originalPrice: 399,
    image: "/premium-black-headphones.png",
    rating: 4.9,
    reviews: 256,
    features: ["30hr battery", "Quick charge", "Premium drivers"],
    inStock: false,
    isWishlisted: false,
  },
]

export function ProductCardShowcase() {
  return (
    <div className="space-y-16">
      {/* Modern Design */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Modern Interactive Design</h2>
        <p className="text-gray-600 mb-8">
          Features hover animations, floating action buttons, and premium interactions
        </p>
        <div className="flex justify-center">
          <ProductCardModern product={sampleProduct} />
        </div>
      </section>
<ProductCardNeon/>
      {/* Minimal Design */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Clean Minimal Design</h2>
        <p className="text-gray-600 mb-8">Focus on simplicity with clear typography and subtle interactions</p>
        <div className="flex justify-center">
          <ProductCardMinimal product={sampleProduct} />
        </div>
      </section>

      {/* Luxury Design */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Premium Luxury Design</h2>
        <p className="text-gray-600 mb-8">Elegant styling with sophisticated hover effects and premium feel</p>
        <div className="flex justify-center">
          <ProductCardLuxury product={sampleProduct} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Glassmorphism Design</h2>
        <p className="text-gray-600 mb-8">Modern glass effect with backdrop blur and translucent elements</p>
        <div className="flex justify-center">
          <ProductCardGlassmorphism product={sampleProduct} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Neon Cyberpunk Design</h2>
        <p className="text-gray-600 mb-8">Bold neon accents with dark theme and futuristic styling</p>
        <div className="flex justify-center">
          <ProductCardNeon product={sampleProduct} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Brutalist Design</h2>
        <p className="text-gray-600 mb-8">Bold, geometric shapes with high contrast and strong typography</p>
        <div className="flex justify-center">
          <ProductCardBrutalist product={sampleProduct} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Compact List Design</h2>
        <p className="text-gray-600 mb-8">Space-efficient horizontal layout perfect for dense listings</p>
        <div className="flex justify-center">
          <ProductCardCompact product={sampleProduct} />
        </div>
      </section>

      {/* Grid Layout Example */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Mixed Grid Layout</h2>
        <p className="text-gray-600 mb-8">Different card styles working together in a marketplace grid</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <ProductCardModern product={sampleProducts[0]} />
          <ProductCardMinimal product={sampleProducts[1]} />
          <ProductCardLuxury product={sampleProducts[2]} />
          <ProductCardGlassmorphism product={sampleProducts[0]} />
          <ProductCardNeon product={sampleProducts[1]} />
          <ProductCardBrutalist product={sampleProducts[2]} />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Compact List Layout</h2>
        <p className="text-gray-600 mb-8">Horizontal cards for search results and category pages</p>
        <div className="space-y-4 max-w-4xl mx-auto">
          <ProductCardCompact product={sampleProducts[0]} />
          <ProductCardCompact product={sampleProducts[1]} />
          <ProductCardCompact product={sampleProducts[2]} />
        </div>
      </section>
    </div>
  )
}
