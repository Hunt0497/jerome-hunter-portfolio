import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Brands from './components/Brands'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href')!)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      })
    })
  }, [])

  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Brands />
      <Portfolio />
      <Services />
      <Contact />
    </>
  )
}

export default App
