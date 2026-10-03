import { motion, useReducedMotion } from 'motion/react'
import HouseScene from '../../components/three/HouseScene'
import './Hero.css'

function Hero() {
  const reduceMotion = useReducedMotion()

  const reveal = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 28,
    },

    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__content">

        <motion.p
          className="hero__eyebrow"
          variants={reveal}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        >
          INTERACTIVE ARCHITECTURE
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
          See what
          <br />
          makes a
          <br />
          <em>better home.</em>
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
          Explore every layer of the home — from structure and
          insulation to materials and energy performance.
        </motion.p>

        <motion.a
          href="#explore"
          className="hero__button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore the house

          <span aria-hidden="true">→</span>
        </motion.a>

      </div>

      <div className="hero__visual">
        <div className="hero__canvas">
            <HouseScene />
        </div>

        <p className="hero__interaction" aria-hidden="true">
            DRAG TO ROTATE · SCROLL TO ZOOM
        </p>
        </div>
      <div className="hero__scroll" aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>
        <span>↓</span>
      </div>
    </section>
  )
}

export default Hero