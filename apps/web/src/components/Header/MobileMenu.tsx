import LoginButton from './Bottom/LoginButton'
import RegisterButton from './Bottom/RegisterButton'
import { links } from './headerData'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

function MobileMenu({ open, onClose }: MobileMenuProps) {
  if (!open) {
    return null
  }
  return (
    <div
      className={`
        absolute top-full right-0 left-0 z-50 -mt-1 flex h-full min-h-[70vh]
        flex-col bg-foreground px-6 py-4
        lg:hidden
      `}
      onClick={onClose}
    >
      <div className="flex flex-col gap-8">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="py-2">
            {link.label}
          </a>
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <RegisterButton />
        <LoginButton />
      </div>
    </div>
  )
}

export default MobileMenu
