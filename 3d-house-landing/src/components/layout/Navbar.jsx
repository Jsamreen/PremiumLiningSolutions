import { useEffect, useState } from 'react'
import {
  Link,
  useLocation,
} from 'react-router-dom'

import './Navbar.css'


function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  const location = useLocation()

  const isHome = location.pathname === '/'
  const isAbout = location.pathname === '/about'
  const isArchitecturalSystems = location.pathname === '/architectural-systems'
  const isContact = location.pathname === '/contact'



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


  return (
    <header
      className={`navbar ${
        scrolled ? 'navbar--scrolled' : ''
      }`}
    >

      {/* =================================================
          BRAND
          ================================================= */}

      <Link
        className="navbar__brand"
        to="/"
        aria-label="Premium Lining Solutions home"
      >
        <img
          className="navbar__logo"
          src="/images/pls-logo.png"
          alt="Premium Lining Solutions"
        />
      </Link>


      {/* =================================================
          DESKTOP NAVIGATION
          ================================================= */}

      <nav
        className="navbar__nav"
        aria-label="Main navigation"
      >

        <Link
          to="/"
          className={isHome ? 'active' : ''}
        >
          Home
        </Link>

        <Link
          to="/architectural-systems"
          className={isArchitecturalSystems ? 'active' : ''}
        >
          Architectural Systems
        </Link>

        <Link
          to="/about"
          className={isAbout ? 'active' : ''}
        >
          About
        </Link>

        <Link
          to="/contact"
          className={isContact ? 'active' : ''}
        >
          Contact
        </Link>

      </nav>


      {/* =================================================
          START PROJECT CTA
          ================================================= */}

      <Link
        className="navbar__cta"
        to="/contact"
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

    </header>
  )
}


export default Navbar