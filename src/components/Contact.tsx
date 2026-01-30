import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Contact.module.css'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from(infoRef.current?.children || [], {
        scrollTrigger: {
          trigger: infoRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 ref={titleRef} className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>

          <div ref={infoRef} className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <div className={styles.label}>Email</div>
              <a href="mailto:hunt0497@algonquinlive.com" className={styles.value}>
                hunt0497@algonquinlive.com
              </a>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.label}>Phone</div>
              <a href="tel:+18763638945" className={styles.value}>
                +1 (876) 363-8945
              </a>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.label}>Location</div>
              <div className={styles.value}>Kingston, Jamaica</div>
            </div>
          </div>

          <div className={styles.cta}>
            <a href="mailto:hunt0497@algonquinlive.com" className={styles.ctaButton}>
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2024 Jerome Hunter. All rights reserved.</p>
          <p className={styles.footerNote}>Designed & developed with passion</p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
