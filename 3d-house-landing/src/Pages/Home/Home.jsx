import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, useSpring } from 'motion/react'
import { Link } from 'react-router-dom'

// Keep existing stylesheets until they are consolidated into Home.css.
import './Home.css'

// ==================== Hero.jsx ====================
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
                src="/images/home/pls-house-hero.webp"
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

// ==================== Systems.jsx ====================
const services = [
  {
    number: '01',
    name: 'HEBEL',
    description:
      'Lightweight wall systems designed for strength, durability and dependable performance.',
    image: '/images/home/hebel.webp',
    to: '/services#hebel',
  },
  {
    number: '02',
    name: 'CLADDING',
    description:
      'Architectural exterior cladding systems that protect the building while defining its finish.',
    image: '/images/home/cladding.webp',
    to: '/services#cladding',
  },
  {
    number: '03',
    name: ' WALL WRAP',
    description:
      'High-performance building wrap supporting moisture management and long-term building protection.',
    image: '/images/home/wrap.webp',
    to: '/services#wrap',
  },
  {
    number: '04',
    name: 'INSULATION',
    description:
      'Thermal insulation solutions designed to improve comfort and building performance throughout the year.',
    image: '/images/home/insulation.webp',
    to: '/services#insulation',
  },
  {
    number: '05',
    name: 'PLASTER',
    description:
      'Precision plasterboard installation for clean walls, ceilings and consistently refined interiors.',
    image: '/images/home/plaster.webp',
    to: '/services#plaster',
  }
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


                  <Link
                    to={service.to}
                    className="system-card__arrow"
                    aria-label={`Explore ${service.name}`}
                  >
                    →
                  </Link>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  )
}

// ==================== CompleteSystem.jsx ====================
const stages = [
  {
    number: '01',
    title: 'PROTECT',
    text: 'Wrap and insulation establish the protective layer of the building.',
  },
  {
    number: '02',
    title: 'ENCLOSE',
    text: 'Hebel and cladding form durable exterior systems around the structure.',
  },
  {
    number: '03',
    title: 'REFINE',
    text: 'Plaster creates precise internal surfaces ready for the final finish.',
  },
  {
    number: '04',
    title: 'FINISH',
    text: 'Professional painting completes the build with a clean, consistent result.',
  },
]

const completeSystemReveal = {
  initial: {
    opacity: 0,
    y: 24,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.25,
  },

  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
}

function CompleteSystem() {
  return (
    <section
      className="complete-system"
      aria-labelledby="complete-system-title"
    >
      <div className="complete-system__inner">

        {/* ==========================================
            TOP INTRO
            ========================================== */}

        <div className="complete-system__header">

          <motion.div
            className="complete-system__header-left"
            {...completeSystemReveal}
          >
            <p className="complete-system__eyebrow">
              ONE COMPLETE SYSTEM
            </p>

            <h2
              id="complete-system-title"
              className="complete-system__title"
            >
              Every layer.
              <br />

              <em>
                One coordinated build.
              </em>
            </h2>
          </motion.div>


          <motion.div
            className="complete-system__header-right"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p>
              From the building envelope through to
              the final painted surface, each stage
              works as part of a connected system.
            </p>

            <p>
              One team coordinating the sequence
              means cleaner handovers, consistent
              workmanship and fewer gaps between
              trades.
            </p>
          </motion.div>

        </div>


        {/* ==========================================
            CENTRAL ARCHITECTURAL STORY
            ========================================== */}

        <motion.div
          className="complete-system__visual"
          initial={{
            opacity: 0,
            scale: 0.985,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <img
            src="/images/home/Complete_house.webp"
            alt="Completed Premium Lining Solutions residential project"
            loading="lazy"
            decoding="async"
          />

          <div
            className="complete-system__visual-shade"
            aria-hidden="true"
          />


          <div className="complete-system__visual-copy">

            <span>
              FROM ENVELOPE
            </span>

            <span
              className="complete-system__visual-line"
              aria-hidden="true"
            />

            <span>
              TO FINISH
            </span>

          </div>

        </motion.div>


        {/* ==========================================
            BUILD STAGES
            ========================================== */}

        <div className="complete-system__stages">

          {stages.map((stage, index) => (

            <motion.article
              key={stage.number}
              className="complete-system__stage"

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
                duration: 0.7,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <div className="complete-system__stage-top">

                <span className="complete-system__stage-number">
                  {stage.number}
                </span>

                <span
                  className="complete-system__stage-dot"
                  aria-hidden="true"
                />

              </div>


              <h3>
                {stage.title}
              </h3>


              <p>
                {stage.text}
              </p>

            </motion.article>

          ))}

        </div>


        {/* ==========================================
            BOTTOM STATEMENT
            ========================================== */}

        <motion.div
          className="complete-system__statement"

          initial={{
            opacity: 0,
            y: 25,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.5,
          }}

          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <span className="complete-system__statement-mark">
            PLS
          </span>

          <p>
            One team.
            <br />

            <em>
              From frame to finish.
            </em>
          </p>

        </motion.div>

      </div>
    </section>
  )
}

// ==================== WhyPLS.jsx ====================
const benefits = [
  {
    number: '01',
    title: 'One booking.',
    description:
      'Coordinate the essential lining systems through one experienced team instead of managing multiple separate trades.',
  },
  {
    number: '02',
    title: 'One sequence.',
    description:
      'Each stage follows the next with clearer handovers, better coordination and fewer gaps across the build.',
  },
  {
    number: '03',
    title: 'One standard.',
    description:
      'Consistent workmanship from exterior systems through plaster and paint keeps quality aligned from start to finish.',
  },
]

const whyPLSReveal = {
  initial: {
    opacity: 0,
    y: 22,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.3,
  },

  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1],
  },
}

function WhyPLS() {
  return (
    <section
      id="why-pls"
      className="why-pls"
      aria-labelledby="why-pls-title"
    >
      <div className="why-pls__inner">

        {/* TOP INTRO */}

        <div className="why-pls__header">

          <motion.div
            className="why-pls__heading"
            {...whyPLSReveal}
          >
            <p className="why-pls__eyebrow">
              WHY PREMIUM LINING SOLUTIONS
            </p>

            <h2
              id="why-pls-title"
              className="why-pls__title"
            >
              Fewer handovers.
              <br />

              <em>
                Better control.
              </em>
            </h2>
          </motion.div>


          <motion.div
            className="why-pls__intro"
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className="why-pls__intro-number">
              01 — 03
            </span>

            <p>
              A complete lining package gives builders
              one point of coordination across the key
              stages between frame and final finish.
            </p>
          </motion.div>

        </div>


        {/* BENEFITS */}

        <div className="why-pls__benefits">

          {benefits.map((benefit, index) => (

            <motion.article
              key={benefit.number}
              className="why-pls__benefit"

              initial={{
                opacity: 0,
                y: 26,
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
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <div className="why-pls__benefit-top">

                <span className="why-pls__number">
                  {benefit.number}
                </span>

                <span
                  className="why-pls__line"
                  aria-hidden="true"
                />

              </div>


              <h3>
                {benefit.title}
              </h3>


              <p>
                {benefit.description}
              </p>

            </motion.article>

          ))}

        </div>


        {/* LARGE BRAND STATEMENT */}

        <motion.div
          className="why-pls__statement"

          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <span className="why-pls__statement-small">
            COMPLETE LINING SOLUTIONS
          </span>


          <p>
            One booking.
            <br />

            <em>
              One team.
            </em>

            <br />

            One complete
            <br />

            lining package.
          </p>


          <Link
            to="/contact"
            className="why-pls__cta"
          >
            START A PROJECT
            <span aria-hidden="true">→</span>
          </Link>

        </motion.div>

      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Systems />
      <CompleteSystem />
      <WhyPLS />
    </>
  )
}
