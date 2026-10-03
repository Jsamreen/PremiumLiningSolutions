import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

import HouseScene from '../../components/three/HouseScene'
import HouseInfoPanel from '../../components/ui/HouseInfoPanel'

import './Hero.css'

function Hero() {
  const reduceMotion = useReducedMotion()
  const [selectedPart, setSelectedPart] = useState(null)

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section
      id="home"
      className="hero"
      aria-labelledby="hero-title"
    >
      {/* HERO COPY */}
      <div className="hero__content">
        <motion.p
          className="hero__eyebrow"
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          COMPLETE LINING SOLUTIONS
        </motion.p>

        <motion.h1
          id="hero-title"
          className="hero__title"
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          From frame
          <br />
          to <em>finish.</em>
        </motion.h1>

        <motion.p
          className="hero__description"
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.7,
            delay: 0.18,
          }}
        >
          Explore the systems, materials and craftsmanship behind
          a complete Premium Lining Solutions build.
        </motion.p>

        <motion.a
          href="#explore"
          className="hero__button"
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.6,
            delay: 0.28,
          }}
        >
          Explore the house
          <span aria-hidden="true">→</span>
        </motion.a>
      </div>

      {/* INTERACTIVE 3D HOUSE */}
      <div className="hero__visual">
        <div className="hero__canvas">
          <HouseScene
            selectedPart={selectedPart}
            onSelect={setSelectedPart}
          />
        </div>

        <HouseInfoPanel
          selectedPart={selectedPart}
          onClose={() => setSelectedPart(null)}
        />

        <p
          className="hero__interaction"
          aria-hidden="true"
        >
          <span>DRAG TO ROTATE</span>
          <span className="hero__interaction-dot">·</span>
          <span>SCROLL TO ZOOM</span>
        </p>
      </div>
    </section>
  )
}

export default Hero