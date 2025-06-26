import { useState } from 'react'

export function useMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen((open) => !open)
  const closeMenu = () => setMenuOpen(false)
  return { menuOpen, toggleMenu, closeMenu }
}
