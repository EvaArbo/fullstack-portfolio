import { useEffect, useState } from "react"
import "./Navbar.css"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [activeSection, setActiveSection] = useState("home")

  function toggleMenu() {
    setIsMenuOpen((previousState) => !previousState)
  }

  function closeMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "projects",
      "contact",
    ]

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

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
        className={`menu-toggle ${
          isMenuOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul
        className={`navbar-links ${
          isMenuOpen ? "open" : ""
        }`}
      >
        <li>
          <a
            href="#home"
            className={
              activeSection === "home"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={
              activeSection === "about"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={
              activeSection === "projects"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={
              activeSection === "contact"
                ? "active"
                : ""
            }
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar