"use client"

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
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const freeShippingThreshold = 642.0
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <div
        className={`
        fixed top-0 right-0 h-full bg-white z-50 
        transform transition-transform duration-300 ease-in-out flex flex-col
        w-full sm:w-[420px] md:w-[450px] lg:w-[480px] xl:w-[500px]
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        shadow-2xl
      `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b bg-white sticky top-0 z-10">
          <h2 id="cart-title" className="text-lg sm:text-xl font-semibold">
            Shopping Cart
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 sm:h-10 sm:w-10 p-0 hover:bg-gray-100 rounded-full"
            aria-label="Close cart"
          >
            <X className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>

        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4 bg-gray-50">
            <p className="text-sm sm:text-base text-gray-600 font-medium">{items.length} items</p>

            {remainingForFreeShipping > 0 && (
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-100">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm sm:text-base text-gray-700">
                  Only <span className="font-bold text-red-600">${remainingForFreeShipping.toFixed(2)}</span> away from{" "}
                  <span className="font-semibold">Free Shipping</span>
                </span>
              </div>
            )}

            {remainingForFreeShipping === 0 && subtotal > 0 && (
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Truck className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm sm:text-base text-green-700 font-semibold">
                  🎉 You qualify for free shipping!
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 py-12">
                <ShoppingBag className="h-16 w-16 sm:h-20 sm:w-20 mb-4 text-gray-300" />
                <p className="text-lg sm:text-xl font-medium">Your cart is empty</p>
                <p className="text-sm sm:text-base text-gray-400 mt-2">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4 sm:space-y-6 py-4">
                {items.map((item, index) => (
                  <div key={item.id} className="flex gap-4 pb-4 sm:pb-6 border-b border-gray-100 last:border-b-0">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-xl flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-sm sm:text-base leading-tight pr-2">{item.name}</h3>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveItem(item.id)}
                          className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600 rounded-full flex-shrink-0"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-500 mb-3">{item.variant}</p>

                      <div className="flex items-center justify-between">
                        <p className="font-bold text-base sm:text-lg">${item.price.toFixed(2)}</p>

                        <div className="flex items-center border border-gray-200 rounded-full bg-white">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="h-10 w-10 p-0 rounded-full hover:bg-gray-100 touch-manipulation"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-4 py-2 text-sm sm:text-base font-semibold min-w-[3rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="h-10 w-10 p-0 rounded-full hover:bg-gray-100 touch-manipulation"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="px-4 sm:px-6 py-4 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-center gap-8 sm:gap-12">
                {[
                  { icon: ShoppingBag, label: "Shop" },
                  { icon: Gift, label: "Gift" },
                  { icon: Truck, label: "Delivery" },
                  { icon: Tag, label: "Offers" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
                    </div>
                    <span className="text-xs text-gray-500 hidden sm:block">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t bg-white space-y-4 sm:space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-base sm:text-lg">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl sm:text-2xl font-bold border-t pt-3">
                  <span>Total:</span>
                  <span className="text-blue-600">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-500">Tax included and shipping calculated at checkout</p>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox id="terms" className="mt-1" />
                <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  I agree with{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    Terms & Conditions
                  </a>
                </label>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 sm:py-5 rounded-full text-base sm:text-lg font-semibold touch-manipulation">
                  Checkout
                </Button>
                <Button
                  variant="outline"
                  className="w-full py-4 sm:py-5 rounded-full bg-transparent text-base sm:text-lg font-medium touch-manipulation border-2"
                >
                  View Cart
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
