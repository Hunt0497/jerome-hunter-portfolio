import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './PhotographyGallery.module.css'

interface Props {
  onClose: () => void
  images: string[]
}

const PhotographyGallery = ({ onClose, images }: Props) => {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className={styles.modalContent}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeButton} onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className={styles.header}>
          <h2 className={styles.title}>Photography</h2>
        </div>

        {images.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No photography images available yet.</p>
            <p className={styles.emptyHint}>Add images to /images/photography folder to display them here.</p>
          </div>
        ) : (
          <div className={styles.galleryGrid}>
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={styles.imageItem}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setFullscreenImage(image)}
              >
                <img src={image} alt={`Photography ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            className={styles.fullscreenOverlay}
            onClick={(e) => {
              e.stopPropagation()
              setFullscreenImage(null)
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className={styles.fullscreenClose}
              onClick={(e) => {
                e.stopPropagation()
                setFullscreenImage(null)
              }}
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
      </AnimatePresence>
    </motion.div>
  )
}

export default PhotographyGallery
