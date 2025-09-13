"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface OrderSummaryProps {
  subtotal: number
  couponCode: string
  setCouponCode: (code: string) => void
  postalCode: string
  setPostalCode: (code: string) => void
  agreeTerms: boolean
  setAgreeTerms: (agree: boolean) => void
}

export function OrderSummary({
  subtotal,
  couponCode,
  setCouponCode,
  postalCode,
  setPostalCode,
  agreeTerms,
  setAgreeTerms,
}: OrderSummaryProps) {
  return (
    <div className="lg:col-span-1">
      <Card className="sticky top-4">
        <CardContent className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold mb-6 pb-3 border-b">ORDER SUMMARY</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>

            <Separator />

            <ShippingEstimate postalCode={postalCode} setPostalCode={setPostalCode} />

            <Separator />

            <CouponSection couponCode={couponCode} setCouponCode={setCouponCode} />

            <Separator />

            <div className="flex justify-between text-lg font-bold">
              <span>TOTAL:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <p className="text-xs text-gray-500">Tax included and shipping calculated at checkout</p>

            <div className="flex items-start gap-2 mt-4">
              <Checkbox id="terms" checked={agreeTerms} onCheckedChange={setAgreeTerms} />
              <label htmlFor="terms" className="text-xs text-gray-600">
                I agree with <span className="underline">Terms & Conditions</span>
              </label>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 mt-4" disabled={!agreeTerms}>
              Proceed To Checkout
            </Button>

            <Button variant="outline" className="w-full mt-2 bg-transparent">
              Continue Shopping
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function ShippingEstimate({ postalCode, setPostalCode }: any) {
  return (
    <div>
      <h3 className="font-medium mb-3">Get Shipping Estimate:</h3>
      <div className="space-y-3">
        <Select defaultValue="united-states">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="united-states">United States</SelectItem>
            <SelectItem value="canada">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <Select defaultValue="alabama">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alabama">Alabama</SelectItem>
              <SelectItem value="california">California</SelectItem>
              <SelectItem value="florida">Florida</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700">Calculate Shipping</Button>
      </div>
    </div>
  )
}

function CouponSection({ couponCode, setCouponCode }: any) {
  return (
    <div>
      <h3 className="font-medium mb-3">Coupon Code</h3>
      <Input
        placeholder="Enter Coupon Code"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        className="mb-2"
      />
      <p className="text-xs text-gray-500">Coupon code will be applied on the checkout page</p>
    </div>
  )
}
