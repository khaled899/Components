"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, Globe, ShoppingCart, Heart } from "lucide-react"

const languages = [
  { code: "en", name: "english", flag: "🇺🇸" },
  { code: "es", name: "español", flag: "🇪🇸" },
  { code: "fr", name: "français", flag: "🇫🇷" },
  { code: "de", name: "deutsch", flag: "🇩🇪" },
]

export function NavbarMinimalist() {
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
    { name: "shop", href: "/" },
    { name: "about", href: "/about" },
    { name: "blog", href: "/blog" },
    { name: "contact", href: "/contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 dark:bg-gray-900/80 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-black text-lg sm:text-xl tracking-tight text-gray-700 dark:text-gray-200">
              minimal
            </span>
          </div>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-normal text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-px bg-indigo-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            {/* Language Switcher - Hidden on small screens */}
            <div className="hidden sm:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-gray-50 dark:hover:bg-gray-800">
                    <Globe className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="border-gray-100 dark:border-gray-800">
                  {languages.map((lang) => (
                    <DropdownMenuItem key={lang.code} onClick={() => setSelectedLanguage(lang)} className="text-sm">
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
              className="h-8 w-8 p-0 hover:bg-gray-50 dark:hover:bg-gray-800"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && theme === "dark" ? (
                <Moon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              ) : (
                <Sun className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              )}
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 relative hover:bg-gray-50 dark:hover:bg-gray-800">
              <Heart className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              {wishlistCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-gray-900 hover:bg-gray-900 dark:bg-gray-100 dark:text-gray-900 border-0">
                  {wishlistCount}
                </Badge>
              )}
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 relative hover:bg-gray-50 dark:hover:bg-gray-800">
              <ShoppingCart className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 flex items-center justify-center text-xs bg-gray-900 hover:bg-gray-900 dark:bg-gray-100 dark:text-gray-900 border-0">
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
                  className="lg:hidden h-8 w-8 p-0 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  <Menu className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-white dark:bg-gray-900">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* Mobile Navigation Links */}
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-normal text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                  {/* Mobile Language Switcher */}
                  <div className="sm:hidden pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Language</div>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={selectedLanguage.code === lang.code ? "default" : "ghost"}
                          size="sm"
                          className="justify-start text-sm"
                          onClick={() => {
                            setSelectedLanguage(lang)
                            setMobileMenuOpen(false)
                          }}
                        >
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
