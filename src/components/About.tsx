import { motion } from 'framer-motion'
import { useInView } from './useInView'
import styles from './About.module.css'

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <h2 className={styles.title}>ABOUT</h2>
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.mainText}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className={styles.statement}>
              Building User-Focused Visual Experiences Since 2007
            </h3>
          </motion.div>

          <motion.div
            className={styles.description}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Designer with hands-on experience in visual communication, UX/UI design,
              and website development. Comfortable designing for print and digital,
              building responsive layouts, and delivering production-ready assets
              within established brand systems.
            </p>
            <p>
              Led teams directing visual execution for integrated campaigns across
              print, outdoor, digital, and social for major clients. Delivered over
              50+ campaigns with production-ready artwork for high-visibility placements.
            </p>
          </motion.div>

          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className={styles.stat}>
              <div className={styles.statNumber}>18+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Campaigns Delivered</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10+</div>
              <div className={styles.statLabel}>Major Clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
