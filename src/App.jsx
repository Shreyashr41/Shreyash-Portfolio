import ScrollProgress from "./components/ScrollProgress"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Gallery from "./components/Gallery"
import Communities from "./components/Communities"
import Experience from "./components/Experience"
import About from "./components/About"
import Project from "./components/Project"
import Achievements from "./components/Achievements"
import Contact from "./components/Contact"

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Gallery />
        <Communities />
        <Experience />
        <About />
        <Project />
        <Achievements />
        <Contact />
      </main>
    </>
  )
}
