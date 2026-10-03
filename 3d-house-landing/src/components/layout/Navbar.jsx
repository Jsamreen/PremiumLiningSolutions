import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a
        className="navbar__brand"
        href="#home"
        aria-label="Premium Lining Solutions home"
      >
        <span className="navbar__monogram" aria-hidden="true">
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

      <nav className="navbar__nav" aria-label="Main navigation">
        <a className="active" href="#home">
          Home
        </a>

        <a href="#systems">Systems</a>
        <a href="#materials">Materials</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <a className="navbar__cta" href="#contact">
        Start a project
        <span aria-hidden="true">→</span>
      </a>
    </header>
  )
}

export default Navbar