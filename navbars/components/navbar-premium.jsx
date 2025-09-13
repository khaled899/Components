"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, Globe, ShoppingCart, Heart, Crown } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]

export function NavbarPremium() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [cartCount, setCartCount] = useState(3)
  const [wishlistCount, setWishlistCount] = useState(5)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useState(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "Collections", href: "/" },
    { name: "Atelier", href: "/atelier" },
    { name: "Heritage", href: "/heritage" },
    { name: "Concierge", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 text-white shadow-2xl">
      <div className="container mx-auto px-6">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 flex items-center justify-center mr-4 shadow-lg ring-2 ring-amber-400/20">
              <Crown className="h-6 w-6 text-slate-900" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-white">LUXE</span>
              <span className="text-xs text-amber-400 font-medium tracking-widest">PREMIUM</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-500 relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 group-hover:w-full transition-all duration-500"></span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-300 hover:text-white hover:bg-white/5 h-11 px-4 border border-gray-700 rounded-lg"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">{selectedLanguage.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-slate-800 border-gray-700 text-white">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang)}
                    className="text-sm font-medium hover:bg-gray-700"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Switcher */}
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-white/5 h-11 w-11 p-0 border border-gray-700 rounded-lg"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-white/5 h-11 w-11 p-0 relative border border-gray-700 rounded-lg"
            >
              <Heart className="h-4 w-4" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 hover:from-amber-500 hover:to-yellow-600 border-0 shadow-lg font-bold">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-300 hover:text-white hover:bg-white/5 h-11 w-11 p-0 relative border border-gray-700 rounded-lg"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900 hover:from-amber-500 hover:to-yellow-600 border-0 shadow-lg font-bold">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="md:hidden text-gray-300 hover:text-white hover:bg-white/5 h-11 w-11 p-0 border border-gray-700 rounded-lg"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] bg-slate-900 text-white border-gray-700">
                <div className="flex flex-col space-y-8 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-gray-300 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5 border-l-2 border-transparent hover:border-amber-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
