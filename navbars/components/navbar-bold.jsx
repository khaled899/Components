"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, Globe, ShoppingCart, Heart } from "lucide-react"

const languages = [
  { code: "en", name: "ENGLISH", flag: "🇺🇸" },
  { code: "es", name: "ESPAÑOL", flag: "🇪🇸" },
  { code: "fr", name: "FRANÇAIS", flag: "🇫🇷" },
  { code: "de", name: "DEUTSCH", flag: "🇩🇪" },
]

export function NavbarBold() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [cartCount, setCartCount] = useState(3)
  const [wishlistCount, setWishlistCount] = useState(5)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const navItems = [
    { name: "SHOP NOW", href: "/" },
    { name: "DISCOVER", href: "/discover" },
    { name: "ABOUT", href: "/about" },
    { name: "JOIN US", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg bg-white flex items-center justify-center mr-2 sm:mr-3">
              <span className="text-blue-600 font-black text-sm sm:text-lg">B</span>
            </div>
            <span className="font-black text-xl sm:text-2xl tracking-wide">BOLD</span>
          </div>

          {/* Desktop Navigation - Hidden on tablet and mobile */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold tracking-widest text-white/90 hover:text-white transition-all duration-300 relative group px-3 xl:px-4 py-2 rounded-full hover:bg-sky-500"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-3">
            {/* Language Switcher - Hidden on small screens */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 h-8 sm:h-10 px-2 sm:px-3">
                    <Globe className="h-4 w-4 sm:h-5 sm:w-5 sm:mr-2" />
                    <span className="hidden sm:inline font-bold text-sm">{selectedLanguage.flag}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setSelectedLanguage(lang)}
                      className="font-bold text-sm"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Theme Switcher */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10 p-0"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
              ) : (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
              )}
            </Button>

            {/* Wishlist */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10 p-0 relative"
            >
              <Heart className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 flex items-center justify-center text-xs bg-sky-400 hover:bg-sky-400 border-0 animate-bounce">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10 p-0 relative"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full p-0 flex items-center justify-center text-xs bg-sky-400 hover:bg-sky-400 border-0 animate-bounce">
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu - Shows on tablet and mobile */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10 p-0"
                >
                  <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-blue-600 text-white border-blue-500">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Navigation Links */}
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg font-bold tracking-wide text-white/90 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/10"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                  {/* Mobile Language Switcher */}
                  <div className="sm:hidden pt-4 border-t border-white/20">
                    <div className="text-sm font-bold text-white/70 mb-3 tracking-wide">LANGUAGE</div>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={selectedLanguage.code === lang.code ? "secondary" : "ghost"}
                          size="sm"
                          className={`justify-start text-sm font-bold ${
                            selectedLanguage.code === lang.code
                              ? "bg-white text-blue-600"
                              : "text-white hover:bg-white/10"
                          }`}
                          onClick={() => {
                            setSelectedLanguage(lang)
                            setMobileMenuOpen(false)
                          }}
                        >
                          <span className="mr-2">{lang.flag}</span>
                          {lang.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
