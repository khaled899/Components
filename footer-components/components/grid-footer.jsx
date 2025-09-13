import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function GridFooter() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-purple-300">MarketPlace</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Your trusted marketplace connecting buyers and sellers worldwide with quality products and exceptional
              service.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-slate-400 hover:text-purple-300 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-purple-300 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-slate-400 hover:text-purple-300 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-slate-400 hover:text-purple-300 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* For Buyers */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-purple-300">For Buyers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Browse Products
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Deals & Offers
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Buyer Protection
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Order Tracking
                </a>
              </li>
            </ul>
          </div>

          {/* For Sellers */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-purple-300">For Sellers</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Start Selling
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Seller Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Seller Tools
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Seller Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-purple-300">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-300" />
                <span className="text-slate-300">support@marketplace.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-300" />
                <span className="text-slate-300">1-800-MARKET</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-purple-300" />
                <span className="text-slate-300">123 Commerce St, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 MarketPlace. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
