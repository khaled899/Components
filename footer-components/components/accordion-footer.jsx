"use client"

import { useState } from "react"
import { ChevronDown, Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export default function AccordionFooter() {
  const [openSections, setOpenSections] = useState({})

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const footerSections = [
    {
      title: "Shop",
      links: ["All Categories", "Electronics", "Fashion", "Home & Garden", "Sports & Outdoors", "Books & Media"],
    },
    {
      title: "Sell",
      links: [
        "Start Selling",
        "Seller Dashboard",
        "Seller Protection",
        "Fees & Pricing",
        "Seller Resources",
        "Business Account",
      ],
    },
    {
      title: "Support",
      links: ["Help Center", "Contact Us", "Buyer Protection", "Report an Issue", "Community Forum", "Safety Center"],
    },
    {
      title: "Company",
      links: ["About Us", "Careers", "Press Center", "Investor Relations", "Sustainability", "Blog"],
    },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Company Info - Always Visible */}
        <div className="mb-8">
          <h3 className="font-serif text-2xl font-bold text-purple-300 mb-3">MarketPlace</h3>
          <p className="text-slate-300 text-sm leading-relaxed max-w-md mb-4">
            Your trusted marketplace connecting buyers and sellers worldwide with quality products and exceptional
            service.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 text-slate-400 hover:text-purple-300 cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-slate-400 hover:text-purple-300 cursor-pointer transition-colors" />
            <Instagram className="w-5 h-5 text-slate-400 hover:text-purple-300 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Mobile Accordion Sections */}
        <div className="md:hidden space-y-4">
          {footerSections.map((section, index) => (
            <div key={index} className="border-b border-slate-700 pb-4">
              <button
                onClick={() => toggleSection(section.title)}
                className="flex justify-between items-center w-full text-left"
              >
                <h4 className="font-sans font-semibold text-purple-300">{section.title}</h4>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openSections[section.title] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSections[section.title] && (
                <ul className="mt-3 space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-slate-300 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-sans font-semibold text-purple-300">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-slate-300 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-700 pt-6 mb-6">
          <h4 className="font-sans font-semibold text-purple-300 mb-3">Contact Us</h4>
          <div className="flex flex-col sm:flex-row gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-purple-300" />
              <span className="text-slate-300">support@marketplace.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-purple-300" />
              <span className="text-slate-300">1-800-MARKET</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-slate-400 text-sm">© 2024 MarketPlace. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
