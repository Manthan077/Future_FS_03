import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img src="/Logo.jpg" alt="Max Fitness Pro" className="h-12 w-12 object-cover rounded-lg" />
            <div>
              <div className="text-2xl font-bold text-orange-500">Max Fitness Pro</div>
              <p className="text-gray-400 text-sm">Transform Your Body, Transform Your Life</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-orange-500 transition">Home</Link>
              <Link to="/services" className="block text-gray-400 hover:text-orange-500 transition">Services</Link>
              <Link to="/membership" className="block text-gray-400 hover:text-orange-500 transition">Membership</Link>
              <Link to="/gallery" className="block text-gray-400 hover:text-orange-500 transition">Gallery</Link>
              <Link to="/about" className="block text-gray-400 hover:text-orange-500 transition">About</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 1021, TDI Market, Sector 111</p>
              <p>Near Shree Balaji Hypermart</p>
              <p>📞 +91 98773 23886</p>
              <p>✉️ info@maxfitnesspro.com</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1CBaPRrs5e/" className="text-gray-400 hover:text-orange-500 transition">Facebook</a>
              <a href="https://www.instagram.com/maxfitnesspro1?igsh=MTI2aml3aTFxZ2wxZg==" className="text-gray-400 hover:text-orange-500 transition">Instagram</a>
              <a href="https://www.youtube.com/@maxfitnesspro1" className="text-gray-400 hover:text-orange-500 transition">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 Max Fitness Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
