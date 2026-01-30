import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.imageContainer}>
        <div className={styles.overlay}></div>
        <img
          src="/images/header-image/header-image.jpg"
          alt="Jerome Hunter"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className={styles.name}>
            JEROME
            <br />
            HUNTER
          </h1>
        </motion.div>

        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          UX, DIGITAL DESIGN | VISUAL COMMUNICATION
        </motion.p>

        <motion.div
          className={styles.statement}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p>Creating compelling visual experiences across digital and print</p>
        </motion.div>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#portfolio" className={styles.ctaButton}>
            View Work
          </a>
          <a href="#contact" className={styles.ctaButtonSecondary}>
            Get In Touch
          </a>
        </motion.div>
      </div>

      <motion.div
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <span>Scroll</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  )
}

export default Hero
