import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, Shield, Truck, CreditCard, Award } from "lucide-react"

export default function ComprehensiveFooter() {
  return (
    <footer className="bg-slate-50">
      {/* Trust Badges */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Shield className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Secure Shopping</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Truck className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Free Shipping</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Easy Returns</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <Award className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-medium">Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-slate-800">MarketPlace</h3>
            <p className="text-slate-600 leading-relaxed max-w-md">
              The world's leading marketplace connecting millions of buyers and sellers. Discover unique products,
              support small businesses, and shop with confidence.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-slate-400 hover:text-purple-600 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-slate-400 hover:text-purple-600 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-slate-400 hover:text-purple-600 cursor-pointer transition-colors" />
              <Youtube className="w-6 h-6 text-slate-400 hover:text-purple-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-slate-800">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  All Categories
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Fashion
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Home & Garden
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Sports
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Books
                </a>
              </li>
            </ul>
          </div>

          {/* Sell */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-slate-800">Sell</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Start Selling
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Seller Hub
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Seller Protection
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Fees & Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Seller Resources
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Business Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-sans font-semibold text-slate-800">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Buyer Protection
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Report an Issue
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
                  Safety Center
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-slate-200 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
            <div>
              <h4 className="font-sans font-semibold text-slate-800 mb-2">Stay Updated</h4>
              <p className="text-slate-600 text-sm">Get the latest deals and marketplace news</p>
            </div>
            <div className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 lg:w-64 px-4 py-2 border border-slate-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-purple-600 text-white rounded-r-md hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-slate-500 text-sm">
              <span>© 2024 MarketPlace Inc.</span>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>support@marketplace.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>1-800-MARKET</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="#" className="text-slate-500 hover:text-purple-600 transition-colors">
                Privacy
              </a>
              <a href="#" className="text-slate-500 hover:text-purple-600 transition-colors">
                Terms
              </a>
              <a href="#" className="text-slate-500 hover:text-purple-600 transition-colors">
                Cookies
              </a>
              <a href="#" className="text-slate-500 hover:text-purple-600 transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
