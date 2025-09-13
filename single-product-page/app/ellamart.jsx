import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Heart, Search, ShoppingCart, User, Star, Minus, Plus, Share2 } from "lucide-react"

export default function EllamartPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-cyan-400 to-blue-600 text-white py-2 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8">🚀 SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH</span>
          <span className="mx-8">🚀 SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH</span>
          <span className="mx-8">🚀 SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold">ellamart+</div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Input
                  placeholder="Search the store"
                  className="w-full pl-4 pr-12 py-2 rounded-full bg-white text-black"
                />
                <Button size="sm" className="absolute right-1 top-1 rounded-full bg-gray-100 hover:bg-gray-200">
                  <Search className="h-4 w-4 text-gray-600" />
                </Button>
              </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-6">
              <div className="text-sm">
                <div>Available 24/7 at</div>
                <div className="font-semibold">(000) 123-4567</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <Heart className="h-5 w-5" />
                  <span className="text-xs">Wish Lists</span>
                </div>
                <div className="flex flex-col items-center">
                  <User className="h-5 w-5" />
                  <span className="text-xs">Sign In</span>
                </div>
                <div className="flex flex-col items-center relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="text-xs">Cart</span>
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    0
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-blue-700 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-8">
                <a href="#" className="bg-blue-800 px-3 py-1 rounded text-sm">
                  Theme Demo
                </a>
                <a href="#" className="hover:text-blue-200 text-sm">
                  Shop
                </a>
                <a href="#" className="bg-red-600 px-3 py-1 rounded text-sm">
                  Product
                </a>
                <a href="#" className="hover:text-blue-200 text-sm">
                  New In
                </a>
                <a href="#" className="hover:text-blue-200 text-sm">
                  Must Have
                </a>
                <a href="#" className="hover:text-blue-200 text-sm">
                  Collections
                </a>
                <a href="#" className="hover:text-blue-200 text-sm">
                  Pages
                </a>
                <a href="#" className="hover:text-blue-200 text-sm">
                  Buy Ella
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">🆘 Help</span>
                <span className="text-sm">🇺🇸 EN / USD</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-500">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>{" "}
          &gt;
          <span className="ml-1">(Product 20) Sample - Computers & Accessories For Sale</span>
        </div>
      </div>

      {/* Main Product Section */}
      <main className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img src="/placeholder-qmhb7.png" alt="Juice Extractor" className="w-full h-full object-contain" />
            </div>
            <div className="flex space-x-2">
              <div className="w-20 h-20 bg-gray-100 rounded border-2 border-blue-500">
                <img src="/placeholder-e9ady.png" alt="Product view 1" className="w-full h-full object-contain" />
              </div>
              <div className="w-20 h-20 bg-gray-100 rounded">
                <img src="/black-coffee-maker.png" alt="Product view 2" className="w-full h-full object-contain" />
              </div>
              <div className="w-20 h-20 bg-gray-100 rounded">
                <img src="/electric-kettle.png" alt="Product view 3" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title and Reviews */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                (Product 21) Sample - Computers & Accessories For Sale
              </h1>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">1 Review</span>
                <span className="text-red-500 text-sm">🔥 7 sold in last 10 hours</span>
              </div>
              <p className="text-gray-600 mb-4">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                dolor, elementum etos lobortis...
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <div>
                  <strong>Vendor:</strong> Ella - Halothemes
                </div>
                <div>
                  <strong>SKU:</strong> KJSU-58636
                </div>
                <div>
                  <strong>Availability:</strong> <span className="text-green-600">In Stock</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-gray-900">$79.00</div>

            {/* Stock Alert */}
            <div className="bg-red-50 border border-red-200 rounded p-3">
              <div className="text-red-600 text-sm mb-2">Please hurry! Only 9 left in stock</div>
              <div className="w-full bg-red-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "20%" }}></div>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="text-sm font-medium mb-2">Size: XS</div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="border-2 border-black bg-transparent">
                  XS
                </Button>
                <Button variant="outline" size="sm">
                  S
                </Button>
                <Button variant="outline" size="sm">
                  L
                </Button>
                <Button variant="outline" size="sm">
                  XL
                </Button>
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <div className="text-sm font-medium mb-2">Color: Black</div>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-black rounded-full border-2 border-gray-300 ring-2 ring-blue-500"></div>
                <div className="w-8 h-8 bg-white rounded-full border-2 border-gray-300"></div>
                <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-gray-300"></div>
                <div className="w-8 h-8 bg-orange-400 rounded-full border-2 border-gray-300"></div>
              </div>
            </div>

            {/* Quantity */}
            <div>
              <div className="text-sm font-medium mb-2">Quantity:</div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-4 py-2 border rounded">1</span>
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="text-lg font-semibold">Subtotal: $79.00</div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  📏 Size Guide
                </Button>
                <Button variant="outline" size="sm">
                  🎨 Compare Color
                </Button>
                <Button variant="outline" size="sm">
                  ❓ Ask An Expert
                </Button>
              </div>

              <div className="flex space-x-4">
                <Button className="flex-1 bg-black hover:bg-gray-800 text-white py-3">Add To Cart</Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">
                  I agree with{" "}
                  <a href="#" className="text-blue-600 underline">
                    Terms & Conditions
                  </a>
                </span>
              </div>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">Buy with ShopPay</Button>

              <div className="text-center">
                <a href="#" className="text-blue-600 text-sm underline">
                  More payment options
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-center text-sm">
                <span className="mr-2">👁️</span>
                <span>50 customers are viewing this product</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="mr-2">🚚</span>
                  <span className="font-medium">Free Shipping</span>
                </div>
                <div className="text-sm text-gray-600 ml-6">
                  Free standard shipping on orders over $99
                  <br />
                  Estimated to be delivered on 12/01/2022 - 15/10/2022.
                </div>
              </div>

              <div className="flex items-center text-sm">
                <span className="mr-2">↩️</span>
                <span className="font-medium">Free Returns</span>
              </div>

              <div className="flex items-center text-sm">
                <span className="mr-2">⚠️</span>
                <span className="font-medium">Covid-19 Shipping Delay Notice</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
