"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import {
  ShoppingCart,
  Sun,
  Moon,
  ChevronDown,
  Globe,
  Menu,
  Heart,
  X,
  Plus,
  Minus,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Home,
  Building,
  Users,
  HelpCircle,
  FileText,
  Calendar,
  Archive,
  Tag,
} from "lucide-react"
import { useTheme } from "next-themes"
import { useState } from "react"

export function Header() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)

  const cartItems = [
    { id: 1, name: "Wireless Headphones", price: 99.99, quantity: 1, image: "/wireless-headphones.png" },
    { id: 2, name: "Smart Watch", price: 199.99, quantity: 2, image: "/smartwatch-lifestyle.png" },
  ]

  const wishlistItems = [
    { id: 1, name: "Gaming Laptop", price: 1299.99, image: "/gaming-laptop.png" },
    { id: 2, name: "Bluetooth Speaker", price: 79.99, image: "/bluetooth-speaker.png" },
    { id: 3, name: "Smartphone", price: 699.99, image: "/modern-smartphone.png" },
  ]

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="w-full border-b bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">dp</span>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">dpmarket</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Home
            </a>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                <DropdownMenuLabel>Browse Products</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Tag className="w-4 h-4" />
                  <span>All Products</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Featured Items</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Categories</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Electronics</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Laptop className="w-4 h-4" />
                  <span>Computers</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Headphones className="w-4 h-4" />
                  <span>Audio & Video</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Watch className="w-4 h-4" />
                  <span>Wearables</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Camera className="w-4 h-4" />
                  <span>Photography</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Gamepad2 className="w-4 h-4" />
                  <span>Gaming</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span>Pages</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Company</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Building className="w-4 h-4" />
                  <span>About Us</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Our Team</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Home className="w-4 h-4" />
                  <span>Careers</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Support</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>Help Center</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>FAQ</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Customer Service</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span>Blog</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-52">
                <DropdownMenuLabel>Recent</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Latest Posts</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>This Week</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Browse</DropdownMenuLabel>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Tag className="w-4 h-4" />
                  <span>Categories</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Archive className="w-4 h-4" />
                  <span>Archive</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Authors</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <Sheet open={isWishlistOpen} onOpenChange={setIsWishlistOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="w-5 h-5" />
                  {wishlistItems.length > 0 && (
                    <Badge
                      variant="secondary"
                      className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs bg-red-500 text-white hover:bg-red-600"
                    >
                      {wishlistItems.length}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] xs:w-[360px] sm:w-[400px] md:w-[450px] p-0">
                <SheetHeader className="px-4 py-6 border-b">
                  <SheetTitle className="text-left">Wishlist ({wishlistItems.length})</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  {wishlistItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                      <Heart className="w-12 h-12 text-gray-300 mb-4" />
                      <p className="text-gray-500 dark:text-gray-400">Your wishlist is empty</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                        Add items you love to save them for later
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {wishlistItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        >
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm text-gray-900 dark:text-white truncate">{item.name}</h4>
                            <p className="text-lg font-semibold text-gray-900 dark:text-white mt-1">${item.price}</p>
                          </div>
                          <div className="flex flex-col space-y-2">
                            <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3">
                              Add to Cart
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 p-1"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>

            <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  <Badge
                    variant="secondary"
                    className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center p-0 text-xs bg-blue-500 text-white hover:bg-blue-600"
                  >
                    {cartItemCount}
                  </Badge>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] xs:w-[360px] sm:w-[400px] md:w-[450px] p-0 flex flex-col">
                <SheetHeader className="px-4 py-6 border-b">
                  <SheetTitle className="text-left">Shopping Cart ({cartItemCount})</SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto px-4 py-4">
                  {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64 text-center">
                      <ShoppingCart className="w-12 h-12 text-gray-300 mb-4" />
                      <p className="text-gray-500 dark:text-gray-400">Your cart is empty</p>
                      <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">Add some products to get started</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3 p-3 border rounded-lg">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm text-gray-900 dark:text-white truncate">{item.name}</h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">${item.price}</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-transparent">
                                <Minus className="w-3 h-3" />
                              </Button>
                              <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                              <Button variant="outline" size="sm" className="w-8 h-8 p-0 bg-transparent">
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-gray-900 dark:text-white">
                              ${(item.price * item.quantity).toFixed(2)}
                            </p>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 mt-1 p-1"
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                {cartItems.length > 0 && (
                  <div className="border-t px-4 py-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-xl font-bold text-blue-600">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="space-y-2">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">Checkout</Button>
                      <Button variant="outline" className="w-full bg-transparent">
                        View Cart
                      </Button>
                    </div>
                  </div>
                )}
              </SheetContent>
            </Sheet>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            <Button className="hidden md:flex bg-blue-500 hover:bg-blue-600 text-white px-4 lg:px-6">
              <span className="hidden lg:inline">Create Account</span>
              <span className="lg:hidden">Sign Up</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden lg:flex items-center space-x-1">
                  <Globe className="w-4 h-4" />
                  <span>Eng</span>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Español</DropdownMenuItem>
                <DropdownMenuItem>Français</DropdownMenuItem>
                <DropdownMenuItem>Deutsch</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[280px] xs:w-[320px] sm:w-[380px] md:w-[400px] p-0 overflow-y-auto"
              >
                <div className="px-4 py-6 sm:px-6">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs sm:text-sm font-bold">dp</span>
                      </div>
                      <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">dpmarket</span>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-1">
                    <a
                      href="#"
                      className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors py-3 px-2 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </a>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-2 flex items-center space-x-2">
                        <Tag className="w-4 h-4" />
                        <span>Products</span>
                      </h3>
                      <div className="pl-4 space-y-1">
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <FileText className="w-4 h-4" />
                          <span>All Products</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Smartphone className="w-4 h-4" />
                          <span>Electronics</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Laptop className="w-4 h-4" />
                          <span>Computers</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Gamepad2 className="w-4 h-4" />
                          <span>Gaming</span>
                        </a>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-2 flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span>Pages</span>
                      </h3>
                      <div className="pl-4 space-y-1">
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Building className="w-4 h-4" />
                          <span>About Us</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Users className="w-4 h-4" />
                          <span>Our Team</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <HelpCircle className="w-4 h-4" />
                          <span>FAQ</span>
                        </a>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 py-3 px-2 flex items-center space-x-2">
                        <FileText className="w-4 h-4" />
                        <span>Blog</span>
                      </h3>
                      <div className="pl-4 space-y-1">
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Calendar className="w-4 h-4" />
                          <span>Latest Posts</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Tag className="w-4 h-4" />
                          <span>Categories</span>
                        </a>
                        <a
                          href="#"
                          className="flex items-center space-x-2 text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 py-2 px-2 rounded-md transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Archive className="w-4 h-4" />
                          <span>Archive</span>
                        </a>
                      </div>
                    </div>

                    <a
                      href="#"
                      className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors py-3 px-2 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </a>

                    <div className="pt-6 mt-6 border-t space-y-3">
                      <Button
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white h-11 text-base font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Create Account
                      </Button>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full flex items-center justify-center space-x-2 bg-transparent h-11 text-base"
                          >
                            <Globe className="w-4 h-4" />
                            <span>English</span>
                            <ChevronDown className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="center" className="w-48">
                          <DropdownMenuItem>English</DropdownMenuItem>
                          <DropdownMenuItem>Español</DropdownMenuItem>
                          <DropdownMenuItem>Français</DropdownMenuItem>
                          <DropdownMenuItem>Deutsch</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
