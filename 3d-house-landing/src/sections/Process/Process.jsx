import { motion } from 'motion/react'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Plan',
    subtitle: 'Review the project',
    description:
      'We review the scope, drawings, required systems and project requirements before work begins.',
  },
  {
    number: '02',
    title: 'Coordinate',
    subtitle: 'Organise the sequence',
    description:
      'Materials, trades and installation stages are coordinated around the requirements of the build.',
  },
  {
    number: '03',
    title: 'Deliver',
    subtitle: 'Complete the work',
    description:
      'Our team delivers each stage with a focus on workmanship, communication and reliable progress.',
  },
  {
    number: '04',
    title: 'Finish',
    subtitle: 'Complete the package',
    description:
      'The final surfaces are completed and checked to deliver a clean, consistent finished result.',
  },
]

function Process() {
  return (
    <section
      id="process"
      className="process"
      aria-labelledby="process-title"
    >
      <div className="process__inner">

        {/* HEADER */}

        <div className="process__header">

          <motion.div
            className="process__heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p className="process__eyebrow">
              HOW WE WORK
            </p>

            <h2
              id="process-title"
              className="process__title"
            >
              Clear from the
              <br />
              <em>very beginning.</em>
            </h2>
          </motion.div>


          <motion.div
            className="process__intro"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span>01 — 04</span>

            <p>
              A straightforward process designed to
              keep the project organised from initial
              planning through to the final finish.
            </p>
          </motion.div>

        </div>


        {/* PROCESS TIMELINE */}

        <div className="process__timeline">

          <div
            className="process__track"
            aria-hidden="true"
          />

          {steps.map((step, index) => (

            <motion.article
              key={step.number}
              className="process__step"

              initial={{
                opacity: 0,
                y: 28,
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

              <div className="process__marker">
                <span>{step.number}</span>
              </div>


              <div className="process__step-content">

                <span className="process__subtitle">
                  {step.subtitle}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            </motion.article>

          ))}

        </div>


        {/* BOTTOM MESSAGE */}

        <motion.div
          className="process__bottom"

          initial={{
            opacity: 0,
            y: 24,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
            amount: 0.4,
          }}

          transition={{
            duration: 0.85,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div className="process__bottom-label">
            <span>PLS</span>
            <span className="process__bottom-line" />
          </div>

          <p>
            Less coordination for you.
            <br />
            <em>More control over the build.</em>
          </p>

          <a href="#contact">
            TALK TO OUR TEAM
            <span aria-hidden="true">→</span>
          </a>

        </motion.div>

      </div>
    </section>
  )
}

export default Process