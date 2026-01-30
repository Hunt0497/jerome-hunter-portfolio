import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Services.module.css'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    title: 'Visual Design',
    items: [
      'Brand Identity & Logo Design',
      'Marketing Collateral',
      'Print Design',
      'Packaging Design',
      'Environmental Graphics'
    ]
  },
  {
    title: 'UX/UI Design',
    items: [
      'User Research & Testing',
      'Wireframing & Prototyping',
      'Interface Design',
      'Design Systems',
      'Responsive Design'
    ]
  },
  {
    title: 'Web Development',
    items: [
      'HTML, CSS & JavaScript',
      'Responsive Websites',
      'Web Application Development',
      'Performance Optimization',
      'Accessibility Implementation'
    ]
  },
  {
    title: 'Creative Direction',
    items: [
      'Campaign Strategy',
      'Art Direction',
      'Visual Storytelling',
      'Brand Guidelines',
      'Team Leadership'
    ]
  }
]

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        rotationX: -90,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })

      gsap.from(gridRef.current?.children || [], {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 ref={titleRef} className={styles.title}>Services</h2>
          <p className={styles.subtitle}>What I Do</p>
        </div>
        <div ref={gridRef} className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <ul className={styles.serviceList}>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
