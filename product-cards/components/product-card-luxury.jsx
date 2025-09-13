"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Star, Crown } from "lucide-react"

export default function ProductCardLuxury({ product }) {
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
    <div className="group relative w-80 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-10">
        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-3 py-1">
          <Crown className="w-3 h-3 mr-1" />
          Premium
        </Badge>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-3xl">
        <img
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-105"
        />

        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white font-bold">
            SAVE {discountPercentage}%
          </Badge>
        )}

        {/* Stock Status */}
        {!product.stock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm">
            <Badge className="bg-white text-gray-900 font-bold px-4 py-2">Temporarily Unavailable</Badge>
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Button
            size="icon"
            className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-lg"
            onClick={handleWishlist}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
          <Button
            size="icon"
            className="w-12 h-12 rounded-full bg-white/90 hover:bg-white text-gray-700 shadow-lg"
            onClick={handleQuickView}
          >
            <Eye className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="text-sm font-semibold text-gray-700 ml-1">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({product.reviews.lenght} reviews)</span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
          {product.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>

        {/* Features */}
        {/* <div className="flex flex-wrap gap-2 mb-5">
          {product.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs text-amber-700 border-amber-200 bg-amber-50">
              {feature}
            </Badge>
          ))}
        </div> */}

        {/* Price */}
        <div className="flex items-baseline gap-3 mb-6">
          <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={handleAddToCart}
          disabled={!product.stock}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          {product.stock ? "Add to Collection" : "Notify When Available"}
        </Button>
      </div>
    </div>
  )
}
