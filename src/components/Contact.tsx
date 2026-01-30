import { motion } from 'framer-motion'
import { useInView } from './useInView'
import styles from './Contact.module.css'

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>LET'S WORK TOGETHER</h2>
          <p className={styles.subtitle}>
            Ready to bring your project to life? Let's connect.
          </p>

          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span className={styles.label}>Email</span>
              <a href="mailto:designerjeromehunter@gmail.com" className={styles.value}>
                designerjeromehunter@gmail.com
              </a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Phone</span>
              <a href="tel:437-876-1469" className={styles.value}>
                437-876-1469
              </a>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>Location</span>
              <span className={styles.value}>Orléans, Ottawa, ON, Canada</span>
            </div>
          </div>

          <div className={styles.cta}>
            <a href="mailto:designerjeromehunter@gmail.com" className={styles.ctaButton}>
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p>&copy; 2026 Jerome Hunter. All rights reserved.</p>
          <p className={styles.footerNote}>
            UX, Digital Design | Visual Communication
          </p>
        </div>
      </footer>
    </section>
  )
}

export default Contact
