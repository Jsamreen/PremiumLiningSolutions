import './Footer.css'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'Systems', href: '#systems' },
  { label: 'Materials', href: '/materials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '#contact' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">

      <div className="footer__inner">

        {/* =========================================
            TOP
            ========================================= */}

        <div className="footer__top">

          {/* BRAND */}

          <div className="footer__brand">

            <a
              href="/"
              className="footer__logo"
              aria-label="Premium Lining Solutions home"
            >
              <img
                src="/images/pls-logo.png"
                alt="Premium Lining Solutions"
                className="footer__logo-image"
              />
            </a>

            <p className="footer__tagline">
              Complete lining solutions.
              <br />
              From frame to finish.
            </p>

          </div>


          {/* NAVIGATION */}

          <div className="footer__column">

            <span className="footer__label">
              NAVIGATION
            </span>

            <nav
              className="footer__nav"
              aria-label="Footer navigation"
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                >
                  {item.label}

                  <span aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </nav>

          </div>


          {/* CONTACT */}

          <div className="footer__column">

            <span className="footer__label">
              CONTACT
            </span>

            <div className="footer__contact">

              <a href="tel:+61451215223">
                0451 215 223
              </a>

              <a href="mailto:orders@premiumliningsolutions.com.au">
                orders@premiumliningsolutions.com.au
              </a>

              <p>
                Melbourne, Victoria
                <br />
                Australia
              </p>

            </div>

          </div>


          {/* PROJECT CTA */}

          <div className="footer__column footer__project">

            <span className="footer__label">
              HAVE A PROJECT?
            </span>

            <p>
              Talk to our team about your
              next lining package.
            </p>

            <a
              href="mailto:orders@premiumliningsolutions.com.au"
              className="footer__project-link"
            >
              START A PROJECT

              <span aria-hidden="true">
                →
              </span>
            </a>

          </div>

        </div>


        {/* =========================================
            DIVIDER
            ========================================= */}

        <div
          className="footer__divider"
          aria-hidden="true"
        />


        {/* =========================================
            BOTTOM
            ========================================= */}

        <div className="footer__bottom">

          <p>
            © {currentYear} Premium Lining Solutions.
            All rights reserved.
          </p>


          <div className="footer__bottom-center">
            <span>
              MELBOURNE
            </span>

            <span className="footer__dot">
              •
            </span>

            <span>
              VICTORIA
            </span>
          </div>


          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }}
          >
            BACK TO TOP ↑
          </a>

        </div>

      </div>

    </footer>
  )
}

export default Footer