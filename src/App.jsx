import { useEffect } from 'react'
import Lenis from 'lenis'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Automation from './components/Automation.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    let raf
    const loop = (time) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects />
        <Automation />
        <Contact />
      </main>
    </div>
  )
}
