import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import styles from './Navigation.module.css'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Animate navigation on mount
    gsap.from(navRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>JEROME HUNTER</a>
        <div className={styles.links}>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
