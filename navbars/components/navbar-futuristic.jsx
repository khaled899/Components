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
  Zap,
  Shield,
  Database,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function NavbarFuturistic() {
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
    { name: "Control", href: "/", icon: Database },
    { name: "Systems", href: "/systems", icon: Shield },
    { name: "Network", href: "/network", icon: Zap },
    { name: "Config", href: "/config", icon: Monitor },
  ]

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-violet-900/20 to-slate-900 backdrop-blur-md border-b border-violet-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-violet-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              NEXUS
            </span>
            <span className="text-xs text-cyan-400 animate-pulse">System Online</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="relative group px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-violet-500/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-500"></div>
                </Button>
              )
            })}
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-cyan-400 hover:bg-violet-500/10 border border-violet-500/30"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language}
                <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-md border border-violet-500/30 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="w-full px-4 py-2 text-left text-slate-300 hover:text-cyan-400 hover:bg-violet-500/10 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Switcher */}
            <div className="flex bg-slate-800/50 rounded-lg p-1 border border-violet-500/30">
              <Button
                variant={theme === "light" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("light")}
                className={`p-2 ${theme === "light" ? "bg-violet-600 text-white" : "text-slate-400 hover:text-cyan-400"}`}
              >
                <Sun className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("dark")}
                className={`p-2 ${theme === "dark" ? "bg-violet-600 text-white" : "text-slate-400 hover:text-cyan-400"}`}
              >
                <Moon className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === "system" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("system")}
                className={`p-2 ${theme === "system" ? "bg-violet-600 text-white" : "text-slate-400 hover:text-cyan-400"}`}
              >
                <Monitor className="w-4 h-4" />
              </Button>
            </div>

            {/* Cart & Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-slate-300 hover:text-cyan-400 hover:bg-violet-500/10 border border-violet-500/30"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs min-w-[1.25rem] h-5">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="relative text-slate-300 hover:text-cyan-400 hover:bg-violet-500/10 border border-violet-500/30"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-violet-500 to-cyan-500 text-white text-xs min-w-[1.25rem] h-5">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-slate-300 hover:text-cyan-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-violet-500/20 bg-slate-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start text-slate-300 hover:text-cyan-400 hover:bg-violet-500/10"
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Button>
                )
              })}

              {/* Mobile Theme Switcher */}
              <div className="pt-4 border-t border-violet-500/20">
                <p className="text-sm text-slate-400 mb-2">Interface Mode</p>
                <div className="flex space-x-2">
                  <Button
                    variant={theme === "light" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("light")}
                    className={`flex-1 ${theme === "light" ? "bg-violet-600" : "text-slate-400"}`}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Light
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("dark")}
                    className={`flex-1 ${theme === "dark" ? "bg-violet-600" : "text-slate-400"}`}
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("system")}
                    className={`flex-1 ${theme === "system" ? "bg-violet-600" : "text-slate-400"}`}
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
