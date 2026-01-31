import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './GraphicDesignGallery.module.css'

interface Props {
  onClose: () => void
  initialCategory?: number
}

interface Category {
  name: string
  folder: string
  images: string[]
}

const categories: Category[] = [
  {
    name: 'Product Design',
    folder: 'product-design',
    images: [
      '/images/graphic-design/product-design/dunsons/jam-jelly.png',
      '/images/graphic-design/product-design/bronte/relish.png',
      '/images/graphic-design/product-design/flavours-of-the-past/ackee-label.png',
      '/images/graphic-design/product-design/flavours-of-the-past/coffee-label.png',
      '/images/graphic-design/product-design/flavours-of-the-past/ginger-label.png',
      '/images/graphic-design/product-design/neuzotic/jack-fruit-juice.png',
      '/images/graphic-design/product-design/springvale/omg-dressing.png',
      '/images/graphic-design/product-design/springvale/vinaigrette.png'
    ]
  },
  {
    name: 'Vehicle Wrap Design',
    folder: 'vehicle-wraps',
    images: [
      '/images/graphic-design/vehicle-wraps/associated-manufacturers/truck-back.png',
      '/images/graphic-design/vehicle-wraps/associated-manufacturers/truck-front.png',
      '/images/graphic-design/vehicle-wraps/associated-manufacturers/truck-side-2.png',
      '/images/graphic-design/vehicle-wraps/associated-manufacturers/truck-side.png',
      '/images/graphic-design/vehicle-wraps/associated-manufacturers/van-back.jpg',
      '/images/graphic-design/vehicle-wraps/associated-manufacturers/van-front.jpg',
      '/images/graphic-design/vehicle-wraps/associated-manufacturers/van-side-1.jpg',
      '/images/graphic-design/vehicle-wraps/associated-manufacturers/van-side-2.jpg'
    ]
  },
  {
    name: 'Billboards Design',
    folder: 'billboards',
    images: [
      '/images/graphic-design/billboards/stratus/board-1.png',
      '/images/graphic-design/billboards/ncb/easy-safe-free-board1.png',
      '/images/graphic-design/billboards/redstripe/cash-back-bottles.png',
      '/images/graphic-design/billboards/redstripe/feel-the-music.png',
      '/images/graphic-design/billboards/redstripe/jamaica-50-wall-wrap.png',
      '/images/graphic-design/billboards/redstripe/just-right-1.png',
      '/images/graphic-design/billboards/redstripe/just-right-3.png',
      '/images/graphic-design/billboards/redstripe/light-building-graphic.png',
      '/images/graphic-design/billboards/redstripe/wall-display-beach-party.png',
      '/images/graphic-design/billboards/stratus/board-3.png',
      '/images/graphic-design/billboards/stratus/board-4.png',
      '/images/graphic-design/billboards/stratus/board-5.png',
      '/images/graphic-design/billboards/stratus/board-6.png',
      '/images/graphic-design/billboards/walkerswood/airport-departure-wall-board.png',
      '/images/graphic-design/billboards/walkerswood/airport-round-about-board.jpg'
    ]
  },
  {
    name: 'Press & Poster Design',
    folder: 'press-design',
    images: [
      '/images/graphic-design/press-design/brunswick/brunswick-press-poster.png',
      '/images/graphic-design/press-design/brunswick/brunswick-press-poster-2.png',
      '/images/graphic-design/press-design/brunswick/brunswick-press-poster-3.png',
      '/images/graphic-design/press-design/brunswick/brunswick-press-poster-4.png',
      '/images/graphic-design/press-design/first-global/through-Our-Eyes-1.png',
      '/images/graphic-design/press-design/first-global/through-Our-Eyes-2.png',
      '/images/graphic-design/press-design/first-global/through-Our-Eyes-3.png',
      '/images/graphic-design/press-design/grace/mackerel-1.png',
      '/images/graphic-design/press-design/grace/mackerel-2.png',
      '/images/graphic-design/press-design/grace/mackerel-3.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad1.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad2.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad3.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad4.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad5.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad6.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad7.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad8.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad9.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad10.png',
      '/images/graphic-design/press-design/ncb-insurance/insurance-campaign-ad11.png',
      '/images/graphic-design/press-design/ncb/easy-safe-free-campaign/easy-safe-free-1.png',
      '/images/graphic-design/press-design/ncb/easy-safe-free-campaign/easy-safe-free-2.png',
      '/images/graphic-design/press-design/ncb/easy-safe-free-campaign/easy-safe-free-3.png',
      '/images/graphic-design/press-design/ncb/rewards-campaign/rewards-1.png',
      '/images/graphic-design/press-design/ncb/rewards-campaign/rewards-2.png',
      '/images/graphic-design/press-design/ncb/rewards-campaign/rewards-3.png',
      '/images/graphic-design/press-design/ncb/safety-campaign/safety-press-1.png',
      '/images/graphic-design/press-design/ncb/safety-campaign/safety-press-2.png',
      '/images/graphic-design/press-design/ncb/safety-campaign/safety-press-3.png',
      '/images/graphic-design/press-design/ncb/safety-campaign/safety-press-4.png',
      '/images/graphic-design/press-design/ncb/safety-campaign/safety-press-5.png',
      '/images/graphic-design/press-design/ncb/self-serve-campaign/ss1.png',
      '/images/graphic-design/press-design/ncb/self-serve-campaign/ss2.png',
      '/images/graphic-design/press-design/ncb/self-serve-campaign/ss3.png',
      '/images/graphic-design/press-design/ncb/self-serve-campaign/ss4.png',
      '/images/graphic-design/press-design/ncb/self-serve-campaign/ss7.png',
      '/images/graphic-design/press-design/ncb/self-serve-campaign/ss8.png',
      '/images/graphic-design/press-design/ncb/self-serve-campaign/ss9.png',
      '/images/graphic-design/press-design/ncb/self-serve-campaign/ss10.png',
      '/images/graphic-design/press-design/stratus/access-more.png',
      '/images/graphic-design/press-design/stratus/do-more.png',
      '/images/graphic-design/press-design/stratus/earn-more.png',
      '/images/graphic-design/press-design/tastee/jamaica-nice.jpeg',
      '/images/graphic-design/press-design/tastee/taste-the-land-we-love-2.jpeg',
      '/images/graphic-design/press-design/tastee/taste-the-land-we-love.png'
    ]
  },
  {
    name: 'Other Marketing Materials',
    folder: 'other-marketing-materials',
    images: [
      '/images/graphic-design/press-design/grace/mackerel-1.png',
      '/images/graphic-design/other-marketing-materials/bma-poster.jpg',
      '/images/graphic-design/other-marketing-materials/caribbean-choice-sm1.png',
      '/images/graphic-design/other-marketing-materials/caribbean-choice-sm3.png',
      '/images/graphic-design/other-marketing-materials/easy-safe-free-banner.png',
      '/images/graphic-design/other-marketing-materials/farmer-brown-punch-poster1.png',
      '/images/graphic-design/other-marketing-materials/farmer-brown-punch-poster2.png',
      '/images/graphic-design/other-marketing-materials/ncb-saving-1.png',
      '/images/graphic-design/other-marketing-materials/ncb-saving-2.png',
      '/images/graphic-design/other-marketing-materials/ncb-saving-3.png',
      '/images/graphic-design/other-marketing-materials/tastee-poster-design.png',
      '/images/graphic-design/other-marketing-materials/tastee-shirt-design.png',
      '/images/graphic-design/other-marketing-materials/walkerswood_gs_graphic.png',
      '/images/graphic-design/other-marketing-materials/walkerswood_gs_wobbler.png',
      '/images/graphic-design/other-marketing-materials/walkerswood-green-seasoning.png'
    ]
  }
]

const GraphicDesignGallery = ({ onClose, initialCategory }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    initialCategory !== undefined ? categories[initialCategory].name : null
  )
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
  }

  const selectedCategoryData = categories.find(c => c.name === selectedCategory)
  const currentImages = selectedCategoryData ? selectedCategoryData.images : []

  return (
    <motion.div
      className={styles.overlay}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className={styles.title}>Graphic Design Portfolio</h2>

        {!selectedCategory ? (
          <div className={styles.categoryGrid}>
            {categories.map((category) => (
              <motion.div
                key={category.name}
                className={styles.categoryCard}
                onClick={() => handleCategoryClick(category.name)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className={styles.categoryImage}>
                  <img
                    src={category.images[0]}
                    alt={category.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23333"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="18">${category.name}</text></svg>`
                    }}
                  />
                </div>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className={styles.imageGallery}>
            <button
              className={styles.backButton}
              onClick={() => setSelectedCategory(null)}
            >
              ← Back to Categories
            </button>
            <h3 className={styles.galleryTitle}>{selectedCategory}</h3>
            <div className={styles.galleryGrid}>
              {currentImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={styles.galleryItem}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  onClick={() => setFullscreenImage(image)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={image}
                    alt={`${selectedCategory} ${index + 1}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="%23444"/><text x="50%" y="50%" text-anchor="middle" fill="%23aaa" font-family="Arial" font-size="16">${selectedCategory} ${index + 1}</text></svg>`
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {fullscreenImage && (
        <motion.div
          className={styles.fullscreenOverlay}
          onClick={() => setFullscreenImage(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            className={styles.fullscreenClose}
            onClick={() => setFullscreenImage(null)}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <img
            src={fullscreenImage}
            alt="Fullscreen view"
            className={styles.fullscreenImage}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </motion.div>
  )
}

export default GraphicDesignGallery
