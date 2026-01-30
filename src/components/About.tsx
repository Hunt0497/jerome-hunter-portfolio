import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './About.module.css'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      // Content fade in
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      // Stats counter animation
      gsap.from(statsRef.current?.children || [], {
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 ref={titleRef} className={styles.title}>About Me</h2>
            <div ref={contentRef}>
              <p className={styles.description}>
                With over 18 years of experience in visual communication and brand strategy,
                I specialize in creating compelling designs that resonate with audiences and
                drive business results.
              </p>
              <p className={styles.description}>
                My expertise spans graphic design, UX/UI design, web development, and creative
                direction. I've had the privilege of working with major brands including Red Stripe,
                NCB Jamaica, Digicel, and BMA, delivering innovative solutions across print, digital,
                and environmental design.
              </p>
              <p className={styles.description}>
                I believe in the power of thoughtful design to transform brands and create meaningful
                connections with people. Every project is an opportunity to tell a story, solve a
                problem, and make an impact.
              </p>
            </div>
          </div>
          <div ref={statsRef} className={styles.stats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>18+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Campaigns Delivered</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Major Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
