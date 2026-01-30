import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Brands.module.css'

gsap.registerPlugin(ScrollTrigger)

const brands = [
  { name: 'BMA', logo: '/images/logo-brands-worked-on/bma.png' },
  { name: 'Brunswick', logo: '/images/logo-brands-worked-on/brunswick.png' },
  { name: 'Digicel', logo: '/images/logo-brands-worked-on/digicel.png' },
  { name: 'NCB Jamaica', logo: '/images/logo-brands-worked-on/ncb.png' },
  { name: 'Red Stripe', logo: '/images/logo-brands-worked-on/red-stripe.png' },
  { name: 'Tastee Cheese', logo: '/images/logo-brands-worked-on/tastee.png' },
  { name: 'Walkerswood', logo: '/images/logo-brands-worked-on/walkerswood.png' }
]

const Brands = () => {
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
        scale: 0.8,
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
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.brands}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Trusted By</p>
          <h2 ref={titleRef} className={styles.title}>Major Brands</h2>
        </div>
        <div ref={gridRef} className={styles.grid}>
          {brands.map((brand) => (
            <div key={brand.name} className={styles.brandItem}>
              <img
                src={brand.logo}
                alt={brand.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="80"><text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="%23666" font-family="Arial" font-size="16">${brand.name}</text></svg>`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
