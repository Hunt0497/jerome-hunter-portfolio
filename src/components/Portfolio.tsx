import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from './useInView'
import styles from './Portfolio.module.css'

const portfolioData = {
  graphicDesign: [
    { image: '/images/graphic-design/billboards/ncb/easy-safe-free-board1.png', title: 'NCB - Easy Safe Free Campaign' },
    { image: '/images/graphic-design/billboards/redstripe/cash-back-bottles.png', title: 'Red Stripe - Cash Back Bottles' },
    { image: '/images/graphic-design/billboards/redstripe/just-right-1.png', title: 'Red Stripe - Just Right' },
    { image: '/images/graphic-design/billboards/walkerswood/airport-round-about-board.jpg', title: 'Walkerswood - Airport Billboard' },
    { image: '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad1.png', title: 'NCB Insurance Campaign' },
    { image: '/images/graphic-design/press-design/tastee/jamaica-nice.jpeg', title: 'Tastee - Jamaica Nice' },
    { image: '/images/graphic-design/other-marketing-materials/tastee-poster-design.png', title: 'Tastee Poster Design' },
    { image: '/images/graphic-design/vehicle-wraps/associated-manufacturers/truck-front.png', title: 'Vehicle Wrap Design' },
  ],
  webDevelopment: [
    {
      image: '/images/website-development/my-coffee-house/my-coffee-house.png',
      title: 'My Coffee House',
      github: 'https://github.com/yourusername/my-coffee-house',
    },
    {
      image: '/images/website-development/verdance-recipe-website/verdance-cover.png',
      title: 'Verdance Recipe Website',
      github: 'https://github.com/yourusername/verdance-recipe',
    },
  ],
  uxui: [
    {
      image: '/images/ux-ui-designs/j&J-Presentation/j&j-app.png',
      title: 'J&J App Design',
      figma: 'https://www.figma.com/file/yourid/jj-app',
    },
    {
      image: '/images/ux-ui-designs/verdance-Restaurant-Project/verdance-cover.png',
      title: 'Verdance Restaurant Project',
      figma: 'https://www.figma.com/file/yourid/verdance-restaurant',
    },
    {
      image: '/images/ux-ui-designs/vision-signs/vision-signs-cover.png',
      title: 'Vision Signs',
      figma: 'https://www.figma.com/file/yourid/vision-signs',
    },
  ],
}

type Category = 'graphicDesign' | 'webDevelopment' | 'uxui'

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState<Category>('graphicDesign')

  const categories = [
    { key: 'graphicDesign' as Category, label: 'Graphic Design' },
    { key: 'webDevelopment' as Category, label: 'Website Development' },
    { key: 'uxui' as Category, label: 'UX/UI Design' },
  ]

  return (
    <section id="portfolio" className={styles.portfolio} ref={ref}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>PORTFOLIO</h2>
          <p className={styles.subtitle}>Selected Works</p>
        </motion.div>

        <motion.div
          className={styles.filters}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              className={`${styles.filterButton} ${
                activeCategory === category.key ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category.key)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className={styles.grid}>
          {portfolioData[activeCategory].map((item, index) => (
            <motion.div
              key={index}
              className={styles.portfolioItem}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  {'github' in item && item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButton}
                    >
                      View GitHub
                    </a>
                  )}
                  {'figma' in item && item.figma && (
                    <a
                      href={item.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButton}
                    >
                      View Figma
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
