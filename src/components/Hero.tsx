import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import styles from './Hero.module.css'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const statementRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    // Complex entrance animation
    tl.from(nameRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.3
    })
    .from(taglineRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8
    }, '-=0.6')
    .from(statementRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8
    }, '-=0.4')
    .from(ctaRef.current?.children || [], {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.2
    }, '-=0.4')

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (heroRef.current) {
        gsap.to(heroRef.current, {
          y: scrollY * 0.5,
          duration: 0.3
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageContainer}>
        <img
          src="/images/header-image/header.jpg"
          alt="Jerome Hunter"
          className={styles.heroImage}
          onError={(e) => {
            // Fallback gradient if image not found
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
        <div className={styles.overlay}></div>
      </div>
      <div ref={heroRef} className={styles.content}>
        <p ref={taglineRef} className={styles.tagline}>Creative Director & UX/UI Designer</p>
        <h1 ref={nameRef} className={styles.name}>Jerome<br/>Hunter</h1>
        <p ref={statementRef} className={styles.statement}>
          Crafting compelling visual experiences that connect brands with audiences
        </p>
        <div ref={ctaRef} className={styles.cta}>
          <a href="#portfolio" className={styles.ctaButton}>View Work</a>
          <a href="#contact" className={styles.ctaButtonSecondary}>Get In Touch</a>
        </div>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  )
}

export default Hero
