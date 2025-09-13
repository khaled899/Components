"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { X, Search, Filter, RotateCcw } from "lucide-react"

export function FilterDrawer({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState(["electronics"])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceRange, setPriceRange] = useState({ min: "", max: "" })

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

  const categories = [
    { id: "electronics", label: "Electronics", count: 245 },
    { id: "clothing", label: "Clothing", count: 189 },
    { id: "books", label: "Books", count: 156 },
    { id: "home", label: "Home & Garden", count: 134 },
    { id: "sports", label: "Sports", count: 98 },
    { id: "toys", label: "Toys & Games", count: 76 },
  ]

  const brands = [
    { id: "apple", label: "Apple", count: 45 },
    { id: "samsung", label: "Samsung", count: 38 },
    { id: "nike", label: "Nike", count: 29 },
    { id: "sony", label: "Sony", count: 24 },
    { id: "adidas", label: "Adidas", count: 19 },
  ]

  const toggleCategory = (categoryId) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const toggleBrand = (brandId) => {
    setSelectedBrands((prev) => (prev.includes(brandId) ? prev.filter((id) => id !== brandId) : [...prev, brandId]))
  }

  const clearAllFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setSelectedBrands([])
    setPriceRange({ min: "", max: "" })
  }

  const activeFiltersCount =
    selectedCategories.length +
    selectedBrands.length +
    (searchTerm ? 1 : 0) +
    (priceRange.min || priceRange.max ? 1 : 0)

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
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-blue-600" />
              <div>
                <h2 className="text-xl font-serif font-bold text-slate-800">Filters</h2>
                <p className="text-sm text-slate-600">
                  {activeFiltersCount > 0 ? `${activeFiltersCount} active filters` : "No filters applied"}
                </p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Search */}
          <div className="p-6 border-b border-slate-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Filter Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Categories */}
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-medium text-slate-800 mb-4">Categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={category.id}
                        checked={selectedCategories.includes(category.id)}
                        onCheckedChange={() => toggleCategory(category.id)}
                      />
                      <label htmlFor={category.id} className="text-sm text-slate-700 cursor-pointer">
                        {category.label}
                      </label>
                    </div>
                    <span className="text-xs text-slate-500">({category.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands */}
            <div className="p-6 border-b border-slate-100">
              <h3 className="font-medium text-slate-800 mb-4">Brands</h3>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id={brand.id}
                        checked={selectedBrands.includes(brand.id)}
                        onCheckedChange={() => toggleBrand(brand.id)}
                      />
                      <label htmlFor={brand.id} className="text-sm text-slate-700 cursor-pointer">
                        {brand.label}
                      </label>
                    </div>
                    <span className="text-xs text-slate-500">({brand.count})</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="p-6">
              <h3 className="font-medium text-slate-800 mb-4">Price Range</h3>
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange((prev) => ({ ...prev, min: e.target.value }))}
                    type="number"
                  />
                </div>
                <div className="flex items-center">
                  <span className="text-slate-400">-</span>
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange((prev) => ({ ...prev, max: e.target.value }))}
                    type="number"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          {activeFiltersCount > 0 && (
            <div className="p-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-800">Active Filters</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearAllFilters}
                  className="h-auto p-1 text-xs text-slate-600 hover:text-slate-800"
                >
                  <RotateCcw className="w-3 h-3 mr-1" />
                  Clear All
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {searchTerm && (
                  <Badge variant="secondary" className="text-xs">
                    Search: {searchTerm}
                  </Badge>
                )}
                {selectedCategories.map((categoryId) => {
                  const category = categories.find((c) => c.id === categoryId)
                  return (
                    <Badge key={categoryId} variant="secondary" className="text-xs">
                      {category?.label}
                    </Badge>
                  )
                })}
                {selectedBrands.map((brandId) => {
                  const brand = brands.find((b) => b.id === brandId)
                  return (
                    <Badge key={brandId} variant="secondary" className="text-xs">
                      {brand?.label}
                    </Badge>
                  )
                })}
                {(priceRange.min || priceRange.max) && (
                  <Badge variant="secondary" className="text-xs">
                    ${priceRange.min || "0"} - ${priceRange.max || "∞"}
                  </Badge>
                )}
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="p-6 border-t border-slate-200 space-y-3">
            <Button variant="outline" className="w-full bg-transparent" onClick={clearAllFilters}>
              Clear Filters
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
              Apply Filters ({activeFiltersCount})
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
