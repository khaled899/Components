"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, ShoppingCart, Heart, Sun, Moon, Monitor, Globe, Crown, Sparkles, Calendar, BookOpen } from "lucide-react"

export default function LuxuryNavbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(2)
  const [wishlistCount, setWishlistCount] = useState(5)
  const [language, setLanguage] = useState("EN")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "Collections", href: "#", icon: Crown },
    { name: "Atelier", href: "#", icon: Sparkles },
    { name: "Stories", href: "#", icon: BookOpen },
    { name: "Appointments", href: "#", icon: Calendar },
  ]

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "IT", name: "Italiano", flag: "🇮🇹" },
    { code: "JP", name: "日本語", flag: "🇯🇵" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-purple-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Navigation */}
        <div className="flex flex-col items-center py-6">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-800 to-purple-600 rounded-full flex items-center justify-center">
              <Crown className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-purple-800 tracking-wide">MAISON ÉLÉGANCE</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm font-light text-gray-700 hover:text-purple-800 transition-all duration-500 tracking-wide uppercase"
              >
                {item.name}
                <div className="absolute -bottom-1 left-1/2 w-0 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent group-hover:w-full group-hover:left-0 transition-all duration-500"></div>
              </a>
            ))}
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex items-center justify-between py-3 border-t border-purple-100">
          <div className="text-xs text-gray-500 font-light tracking-wider">BY INVITATION ONLY</div>

          <div className="flex items-center space-x-6">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-purple-800 text-xs font-light tracking-wider"
                >
                  <Globe className="w-3 h-3 mr-1" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-purple-100">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="text-gray-600 hover:text-purple-800 text-xs"
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
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-purple-800">
                  {theme === "light" ? (
                    <Sun className="w-3 h-3" />
                  ) : theme === "dark" ? (
                    <Moon className="w-3 h-3" />
                  ) : (
                    <Monitor className="w-3 h-3" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border-purple-100">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="text-gray-600 hover:text-purple-800 text-xs"
                >
                  <Sun className="w-3 h-3 mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="text-gray-600 hover:text-purple-800 text-xs"
                >
                  <Moon className="w-3 h-3 mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="text-gray-600 hover:text-purple-800 text-xs"
                >
                  <Monitor className="w-3 h-3 mr-2" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative text-gray-600 hover:text-purple-800">
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-yellow-500 text-white text-xs">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative text-gray-600 hover:text-purple-800">
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center bg-yellow-500 text-white text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden text-gray-600 hover:text-purple-800">
                  <Menu className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-white border-purple-100">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-center">
                    <h2 className="text-lg font-serif text-purple-800 mb-2">MAISON ÉLÉGANCE</h2>
                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto"></div>
                  </div>
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-purple-800 hover:bg-purple-50 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-light tracking-wide uppercase text-sm">{item.name}</span>
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
