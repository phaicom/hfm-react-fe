import { Menu } from 'lucide-react'
import { useState } from 'react'
import hfmLogo from '@/assets/hfm_logo.svg'
import LoginButton from './Bottom/LoginButton'
import RegisterButton from './Bottom/RegisterButton'
import Language from './Language'

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 flex bg-foreground text-[#eeeeee]">
      <div className={`
        mx-33 flex w-full max-w-[82.5rem] items-center pt-2 pb-5.75
        lg:mx-7
        xl:mx-auto
      `}
      >
        {/* Main navigation */}
        <div className="flex w-full items-center">
          {/* Left section: Logo and Desktop Menu */}
          <div className={`
            flex items-center gap-4
            xl:gap-23
          `}
          >
            {/* Logo */}
            <a href="#">
              <img src={hfmLogo} alt="HF Markets Logo" className="-ml-1 w-33" />
            </a>

            {/* Desktop Menu */}
            <ul className={`
              hidden items-center gap-9
              lg:flex
            `}
            >
              <li>
                <a href="#">Markets</a>
              </li>
              <li>
                <a href="#">Trading</a>
              </li>
              <li>
                <a href="#">Investing</a>
              </li>
              <li>
                <a href="#">Tools & Education</a>
              </li>
              <li>
                <a href="#">Company</a>
              </li>
            </ul>
          </div>

          {/* Right section: Auth Buttons and Mobile Menu Toggle */}
          <div className="ml-auto flex items-center">
            {/* Auth Buttons */}
            <div className={`
              hidden items-center gap-5
              lg:flex
            `}
            >
              <LoginButton />
              <RegisterButton />
            </div>

            {/* Mobile menu toggle */}
            <div className={`
              ml-4 flex items-center gap-4
              lg:hidden
            `}
            >
              <LoginButton size="sm" className="text-sm" />
              <Language />
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className={`
            absolute top-full right-0 left-0 z-50 flex h-full min-h-[70vh]
            flex-col bg-foreground px-33 py-4
            lg:hidden
          `}
          >
            <div className="flex flex-col gap-6">
              <a href="#">Markets</a>
              <a href="#">Trading</a>
              <a href="#">Investing</a>
              <a href="#">Tools & Education</a>
              <a href="#">Company</a>
            </div>
            <div className="mt-auto flex flex-col gap-2">
              <RegisterButton />
              <LoginButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
