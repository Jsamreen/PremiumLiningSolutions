import { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      {/* BRAND */}

      <a
        className="navbar__brand"
        href="#home"
        aria-label="Premium Lining Solutions home"
      >
        <span
          className="navbar__monogram"
          aria-hidden="true"
        >
          PLS
        </span>

        <span className="navbar__brand-name">
          PREMIUM
          <br />
          LINING
          <br />
          SOLUTIONS
        </span>
      </a>

      {/* DESKTOP NAVIGATION */}

      <nav
        className="navbar__nav"
        aria-label="Main navigation"
      >
        <a
          className="active"
          href="#home"
        >
          Home
        </a>

        <a href="#systems">
          Systems
        </a>

        <a href="/materials">
          Materials
        </a>

        <a href="/about">
          About
        </a>

        <a href="#contact">
          Contact
        </a>
      </nav>

      {/* CTA */}

      <a
        className="navbar__cta"
        href="#contact"
      >
        <span className="navbar__cta-text">
          Start a project
        </span>

        <span
          className="navbar__cta-arrow"
          aria-hidden="true"
        >
          →
        </span>
      </a>
    </header>
  )
}

export default Navbar