import { motion } from 'motion/react'
import './CompleteSystem.css'

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

const reveal = {
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
            {...reveal}
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
            src="/images/CompleteSystem/Complete_house.png"
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

export default CompleteSystem