import { links } from './headerData'

function HeaderNav() {
  return (
    <nav>
      <ul className={`
        hidden items-center gap-9
        lg:flex
      `}
      >
        {links.map((link) => (
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
