import ThreeBackground from './components/ThreeBackground.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Story from './components/Story.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data/content.js'

export default function App() {
  return (
    <>
      <ThreeBackground />
      <Nav />
      <main className="app">
        <Hero />
        <Story />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer>
        © {new Date().getFullYear()} {profile.name} · built with React, GSAP & Three.js
      </footer>
    </>
  )
}
