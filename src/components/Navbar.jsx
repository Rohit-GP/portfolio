import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // useEffect: track scroll position to add a subtle shadow/border once the
  // page has moved past the hero, like a sticky IDE tab bar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          <span className="navbar__logo-bracket">{'<'}</span>
          GPR
          <span className="navbar__logo-bracket">{'/>'}</span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>  
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/resume.pdf"
          className="navbar__cta navbar__cta--desktop"
          target="_blank"
        >
          Resume
        </a>

        <button
          className="navbar__menu-btn"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <nav className="navbar__links navbar__links--mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="navbar__cta"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar
