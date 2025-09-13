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
  Palette,
  Sparkles,
  Brush,
  Camera,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function NavbarCreative() {
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
    { name: "Canvas", href: "/", icon: Palette },
    { name: "Gallery", href: "/gallery", icon: Camera },
    { name: "Studio", href: "/studio", icon: Brush },
    { name: "Magic", href: "/magic", icon: Sparkles },
  ]

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <Palette className="w-6 h-6 text-purple-600" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white drop-shadow-lg">Artisan</span>
              <span className="text-xs text-purple-100 italic">Create • Inspire • Transform</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const colors = [
                "hover:bg-purple-500/20",
                "hover:bg-pink-500/20",
                "hover:bg-orange-500/20",
                "hover:bg-yellow-500/20",
              ]
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className={`relative group px-6 py-3 text-white hover:text-white ${colors[index]} rounded-2xl transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {item.name}
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
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
                className="text-white hover:text-white hover:bg-white/20 border border-white/30 rounded-xl backdrop-blur-sm"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language}
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white/95 backdrop-blur-md border border-white/30 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="w-full px-4 py-3 text-left text-gray-800 hover:text-purple-600 hover:bg-purple-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                  >
                    <span className="mr-3">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Switcher */}
            <div className="flex bg-white/20 backdrop-blur-sm rounded-xl p-1 border border-white/30">
              <Button
                variant={theme === "light" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("light")}
                className={`p-2 rounded-lg ${theme === "light" ? "bg-white text-purple-600 shadow-md" : "text-white hover:text-white hover:bg-white/20"}`}
              >
                <Sun className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-lg ${theme === "dark" ? "bg-white text-purple-600 shadow-md" : "text-white hover:text-white hover:bg-white/20"}`}
              >
                <Moon className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === "system" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("system")}
                className={`p-2 rounded-lg ${theme === "system" ? "bg-white text-purple-600 shadow-md" : "text-white hover:text-white hover:bg-white/20"}`}
              >
                <Monitor className="w-4 h-4" />
              </Button>
            </div>

            {/* Cart & Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-white hover:text-white hover:bg-white/20 border border-white/30 rounded-xl backdrop-blur-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs min-w-[1.25rem] h-5 rounded-full shadow-lg animate-bounce">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="relative text-white hover:text-white hover:bg-white/20 border border-white/30 rounded-xl backdrop-blur-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs min-w-[1.25rem] h-5 rounded-full shadow-lg animate-bounce">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-white hover:text-white hover:bg-white/20 rounded-xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/30 bg-gradient-to-r from-purple-600/95 via-pink-500/95 to-orange-400/95 backdrop-blur-md">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => {
                const Icon = item.icon
                const colors = [
                  "hover:bg-purple-500/30",
                  "hover:bg-pink-500/30",
                  "hover:bg-orange-500/30",
                  "hover:bg-yellow-500/30",
                ]
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className={`w-full justify-start text-white hover:text-white ${colors[index]} py-3 rounded-xl`}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    {item.name}
                  </Button>
                )
              })}

              {/* Mobile Theme Switcher */}
              <div className="pt-4 border-t border-white/30">
                <p className="text-sm text-purple-100 mb-3 italic">Choose Your Mood</p>
                <div className="flex space-x-2">
                  <Button
                    variant={theme === "light" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("light")}
                    className={`flex-1 rounded-xl ${theme === "light" ? "bg-white text-purple-600 shadow-md" : "text-white border-white/30"}`}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Bright
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("dark")}
                    className={`flex-1 rounded-xl ${theme === "dark" ? "bg-white text-purple-600 shadow-md" : "text-white border-white/30"}`}
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("system")}
                    className={`flex-1 rounded-xl ${theme === "system" ? "bg-white text-purple-600 shadow-md" : "text-white border-white/30"}`}
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
