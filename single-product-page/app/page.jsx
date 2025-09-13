"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, User, Search, Star, Minus, Plus, Share2 } from "lucide-react"

export default function EllaMartPage() {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("XS")
  const [selectedColor, setSelectedColor] = useState("Black")

  const colors = [
    { name: "Black", value: "bg-black" },
    { name: "White", value: "bg-white border border-gray-300" },
    { name: "Gray", value: "bg-gray-400" },
    { name: "Orange", value: "bg-orange-400" },
  ]

  const sizes = ["XS", "S", "L", "XL"]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 overflow-hidden">
        <div className="marquee">
          <div className="marquee-content">
            <span className="mx-8">⚡ SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH!</span>
            <span className="mx-8">⚡ SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH!</span>
            <span className="mx-8">⚡ SPECIAL OFFER: ENJOY 3 MONTHS OF SHOPIFY FOR $1/MONTH!</span>
          </div>
        </div>
      </div>

      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">ellamart+</div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Input
                  placeholder="Search the store"
                  className="w-full pl-4 pr-10 py-2 rounded-full bg-white text-black"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="text-sm">
                <div>Available 24/7 at</div>
                <div className="font-semibold">(000) 123-4567</div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-center">
                  <Heart className="w-5 h-5" />
                  <span className="text-xs">Wish Lists</span>
                </div>
                <div className="flex flex-col items-center">
                  <User className="w-5 h-5" />
                  <span className="text-xs">Sign In</span>
                </div>
                <div className="flex flex-col items-center relative">
                  <ShoppingCart className="w-5 h-5" />
                  <span className="text-xs">Cart</span>
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    0
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="bg-blue-800 py-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-8">
                <a href="#" className="hover:text-blue-200">
                  Theme Demo
                </a>
                <a href="#" className="hover:text-blue-200">
                  Shop
                </a>
                <a href="#" className="hover:text-blue-200">
                  Product
                </a>
                <a href="#" className="hover:text-blue-200">
                  New In
                </a>
                <a href="#" className="hover:text-blue-200">
                  Must Have
                </a>
                <a href="#" className="hover:text-blue-200">
                  Collections
                </a>
                <a href="#" className="hover:text-blue-200">
                  Pages
                </a>
                <a href="#" className="hover:text-blue-200">
                  Buy Ella
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm">Help</span>
                <span className="text-sm">EN / USD</span>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <span className="mx-2">›</span>
          <span>(Product 20) Sample - Computers & Accessories For Sale</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <img src="/white-juice-extractor-blender.png" alt="Juice Extractor" className="w-full h-full object-contain" />
            </div>

            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-20 bg-gray-50 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-blue-500"
                >
                  <img
                    src={`/modern-kitchen-appliances.png?height=80&width=80&query=kitchen appliance ${i}`}
                    alt={`Product view ${i}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                (Product 21) Sample - Computers & Accessories For Sale
              </h1>

              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">1 Review</span>
                <div className="flex items-center text-red-500 text-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>7 sold in last 10 hours
                </div>
              </div>

              <p className="text-gray-600 mb-4">
                Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam
                dolor, elementum etos lobortis...
              </p>

              <div className="space-y-2 text-sm text-gray-600">
                <div>
                  <span className="font-semibold">Vendor:</span> Ella - Halothemes
                </div>
                <div>
                  <span className="font-semibold">SKU:</span> KJSU-58636
                </div>
                <div>
                  <span className="font-semibold">Availability:</span> <span className="text-green-600">In Stock</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <span className="text-2xl text-gray-400 line-through">$129.00</span>
                <span className="text-3xl font-bold text-red-600">$79.00</span>
                <Badge className="bg-red-100 text-red-800 text-sm">Save 39%</Badge>
              </div>
              <div className="text-red-500 text-sm font-medium">Please hurry! Only 9 left in stock</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="font-semibold">Size:</span>
                <span>{selectedSize}</span>
              </div>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded ${
                      selectedSize === size
                        ? "border-blue-500 bg-blue-50 text-blue-600"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="font-semibold">Color:</span>
                <span>{selectedColor}</span>
              </div>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full ${color.value} ${
                      selectedColor === color.name ? "ring-2 ring-blue-500 ring-offset-2" : ""
                    }`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="font-semibold">Quantity:</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:bg-gray-100">
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:bg-gray-100">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Subtotal:</span>
                <div className="text-right">
                  <div className="text-sm text-gray-400 line-through">$129.00</div>
                  <div className="text-xl font-bold text-red-600">$79.00</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button className="bg-gray-800 text-white px-4 py-2 text-sm">Size Guide</Button>
                <Button variant="outline" className="px-4 py-2 text-sm bg-transparent">
                  Compare Color
                </Button>
                <Button variant="outline" className="px-4 py-2 text-sm bg-transparent">
                  Ask An Expert
                </Button>
              </div>

              <div className="flex space-x-4">
                <Button className="flex-1 bg-black text-white py-3 text-lg font-semibold">Add To Cart</Button>
                <Button variant="outline" size="icon" className="p-3 bg-transparent">
                  <Heart className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="p-3 bg-transparent">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <input type="checkbox" id="terms" className="rounded" />
                <label htmlFor="terms" className="text-gray-600">
                  I agree with{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <Button className="w-full bg-purple-600 text-white py-3 text-lg">Buy with ShopPay</Button>

              <div className="text-center">
                <a href="#" className="text-blue-600 hover:underline text-sm">
                  More payment options
                </a>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-6 border-t">
              <div className="flex items-center text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <span className="font-semibold mr-2">50 customers are viewing this product</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Free Shipping</div>
                    <div className="text-xs text-gray-600">Free standard shipping on orders over $99</div>
                    <div className="text-xs text-gray-600">Estimated to be delivered on 12/01/2022 - 15/10/2022.</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Free Returns</div>
                    <div className="text-xs text-gray-600">Learn More</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-yellow-100 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Covid-19 Shipping Delay Notice</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
