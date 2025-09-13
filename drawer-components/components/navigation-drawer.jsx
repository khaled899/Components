"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { X, Home, User, Settings, Mail, HelpCircle, LogOut, Bell, Search, Bookmark, Calendar } from "lucide-react"

export function NavigationDrawer({ isOpen, onClose }) {
  const [activeItem, setActiveItem] = useState("Dashboard")

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  const navigationItems = [
    { icon: Home, label: "Dashboard", href: "#", badge: null },
    { icon: Search, label: "Search", href: "#", badge: null },
    { icon: Mail, label: "Messages", href: "#", badge: "3" },
    { icon: Bell, label: "Notifications", href: "#", badge: "12" },
    { icon: Calendar, label: "Calendar", href: "#", badge: null },
    { icon: Bookmark, label: "Bookmarks", href: "#", badge: null },
    { icon: User, label: "Profile", href: "#", badge: null },
    { icon: Settings, label: "Settings", href: "#", badge: null },
    { icon: HelpCircle, label: "Help & Support", href: "#", badge: null },
  ]

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-800">Navigate</h2>
              <p className="text-sm text-slate-600">Quick access to all sections</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="p-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/professional-headshot.png" alt="User" />
                <AvatarFallback className="bg-blue-100 text-blue-600 font-medium">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium text-slate-800">John Doe</div>
                <div className="text-sm text-slate-600">john.doe@example.com</div>
              </div>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-6 overflow-y-auto">
            <ul className="space-y-1">
              {navigationItems.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => setActiveItem(item.label)}
                    className={`w-full flex items-center justify-between p-3 rounded-lg text-left transition-all duration-200 ${
                      activeItem === item.label
                        ? "bg-blue-50 text-blue-600 border border-blue-200"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={`w-5 h-5 ${activeItem === item.label ? "text-blue-600" : ""}`} />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-blue-100 text-blue-600 text-xs px-2 py-0.5 min-w-[20px] h-5 flex items-center justify-center"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200 space-y-3">
            <Button
              variant="outline"
              className="w-full justify-start gap-3 text-slate-700 hover:text-red-600 hover:border-red-200 hover:bg-red-50 transition-colors bg-transparent"
            >
              <LogOut className="w-4 h-4" />
              Sign Out
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">Get Started</Button>
          </div>
        </div>
      </div>
    </>
  )
}
