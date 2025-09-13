"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Monitor,
  Moon,
  Sun,
  Globe,
  ChevronDown,
  Coffee,
  Camera,
  DiscAlbumIcon as Vinyl,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function NavbarRetro() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [language, setLanguage] = useState("EN")
  const [cartCount, setCartCount] = useState(3)
  const [wishlistCount, setWishlistCount] = useState(7)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const languages = [
    { code: "EN", flag: "🇺🇸", name: "English" },
    { code: "ES", flag: "🇪🇸", name: "Español" },
    { code: "FR", flag: "🇫🇷", name: "Français" },
    { code: "DE", flag: "🇩🇪", name: "Deutsch" },
  ]

  const navItems = [
    { name: "Home Sweet Home", href: "/", icon: Coffee },
    { name: "Our Story", href: "/about", icon: Camera },
    { name: "The Collection", href: "/products", icon: Vinyl },
    { name: "Say Hello", href: "/contact", icon: Heart },
  ]

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-rose-50 to-amber-50 border-b-4 border-rose-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-600 to-amber-500 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
              <Vinyl className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-rose-800 font-serif tracking-wide">Vintage Co.</span>
              <span className="text-xs text-amber-600 italic font-serif">Since 1985</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="relative group px-6 py-3 text-rose-800 hover:text-rose-600 font-serif text-lg hover:bg-rose-100/50 rounded-full transition-all duration-300 hover:shadow-md hover:transform hover:scale-105"
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {item.name}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-amber-400 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
                </Button>
              )
            })}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-rose-800 hover:text-rose-600 hover:bg-rose-100/50 border-2 border-rose-300 rounded-full font-serif shadow-sm"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language}
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-rose-50 border-2 border-rose-300 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="w-full px-4 py-3 text-left text-rose-800 hover:text-rose-600 hover:bg-rose-100/50 first:rounded-t-xl last:rounded-b-xl transition-colors font-serif"
                  >
                    <span className="mr-3">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Switcher */}
            <div className="flex bg-rose-100 rounded-full p-1 border-2 border-rose-300 shadow-sm">
              <Button
                variant={theme === "light" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full ${theme === "light" ? "bg-rose-600 text-white shadow-md" : "text-rose-600 hover:text-rose-800"}`}
              >
                <Sun className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full ${theme === "dark" ? "bg-rose-600 text-white shadow-md" : "text-rose-600 hover:text-rose-800"}`}
              >
                <Moon className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === "system" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("system")}
                className={`p-2 rounded-full ${theme === "system" ? "bg-rose-600 text-white shadow-md" : "text-rose-600 hover:text-rose-800"}`}
              >
                <Monitor className="w-4 h-4" />
              </Button>
            </div>

            {/* Cart & Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-rose-800 hover:text-rose-600 hover:bg-rose-100/50 border-2 border-rose-300 rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs min-w-[1.25rem] h-5 rounded-full shadow-md">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="relative text-rose-800 hover:text-rose-600 hover:bg-rose-100/50 border-2 border-rose-300 rounded-full shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-rose-500 to-amber-500 text-white text-xs min-w-[1.25rem] h-5 rounded-full shadow-md">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-rose-800 hover:text-rose-600 border-2 border-rose-300 rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t-2 border-rose-300 bg-gradient-to-r from-rose-50 to-amber-50">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start text-rose-800 hover:text-rose-600 hover:bg-rose-100/50 font-serif text-lg py-3 rounded-full"
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Button>
                )
              })}

              {/* Mobile Theme Switcher */}
              <div className="pt-4 border-t-2 border-rose-300">
                <p className="text-sm text-rose-600 mb-3 font-serif italic">Choose Your Vibe</p>
                <div className="flex space-x-2">
                  <Button
                    variant={theme === "light" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("light")}
                    className={`flex-1 font-serif rounded-full ${theme === "light" ? "bg-rose-600 shadow-md" : "text-rose-600 border-rose-300"}`}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Sunny
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("dark")}
                    className={`flex-1 font-serif rounded-full ${theme === "dark" ? "bg-rose-600 shadow-md" : "text-rose-600 border-rose-300"}`}
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    Moody
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("system")}
                    className={`flex-1 font-serif rounded-full ${theme === "system" ? "bg-rose-600 shadow-md" : "text-rose-600 border-rose-300"}`}
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    Auto
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
