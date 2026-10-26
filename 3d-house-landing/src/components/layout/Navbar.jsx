import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navbar.css'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  /* =====================================================
     NAVBAR SCROLL STATE
     ===================================================== */

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

  /* =====================================================
     CLOSE MENU WHEN ROUTE CHANGES
     ===================================================== */

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  /* =====================================================
     PREVENT BACKGROUND SCROLL WHEN MENU IS OPEN
     ===================================================== */

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  /* =====================================================
     CLOSE MENU WITH ESCAPE
     ===================================================== */

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [menuOpen])

  return (
    <header
      className={`navbar ${
        scrolled ? 'navbar--scrolled' : ''
      } ${menuOpen ? 'navbar--menu-open' : ''}`}
    >

      {/* ================================================
          BRAND
          ================================================ */}

      <Link
        className="navbar__brand"
        to="/"
        aria-label="Premium Lining Solutions home"
        onClick={() => setMenuOpen(false)}
      >
        <img
          className="navbar__logo"
          src="/images/logos/pls-logo.svg"
          alt="Premium Lining Solutions"
        />
      </Link>

      {/* ================================================
          DESKTOP NAVIGATION
          ================================================ */}

      <nav
        className="navbar__nav"
        aria-label="Main navigation"
      >
        {navigation.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={
              location.pathname === item.to ? 'active' : ''
            }
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* ================================================
          DESKTOP CTA
          ================================================ */}

      <Link
        className="navbar__cta"
        to="/contact#enquiry"
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
      </Link>

      {/* ================================================
          MOBILE MENU TOGGLE
          ================================================ */}

      <button
        type="button"
        className={`navbar__toggle ${
          menuOpen ? 'navbar__toggle--active' : ''
        }`}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {/* ================================================
          MOBILE NAVIGATION
          ================================================ */}

      <nav
        id="mobile-navigation"
        className={`navbar__mobile ${
          menuOpen ? 'navbar__mobile--open' : ''
        }`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="navbar__mobile-inner">

          <span className="navbar__mobile-eyebrow">
            PREMIUM LINING SOLUTIONS
          </span>

          <div className="navbar__mobile-links">
            {navigation.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                className={`navbar__mobile-link ${
                  location.pathname === item.to ? 'active' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span className="navbar__mobile-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span>{item.label}</span>

                <span
                  className="navbar__mobile-arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <Link
            to="/contact#enquiry"
            className="navbar__mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            <span>START A PROJECT</span>
            <span aria-hidden="true">→</span>
          </Link>

          <div className="navbar__mobile-footer">
            <span>FROM FRAME TO FINISH</span>
            <span>PLS © {new Date().getFullYear()}</span>
          </div>

        </div>
      </nav>

    </header>
  )
}

export default Navbar