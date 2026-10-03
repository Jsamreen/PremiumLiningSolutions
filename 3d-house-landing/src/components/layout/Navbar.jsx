import './Navbar.css'

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__brand" href="/" aria-label="Home">
        FORMA
      </a>

      <nav className="navbar__nav" aria-label="Main navigation">
        <a href="#explore">Explore</a>
        <a href="#materials">Materials</a>
        <a href="#about">About</a>
      </nav>

      <a className="navbar__cta" href="#contact">
        Start a project
        <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Navbar