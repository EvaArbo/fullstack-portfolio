import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Arbogasti</h2>

      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar