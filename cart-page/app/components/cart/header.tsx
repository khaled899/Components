"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Heart, User, ShoppingCartIcon as CartIcon, HelpCircle, Globe, ChevronDown, Menu } from "lucide-react"

interface HeaderProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  return (
    <>
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          {/* Top Header */}
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold">
                ellamart<span className="text-yellow-400">+</span>
              </h1>
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search the store"
                  className="w-full pl-4 pr-12 py-3 rounded-full bg-white text-black"
                />
                <Button
                  size="sm"
                  className="absolute right-1 top-1 bottom-1 rounded-full bg-blue-600 hover:bg-blue-700"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 sm:gap-6">
              {/* Phone Number - Hidden on mobile */}
              <div className="hidden xl:block text-sm">
                <div>Available 24/7 at</div>
                <div className="font-semibold">(090) 123-4567</div>
              </div>

              <div className="flex items-center gap-2 sm:gap-4">
                <HeaderAction icon={Heart} label="Wish Lists" />
                <HeaderAction icon={User} label="Sign In" />
                <HeaderAction icon={CartIcon} label="Cart" badge="2" />
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="border-t border-blue-800">
            <div className="flex items-center justify-between py-3">
              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-white hover:bg-blue-800"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-8">
                <NavigationItem label="Theme Demo" badge="NEW" />
                <NavigationItem label="Shop" />
                <NavigationItem label="Products" badge="HOT" />
                <NavigationItem label="New In" />
                <NavigationItem label="Must Have" />
                <NavigationItem label="Collections" />
                <NavigationItem label="Pages" />
                <NavigationItem label="Buy Ella" />
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-4 text-sm">
                <div className="hidden md:flex items-center gap-1">
                  <HelpCircle className="h-4 w-4" />
                  <span>Help</span>
                </div>
                <div className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline">EN / USD</span>
                  <ChevronDown className="h-3 w-3" />
                </div>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
              <div className="lg:hidden border-t border-blue-800 py-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <NavigationItem label="Theme Demo" badge="NEW" />
                  <NavigationItem label="Shop" />
                  <NavigationItem label="Products" badge="HOT" />
                  <NavigationItem label="New In" />
                  <NavigationItem label="Must Have" />
                  <NavigationItem label="Collections" />
                  <NavigationItem label="Pages" />
                  <NavigationItem label="Buy Ella" />
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>

      {/* Mobile/Tablet Search */}
      <div className="lg:hidden bg-blue-900 px-4 pb-4">
        <div className="relative">
          <Input
            type="text"
            placeholder="Search the store"
            className="w-full pl-4 pr-12 py-3 rounded-full bg-white text-black"
          />
          <Button size="sm" className="absolute right-1 top-1 bottom-1 rounded-full bg-blue-600 hover:bg-blue-700">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  )
}

function HeaderAction({ icon: Icon, label, badge }: { icon: any; label: string; badge?: string }) {
  return (
    <div className="flex flex-col items-center text-xs relative">
      <Icon className="h-4 w-4 sm:h-5 sm:w-5 mb-1" />
      <span className="hidden sm:inline">{label}</span>
      {badge && (
        <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
          {badge}
        </Badge>
      )}
    </div>
  )
}

function NavigationItem({ label, badge }: { label: string; badge?: string }) {
  return (
    <div className="flex items-center gap-2">
      {badge && <Badge className="bg-red-500 text-white text-xs">{badge}</Badge>}
      <span className="text-sm">{label}</span>
    </div>
  )
}
