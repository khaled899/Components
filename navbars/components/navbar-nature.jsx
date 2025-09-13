"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, ShoppingCart, Heart, Sun, Moon, Monitor, Globe, Leaf, Mountain, Waves, TreePine } from "lucide-react"

export default function NatureNavbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(4)
  const [wishlistCount, setWishlistCount] = useState(8)
  const [language, setLanguage] = useState("EN")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Explore", href: "#", icon: Mountain },
    { name: "Sustain", href: "#", icon: Leaf },
    { name: "Connect", href: "#", icon: Waves },
    { name: "Grow", href: "#", icon: TreePine },
  ]

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "PT", name: "Português", flag: "🇧🇷" },
    { code: "NO", name: "Norsk", flag: "🇳🇴" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-green-100">
      {/* Organic texture overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-800">EarthWise</span>
              <div className="text-xs text-green-600 font-medium">Living Naturally</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-green-700 transition-all duration-300 rounded-full hover:bg-green-50"
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 rounded-full"></div>
                </a>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-green-100 rounded-xl">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full"
                >
                  {theme === "light" ? (
                    <Sun className="w-4 h-4" />
                  ) : theme === "dark" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Monitor className="w-4 h-4" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-green-100 rounded-xl">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg"
                >
                  <Sun className="w-4 h-4 mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg"
                >
                  <Moon className="w-4 h-4 mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-lg"
                >
                  <Monitor className="w-4 h-4 mr-2" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs rounded-full">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs rounded-full">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-gray-600 hover:text-green-700 hover:bg-green-50 rounded-full"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white border-green-100">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-800">EarthWise</h2>
                    <p className="text-sm text-green-600">Living Naturally</p>
                  </div>
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-green-700 hover:bg-green-50 rounded-xl transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </a>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
