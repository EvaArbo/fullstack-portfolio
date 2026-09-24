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
      "resume",
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


  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener(
      "keydown",
      handleEscape,
    )

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape,
      )
    }
  }, [])


  return (
    <nav
      className="navbar"
      aria-label="Primary navigation"
    >

      <a
        href="#home"
        className="navbar-logo"
        onClick={closeMenu}
        aria-label="Eva Arbo - Home"
      >
        Arbogasti ♥
      </a>


      <button
        type="button"
        className={`menu-toggle ${
          isMenuOpen ? "open" : ""
        }`}
        onClick={toggleMenu}
        aria-label={
          isMenuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>


      <ul
        id="primary-navigation"
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
            aria-current={
              activeSection === "home"
                ? "location"
                : undefined
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
            aria-current={
              activeSection === "about"
                ? "location"
                : undefined
            }
            onClick={closeMenu}
          >
            About
          </a>
        </li>


        <li>
          <a
            href="#resume"
            className={
              activeSection === "resume"
                ? "active"
                : ""
            }
            aria-current={
              activeSection === "resume"
                ? "location"
                : undefined
            }
            onClick={closeMenu}
          >
            Resume
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
            aria-current={
              activeSection === "projects"
                ? "location"
                : undefined
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
            aria-current={
              activeSection === "contact"
                ? "location"
                : undefined
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