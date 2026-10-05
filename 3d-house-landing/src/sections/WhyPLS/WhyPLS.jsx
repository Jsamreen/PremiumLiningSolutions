import { motion } from 'motion/react'
import './WhyPLS.css'

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

const reveal = {
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
            {...reveal}
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


          <a
            href="#contact"
            className="why-pls__cta"
          >
            START A PROJECT

            <span aria-hidden="true">
              →
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  )
}

export default WhyPLS