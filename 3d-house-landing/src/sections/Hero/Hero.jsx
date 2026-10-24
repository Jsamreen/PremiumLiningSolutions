import { useRef } from 'react'

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
} from 'motion/react'

import './Hero.css'


function Hero() {
  const sectionRef = useRef(null)
  const reduceMotion = useReducedMotion()

  /* =======================================================
     HERO SCROLL
     ======================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })


  /* =======================================================
     CINEMATIC SCROLL-CONTROLLED STATIC HOUSE
     ======================================================= */

  const houseScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [1, 1.04, 1.085, 1.12]
  )

  const houseY = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    [0, -8, -16, -24]
  )

  const smoothScale = useSpring(houseScale, {
    stiffness: 90,
    damping: 25,
    mass: 0.8,
  })

  const smoothY = useSpring(houseY, {
    stiffness: 90,
    damping: 25,
    mass: 0.8,
  })


  return (
    <section
      ref={sectionRef}
      id="home"
      className={
        reduceMotion
          ? 'hero-film hero-film--static'
          : 'hero-film'
      }
      aria-labelledby="hero-title"
    >
      <div className="hero-film__sticky">

        {/* ================================================
            RESPONSIVE HERO STAGE
            ================================================ */}

        <div className="hero-film__stage">

          {/* ==============================================
              LEFT CONTENT
              ============================================== */}

          <motion.div
            className="hero-film__content"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion ? 0 : 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="hero-film__eyebrow">
              COMPLETE LINING SOLUTIONS
            </p>

            <h1
              id="hero-title"
              className="hero-film__title"
            >
              From frame
              <br />
              to <em>finish.</em>
            </h1>

            <p className="hero-film__description">
              Explore the systems, materials and
              craftsmanship behind a complete Premium
              Lining Solutions build.
            </p>

            <a
              href="#systems"
              className="hero-film__button"
            >
              <span>EXPLORE THE HOUSE</span>

              <span
                className="hero-film__button-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </motion.div>


          {/* ==============================================
              HOUSE VISUAL — STATIC IMAGE
              ============================================== */}

          <motion.div
            className="hero-film__visual"
            initial={{
              opacity: 0,
              scale: reduceMotion ? 1 : 0.985,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: reduceMotion ? 0 : 1.1,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              className="hero-film__media"
              style={{
                scale: reduceMotion ? 1 : smoothScale,
                y: reduceMotion ? 0 : smoothY,
              }}
            >
              <img
                className="hero-film__image"
                src="/images/hero/pls-house-static.png"
                alt="Premium Lining Solutions architectural house cutaway showing cladding, plaster, wall wrap, insulation and framing"
                fetchPriority="high"
                decoding="async"
              />

            </motion.div>
          </motion.div>

        </div>


        {/* ================================================
            SCROLL INDICATOR
            ================================================ */}

        {!reduceMotion && (
          <motion.div
            className="hero-film__scroll"
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            aria-hidden="true"
          >
            <span className="hero-film__mouse" />

            <span>SCROLL TO EXPLORE</span>

            <span className="hero-film__divider">
              ·
            </span>

            <span>DISCOVER THE BUILD</span>
          </motion.div>
        )}


        {/* ================================================
            BOTTOM TRANSITION
            ================================================ */}

        <div
          className="hero-film__bottom-fade"
          aria-hidden="true"
        />

      </div>
    </section>
  )
}

export default Hero