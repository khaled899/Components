import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, Share2, ShoppingCart, Minus, Plus, Leaf, Recycle, Award } from "lucide-react"

export default function EarthyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-emerald-600 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="font-serif text-2xl font-bold text-green-50 flex items-center space-x-2">
              <Leaf className="h-6 w-6" />
              <span>ellamart+</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <a href="#" className="text-green-100 hover:text-white transition-colors font-medium">
                  Eco Shop
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors font-medium">
                  Sustainable
                </a>
                <a href="#" className="text-green-100 hover:text-white transition-colors font-medium">
                  Natural
                </a>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-green-100 hover:bg-green-600">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-green-100 hover:bg-green-600">
                <ShoppingCart className="h-4 w-4" />
                <span className="ml-1 text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5 font-bold">0</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Eco Banner */}
        <Card className="mb-8 border-0 shadow-lg bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Recycle className="h-5 w-5" />
              <span className="font-bold">ECO-FRIENDLY PROMISE</span>
              <Recycle className="h-5 w-5" />
            </div>
            <p className="text-lg">Every purchase plants a tree 🌱 Carbon-neutral shipping included</p>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Product Images */}
          <div className="space-y-4">
            <Card className="overflow-hidden shadow-xl border-0 bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl overflow-hidden relative">
                  <img
                    src="/placeholder-w1vy1.png"
                    alt="Eco-Friendly Juice Extractor"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-600 text-white">
                      <Leaf className="h-3 w-3 mr-1" />
                      100% Natural
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge className="bg-amber-600 text-white">
                      <Award className="h-3 w-3 mr-1" />
                      Eco Award
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <Card
                  key={i}
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1 border-2 hover:border-green-400"
                >
                  <CardContent className="p-2">
                    <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg overflow-hidden">
                      <img
                        src={`/bamboo-juice-extractor-detail.png?height=150&width=150&query=natural bamboo juice extractor detail ${i}`}
                        alt={`Natural view ${i}`}
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
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-green-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Badge className="bg-green-600 text-white">
                    <Leaf className="h-3 w-3 mr-1" />
                    Sustainable Living
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-700 border border-amber-200">Certified Organic</Badge>
                </div>

                <h1 className="font-serif text-3xl font-bold text-green-800 mb-3">Bamboo Wellness Juice Extractor</h1>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-green-400 text-green-400" />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-green-700">(89 eco-reviews)</span>
                  <Badge className="bg-green-100 text-green-700">🌱 Sustainably made</Badge>
                </div>

                <p className="text-green-800 leading-relaxed mb-6">
                  Crafted from renewable bamboo and recycled materials, this juice extractor brings harmony to your
                  kitchen while caring for our planet. Every sip supports sustainable living.
                </p>

                <div className="text-4xl font-bold text-green-700 mb-2">$95.00</div>
                <p className="text-sm text-green-600 mb-6">🌍 Includes carbon offset & tree planting</p>
              </CardContent>
            </Card>

            {/* Natural Options */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-emerald-50">
              <CardContent className="p-6 space-y-6">
                <div>
                  <label className="text-sm font-bold text-green-800 mb-3 block flex items-center">
                    <Leaf className="h-4 w-4 mr-2" />
                    Natural Size Options
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {["Compact", "Family", "Community"].map((size) => (
                      <button
                        key={size}
                        className={`p-3 border-2 rounded-xl text-sm font-bold transition-all hover:scale-105 ${
                          size === "Family"
                            ? "border-green-500 bg-green-50 text-green-700 shadow-lg"
                            : "border-green-200 hover:border-green-400 hover:bg-green-50"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-green-800 mb-3 block flex items-center">
                    <Recycle className="h-4 w-4 mr-2" />
                    Sustainable Materials
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { name: "Bamboo", color: "bg-amber-200 border-amber-300", selected: true },
                      { name: "Cork", color: "bg-orange-200 border-orange-300", selected: false },
                      { name: "Recycled Steel", color: "bg-gray-200 border-gray-300", selected: false },
                      { name: "Bio-Plastic", color: "bg-green-200 border-green-300", selected: false },
                    ].map((option) => (
                      <button
                        key={option.name}
                        className={`p-3 border-2 rounded-xl text-sm font-bold transition-all hover:scale-105 ${
                          option.selected
                            ? `${option.color} shadow-lg ring-2 ring-green-400`
                            : `${option.color} hover:shadow-md`
                        }`}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-bold text-green-800 mb-3 block">Quantity</label>
                  <div className="flex items-center space-x-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="px-6 py-3 bg-green-100 border-2 border-green-200 rounded-xl font-bold text-lg min-w-[80px] text-center text-green-800">
                      1
                    </span>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eco Action Buttons */}
            <div className="space-y-3">
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 text-lg font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                🌱 Add To Cart & Plant A Tree
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Heart className="h-4 w-4 mr-2" />
                  Save Planet
                </Button>
                <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Green
                </Button>
              </div>
            </div>

            {/* Eco Features */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-lg font-bold text-green-800 mb-4">🌍 Our Eco Promise</h3>
                <div className="space-y-3 text-sm text-green-700">
                  <div className="flex items-center space-x-3">
                    <Leaf className="h-4 w-4 text-green-600" />
                    <span>Made from 100% renewable bamboo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Recycle className="h-4 w-4 text-green-600" />
                    <span>Fully recyclable packaging</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-4 w-4 text-green-600" />
                    <span>Carbon-neutral shipping worldwide</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
