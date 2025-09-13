"use client"

import { NavbarMinimalist } from "@/components/navbar-minimalist"
import { NavbarBold } from "@/components/navbar-bold"
import { NavbarGlassmorphism } from "@/components/navbar-glassmorphism"
import { NavbarPremium } from "@/components/navbar-premium"
import NavbarFuturistic from "@/components/navbar-futuristic"
import NavbarRetro from "@/components/navbar-retro"
import NavbarCorporate from "@/components/navbar-corporate"
import NavbarCreative from "@/components/navbar-creative"
import NavbarGaming from "@/components/navbar-gaming"
import NavbarLuxury from "@/components/navbar-luxury"
import NavbarNature from "@/components/navbar-nature"
import NavbarExperimental from "@/components/navbar-experimental"
// import { useState } from "react"

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col divide-y divide-gray-300 gap-6">
      <NavbarMinimalist />
      <NavbarBold />
      <NavbarGlassmorphism />
      <NavbarPremium />
      <NavbarFuturistic />
      <NavbarRetro />
      <NavbarCorporate />
      <NavbarCreative />
      <NavbarGaming />
      <NavbarLuxury />
      <NavbarNature />
      <NavbarExperimental />
    </div>
  );
}
