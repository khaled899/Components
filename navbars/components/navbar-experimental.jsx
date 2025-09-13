"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, ShoppingCart, Heart, Sun, Moon, Monitor, Globe, Zap, Layers, Orbit, Hexagon } from "lucide-react"

export default function ExperimentalNavbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(6)
  const [wishlistCount, setWishlistCount] = useState(12)
  const [language, setLanguage] = useState("EN")
  const [activeSection, setActiveSection] = useState(0)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    // Auto-rotate active section
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Flux", href: "#", icon: Zap, color: "from-pink-500 to-violet-500" },
    { name: "Morph", href: "#", icon: Layers, color: "from-cyan-500 to-blue-500" },
    { name: "Orbit", href: "#", icon: Orbit, color: "from-green-500 to-teal-500" },
    { name: "Prism", href: "#", icon: Hexagon, color: "from-orange-500 to-red-500" },
  ]

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "JA", name: "日本語", flag: "🇯🇵" },
    { code: "KO", name: "한국어", flag: "🇰🇷" },
    { code: "ZH", name: "中文", flag: "🇨🇳" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-xl border-b border-white/10">
      {/* Dynamic background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center transform rotate-45 animate-spin-slow">
                <div className="w-6 h-6 bg-black rounded-lg transform -rotate-45"></div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-50 animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-black bg-gradient-to-r from-white via-pink-200 to-cyan-200 bg-clip-text text-transparent">
                NEXUS
              </span>
              <div className="text-xs text-gray-400 font-mono tracking-widest">v2.0.47</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => {
              const Icon = item.icon
              const isActive = activeSection === index
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-6 py-3 text-sm font-bold transition-all duration-500 rounded-2xl ${
                    isActive ? "text-white bg-gradient-to-r " + item.color : "text-gray-300 hover:text-white"
                  }`}
                  onMouseEnter={() => setActiveSection(index)}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl animate-pulse"></div>
                  )}
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
                  className="text-gray-300 hover:text-white hover:bg-white/10 rounded-xl border border-white/10"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="text-gray-300 hover:text-white hover:bg-white/10"
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
                  className="text-gray-300 hover:text-white hover:bg-white/10 rounded-xl border border-white/10"
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
              <DropdownMenuContent className="bg-black/90 border-white/10 backdrop-blur-xl">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  <Sun className="w-4 h-4 mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="text-gray-300 hover:text-white hover:bg-white/10"
                >
                  <Moon className="w-4 h-4 mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="text-gray-300 hover:text-white hover:bg-white/10"
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
              className="relative text-gray-300 hover:text-white hover:bg-white/10 rounded-xl border border-white/10"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-6 h-6 p-0 flex items-center justify-center bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs rounded-full animate-pulse">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-gray-300 hover:text-white hover:bg-white/10 rounded-xl border border-white/10"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-6 h-6 p-0 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs rounded-full animate-bounce">
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
                  className="md:hidden text-gray-300 hover:text-white hover:bg-white/10 rounded-xl border border-white/10"
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-black/95 border-white/10 backdrop-blur-xl">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-4 transform rotate-45">
                      <div className="w-8 h-8 bg-black rounded-xl transform -rotate-45"></div>
                    </div>
                    <h2 className="text-xl font-black bg-gradient-to-r from-white via-pink-200 to-cyan-200 bg-clip-text text-transparent">
                      NEXUS
                    </h2>
                    <p className="text-xs text-gray-400 font-mono">v2.0.47</p>
                  </div>
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 ${
                          activeSection === index
                            ? `text-white bg-gradient-to-r ${item.color}`
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-6 h-6" />
                        <span className="font-bold text-lg">{item.name}</span>
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
