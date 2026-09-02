import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Projects from "./components/Projects.jsx"
function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Projects />
        <section id="contact">
          <h2>Contact</h2>
        </section>
      </main>
    </>
  )
}

export default App