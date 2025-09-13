"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronRight, Copy } from "lucide-react"

export function CheckoutPage() {
  const [email, setEmail] = useState("ahmed@gmail.com")
  const [deliveryMethod, setDeliveryMethod] = useState("ship")
  const [discountCode, setDiscountCode] = useState("")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b px-4 py-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-xl font-semibold text-gray-900 mb-4">new-ella-demo</h1>
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Cart</span>
            <ChevronRight className="w-4 h-4" />
            <span className="font-medium text-gray-900">Information</span>
            <ChevronRight className="w-4 h-4" />
            <span>Shipping</span>
            <ChevronRight className="w-4 h-4" />
            <span>Payment</span>
          </nav>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12">
          {/* Order Summary - Mobile First */}
          <div className="lg:order-2 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg border p-6 lg:sticky lg:top-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              {/* Product */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <img
                    src="/computer-accessories-flatlay.png"
                    alt="Computer accessories"
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <span className="absolute -top-2 -right-2 bg-gray-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    1
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-sm">(Product 21) Sample - Computers & Accessories For Sale</h3>
                  <p className="text-sm text-gray-600">XS / Black</p>
                </div>
                <span className="font-medium">$79.00</span>
              </div>

              {/* Discount Code */}
              <div className="mb-6">
                <div className="flex space-x-2">
                  <Input
                    placeholder="Discount code"
                    value={discountCode}
                    onChange={(e) => setDiscountCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" className="px-6 bg-transparent">
                    Apply
                  </Button>
                </div>
              </div>

              {/* Totals */}
              <div className="space-y-2 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>$79.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>$20.00</span>
                </div>
                <div className="flex justify-between font-semibold text-lg border-t pt-2">
                  <span>Total</span>
                  <span>
                    <span className="text-sm font-normal text-gray-600 mr-2">USD</span>
                    $99.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="lg:order-1">
            <div className="bg-white rounded-lg border p-6 mb-6">
              {/* Express Checkout */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-4">Express checkout</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md">
                    <span className="font-semibold">Shop</span>
                    <span className="ml-1">Pay</span>
                  </Button>
                  <Button variant="outline" className="bg-black text-white hover:bg-gray-800 py-3 rounded-md">
                    <span className="text-blue-500 font-semibold">G</span>
                    <span className="ml-1">Pay</span>
                  </Button>
                </div>
                <div className="text-center text-gray-500 text-sm mt-4">OR</div>
              </div>

              {/* Contact */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <div className="text-sm">
                    <span className="text-gray-600">Have an account? </span>
                    <button className="text-blue-600 hover:underline">Log in</button>
                  </div>
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email or mobile phone number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pr-10"
                  />
                  <Button
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center space-x-2 mt-3">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm">
                    Email me with news and offers
                  </Label>
                </div>
              </div>

              {/* Delivery Method */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Delivery method</h3>
                <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
                  <div className="border rounded-lg p-4 mb-2">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="ship" id="ship" />
                      <Label htmlFor="ship" className="flex items-center space-x-2 cursor-pointer">
                        <span>📦</span>
                        <span>Ship</span>
                      </Label>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="flex items-center space-x-2 cursor-pointer">
                        <span>🏪</span>
                        <span>Pick up</span>
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Shipping Address */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Shipping address</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="country">Country/Region</Label>
                    <Select defaultValue="egypt">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="egypt">Egypt</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First name (optional)</Label>
                      <Input id="firstName" defaultValue="a" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" defaultValue="a" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input id="address" defaultValue="a" />
                  </div>

                  <div>
                    <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
                    <Input id="apartment" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" defaultValue="Belbis" />
                    </div>
                    <div>
                      <Label htmlFor="governorate">Governorate</Label>
                      <Select defaultValue="al-sharqia">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="al-sharqia">Al Sharqia</SelectItem>
                          <SelectItem value="cairo">Cairo</SelectItem>
                          <SelectItem value="alexandria">Alexandria</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="postal">Postal code</Label>
                      <Input id="postal" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Continue Button */}
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium">
                Continue to shipping
              </Button>
            </div>

            {/* Footer */}
            <div className="text-center text-sm text-gray-500">All rights reserved new-ella-demo</div>
          </div>
        </div>
      </div>
    </div>
  )
}
