"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, ShoppingCart, Eye, Star, Zap } from "lucide-react"
import Image from "next/image"

export default function ProductCardNeon({ product }) {
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
    <div className="group relative w-80 bg-gray-900 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 overflow-hidden border-2 border-gray-800 hover:border-cyan-500/50">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
          }}></div>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-800 rounded-t-2xl">
        <Image
          src={product.thumbnail || "/placeholder.svg"}
          alt={product.title}
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
          width={320}
          height={256}
        />

        {/* Neon Discount Badge */}
        {discountPercentage > 0 && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold border border-pink-400 shadow-lg shadow-pink-500/50">
            <Zap className="w-3 h-3 mr-1" />-{discountPercentage}%
          </Badge>
        )}

        {/* Stock Status */}
        {!product.stock && (
          <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center">
            <Badge className="bg-red-500 text-white font-bold border border-red-400 shadow-lg shadow-red-500/50">SOLD OUT</Badge>
          </div>
        )}

        {/* Neon Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            size="icon"
            className="w-10 h-10 rounded-lg bg-gray-800/80 hover:bg-gray-700 border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 shadow-lg shadow-cyan-500/25"
            onClick={handleWishlist}>
            <Heart className={`w-4 h-4 ${isWishlisted ? "fill-pink-500 text-pink-500" : ""}`} />
          </Button>
          <Button
            size="icon"
            className="w-10 h-10 rounded-lg bg-gray-800/80 hover:bg-gray-700 border border-purple-500/50 hover:border-purple-400 text-purple-400 hover:text-purple-300 shadow-lg shadow-purple-500/25"
            onClick={handleQuickView}>
            <Eye className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="relative p-6">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-cyan-400"></span>
          </div>
          <span className="text-sm text-gray-400">({product.reviews.length} reviews)</span>
        </div>

        {/* Product Name */}
        <h3 className="font-bold text-lg text-white mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">{product.title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{product.description}</p>

        {/* Features */}
        {/* <div className="flex flex-wrap gap-1 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} className="text-xs bg-gray-800 text-cyan-400 border border-cyan-500/30">
              {feature}
            </Badge>
          ))}
        </div> */}

        {/* Price */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl font-bold text-white">${product.price}</span>
          {product.originalPrice && <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>}
        </div>

        {/* Add to Cart Button */}
        <Button
          className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 border border-cyan-500/50 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          onClick={handleAddToCart}
          disabled={!product.stock}>
          <ShoppingCart className="w-4 h-4 mr-2" />
          {product.stock ? "ADD TO CART" : "SOLD OUT"}
        </Button>
      </div>
    </div>
  );
}
