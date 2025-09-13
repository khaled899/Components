"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart, Eye, Star } from "lucide-react"

export default function ProductCardBrutalist({ product }) {
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
    <div className="group relative w-80 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-yellow-300 border-b-4 border-black">
        <img
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
        />

        {/* Bold Discount Badge */}
        {discountPercentage > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white font-black px-3 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform rotate-3">
            -{discountPercentage}%
          </div>
        )}

        {/* Stock Status */}
        {!product.stock && (
          <div className="absolute inset-0 bg-red-500/90 flex items-center justify-center">
            <div className="bg-white text-black font-black px-6 py-3 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
              SOLD OUT
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button
            size="icon"
            className="w-12 h-12 bg-white hover:bg-yellow-300 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            onClick={handleWishlist}
          >
            <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : "text-black"}`} />
          </Button>
          <Button
            size="icon"
            className="w-12 h-12 bg-white hover:bg-blue-300 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black transform hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all"
            onClick={handleQuickView}
          >
            <Eye className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1 bg-yellow-300 px-2 py-1 border-2 border-black">
            <Star className="w-4 h-4 fill-black text-black" />
            <span className="text-sm font-black text-black">{product.rating}</span>
          </div>
          <span className="text-sm font-bold text-black">({product.reviews.length} REVIEWS)</span>
        </div>

        {/* Product Name */}
        <h3 className="font-black text-xl text-black mb-3 line-clamp-2 uppercase tracking-tight">{product.title}</h3>

        {/* Description */}
        <p className="text-black font-bold text-sm mb-4 line-clamp-2 uppercase">{product.description}</p>

        {/* Features */}
        {/* <div className="flex flex-wrap gap-2 mb-4">
          {product.images.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className="text-xs font-black bg-blue-300 text-black px-2 py-1 border-2 border-black uppercase"
            >
              {feature}
            </div>
          ))}
        </div> */}

        {/* Price */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-green-400 text-black font-black text-2xl px-3 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">
            ${product.price}
          </div>
          {product.originalPrice && (
            <span className="text-lg font-bold text-red-500 line-through">${product.originalPrice}</span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-black hover:bg-gray-800 text-white font-black py-4 text-lg uppercase tracking-wider border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 transform hover:-translate-x-1 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-x-0 disabled:hover:translate-y-0"
          onClick={handleAddToCart}
          disabled={!product.stock}
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          {product.stock ? "BUY NOW!" : "SOLD OUT!"}
        </Button>
      </div>
    </div>
  )
}
