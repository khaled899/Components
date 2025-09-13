"use client"

import { useState } from "react"
import { PromotionalBanner } from "./cart/promotional-banner"
import { Header } from "./cart/header"
import { Breadcrumb } from "./cart/breadcrumb"
import { CartContent } from "./cart/cart-content"
import { OrderSummary } from "./cart/order-summary"

export function ShoppingCart() {
  const [quantity, setQuantity] = useState(2)
  const [couponCode, setCouponCode] = useState("")
  const [postalCode, setPostalCode] = useState("")
  const [comments, setComments] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const productPrice = 79.0
  const subtotal = productPrice * quantity

  return (
    <div className="min-h-screen bg-white">
      <PromotionalBanner />
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      <Breadcrumb />

      <div className="container mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <CartContent
            quantity={quantity}
            setQuantity={setQuantity}
            productPrice={productPrice}
            subtotal={subtotal}
            comments={comments}
            setComments={setComments}
          />
          <OrderSummary
            subtotal={subtotal}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            postalCode={postalCode}
            setPostalCode={setPostalCode}
            agreeTerms={agreeTerms}
            setAgreeTerms={setAgreeTerms}
          />
        </div>
      </div>
    </div>
  )
}
