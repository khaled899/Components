"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Menu, Sun, Moon, Globe, ShoppingCart, Heart, Search, User } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
]

export function Navbar() {
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
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Categories", href: "/categories" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const getThemeIcon = () => {
    if (!mounted) return <Sun className="h-4 w-4" />

    switch (theme) {
      case "dark":
        return <Moon className="h-4 w-4" />
      case "light":
        return <Sun className="h-4 w-4" />
      default:
        return <Sun className="h-4 w-4" />
    }
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">L</span>
              </div>
              <span className="font-bold text-xl hidden sm:block">Logo</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-sm mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="hidden sm:flex">
                  <Globe className="h-4 w-4 mr-2" />
                  <span className="hidden md:block">{selectedLanguage.flag}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setSelectedLanguage(lang)}
                    className="flex items-center space-x-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative">
                  {getThemeIcon()}
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")} className={theme === "light" ? "bg-accent" : ""}>
                  <Sun className="mr-2 h-4 w-4" />
                  <span>Light</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")} className={theme === "dark" ? "bg-accent" : ""}>
                  <Moon className="mr-2 h-4 w-4" />
                  <span>Dark</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")} className={theme === "system" ? "bg-accent" : ""}>
                  <span className="mr-2">💻</span>
                  <span>System</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Wishlist */}
            <Button variant="ghost" size="sm" className="relative">
              <Heart className="h-4 w-4" />
              {wishlistCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {wishlistCount}
                </Badge>
              )}
              <span className="sr-only">Wishlist</span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              {cartCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
                >
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="sm" className="hidden sm:flex">
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-4">
                  {/* Mobile Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full pl-10 pr-4 py-2 text-sm border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <div className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-accent"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>

                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2">Theme</h3>
                    <div className="grid grid-cols-3 gap-2">
                      <Button
                        variant={theme === "light" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTheme("light")}
                        className="justify-center"
                      >
                        <Sun className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={theme === "dark" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTheme("dark")}
                        className="justify-center"
                      >
                        <Moon className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={theme === "system" ? "default" : "outline"}
                        size="sm"
                        onClick={() => setTheme("system")}
                        className="justify-center"
                      >
                        <span>💻</span>
                      </Button>
                    </div>
                  </div>

                  {/* Mobile Language Switcher */}
                  <div className="border-t pt-4">
                    <h3 className="text-sm font-medium mb-2">Language</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant={selectedLanguage.code === lang.code ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedLanguage(lang)}
                          className="justify-start"
                        >
                          <span className="mr-2">{lang.flag}</span>
                          <span className="text-xs">{lang.name}</span>
                        </Button>
                      ))}
                    </div>
                  </div>

                  {/* Mobile User Actions */}
                  <div className="border-t pt-4 space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <User className="mr-2 h-4 w-4" />
                      My Account
                    </Button>
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      <div className="flex items-center">
                        <Heart className="mr-2 h-4 w-4" />
                        Wishlist
                      </div>
                      <Badge variant="secondary">{wishlistCount}</Badge>
                    </Button>
                    <Button variant="outline" className="w-full justify-between bg-transparent">
                      <div className="flex items-center">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Cart
                      </div>
                      <Badge variant="secondary">{cartCount}</Badge>
                    </Button>
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
