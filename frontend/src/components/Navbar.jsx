import { useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <a
        href="#home"
        className="navbar-logo"
        onClick={closeMenu}
      >
        Arbogasti ♥
      </a>

      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar