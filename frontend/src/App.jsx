import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import About from "./components/About.jsx"
import Resume from "./components/Resume.jsx"
import Projects from "./components/Projects.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Resume />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App