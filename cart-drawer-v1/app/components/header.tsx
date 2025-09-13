"use client"

import { ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HeaderProps {
  onCartClick: () => void
  cartItemCount: number
}

export function Header({ onCartClick, cartItemCount }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navigationItems = [
    { name: "Theme Demo", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Product", href: "#" },
    { name: "New In", href: "#", badge: { text: "New", color: "bg-green-500" } },
    { name: "Must Have", href: "#", badge: { text: "Hot", color: "bg-yellow-500 text-black" } },
    { name: "Collections", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Buy Ella", href: "#" },
  ]

  return (
    <>
      <header className="bg-slate-800 text-white sticky top-0 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center">
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-400">Mart+</h1>
            </div>

            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  <a href={item.href} className="hover:text-yellow-400 transition-colors text-sm xl:text-base py-2">
                    {item.name}
                  </a>
                  {item.badge && (
                    <span
                      className={`absolute -top-1 -right-2 ${item.badge.color} text-xs px-1.5 py-0.5 rounded text-white font-medium`}
                    >
                      {item.badge.text}
                    </span>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onCartClick}
                className="relative text-white hover:text-yellow-400 hover:bg-slate-700 h-10 w-10 sm:h-12 sm:w-12 p-0 rounded-full touch-manipulation"
                aria-label="Open shopping cart"
              >
                <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold">
                    {cartItemCount > 99 ? "99+" : cartItemCount}
                  </span>
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:text-yellow-400 hover:bg-slate-700 h-10 w-10 sm:h-12 sm:w-12 p-0 rounded-full touch-manipulation"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                ) : (
                  <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-700 bg-slate-800">
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-1">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative">
                    <a
                      href={item.href}
                      className="block py-3 px-4 text-base hover:text-yellow-400 hover:bg-slate-700 rounded-lg transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                      {item.badge && (
                        <span className={`ml-2 ${item.badge.color} text-xs px-2 py-1 rounded font-medium`}>
                          {item.badge.text}
                        </span>
                      )}
                    </a>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
