import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

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