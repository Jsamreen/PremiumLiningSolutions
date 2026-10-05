import { motion } from 'motion/react'
import './Systems.css'

const services = [
  {
    number: '01',
    name: 'HEBEL',
    description:
      'Lightweight wall systems designed for strength, durability and dependable performance.',
    image: '/images/systems/hebel.png',
  },
  {
    number: '02',
    name: 'CLADDING',
    description:
      'Architectural exterior cladding systems that protect the building while defining its finish.',
    image: '/images/systems/cladding.png',
  },
  {
    number: '03',
    name: 'WRAP',
    description:
      'High-performance building wrap supporting moisture management and long-term building protection.',
    image: '/images/systems/wrap.png',
  },
  {
    number: '04',
    name: 'INSULATION',
    description:
      'Thermal insulation solutions designed to improve comfort and building performance throughout the year.',
    image: '/images/systems/insulation.png',
  },
  {
    number: '05',
    name: 'PLASTER',
    description:
      'Precision plasterboard installation for clean walls, ceilings and consistently refined interiors.',
    image: '/images/systems/plaster.png',
  },
  {
    number: '06',
    name: 'PAINT',
    description:
      'Professional finishing that brings every surface together with a clean and durable final result.',
    image: '/images/systems/paint.png',
  },
]

/* =========================================================
   INTRO ANIMATION
   ========================================================= */

const introReveal = {
  initial: {
    opacity: 0,
    y: 18,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.35,
  },

  transition: {
    duration: 0.75,
    ease: [0.16, 1, 0.3, 1],
  },
}


/* =========================================================
   CARD ANIMATION
   ========================================================= */

const cardReveal = {
  initial: {
    opacity: 0,
    y: 28,
    scale: 0.985,
    filter: 'blur(5px)',
  },

  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
  },

  viewport: {
    once: true,
    amount: 0.22,
    margin: '0px 0px -6% 0px',
  },

  transition: {
    duration: 0.9,
    ease: [0.16, 1, 0.3, 1],
  },
}


function Systems() {
  return (
    <section
      id="systems"
      className="systems"
      aria-labelledby="systems-title"
    >

      {/* ================================================
          HERO → SYSTEMS TRANSITION
          ================================================ */}

      <div
        className="systems__transition"
        aria-hidden="true"
      >
        <span className="systems__transition-line" />
      </div>


      <div className="systems__inner">

        {/* ================================================
            LEFT EDITORIAL INTRO
            ================================================ */}

        <div className="systems__intro">

          <div className="systems__intro-sticky">

            <motion.p
              className="systems__eyebrow"
              {...introReveal}
            >
              EXPLORE THE SYSTEMS
            </motion.p>


            <motion.h2
              id="systems-title"
              className="systems__title"

              initial={{
                opacity: 0,
                y: 22,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.35,
              }}

              transition={{
                duration: 0.85,
                delay: 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              Built with
              <br />

              <em>
                better solutions.
              </em>
            </motion.h2>


            <motion.p
              className="systems__description"

              initial={{
                opacity: 0,
                y: 16,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.35,
              }}

              transition={{
                duration: 0.75,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              From exterior systems to the final coat,
              Premium Lining Solutions coordinates the
              essential layers of the build through one
              experienced team.
            </motion.p>


            <motion.div
              className="systems__index"

              initial={{
                opacity: 0,
                x: -12,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              viewport={{
                once: true,
                amount: 0.35,
              }}

              transition={{
                duration: 0.7,
                delay: 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span>01</span>

              <span
                className="systems__index-line"
              />

              <span>06</span>
            </motion.div>

          </div>

        </div>


        {/* ================================================
            SYSTEM CARDS
            ================================================ */}

        <div className="systems__services">

          {services.map((service) => (

            <motion.article
              key={service.number}
              className="system-card"
              {...cardReveal}
            >

              <div className="system-card__media">

                {/* IMAGE */}

                <img
                  src={service.image}
                  alt={`${service.name} lining system`}
                  loading="lazy"
                  decoding="async"
                />


                {/* CINEMATIC IMAGE SHADE */}

                <div
                  className="system-card__shade"
                  aria-hidden="true"
                />


                {/* SYSTEM NUMBER */}

                <span
                  className="system-card__number"
                  aria-hidden="true"
                >
                  {service.number}
                </span>


                {/* CONTENT */}

                <div className="system-card__content">

                  <div
                    className="system-card__rule"
                    aria-hidden="true"
                  />


                  <h3>
                    {service.name}
                  </h3>


                  <p>
                    {service.description}
                  </p>


                  <span
                    className="system-card__arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Systems