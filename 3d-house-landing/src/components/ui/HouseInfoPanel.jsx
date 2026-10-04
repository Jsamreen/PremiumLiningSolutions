import { AnimatePresence, motion } from 'motion/react'
import houseParts from '../../data/houseParts'
import './HouseInfoPanel.css'

function HouseInfoPanel({ selectedPart, onClose }) {
  const part = selectedPart
    ? houseParts[selectedPart]
    : null

  return (
    <AnimatePresence>
      {part && (
        <motion.aside
          className="house-info"
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 12,
            scale: 0.98,
          }}
          transition={{
            duration: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          aria-live="polite"
        >
          <button
            className="house-info__close"
            type="button"
            onClick={onClose}
            aria-label="Close house information"
          >
            ×
          </button>

          <div className="house-info__number">
            {part.number}
          </div>

          <p className="house-info__category">
            {part.category}
          </p>

          <h2 className="house-info__title">
            {part.name}
          </h2>

          <p className="house-info__description">
            {part.description}
          </p>

          <button
            className="house-info__link"
            type="button"
          >
            Explore system
            <span aria-hidden="true">→</span>
          </button>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default HouseInfoPanel