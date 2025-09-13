import { Heart } from "lucide-react"

export default function MinimalFooter() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-slate-800">MarketPlace</h3>
            <p className="text-slate-600 text-sm mt-1">Connecting commerce, creating communities</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
              About
            </a>
            <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
              Sell
            </a>
            <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
              Buy
            </a>
            <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
              Support
            </a>
            <a href="#" className="text-slate-600 hover:text-purple-600 transition-colors">
              Careers
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-1 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>© 2024</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
