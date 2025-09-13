"use client"

import { useState } from "react"
import { ShoppingCart } from "./components/shopping-cart"
import { Header } from "./components/header"
import { MainContent } from "./components/main-content"

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Computers & Accessories Pro",
      variant: "XS / Black",
      price: 79.0,
      quantity: 2,
      image: "/modern-laptop-workspace.png",
    },
    {
      id: 2,
      name: "Premium Smartphone Case",
      variant: "iPhone 15 / Clear",
      price: 29.99,
      quantity: 1,
      image: "/modern-smartphone.png",
    },
    {
      id: 3,
      name: "Wireless Gaming Headset",
      variant: "Black / RGB",
      price: 149.99,
      quantity: 1,
      image: "/generic-product-display.png",
    },
    {
      id: 4,
      name: "Ultra-thin Laptop Stand",
      variant: "Silver / Adjustable",
      price: 45.5,
      quantity: 3,
      image: "/modern-laptop.png",
    },
    {
      id: 5,
      name: "Bluetooth Mechanical Keyboard",
      variant: "Cherry MX Blue / White",
      price: 89.99,
      quantity: 1,
      image: "/generic-product-display.png",
    },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id))
    } else {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const addToCart = (product: { id: number; name: string; price: number; image: string }) => {
    const existingItem = cartItems.find((item) => item.id === product.id)

    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1)
    } else {
      const newItem = {
        id: product.id,
        name: product.name,
        variant: "Default",
        price: product.price,
        quantity: 1,
        image: product.image,
      }
      setCartItems([...cartItems, newItem])
    }
    setIsCartOpen(true) // Open cart when item is added
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCartClick={() => setIsCartOpen(true)} cartItemCount={cartItems.length} />
      <MainContent onAddToCart={addToCart} />
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />
    </div>
  )
}
