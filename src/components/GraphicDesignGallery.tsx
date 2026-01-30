import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styles from './GraphicDesignGallery.module.css'

interface Props {
  onClose: () => void
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
    images: [] // Will be populated from folder
  },
  {
    name: 'Vehicle Wrap Design',
    folder: 'vehicle-wraps',
    images: []
  },
  {
    name: 'Billboards Design',
    folder: 'billboards',
    images: []
  },
  {
    name: 'Press & Poster Design',
    folder: 'press-design',
    images: []
  },
  {
    name: 'Other Marketing Materials',
    folder: 'other-marketing-materials',
    images: []
  }
]

const GraphicDesignGallery = ({ onClose }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName)
  }

  const getImagesForCategory = (folder: string): string[] => {
    // Generate placeholder image paths
    // In a real implementation, these would be actual images from the folder
    const imageCount = 8 // Adjust based on actual folder contents
    return Array.from({ length: imageCount }, (_, i) =>
      `/images/graphic-design/${folder}/image-${i + 1}.jpg`
    )
  }

  const selectedCategoryData = categories.find(c => c.name === selectedCategory)
  const currentImages = selectedCategoryData ? getImagesForCategory(selectedCategoryData.folder) : []

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
              <div
                key={category.name}
                className={styles.categoryCard}
                onClick={() => handleCategoryClick(category.name)}
              >
                <div className={styles.categoryImage}>
                  <img
                    src={`/images/graphic-design/${category.folder}/thumb.jpg`}
                    alt={category.name}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="%23333"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="18">${category.name}</text></svg>`
                    }}
                  />
                </div>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>
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
                <div
                  key={index}
                  className={styles.galleryItem}
                >
                  <img
                    src={image}
                    alt={`${selectedCategory} ${index + 1}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="600" height="400" fill="%23444"/><text x="50%" y="50%" text-anchor="middle" fill="%23aaa" font-family="Arial" font-size="16">${selectedCategory} ${index + 1}</text></svg>`
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default GraphicDesignGallery
