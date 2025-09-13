"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, ShoppingCart, Heart, Sun, Moon, Monitor, Globe, Zap, Trophy, Users, Gamepad2 } from "lucide-react"

export default function GamingNavbar() {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [cartCount, setCartCount] = useState(3)
  const [wishlistCount, setWishlistCount] = useState(7)
  const [language, setLanguage] = useState("EN")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const navItems = [
    { name: "ARENA", href: "#", icon: Trophy },
    { name: "CLANS", href: "#", icon: Users },
    { name: "MATCHES", href: "#", icon: Zap },
    { name: "SHOP", href: "#", icon: Gamepad2 },
  ]

  const languages = [
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "DE", name: "Deutsch", flag: "🇩🇪" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-md border-b border-violet-500/20">
      {/* Animated circuit background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-violet-600/20 via-transparent to-cyan-400/20"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              NEXUS
            </span>
            <Badge className="bg-red-500/20 text-red-400 border-red-500/30 animate-pulse">LIVE</Badge>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group relative flex items-center space-x-2 px-4 py-2 text-sm font-bold text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Icon className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </a>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20">
                  <Globe className="w-4 h-4 mr-1" />
                  {language}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-violet-500/20">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20"
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
                <Button variant="ghost" size="sm" className="text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20">
                  {theme === "light" ? (
                    <Sun className="w-4 h-4" />
                  ) : theme === "dark" ? (
                    <Moon className="w-4 h-4" />
                  ) : (
                    <Monitor className="w-4 h-4" />
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-violet-500/20">
                <DropdownMenuItem
                  onClick={() => setTheme("light")}
                  className="text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20"
                >
                  <Sun className="w-4 h-4 mr-2" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("dark")}
                  className="text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20"
                >
                  <Moon className="w-4 h-4 mr-2" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setTheme("system")}
                  className="text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20"
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
              className="relative text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-gradient-to-r from-violet-500 to-cyan-400 text-white text-xs">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20"
            >
              <ShoppingCart className="w-4 h-4" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center bg-gradient-to-r from-violet-500 to-cyan-400 text-white text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden text-gray-300 hover:text-cyan-400">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-slate-900 border-violet-500/20">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-violet-600/20 rounded-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-bold">{item.name}</span>
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
