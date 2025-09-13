"use client"

import { useState } from "react"
import { X, Minus, Plus, ShoppingBag, Gift, Truck, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

interface CartItem {
  id: number
  name: string
  variant: string
  price: number
  quantity: number
  image: string
}

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
}

export function ShoppingCart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) {
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const freeShippingThreshold = 200
  const amountForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose} />

      {/* Cart Panel */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold">Shopping Cart</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            {/* Item Count */}
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-red-500 text-white px-2 py-1 rounded text-sm flex items-center space-x-1">
                <ShoppingBag className="h-3 w-3" />
                <span>{items.length} items</span>
              </div>
            </div>

            {/* Free Shipping Progress */}
            {amountForFreeShipping > 0 && (
              <div className="mb-6">
                <p className="text-sm text-gray-600 mb-2">
                  Only <span className="font-semibold">${amountForFreeShipping.toFixed(2)}</span> away from Free
                  Shipping
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-red-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-gray-500 mb-2">{item.variant}</p>
                    <p className="font-semibold">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onRemoveItem(item.id)}
                      className="h-6 w-6 p-0 text-gray-400 hover:text-red-500"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center border rounded">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="px-3 py-1 text-sm min-w-[2rem] text-center">{item.quantity}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Icons */}
            <div className="grid grid-cols-4 gap-4 mb-6 py-4 border-y">
              <div className="flex flex-col items-center space-y-1">
                <ShoppingBag className="h-6 w-6 text-gray-400" />
                <span className="text-xs text-gray-500">Shop</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Gift className="h-6 w-6 text-gray-400" />
                <span className="text-xs text-gray-500">Gift</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Truck className="h-6 w-6 text-gray-400" />
                <span className="text-xs text-gray-500">Delivery</span>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Tag className="h-6 w-6 text-gray-400" />
                <span className="text-xs text-gray-500">Offers</span>
              </div>
            </div>

            {/* Totals */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500">Tax included and shipping calculated at checkout</p>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start space-x-2 mb-6">
              <Checkbox
                id="terms"
                checked={agreeToTerms}
                onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600 leading-tight">
                I agree with Terms & Conditions
              </label>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="p-6 border-t space-y-3">
          <Button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3"
            disabled={!agreeToTerms || items.length === 0}
          >
            Checkout
          </Button>
          <Button variant="outline" className="w-full py-3 bg-transparent" onClick={onClose}>
            View Cart
          </Button>
        </div>
      </div>
    </>
  )
}
