import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from './useInView'
import styles from './Portfolio.module.css'
import GraphicDesignGallery from './GraphicDesignGallery'

// Ensures assets work both locally and on GitHub Pages (repo subpath)
const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const portfolioData = {
  graphicDesign: [
    {
      image: asset('images/graphic-design/product-design/bronte/relish.png'),
      title: 'Product Design',
      categoryIndex: 0
    },
    {
      image: asset('images/graphic-design/vehicle-wraps/associated-manufacturers/truck-back.png'),
      title: 'Vehicle Wrap Design',
      categoryIndex: 1
    },
    {
      image: asset('images/graphic-design/billboards/stratus/board-1.png'),
      title: 'Billboards Design',
      categoryIndex: 2
    },
    {
      image: asset('images/graphic-design/press-design/brunswick/brunswick-press-poster.png'),
      title: 'Press & Poster Design',
      categoryIndex: 3
    },
    {
      image: asset('images/graphic-design/press-design/grace/mackerel-1.png'),
      title: 'Other Marketing Materials',
      categoryIndex: 4
    },
  ],
  webDevelopment: [
    {
      image: asset('images/website-development/my-coffee-house/my-coffee-house-2.png'),
      title: 'My Coffee House',
      website: 'https://hunt0497.github.io/mtm6201-midterm/',
      github: 'https://github.com/Hunt0497/mtm6201-midterm',
    },
    {
      image: asset('images/website-development/verdance-recipe-website/verdance-cover-2.png'),
      title: 'Verdance Recipe Website',
      website: 'https://hunt0497.github.io/mtm6201-final/',
      github: 'https://github.com/Hunt0497/mtm6201-final',
    },
  ],
  uxui: [
    {
      image: asset('images/ux-ui-designs/j&J-Presentation/j&j-app.png'),
      title: 'J&J App Design',
      prototype: 'https://www.figma.com/slides/DrW6WyBSdeFp9rG6BUWY8P/J-J-Presentation?node-id=1-25&t=aiMZ8f0X8EGA8M3x-1',
      figma: 'https://www.figma.com/design/ufdcsGBJi5ro9KVc8aJtGV/Final-Project?node-id=129-666&t=ldSpb7isjspxwhK5-1',
    },
    {
      image: asset('images/ux-ui-designs/verdance-Restaurant-Project/verdance-cover-2.png'),
      title: 'Verdance Restaurant Project',
      prototype: 'https://www.figma.com/proto/4ntnyVX3ddBszx7Zg2s03R/Verdance-Restaurant-Project?node-id=2199-3514&p=f&t=opDCDxotqN5QEvU8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2199%3A3514&show-proto-sidebar=1',
      figma: 'https://www.figma.com/design/4ntnyVX3ddBszx7Zg2s03R/Verdance-Restaurant-Project?node-id=2049-761&t=3vtfqeg5Yc0naLzn-1',
    },
    {
      image: asset('images/ux-ui-designs/vision-signs/vision-signs-cover-2.png'),
      title: 'Vision Signs',
      prototype: 'https://www.figma.com/proto/t7icEv6sEYu10rZhUNo8h8/VISION---A03-Website-Design-Project?page-id=0%3A1&node-id=1-7&p=f&viewport=132%2C210%2C0.62&t=32zyCcUEYyLRQ1SD-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A7&show-proto-sidebar=1',
      figma: 'https://www.figma.com/design/t7icEv6sEYu10rZhUNo8h8/VISION---A03-Website-Design-Project?node-id=0-1&t=RH0ISpO5P4ktj3Ro-1',
    },
  ],
  photography: [
    { image: asset('images/photography/hunter_j_portrait.jpg'), title: 'Portrait 1' },
    { image: asset('images/photography/hunter_j_portrait-2.jpg'), title: 'Portrait 2' },
    { image: asset('images/photography/hunter_j_portrait-3.jpg'), title: 'Portrait 3' },
    { image: asset('images/photography/hunter_j_portrait-4.jpg'), title: 'Portrait 4' },
    { image: asset('images/photography/hunter_j_portrait-5.jpg'), title: 'Portrait 5' },
    { image: asset('images/photography/hunter_j_portrait-6.jpg'), title: 'Portrait 6' },
    { image: asset('images/photography/hunter_j_portrait-7.jpg'), title: 'Portrait 7' },
    { image: asset('images/photography/hunter_j_portrait-8.jpg'), title: 'Portrait 8' },
    { image: asset('images/photography/hunter_j_portrait-9.jpg'), title: 'Portrait 9' },
    { image: asset('images/photography/hunter_j_portrait-10.jpg'), title: 'Portrait 10' },
    { image: asset('images/photography/hunter_j_DOF_01.jpg'), title: 'DOF 1' },
    { image: asset('images/photography/hunter_j_inital_01.jpg'), title: 'Initial 1' },
    { image: asset('images/photography/hunter_j_inital_04.jpg'), title: 'Initial 4' },
    { image: asset('images/photography/hunter_j_thursday-1.jpg'), title: 'Thursday 1' },
    { image: asset('images/photography/hunter_j_thursday-3.jpg'), title: 'Thursday 3' },
    { image: asset('images/photography/hunter_j_thursday-6.jpg'), title: 'Thursday 6' },
    { image: asset('images/photography/hunter_j_thursday-7.jpg'), title: 'Thursday 7' },
    { image: asset('images/photography/IMG_0025.JPG'), title: 'IMG 0025' },
    { image: asset('images/photography/IMG_0029.JPG'), title: 'IMG 0029' },
    { image: asset('images/photography/IMG_1161.jpg'), title: 'IMG 1161' },
  ],
}

type Category = 'graphicDesign' | 'webDevelopment' | 'uxui' | 'photography'

const Portfolio = () => {
  const [ref, isInView] = useInView({ threshold: 0.1 })
  const [activeCategory, setActiveCategory] = useState<Category>('graphicDesign')
  const [showGraphicGallery, setShowGraphicGallery] = useState(false)
  const [selectedGraphicCategory, setSelectedGraphicCategory] = useState<number | undefined>(undefined)
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  const categories = [
    { key: 'graphicDesign' as Category, label: 'Graphic Design' },
    { key: 'webDevelopment' as Category, label: 'Website Development' },
    { key: 'uxui' as Category, label: 'UX/UI Design' },
    { key: 'photography' as Category, label: 'Photography' },
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
              onClick={() => {
                if (activeCategory === 'graphicDesign' && 'categoryIndex' in item) {
                  setSelectedGraphicCategory(item.categoryIndex)
                  setShowGraphicGallery(true)
                } else if (activeCategory === 'photography') {
                  setFullscreenImage(item.image)
                }
              }}
              style={{ cursor: (activeCategory === 'graphicDesign' || activeCategory === 'photography') ? 'pointer' : 'default' }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  {activeCategory === 'graphicDesign' ? (
                    <button className={styles.projectButton}>
                      View Gallery
                    </button>
                  ) : activeCategory === 'photography' ? (
                    <button className={styles.projectButton}>
                      View Fullscreen
                    </button>
                  ) : (
                    <div className={styles.buttonGroup}>
                      {'website' in item && item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectButton}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Website
                        </a>
                      )}
                      {'github' in item && item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectButton}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View GitHub
                        </a>
                      )}
                      {'prototype' in item && item.prototype && (
                        <a
                          href={item.prototype}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectButton}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Prototype
                        </a>
                      )}
                      {'figma' in item && item.figma && (
                        <a
                          href={item.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.projectButton}
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Figma
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {showGraphicGallery && (
        <GraphicDesignGallery
          onClose={() => {
            setShowGraphicGallery(false)
            setSelectedGraphicCategory(undefined)
          }}
          initialCategory={selectedGraphicCategory}
        />
      )}

      {fullscreenImage && (
        <div
          className={styles.fullscreenOverlay}
          onClick={() => setFullscreenImage(null)}
        >
          <button
            className={styles.closeButton}
            onClick={() => setFullscreenImage(null)}
          >
            ×
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className={styles.fullscreenImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Portfolio
