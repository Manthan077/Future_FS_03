import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="bg-black dark:bg-black light:bg-white text-white dark:text-white light:text-gray-900 fixed w-full z-50 shadow-lg border-b border-gray-800 dark:border-gray-800 light:border-gray-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/Logo.jpg" alt="Max Fitness Pro" className="h-14 w-14 object-cover rounded-lg" />
            <span className="text-2xl font-bold text-orange-500">Max Fitness Pro</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
            <Link to="/services" className="hover:text-orange-500 transition">Services</Link>
            <Link to="/membership" className="hover:text-orange-500 transition">Membership</Link>
            <Link to="/gallery" className="hover:text-orange-500 transition">Gallery</Link>
            <Link to="/about" className="hover:text-orange-500 transition">About</Link>
            <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 dark:bg-gray-800 light:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 light:hover:bg-gray-200 transition"
              aria-label="Toggle theme"
            >
              <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
              <span className="text-sm font-semibold">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-800 dark:bg-gray-800 light:bg-gray-100 transition text-sm"
              aria-label="Toggle theme"
            >
              <span>{theme === 'dark' ? '☀️' : '🌙'}</span>
              <span className="font-semibold">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-900 light:bg-gray-50">
          <Link to="/" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/membership" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100" onClick={() => setIsOpen(false)}>Membership</Link>
          <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100" onClick={() => setIsOpen(false)}>Gallery</Link>
          <Link to="/about" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-800 light:hover:bg-gray-100" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  )
}
