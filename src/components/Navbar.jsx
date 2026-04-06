import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Experience', 'Skills', 'Projects', 'Achievements', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      sections.forEach(sec => {
        if (!sec) return
        const rect = sec.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) setActive(sec.id)
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="logo-initials">BR</span>
          <span className="logo-name">Balamurugan</span>
        </div>

        <ul className="nav-links">
          {links.map(link => (
            <li key={link}>
              <button
                className={`nav-link ${active === link.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollTo(link)}
              >
                {link}
                <span className="nav-underline" />
              </button>
            </li>
          ))}
        </ul>

        <a
          href="mailto:muruganrajendran23@gmail.com"
          className="nav-cta"
        >
          Hire Me
        </a>

        <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <ul>
          {links.map(link => (
            <li key={link}>
              <button onClick={() => scrollTo(link)}>{link}</button>
            </li>
          ))}
        </ul>
        <a href="mailto:muruganrajendran23@gmail.com" className="mobile-cta">Hire Me</a>
      </div>
    </>
  )
}
