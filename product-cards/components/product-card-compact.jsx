"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Star } from "lucide-react"

export default function ProductCardCompact({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted)

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", product.title)
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="group flex bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 overflow-hidden max-w-4xl">
      {/* Image */}
      <div className="relative w-32 h-32 flex-shrink-0 bg-gray-50">
        <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover" />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold">
            -{discountPercentage}%
          </Badge>
        )}

        {/* Stock Overlay */}
        {!product.stock && (
          <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center">
            <span className="text-white text-xs font-semibold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
        <div>
          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-gray-700">{product.rating}</span>
            </div>
            <span className="text-xs text-gray-500">({product.reviews.length})</span>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1 group-hover:text-blue-600 transition-colors">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>

          {/* Features */}
          {/* <div className="flex flex-wrap gap-1 mb-3">
            {product.features.slice(0, 2).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs text-blue-600 border-blue-200">
                {feature}
              </Badge>
            ))}
          </div> */}
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Button
              size="icon"
              variant="ghost"
              className="w-8 h-8 text-gray-600 hover:text-red-500"
              onClick={handleWishlist}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-50"
              onClick={handleAddToCart}
              disabled={!product.stock}
            >
              <ShoppingCart className="w-3 h-3 mr-1" />
              {product.stock ? "Add" : "Unavailable"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
