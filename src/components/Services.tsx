import { motion } from 'framer-motion'
import { useInView } from './useInView'
import styles from './Services.module.css'

const services = [
  {
    title: 'Visual Design',
    items: [
      'Branding & Identity',
      'Layout & Typography',
      'Production Design',
      'Packaging Design',
      'Digital & Print Assets',
    ],
  },
  {
    title: 'UX/UI Design',
    items: [
      'User Experience Design',
      'Wireframing & Prototyping',
      'Responsive Web Design',
      'Design Systems',
      'Accessibility Standards',
    ],
  },
  {
    title: 'Web Development',
    items: [
      'HTML, CSS, JavaScript',
      'React & Modern Frameworks',
      'Responsive Layouts',
      'Web Standards',
      'Performance Optimization',
    ],
  },
  {
    title: 'Creative Direction',
    items: [
      'Concept Development',
      'Campaign Strategy',
      'Team Leadership',
      'Production Support',
      'Visual Problem-Solving',
    ],
  },
]

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="services" className={styles.services} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>SERVICES</h2>
          <p className={styles.subtitle}>What I Do</p>
        </motion.div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={styles.serviceCard}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <ul className={styles.serviceList}>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
