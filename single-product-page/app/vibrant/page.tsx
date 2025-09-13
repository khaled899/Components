import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Zap, Gift, Sparkles } from "lucide-react"

export default function VibrantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-serif text-2xl font-bold text-white drop-shadow-md">ellamart+</div>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                  Shop
                </a>
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                  New In
                </a>
                <a href="#" className="text-white/90 hover:text-white transition-colors font-medium">
                  Collections
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <ShoppingCart className="h-4 w-4" />
                <span className="ml-1 text-xs bg-white text-orange-600 rounded-full px-2 py-0.5 font-bold">0</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Promotional Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl p-6 mb-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold">SPECIAL OFFER</span>
            <Sparkles className="h-5 w-5" />
          </div>
          <p className="text-lg">Get 20% off your first purchase! Use code: WELCOME20</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-yellow-50">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl overflow-hidden relative">
                  <img
                    src="/placeholder-pzppp.png"
                    alt="Vibrant Juice Extractor"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 text-white animate-pulse">
                      <Zap className="h-3 w-3 mr-1" />
                      Hot Deal!
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Card
                  key={i}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-yellow-400"
                >
                  <CardContent className="p-2">
                    <div className="aspect-square bg-gradient-to-br from-orange-100 to-pink-100 rounded-lg overflow-hidden">
                      <img
                        src={`/vibrant-juice-extractor-angle.png?height=150&width=150&query=vibrant juice extractor angle ${i}`}
                        alt={`Product view ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-yellow-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white">
                    <Gift className="h-3 w-3 mr-1" />
                    Premium Kitchen
                  </Badge>
                  <Badge variant="outline" className="border-pink-300 text-pink-600">
                    Bestseller
                  </Badge>
                </div>

                <h1 className="font-serif text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  Rainbow Juice Extractor Deluxe
                </h1>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-gray-700">(247 reviews)</span>
                  <Badge className="bg-red-100 text-red-600 animate-bounce">🔥 15 sold today!</Badge>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Transform your kitchen into a vibrant wellness center! This premium juice extractor combines
                  cutting-edge technology with eye-catching design to deliver the perfect blend every time.
                </p>

                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
                  $89.00
                  <span className="text-lg text-gray-500 line-through ml-2">$119.00</span>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Options */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-pink-50">
              <CardContent className="p-6 space-y-6">
                <div>
                  <label className="text-sm font-bold text-gray-800 mb-3 block">Choose Your Style</label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Compact", "Standard", "Pro"].map((size) => (
                      <button
                        key={size}
                        className={`p-3 border-2 rounded-xl text-sm font-bold transition-all hover:scale-105 ${
                          size === "Standard"
                            ? "border-yellow-400 bg-yellow-50 text-yellow-700 shadow-lg"
                            : "border-gray-200 hover:border-yellow-300 hover:bg-yellow-50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-800 mb-3 block">Pick Your Vibe</label>
                  <div className="flex space-x-3">
                    {[
                      { name: "Sunset", color: "bg-gradient-to-r from-yellow-400 to-orange-500" },
                      { name: "Ocean", color: "bg-gradient-to-r from-blue-400 to-cyan-500" },
                      { name: "Forest", color: "bg-gradient-to-r from-green-400 to-emerald-500" },
                      { name: "Berry", color: "bg-gradient-to-r from-purple-400 to-pink-500" },
                    ].map((option) => (
                      <button
                        key={option.name}
                        className={`w-12 h-12 rounded-full ${option.color} ${
                          option.name === "Sunset" ? "ring-4 ring-yellow-300 scale-110" : ""
                        } hover:scale-125 transition-all shadow-lg`}
                        title={option.name}
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-gray-800 mb-3 block">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl font-bold text-lg min-w-[80px] text-center">
                      1
                    </span>
                    <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 hover:from-yellow-500 hover:via-orange-500 hover:to-pink-500 text-white py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                🛒 Add To Cart - Get 20% Off!
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  Love It
                </Button>
                <Button className="bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500 text-white">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Joy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
