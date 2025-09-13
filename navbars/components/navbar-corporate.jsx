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
  Building,
  Users,
  Settings,
  Phone,
} from "lucide-react"
import { useTheme } from "next-themes"

export default function NavbarCorporate() {
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
    { name: "Home", href: "/", icon: Building },
    { name: "Solutions", href: "/solutions", icon: Settings },
    { name: "Services", href: "/services", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  if (!mounted) return null

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-semibold text-gray-900">Enterprise Solutions</span>
              <span className="text-xs text-gray-500">Trusted Since 1995</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  className="relative group px-4 py-2 text-gray-700 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-700 group-hover:w-full transition-all duration-300"></div>
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
                className="text-gray-700 hover:text-green-700 hover:bg-green-50 border border-gray-300"
              >
                <Globe className="w-4 h-4 mr-2" />
                {language}
                <ChevronDown className="w-3 h-3 ml-2" />
              </Button>
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="w-full px-4 py-2 text-left text-gray-700 hover:text-green-700 hover:bg-green-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                  >
                    <span className="mr-3">{lang.flag}</span>
                    {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Theme Switcher */}
            <div className="flex bg-gray-100 rounded-lg p-1 border border-gray-300">
              <Button
                variant={theme === "light" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("light")}
                className={`p-2 ${theme === "light" ? "bg-green-700 text-white" : "text-gray-600 hover:text-green-700"}`}
              >
                <Sun className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("dark")}
                className={`p-2 ${theme === "dark" ? "bg-green-700 text-white" : "text-gray-600 hover:text-green-700"}`}
              >
                <Moon className="w-4 h-4" />
              </Button>
              <Button
                variant={theme === "system" ? "default" : "ghost"}
                size="sm"
                onClick={() => setTheme("system")}
                className={`p-2 ${theme === "system" ? "bg-green-700 text-white" : "text-gray-600 hover:text-green-700"}`}
              >
                <Monitor className="w-4 h-4" />
              </Button>
            </div>

            {/* Cart & Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="relative text-gray-700 hover:text-green-700 hover:bg-green-50 border border-gray-300"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-700 text-white text-xs min-w-[1.25rem] h-5">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="relative text-gray-700 hover:text-green-700 hover:bg-green-50 border border-gray-300"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-green-700 text-white text-xs min-w-[1.25rem] h-5">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* CTA Button */}
            <Button className="bg-green-700 hover:bg-green-800 text-white px-6 py-2 hidden lg:flex">
              Request Demo
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 hover:text-green-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-green-700 hover:bg-green-50"
                  >
                    <Icon className="w-4 h-4 mr-3" />
                    {item.name}
                  </Button>
                )
              })}

              {/* Mobile CTA */}
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white mt-4">Request Demo</Button>

              {/* Mobile Theme Switcher */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">Display Mode</p>
                <div className="flex space-x-2">
                  <Button
                    variant={theme === "light" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("light")}
                    className={`flex-1 ${theme === "light" ? "bg-green-700" : "text-gray-600"}`}
                  >
                    <Sun className="w-4 h-4 mr-2" />
                    Light
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("dark")}
                    className={`flex-1 ${theme === "dark" ? "bg-green-700" : "text-gray-600"}`}
                  >
                    <Moon className="w-4 h-4 mr-2" />
                    Dark
                  </Button>
                  <Button
                    variant={theme === "system" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setTheme("system")}
                    className={`flex-1 ${theme === "system" ? "bg-green-700" : "text-gray-600"}`}
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
