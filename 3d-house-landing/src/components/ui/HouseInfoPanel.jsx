import { AnimatePresence, motion } from 'motion/react'
import { houseParts } from '../../data/houseParts'
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
          aria-live="polite"
          initial={{
            opacity: 0,
            x: 30,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: 20,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="house-info__header">

            <span className="house-info__number">
              {part.number}
            </span>

            <button
              type="button"
              className="house-info__close"
              onClick={onClose}
              aria-label="Close information panel"
            >
              ×
            </button>

          </div>

          <p className="house-info__label">
            {part.label}
          </p>

          <h2>
            {part.title}
          </h2>

          <p className="house-info__description">
            {part.description}
          </p>

          <button
            type="button"
            className="house-info__explore"
          >
            Explore material

            <span aria-hidden="true">→</span>
          </button>

        </motion.aside>
      )}
    </AnimatePresence>
  )
}

export default HouseInfoPanel