"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"

export default function ProductCardGlassmorphism({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted)

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
    <div className="group relative w-80 mx-10 bg-gradient-to-br from-blue-50/80 to-purple-50/80 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/20">
      {/* Glass Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl"></div>

      {/* Image Container */}
      <div className="relative overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-100/50 to-gray-200/50 backdrop-blur-sm">
        <img
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
        />

        {/* Floating Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-pink-500/90 to-purple-600/90 backdrop-blur-sm text-white font-semibold border border-white/20">
            -{discountPercentage}%
          </Badge>
        )}

        {/* Stock Status */}
        {!product.stock && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
            <Badge className="bg-white/90 backdrop-blur-sm text-gray-900 font-semibold border border-white/20">
              Out of Stock
            </Badge>
          </div>
        )}

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            size="icon"
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20 text-gray-700"
            onClick={handleWishlist}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button
            size="icon"
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 border border-white/20 text-gray-700"
            onClick={handleQuickView}
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6 bg-white/10 backdrop-blur-sm">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-gray-800">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-600">({product.reviews.lenght} reviews)</span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-700 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Features */}
        {/* <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} className="text-xs bg-white/20 backdrop-blur-sm text-purple-700 border border-white/20">
              {feature}
            </Badge>
          ))}
        </div> */}

        {/* Price */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          {product.originalPrice && (
            <span className="text-lg text-gray-600 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-gradient-to-r from-blue-600/90 to-purple-600/90 backdrop-blur-sm hover:from-blue-700/90 hover:to-purple-700/90 text-white font-semibold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
