"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Eye, Share2, ShoppingCart, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ProductCardBasic({ product }) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    if (!product.stock) return;
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.title} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  const handleQuickView = () => {
    toast({
      title: "Quick view",
      description: `Opening quick view for ${product.title}`,
    });
  };

  const handleShare = () => {
    toast({
      title: "Share product",
      description: "Product link copied to clipboard!",
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={cn("w-4 h-4", i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : i < rating ? "fill-yellow-400/50 text-yellow-400" : "text-gray-300")} />
    ));
  };

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 bg-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <img src={product.thumbnail || "/placeholder.svg"} alt={product.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

          {/* Discount Badge */}
          {product.discount && product.discount > 0 && <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white font-semibold">-{product.discount}%</Badge>}

          {/* Stock Status */}
          {!product.stock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Badge variant="secondary" className="text-sm font-semibold">
                Out of Stock
              </Badge>
            </div>
          )}

          {/* Quick Actions - Show on Hover */}
          <div className={cn("absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300", isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4")}>
            <Button size="icon" variant="secondary" className="w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md" onClick={handleWishlist}>
              <Heart className={cn("w-4 h-4", isWishlisted && "fill-red-500 text-red-500")} />
            </Button>
            <Button size="icon" variant="secondary" className="w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md" onClick={handleQuickView}>
              <Eye className="w-4 h-4" />
            </Button>
            <Button size="icon" variant="secondary" className="w-9 h-9 rounded-full bg-white/90 hover:bg-white shadow-md" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Add to Cart - Show on Hover */}
          <div className={cn("absolute bottom-3 left-3 right-3 transition-all duration-300", isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <Button onClick={handleAddToCart} disabled={!product.stock} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Brand & Category */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="font-medium">{product.brand}</span>
            <Badge variant="outline" className="text-xs">
              {product.category}
            </Badge>
          </div>

          {/* Product Name */}
          <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">{product.title}</h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviews.length})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">${product.price}</span>
            {product.originalPrice && <span className="text-lg text-muted-foreground line-through">${product.originalPrice}</span>}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button onClick={handleAddToCart} disabled={!product.stock} className="flex-1 font-semibold">
              <ShoppingCart className="w-4 h-4 mr-2" />
              {product.stock ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button variant="outline" size="icon" onClick={handleWishlist} className="shrink-0 bg-transparent">
              <Heart className={cn("w-4 h-4", isWishlisted && "fill-red-500 text-red-500")} />
            </Button>
          </div>

          {/* Fast Shipping Badge */}
          {product.stock && (
            <div className="flex items-center gap-1 text-sm text-green-600 bg-green-50 px-2 py-1 rounded-md">
              <Zap className="w-3 h-3" />
              <span className="font-medium">Fast Shipping Available</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
