import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from './Portfolio.module.css'
import GraphicDesignGallery from './GraphicDesignGallery'

gsap.registerPlugin(ScrollTrigger)

type Category = 'all' | 'graphic' | 'web' | 'ux'

interface WebProject {
  title: string
  image: string
  websiteUrl: string
  githubUrl: string
}

interface UXProject {
  title: string
  image: string
  prototypeUrl: string
  figmaUrl: string
}

const webProjects: WebProject[] = [
  {
    title: 'Verdance Recipe Website',
    image: '/images/website-development/verdance.jpg',
    websiteUrl: 'https://hunt0497.github.io/mtm6201-final/',
    githubUrl: 'https://github.com/Hunt0497/mtm6201-final'
  },
  {
    title: 'My Coffee House',
    image: '/images/website-development/coffee-house.jpg',
    websiteUrl: 'https://hunt0497.github.io/mtm6201-midterm/',
    githubUrl: 'https://github.com/Hunt0497/mtm6201-midterm'
  }
]

const uxProjects: UXProject[] = [
  {
    title: 'J&J App Design',
    image: '/images/ux-ui-designs/jj-app.jpg',
    prototypeUrl: 'https://www.figma.com/slides/DrW6WyBSdeFp9rG6BUWY8P/J-J-Presentation?node-id=1-25&t=aiMZ8f0X8EGA8M3x-1',
    figmaUrl: 'https://www.figma.com/design/ufdcsGBJi5ro9KVc8aJtGV/Final-Project?node-id=129-666&t=ldSpb7isjspxwhK5-1'
  },
  {
    title: 'Verdance Restaurant Project',
    image: '/images/ux-ui-designs/verdance-restaurant.jpg',
    prototypeUrl: 'https://www.figma.com/proto/4ntnyVX3ddBszx7Zg2s03R/Verdance-Restaurant-Project?node-id=2199-3514&p=f&t=opDCDxotqN5QEvU8-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2199%3A3514&show-proto-sidebar=1',
    figmaUrl: 'https://www.figma.com/design/4ntnyVX3ddBszx7Zg2s03R/Verdance-Restaurant-Project?node-id=2049-761&t=3vtfqeg5Yc0naLzn-1'
  },
  {
    title: 'Vision Signs',
    image: '/images/ux-ui-designs/vision-signs.jpg',
    prototypeUrl: 'https://www.figma.com/proto/t7icEv6sEYu10rZhUNo8h8/VISION---A03-Website-Design-Project?page-id=0%3A1&node-id=1-7&p=f&viewport=132%2C210%2C0.62&t=32zyCcUEYyLRQ1SD-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A7&show-proto-sidebar=1',
    figmaUrl: 'https://www.figma.com/design/t7icEv6sEYu10rZhUNo8h8/VISION---A03-Website-Design-Project?node-id=0-1&t=RH0ISpO5P4ktj3Ro-1'
  }
]

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [showGraphicGallery, setShowGraphicGallery] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        y: -50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (gridRef.current) {
      gsap.from(gridRef.current.children, {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      })
    }
  }, [activeCategory])

  const handleGraphicDesignClick = () => {
    setShowGraphicGallery(true)
  }

  const showAll = activeCategory === 'all'
  const showGraphic = activeCategory === 'graphic' || showAll
  const showWeb = activeCategory === 'web' || showAll
  const showUX = activeCategory === 'ux' || showAll

  return (
    <>
      <section ref={sectionRef} id="portfolio" className={styles.portfolio}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 ref={titleRef} className={styles.title}>Portfolio</h2>
            <p className={styles.subtitle}>Selected Works</p>
          </div>

          <div className={styles.filters}>
            <button
              className={`${styles.filterButton} ${activeCategory === 'all' ? styles.active : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button
              className={`${styles.filterButton} ${activeCategory === 'graphic' ? styles.active : ''}`}
              onClick={() => setActiveCategory('graphic')}
            >
              Graphic Design
            </button>
            <button
              className={`${styles.filterButton} ${activeCategory === 'web' ? styles.active : ''}`}
              onClick={() => setActiveCategory('web')}
            >
              Website Development
            </button>
            <button
              className={`${styles.filterButton} ${activeCategory === 'ux' ? styles.active : ''}`}
              onClick={() => setActiveCategory('ux')}
            >
              UX/UI Design
            </button>
          </div>

          <div ref={gridRef} className={styles.grid}>
            {/* Graphic Design Card */}
            {showGraphic && (
              <div className={styles.portfolioItem} onClick={handleGraphicDesignClick}>
                <div className={styles.imageWrapper}>
                  <img
                    src="/images/graphic-design/graphic-design-thumb.jpg"
                    alt="Graphic Design"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="800" height="500" fill="%23222"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="32">Graphic Design</text></svg>`
                    }}
                  />
                </div>
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>Graphic Design</h3>
                  <p className={styles.itemDescription}>Explore my graphic design portfolio</p>
                  <button className={styles.projectButton}>View Gallery</button>
                </div>
              </div>
            )}

            {/* Website Development Projects */}
            {showWeb && webProjects.map((project) => (
              <div key={project.title} className={styles.portfolioItem}>
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="800" height="500" fill="%23222"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="24">${project.title}</text></svg>`
                    }}
                  />
                </div>
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>{project.title}</h3>
                  <div className={styles.buttonGroup}>
                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Website
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButtonSecondary}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* UX/UI Design Projects */}
            {showUX && uxProjects.map((project) => (
              <div key={project.title} className={styles.portfolioItem}>
                <div className={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500"><rect width="800" height="500" fill="%23222"/><text x="50%" y="50%" text-anchor="middle" fill="%23fff" font-family="Arial" font-size="24">${project.title}</text></svg>`
                    }}
                  />
                </div>
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>{project.title}</h3>
                  <div className={styles.buttonGroup}>
                    <a
                      href={project.prototypeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButton}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Prototype
                    </a>
                    <a
                      href={project.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectButtonSecondary}
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Figma
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showGraphicGallery && (
        <GraphicDesignGallery onClose={() => setShowGraphicGallery(false)} />
      )}
    </>
  )
}

export default Portfolio
