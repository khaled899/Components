"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { X, ChevronDown, ChevronRight, Bell, Shield, Palette, Globe } from "lucide-react"

export function SettingsDrawer({ isOpen, onClose }) {
  const [expandedSections, setExpandedSections] = useState(["notifications"])
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "english",
    volume: [75],
    privacy: "friends",
  })

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

  const toggleSection = (section) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  const settingSections = [
    {
      id: "notifications",
      title: "Notifications",
      icon: Bell,
      items: [
        {
          type: "switch",
          key: "notifications",
          label: "Push Notifications",
          description: "Receive notifications on your device",
        },
        {
          type: "switch",
          key: "emailNotifications",
          label: "Email Notifications",
          description: "Get updates via email",
        },
      ],
    },
    {
      id: "appearance",
      title: "Appearance",
      icon: Palette,
      items: [
        { type: "switch", key: "darkMode", label: "Dark Mode", description: "Switch to dark theme" },
        {
          type: "slider",
          key: "volume",
          label: "Interface Volume",
          description: "Adjust sound effects volume",
          min: 0,
          max: 100,
        },
      ],
    },
    {
      id: "privacy",
      title: "Privacy & Security",
      icon: Shield,
      items: [
        {
          type: "select",
          key: "privacy",
          label: "Profile Visibility",
          description: "Who can see your profile",
          options: [
            { value: "public", label: "Public" },
            { value: "friends", label: "Friends Only" },
            { value: "private", label: "Private" },
          ],
        },
      ],
    },
    {
      id: "language",
      title: "Language & Region",
      icon: Globe,
      items: [
        {
          type: "select",
          key: "language",
          label: "Language",
          description: "Choose your preferred language",
          options: [
            { value: "english", label: "English" },
            { value: "spanish", label: "Español" },
            { value: "french", label: "Français" },
          ],
        },
      ],
    },
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
        className={`fixed right-0 top-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div>
              <h2 className="text-xl font-serif font-bold text-slate-800">Settings</h2>
              <p className="text-sm text-slate-600">Customize your experience</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Settings Content */}
          <div className="flex-1 overflow-y-auto">
            {settingSections.map((section) => {
              const IconComponent = section.icon
              const isExpanded = expandedSections.includes(section.id)

              return (
                <div key={section.id} className="border-b border-slate-100">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5 text-slate-600" />
                      <span className="font-medium text-slate-800">{section.title}</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 text-slate-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 space-y-6">
                      {section.items.map((item, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <label className="text-sm font-medium text-slate-800">{item.label}</label>
                              <p className="text-xs text-slate-600">{item.description}</p>
                            </div>

                            {item.type === "switch" && (
                              <Switch
                                checked={settings[item.key]}
                                onCheckedChange={(checked) => updateSetting(item.key, checked)}
                              />
                            )}
                          </div>

                          {item.type === "slider" && (
                            <div className="pt-2">
                              <Slider
                                value={settings[item.key]}
                                onValueChange={(value) => updateSetting(item.key, value)}
                                max={item.max}
                                min={item.min}
                                step={1}
                                className="w-full"
                              />
                              <div className="flex justify-between text-xs text-slate-500 mt-1">
                                <span>{item.min}</span>
                                <span>{settings[item.key][0]}</span>
                                <span>{item.max}</span>
                              </div>
                            </div>
                          )}

                          {item.type === "select" && (
                            <Select
                              value={settings[item.key]}
                              onValueChange={(value) => updateSetting(item.key, value)}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {item.options.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200 space-y-3">
            <Button variant="outline" className="w-full bg-transparent">
              Reset to Defaults
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">Save Changes</Button>
          </div>
        </div>
      </div>
    </>
  )
}
