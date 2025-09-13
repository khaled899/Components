import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Shield, Truck, RotateCcw } from "lucide-react"

export default function MinimalistPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-serif text-2xl font-bold text-cyan-600">ellamart+</div>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Shop
                </a>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  New In
                </a>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors">
                  Collections
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingCart className="h-4 w-4" />
                <span className="ml-1 text-xs bg-cyan-600 text-white rounded-full px-1">0</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden">
              <img
                src="/placeholder-rmh6h.png"
                alt="Premium Juice Extractor"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-200 transition-all"
                >
                  <img
                    src={`/juice-extractor-detail.png?height=150&width=150&query=juice extractor detail view ${i}`}
                    alt={`Product view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-3">
                Premium Kitchen
              </Badge>
              <h1 className="font-serif text-3xl font-bold text-gray-900 mb-3">Professional Juice Extractor Pro</h1>
              <div className="flex items-center space-x-3 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(127 reviews)</span>
                <span className="text-sm text-red-500">7 sold in last 10 hours</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Experience the perfect blend of innovation and design with our premium juice extractor. Crafted for
                health-conscious individuals who demand both performance and style.
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-3xl font-bold text-gray-900">$79.00</div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Size</label>
                <div className="flex space-x-2">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        size === "M"
                          ? "border-cyan-600 bg-cyan-50 text-cyan-600"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Color</label>
                <div className="flex space-x-3">
                  {[
                    { name: "White", color: "bg-white border-2 border-gray-200" },
                    { name: "Black", color: "bg-black" },
                    { name: "Silver", color: "bg-gray-300" },
                    { name: "Blue", color: "bg-blue-500" },
                  ].map((option) => (
                    <button
                      key={option.name}
                      className={`w-8 h-8 rounded-full ${option.color} ${
                        option.name === "White" ? "ring-2 ring-cyan-600" : ""
                      } hover:scale-110 transition-transform`}
                      title={option.name}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Quantity</label>
                <div className="flex items-center space-x-3">
                  <Button variant="outline" size="sm">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 border rounded-lg min-w-[60px] text-center">1</span>
                  <Button variant="outline" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 text-lg font-medium">
                Add To Cart
              </Button>
              <div className="flex space-x-3">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Truck className="h-5 w-5 text-cyan-600" />
                <span>Free shipping on orders over $99</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <RotateCcw className="h-5 w-5 text-cyan-600" />
                <span>30-day return policy</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Shield className="h-5 w-5 text-cyan-600" />
                <span>2-year warranty included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
