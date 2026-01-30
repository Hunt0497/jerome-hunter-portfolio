import { motion } from 'framer-motion'
import { useInView } from './useInView'
import styles from './Brands.module.css'

const brands = [
  { name: 'BMA', logo: '/images/logo-brands-worked-on/bma-logo.svg' },
  { name: 'Brunswick', logo: '/images/logo-brands-worked-on/brunswick-logo.svg' },
  { name: 'Digicel', logo: '/images/logo-brands-worked-on/digicel-logo.svg' },
  { name: 'NCB Jamaica', logo: '/images/logo-brands-worked-on/ncb-jamaica-logo.svg' },
  { name: 'Red Stripe', logo: '/images/logo-brands-worked-on/redstripe-logo.svg' },
  { name: 'Tastee Cheese', logo: '/images/logo-brands-worked-on/tastee-cheese-logo.svg' },
  { name: 'Walkerswood', logo: '/images/logo-brands-worked-on/walkerswood-logo.svg' },
]

const Brands = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section className={styles.brands} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className={styles.subtitle}>TRUSTED BY LEADING BRANDS</p>
          <h2 className={styles.title}>Clients</h2>
        </motion.div>

        <div className={styles.grid}>
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              className={styles.brandItem}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img src={brand.logo} alt={brand.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Brands
