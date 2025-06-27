import { Menu } from 'lucide-react'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import LoginButton from './Bottom/LoginButton'
import HeaderActions from './HeaderActions'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import Language from './Language'
import MobileMenu from './MobileMenu'

function NavBar() {
  const { menuOpen, toggleMenu, closeMenu } = useMobileMenu()

  return (
    <nav className="sticky top-0 z-50 flex bg-hfm-bg-black text-hfm-white">
      <div className={`
        mx-6 flex w-full max-w-[82.5rem] items-center pt-2 pb-6
        lg:mx-8
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
            <HeaderLogo />
            <HeaderNav />
          </div>

          {/* Right section: Auth Buttons and Mobile Menu Toggle */}
          <div className="ml-auto flex items-center">
            <HeaderActions />

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
                onClick={toggleMenu}
                className="cursor-pointer"
                aria-label="Open mobile menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <MobileMenu open={menuOpen} onClose={closeMenu} />
      </div>
    </nav>
  )
}

export default NavBar
