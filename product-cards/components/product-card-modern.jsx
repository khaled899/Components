"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"

export default function ProductCardModern({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted)
  const [isHovered, setIsHovered] = useState(false)

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", product.title)
  }

  const handleQuickView = () => {
    console.log("Quick view:", product.title)
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div
      className="group relative w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-50 rounded-t-2xl">
        <img
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-4 left-4 bg-violet-600 hover:bg-violet-700 text-white font-semibold">
            -{discountPercentage}%
          </Badge>
        )}

        {/* Stock Status */}
        {!product.stock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="bg-white text-gray-900 font-semibold">
              Out of Stock
            </Badge>
          </div>
        )}

        {/* Floating Action Buttons */}
        <div
          className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          }`}
        >
          <Button
            size="icon"
            variant="secondary"
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
            onClick={handleWishlist}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`}
            />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            className="w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg"
            onClick={handleQuickView}
          >
            <Eye className="w-4 h-4 text-gray-600" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews.length} reviews)</span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Features */}
        {/* <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs text-violet-600 border-violet-200">
              {feature}
            </Badge>
          ))}
        </div> */}

        {/* Price */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={handleAddToCart}
          disabled={!product.stock}
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.stock ? "Add to Cart" : "Out of Stock"}
        </Button>
      </div>
    </div>
  )
}
