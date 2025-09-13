"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onCartClick: () => void
  cartItemCount: number
}

export function Header({ onCartClick, cartItemCount }: HeaderProps) {
  const navItems = [
    { name: "Theme Demo", badge: "New" },
    { name: "Shop" },
    { name: "Product" },
    { name: "New In" },
    { name: "Must Have" },
    { name: "Collections" },
    { name: "Pages" },
    { name: "Buy Ella", badge: "Hot" },
  ]

  return (
    <header className="bg-slate-800 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold text-orange-400">Ella+</div>
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <a href="#" className="text-sm hover:text-orange-400 transition-colors">
                  {item.name}
                </a>
                {item.badge && (
                  <span
                    className={`absolute -top-2 -right-2 px-1.5 py-0.5 text-xs rounded ${
                      item.badge === "New" ? "bg-teal-500" : "bg-orange-500"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </nav>
        </div>
        <Button variant="ghost" size="sm" onClick={onCartClick} className="relative text-white hover:text-orange-400">
          <ShoppingBag className="h-5 w-5" />
          {cartItemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
          )}
        </Button>
      </div>
    </header>
  )
}
