"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Star } from "lucide-react"

export default function ProductCardMinimal({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted)

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted)
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", product.title)
  }

  return (
    <div className="group w-80 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative bg-gray-50">
        <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} className="w-full h-64 object-cover" />

        {/* Wishlist Button */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white"
          onClick={handleWishlist}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </Button>

        {/* Out of Stock Overlay */}
        {!product.stock && (
          <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <span className="text-gray-600 font-medium">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-700">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews.length})</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.title}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-gray-900 hover:bg-gray-800 text-white disabled:opacity-50"
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
