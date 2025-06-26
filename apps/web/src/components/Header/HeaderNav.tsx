const navLinks = [
  { href: '#', label: 'Markets' },
  { href: '#', label: 'Trading' },
  { href: '#', label: 'Investing' },
  { href: '#', label: 'Tools & Education' },
  { href: '#', label: 'Company' },
]

function HeaderNav() {
  return (
    <nav>
      <ul className={`
        hidden items-center gap-9
        lg:flex
      `}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default HeaderNav
