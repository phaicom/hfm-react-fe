import { Menu } from 'lucide-react'
import { useState } from 'react'
import en from '@/assets/en.svg'
import hfmLogo from '@/assets/hfm_logo.svg'
import mobileApp from '@/assets/mobile_app.svg'
import { Button } from '@/components/ui/button'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    // <header className="w-full sticky top-0 z-50 bg-foreground text-[#eeeeee]">
    <header className="bg-foreground w-full text-[#eeeeee]">
      <div className="mx-auto max-w-[84rem]">
        {/* Top bar */}
        <div className={`
          bg-foreground mx-auto flex w-full max-w-[84rem] items-center
          justify-between px-4 py-1 pt-4 text-sm text-[#eeeeee]
        `}
        >
          <small className="text-[10px] text-[#a8a8a8a8]">
            Member of HF Markets Group
          </small>
          <div className={`
            hidden items-center space-x-6
            md:flex
          `}
          >
            {/* Download App Button */}
            <Button variant="outline" size="sm" className="dark" asChild>
              <a href="#" target="_blank">
                <img src={mobileApp} alt="Mobile App" className="h-5 w-5" />
                {' '}
                Download App
              </a>
            </Button>
            {/* Others link */}
            <div className={`
              flex items-center justify-center gap-2
              [&>a:not(:last-child)]:after:ml-2
              [&>a:not(:last-child)]:after:text-[#404040]
              [&>a:not(:last-child)]:after:content-['|']
            `}
            >
              <a href="#" className="hover:underline">Contact us</a>
              <a href="#" className="hover:underline">Partner with us</a>
              <a href="#">
                <img src={en} className="w-[17px] rounded-xs" alt="English logo" height={17} width={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className={`
          bg-foreground sticky top-0 z-50 flex items-center gap-25 px-4 py-6
          pt-1
        `}
        >
          {/* Logo */}
          <a href="#">
            <img src={hfmLogo} alt="HF Markets Logo" className="h-15" />
          </a>

          {/* Desktop Menu */}
          <nav className={`
            hidden items-center gap-9
            md:flex
          `}
          >
            <a href="#">Markets</a>
            <a href="#">Trading</a>
            <a href="#">Investing</a>
            <a href="#">Tools & Education</a>
            <a href="#">Company</a>
          </nav>

          {/* Auth Buttons */}
          <div className={`
            ml-auto hidden items-center gap-4
            md:flex
          `}
          >
            <Button
              variant="outline"
              className={`
                text-md cursor-pointer rounded-xs border-red-600 bg-transparent
                px-5 text-white
                hover:bg-red-600 hover:text-white
              `}
            >
              Login
            </Button>
            <Button className={`
              text-md cursor-pointer rounded-xs bg-green-600 px-5 text-white
              hover:bg-green-700
            `}
            >
              Register
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`
              cursor-pointer
              md:hidden
            `}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className={`
            space-y-3 bg-gray-900 px-4 py-4
            md:hidden
          `}
          >
            <a href="#" className="block">Markets</a>
            <a href="#" className="block">Trading</a>
            <a href="#" className="block">Investing</a>
            <a href="#" className="block">Tools & Education</a>
            <a href="#" className="block">Company</a>
            <div className="mt-4 flex flex-col gap-2">
              <Button
                variant="outline"
                className={`
                  border-red-600 bg-transparent text-white
                  hover:bg-white hover:text-black
                `}
              >
                Login
              </Button>
              <Button className={`
                bg-green-600 text-white
                hover:bg-green-700
              `}
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
