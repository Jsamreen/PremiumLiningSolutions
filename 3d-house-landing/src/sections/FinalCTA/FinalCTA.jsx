import { motion } from 'motion/react'
import './FinalCTA.css'

function FinalCTA() {
  return (
    <section
      id="contact"
      className="final-cta"
      aria-labelledby="final-cta-title"
    >
      <div className="final-cta__inner">

        {/* TOP LINE */}

        <motion.div
          className="final-cta__top"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span>READY TO BUILD?</span>

          <span className="final-cta__top-line" />

          <span>MELBOURNE · VICTORIA</span>
        </motion.div>


        {/* MAIN MESSAGE */}

        <div className="final-cta__content">

          <motion.h2
            id="final-cta-title"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            From frame
            <br />

            to <em>finish.</em>
          </motion.h2>


          <motion.div
            className="final-cta__action"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <p>
              One booking. One team.
              <br />
              One complete lining package.
            </p>

            <a
              className="final-cta__button"
              href="mailto:orders@premiumliningsolutions.com.au"
            >
              <span>START A PROJECT</span>

              <span
                className="final-cta__arrow"
                aria-hidden="true"
              >
                →
              </span>
            </a>
          </motion.div>

        </div>


        {/* CONTACT STRIP */}

        <motion.div
          className="final-cta__contact"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div className="final-cta__contact-item">
            <span>EMAIL</span>

            <a href="mailto:orders@premiumliningsolutions.com.au">
              orders@premiumliningsolutions.com.au
            </a>
          </div>


          <div className="final-cta__contact-item">
            <span>PHONE</span>

            <a href="tel:+61451215223">
              0451 215 223
            </a>
          </div>


          <div className="final-cta__contact-item">
            <span>LOCATION</span>

            <p>
              Melbourne, Victoria
            </p>
          </div>

        </motion.div>


        {/* LARGE BACKGROUND WORD */}

        <div
          className="final-cta__watermark"
          aria-hidden="true"
        >
          PLS
        </div>

      </div>
    </section>
  )
}

export default FinalCTA