import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section id="about">
          <h2>About Me</h2>
        </section>

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  )
}

export default App