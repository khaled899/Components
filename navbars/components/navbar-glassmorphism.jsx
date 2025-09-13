"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, Globe, ShoppingCart, Heart } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
]

export function NavbarGlassmorphism() {
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
    { name: "Explore", href: "/" },
    { name: "Collections", href: "/collections" },
    { name: "Studio", href: "/studio" },
    { name: "Connect", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full">
      <div className="bg-white/20 backdrop-blur-xl border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-black text-lg">G</span>
              </div>
              <span className="font-black text-xl text-gray-800 drop-shadow-sm">Glass</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition-all duration-300 hover:scale-105 hover:drop-shadow-sm px-3 py-2 rounded-lg hover:bg-white/30"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 px-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl"
                  >
                    <Globe className="h-4 w-4 mr-2 text-purple-600" />
                    <span className="text-sm font-medium">{selectedLanguage.flag}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white/90 backdrop-blur-xl border-white/30">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang)}
                      className="text-sm font-medium"
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
                className="h-10 w-10 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                {mounted && theme === "dark" ? (
                  <Moon className="h-4 w-4 text-purple-600" />
                ) : (
                  <Sun className="h-4 w-4 text-purple-600" />
                )}
              </Button>

              {/* Wishlist */}
              <Button
                variant="ghost"
                size="sm"
                className="h-10 w-10 p-0 relative bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl hover:scale-105 transition-transform"
              >
                <Heart className="h-4 w-4 text-purple-600" />
                {wishlistCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 border-0 shadow-lg">
                    {wishlistCount}
                  </Badge>
                )}
              </Button>

              {/* Cart */}
              <Button
                variant="ghost"
                size="sm"
                className="h-10 w-10 p-0 relative bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl hover:scale-105 transition-transform"
              >
                <ShoppingCart className="h-4 w-4 text-purple-600" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 border-0 shadow-lg">
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
                    className="md:hidden h-10 w-10 p-0 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-xl"
                  >
                    <Menu className="h-4 w-4 text-purple-600" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] bg-white/10 backdrop-blur-xl border-white/20">
                  <div className="flex flex-col space-y-6 mt-8">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-semibold text-gray-700 hover:text-purple-600 transition-colors py-3 px-4 rounded-xl hover:bg-white/20"
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
      </div>
    </nav>
  )
}
