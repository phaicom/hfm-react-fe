import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-black text-white">
      {/* Top bar */}
      <div className="flex justify-end items-center px-4 py-2 text-sm border-b border-gray-700">
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:underline">Download App</a>
          <a href="#" className="hover:underline">Contact us</a>
          <a href="#" className="hover:underline">Partner with us</a>
          <span>🇬🇧</span>
        </div>
      </div>

      {/* Main navigation */}
      <div className="flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-red-600">HF</span>
          <span>M</span>
          {' '}
          Markets
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#" className="hover:text-yellow-400">Markets</a>
          <a href="#" className="hover:text-yellow-400">Trading</a>
          <a href="#" className="hover:text-yellow-400">Investing</a>
          <a href="#" className="hover:text-yellow-400">Tools & Education</a>
          <a href="#" className="hover:text-yellow-400">Company</a>
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Button variant="outline" className="bg-transparent border-red-600 text-white hover:bg-white hover:text-black">Login</Button>
          <Button className="bg-green-600 hover:bg-green-700 text-white">Register</Button>
        </div>

        {/* Mobile menu toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-4 py-4 space-y-3">
          <a href="#" className="block">Markets</a>
          <a href="#" className="block">Trading</a>
          <a href="#" className="block">Investing</a>
          <a href="#" className="block">Tools & Education</a>
          <a href="#" className="block">Company</a>
          <div className="flex flex-col gap-2 mt-4">
            <Button variant="outline" className="bg-transparent border-red-600 text-white hover:bg-white hover:text-black">Login</Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white">Register</Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
