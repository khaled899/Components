"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCartIcon as CartIcon, Clock, Minus, Plus, X, Gift, Shield, ExternalLink } from "lucide-react"

interface CartContentProps {
  quantity: number
  setQuantity: (quantity: number) => void
  productPrice: number
  subtotal: number
  comments: string
  setComments: (comments: string) => void
}

export function CartContent({
  quantity,
  setQuantity,
  productPrice,
  subtotal,
  comments,
  setComments,
}: CartContentProps) {
  return (
    <div className="lg:col-span-2">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h1>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div className="bg-red-500 h-2 rounded-full" style={{ width: "25%" }}></div>
          </div>
          <CartIcon className="h-5 w-5 text-red-500" />
        </div>
        <p className="text-sm text-gray-600">Only $642.00 away from Free Shipping</p>
      </div>

      {/* Alert */}
      <Card className="mb-6 bg-orange-50 border-orange-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Clock className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <span className="font-medium">Please, hurry!</span> Someone has placed an order on one of the items you
              have in the cart. We'll keep it for you for <span className="font-semibold text-orange-600">39:34</span>{" "}
              minutes.
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Desktop Cart Table */}
      <DesktopCartTable quantity={quantity} setQuantity={setQuantity} productPrice={productPrice} subtotal={subtotal} />

      {/* Mobile Cart Cards */}
      <MobileCartCard quantity={quantity} setQuantity={setQuantity} productPrice={productPrice} subtotal={subtotal} />

      {/* Gift Wrap */}
      <GiftWrapOption />

      {/* Additional Comments */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2">Additional Comments</label>
        <Textarea
          placeholder="Special instruction for seller..."
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className="min-h-[100px]"
        />
      </div>

      {/* Security Badges */}
      <SecurityBadges />
    </div>
  )
}

function DesktopCartTable({ quantity, setQuantity, productPrice, subtotal }: any) {
  return (
    <div className="hidden md:block bg-white rounded-lg border">
      {/* Table Header */}
      <div className="grid grid-cols-12 gap-4 p-4 border-b bg-gray-50 text-sm font-medium text-gray-700">
        <div className="col-span-6">PRODUCT</div>
        <div className="col-span-2 text-center">PRICE</div>
        <div className="col-span-2 text-center">QUANTITY</div>
        <div className="col-span-2 text-center">TOTAL</div>
      </div>

      {/* Product Row */}
      <div className="grid grid-cols-12 gap-4 p-4 items-center">
        <div className="col-span-6">
          <ProductInfo />
        </div>

        <div className="col-span-2 text-center">
          <span className="font-medium">${productPrice.toFixed(2)}</span>
        </div>

        <div className="col-span-2">
          <QuantityControls quantity={quantity} setQuantity={setQuantity} />
        </div>

        <div className="col-span-2 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="font-medium">${subtotal.toFixed(2)}</span>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileCartCard({ quantity, setQuantity, productPrice, subtotal }: any) {
  return (
    <div className="md:hidden space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex gap-4">
            <img
              src="/computer-accessories.png"
              alt="Product"
              className="w-20 h-20 object-cover rounded flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-sm leading-tight">
                  (Product 21) Sample - Computers & Accessories For Sale
                </h3>
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 flex-shrink-0 ml-2">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>XS / Black</span>
                <ExternalLink className="h-3 w-3" />
              </div>

              <p className="text-sm text-gray-500 mb-3">Ella - Halothemes</p>

              <div className="flex items-center justify-between">
                <QuantityControls quantity={quantity} setQuantity={setQuantity} />

                <div className="text-right">
                  <div className="text-sm text-gray-500">${productPrice.toFixed(2)} each</div>
                  <div className="font-medium">${subtotal.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ProductInfo() {
  return (
    <div className="flex items-start gap-4">
      <img src="/computer-accessories.png" alt="Product" className="w-20 h-20 object-cover rounded flex-shrink-0" />
      <div>
        <h3 className="font-medium text-sm mb-1">(Product 21) Sample - Computers & Accessories For Sale</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>XS / Black</span>
          <ExternalLink className="h-3 w-3" />
        </div>
        <p className="text-sm text-gray-500">Ella - Halothemes</p>
      </div>
    </div>
  )
}

function QuantityControls({ quantity, setQuantity }: any) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0 bg-transparent"
        onClick={() => setQuantity(Math.max(1, quantity - 1))}
      >
        <Minus className="h-3 w-3" />
      </Button>
      <span className="w-8 text-center">{quantity}</span>
      <Button
        variant="outline"
        size="sm"
        className="h-8 w-8 p-0 bg-transparent"
        onClick={() => setQuantity(quantity + 1)}
      >
        <Plus className="h-3 w-3" />
      </Button>
    </div>
  )
}

function GiftWrapOption() {
  return (
    <Card className="mt-6">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <Gift className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-sm">DO YOU WANT A GIFT WRAP? </span>
            <span className="text-sm font-semibold text-blue-600">ONLY FOR $10.00</span>
          </div>
          <Button variant="outline" size="sm" className="flex-shrink-0 bg-transparent">
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function SecurityBadges() {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="h-5 w-5 text-green-600" />
        <span className="text-sm font-medium">Secure Shopping Guarantee</span>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <img src="/generic-security-badge.png" alt="Norton" className="h-8 sm:h-10" />
        <img src="/trustsite-badge.png" alt="TrustSite" className="h-8 sm:h-10" />
        <img src="/ssl-certificate-badge.png" alt="SSL" className="h-8 sm:h-10" />
        <img src="/security-badge.png" alt="Security" className="h-8 sm:h-10" />
      </div>
    </div>
  )
}
