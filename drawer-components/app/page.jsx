"use client"

import { useState } from "react"
import { NavigationDrawer } from "@/components/navigation-drawer"
import { SettingsDrawer } from "@/components/settings-drawer"
import { FilterDrawer } from "@/components/filter-drawer"
import { ContentDrawer } from "@/components/content-drawer"
import { Button } from "@/components/ui/button"
import { Menu, Settings, Filter, FileText } from "lucide-react"

export default function Page() {
  const [activeDrawer, setActiveDrawer] = useState(null)

  const openDrawer = (drawerType) => {
    setActiveDrawer(drawerType)
  }

  const closeDrawer = () => {
    setActiveDrawer(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div>
              <h1 className="text-2xl font-serif font-bold text-slate-800">Drawer Designs</h1>
              <p className="text-sm text-slate-600">Modern UI drawer components showcase</p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => openDrawer("navigation")}
                className="flex items-center gap-2"
              >
                <Menu className="w-4 h-4" />
                Navigation
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openDrawer("settings")}
                className="flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openDrawer("filter")}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                Filters
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => openDrawer("content")}
                className="flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                Content
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-slate-800 mb-4">Versatile Drawer Components</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore our collection of modern drawer designs featuring smooth animations, accessibility features, and
            responsive layouts for navigation, settings, filters, and content.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Navigation Drawer Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Menu className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-800">Navigation</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Left-sliding drawer with user profile, navigation items, and notification badges.
            </p>
            <Button onClick={() => openDrawer("navigation")} className="w-full bg-blue-600 hover:bg-blue-700">
              Open Navigation
            </Button>
          </div>

          {/* Settings Drawer Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 rounded-lg">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-800">Settings</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Right-sliding drawer with collapsible sections, switches, sliders, and selects.
            </p>
            <Button onClick={() => openDrawer("settings")} className="w-full bg-green-600 hover:bg-green-700">
              Open Settings
            </Button>
          </div>

          {/* Filter Drawer Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Filter className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-800">Filters</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Left-sliding drawer with search, checkboxes, and active filter tracking.
            </p>
            <Button onClick={() => openDrawer("filter")} className="w-full bg-purple-600 hover:bg-purple-700">
              Open Filters
            </Button>
          </div>

          {/* Content Drawer Card */}
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-100 rounded-lg">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-serif font-bold text-slate-800">Content</h3>
            </div>
            <p className="text-slate-600 mb-6">
              Right-sliding drawer with loading states, article cards, and modal interactions.
            </p>
            <Button onClick={() => openDrawer("content")} className="w-full bg-orange-600 hover:bg-orange-700">
              Open Content
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6 text-center">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="p-3 bg-blue-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold">✨</span>
              </div>
              <h4 className="font-medium text-slate-800 mb-2">Smooth Animations</h4>
              <p className="text-sm text-slate-600">Fluid slide transitions with backdrop fading</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-green-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-green-600 font-bold">♿</span>
              </div>
              <h4 className="font-medium text-slate-800 mb-2">Accessible</h4>
              <p className="text-sm text-slate-600">Keyboard navigation and screen reader support</p>
            </div>
            <div className="text-center">
              <div className="p-3 bg-purple-100 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600 font-bold">📱</span>
              </div>
              <h4 className="font-medium text-slate-800 mb-2">Responsive</h4>
              <p className="text-sm text-slate-600">Optimized for all screen sizes</p>
            </div>
          </div>
        </div>
      </main>

      {/* Drawer Components */}
      <NavigationDrawer isOpen={activeDrawer === "navigation"} onClose={closeDrawer} />
      <SettingsDrawer isOpen={activeDrawer === "settings"} onClose={closeDrawer} />
      <FilterDrawer isOpen={activeDrawer === "filter"} onClose={closeDrawer} />
      <ContentDrawer isOpen={activeDrawer === "content"} onClose={closeDrawer} />
    </div>
  )
}
