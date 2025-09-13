import { Playfair_Display, Source_Sans_3 as Source_Sans_Pro } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const sourceSans = Source_Sans_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-source-sans",
})

export const metadata = {
  title: "EllaMarket+ - E-commerce Store",
  description: "Premium e-commerce experience with modern design",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
