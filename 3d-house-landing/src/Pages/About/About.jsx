import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'

import './About.css'


/* =========================================================
   DATA
   ========================================================= */

const projectFlow = [
  {
    number: '01',
    title: 'Project received',
    text: 'You send through the project details, drawings and required services.',
  },
  {
    number: '02',
    title: 'Scope reviewed',
    text: 'We review the requirements and establish the relevant lining scope.',
  },
  {
    number: '03',
    title: 'Work coordinated',
    text: 'Materials, trades and sequencing are considered around the project program.',
  },
  {
    number: '04',
    title: 'Delivery',
    text: 'The agreed works progress with clear communication throughout the project.',
  },
]


const faqs = [
  {
    question: 'What type of projects does PLS work on?',
    answer:
      'Premium Lining Solutions supports residential and construction projects across Melbourne and Victoria. Send us your project details and our team can review the scope and availability.',
  },
  {
    question: 'Can I engage PLS for an individual service?',
    answer:
      'Yes. Project requirements can vary. Send through the service you require and our team can discuss the appropriate scope for your project.',
  },
  {
    question: 'What services can be included?',
    answer:
      'Our service offering includes Hebel and external wall systems, cladding, building wrap, insulation, plaster and painting.',
  },
  {
    question: 'What materials and systems do you work with?',
    answer:
      'Depending on project requirements, the PLS offering includes systems and products from suppliers such as CSR Hebel, James Hardie, PGF Clima, Bradford, Knauf Sheetrock and Dulux.',
  },
  {
    question: 'Where does PLS operate?',
    answer:
      'Premium Lining Solutions services projects across Melbourne and Victoria.',
  },
  {
    question: 'How do I request a quote?',
    answer:
      'Send your project details through our enquiry form, including the project location and required services. Our team can then review the scope with you.',
  },
]


const reveal = {
  initial: {
    opacity: 0,
    y: 20,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.15,
  },

  transition: {
    duration: 0.65,
    ease: [0.16, 1, 0.3, 1],
  },
}


/* =========================================================
   ABOUT PAGE
   ========================================================= */

function About() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq((current) => (
      current === index ? null : index
    ))
  }


  return (
    <div className="about-page">

      {/* =====================================================
          EDITORIAL OPENING + TEAM IMAGE
          ===================================================== */}

      <section className="about-opening">

        <div
          className="about-opening__mark"
          aria-hidden="true"
        >
          PLS / 01
        </div>


        <div className="about-shell about-opening__grid">

          {/* LABEL */}

          <motion.div
            className="about-opening__label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <span>ABOUT PLS</span>

            <span className="about-opening__line" />
          </motion.div>


          {/* TITLE */}

          <motion.div
            className="about-opening__title"
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1>
              We coordinate
              <br />
              the parts that make
              <br />
              a house <em>feel complete.</em>
            </h1>

            <p className="about-opening__description">
              A Melbourne-based construction service bringing
              complementary lining trades together through a
              more coordinated approach to project delivery.
            </p>
          </motion.div>


          {/* TEAM IMAGE */}

          <motion.figure
            className="about-opening__visual"
            initial={{
              opacity: 0,
              scale: 0.985,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="about-opening__image-wrap">

              <img
                src="/images/About/About Hero.png"
                alt="Premium Lining Solutions construction team on a residential building site"
                className="about-opening__image"
              />

              <div
                className="about-opening__image-shade"
                aria-hidden="true"
              />

              <div className="about-opening__image-caption">
                <span>PLS / MELBOURNE</span>

                <span>
                  Coordinated construction delivery
                </span>
              </div>

            </div>
          </motion.figure>

        </div>

      </section>



      {/* =====================================================
          COMPANY STORY + OFFICE IMAGE
          ===================================================== */}

      <section className="about-profile">

        <div className="about-shell">

          {/* SECTION INDEX */}

          <motion.div
            className="about-profile__heading"
            {...reveal}
          >
            <div className="about-profile__index">
              <strong>01</strong>

              <span>
                OUR STORY
              </span>
            </div>

            <div className="about-profile__headline">
              <p className="about-kicker">
                WHY PLS
              </p>

              <h2>
                Construction has enough
                <br />
                <em>moving parts already.</em>
              </h2>
            </div>
          </motion.div>



          {/* EDITORIAL STORY */}

          <div className="about-profile__content">

            <motion.div
              className="about-profile__story"
              {...reveal}
            >
              <p className="about-profile__lead">
                A residential build can involve multiple
                contractors, suppliers, schedules and
                handovers before the lining work is complete.
              </p>

              <div className="about-profile__body">
                <p>
                  Premium Lining Solutions takes a practical
                  approach to that challenge by bringing
                  complementary lining services into a more
                  coordinated workflow.
                </p>

                <p>
                  The objective is straightforward: understand
                  the scope, organise the work around the build
                  and make communication easier throughout the
                  project.
                </p>
              </div>
            </motion.div>



            {/* OFFICE / PLANNING IMAGE */}

            <motion.figure
              className="about-profile__visual"
              {...reveal}
            >
              <div className="about-profile__image-wrap">

                <img
                  src="/images/About/About PLS office.png"
                  alt="Premium Lining Solutions team discussing residential construction plans"
                  className="about-profile__image"
                  loading="lazy"
                />

              </div>

              <figcaption>
                <span>PLANNING + COORDINATION</span>

                <p>
                  Understanding the project before the work
                  begins.
                </p>
              </figcaption>
            </motion.figure>



            {/* FACTS */}

            <motion.aside
              className="about-profile__facts"
              {...reveal}
            >

              <div className="about-fact">
                <span>BASED IN</span>

                <strong>
                  Melbourne
                  <br />
                  Victoria
                </strong>
              </div>


              <div className="about-fact">
                <span>CORE SERVICES</span>

                <strong>
                  Six lining
                  <br />
                  categories
                </strong>
              </div>


              <div className="about-fact">
                <span>PROJECT FOCUS</span>

                <strong>
                  Residential
                  <br />
                  construction
                </strong>
              </div>


              <div className="about-fact">
                <span>ENQUIRIES</span>

                <a href="tel:0451215223">
                  0451 215 223
                </a>
              </div>

            </motion.aside>

          </div>

        </div>

      </section>



      {/* =====================================================
          MANIFESTO
          ===================================================== */}

      <section className="about-manifesto">

        <div className="about-shell">

          <motion.div
            className="about-manifesto__inner"
            {...reveal}
          >

            <span
              className="about-manifesto__quote"
              aria-hidden="true"
            >
              “
            </span>

            <p>
              Good construction isn't only about
              <br />
              each trade doing its job.
              <br />
              <em>It's about how the work connects.</em>
            </p>

          </motion.div>

        </div>

      </section>



      {/* =====================================================
          PROJECT JOURNEY
          ===================================================== */}

      <section className="about-journey">

        <div className="about-shell">

          <motion.header
            className="about-journey__header"
            {...reveal}
          >

            <div>
              <span className="about-section-number">
                02
              </span>

              <span className="about-section-label">
                WORKING WITH PLS
              </span>
            </div>

            <p>
              From the first project details through to
              delivery, the process is kept clear and
              practical.
            </p>

          </motion.header>



          <div className="about-journey__timeline">

            <div
              className="about-journey__track"
              aria-hidden="true"
            />


            {projectFlow.map((step, index) => (

              <motion.article
                key={step.number}
                className="about-journey__step"
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
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >

                <div className="about-journey__point">
                  <span />
                </div>

                <span className="about-journey__number">
                  {step.number}
                </span>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.text}
                </p>

              </motion.article>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          FAQ
          ===================================================== */}

      <section className="about-questions">

        <div className="about-shell about-questions__grid">

          {/* LEFT */}

          <motion.div
            className="about-questions__intro"
            {...reveal}
          >

            <div
              className="about-questions__number"
              aria-hidden="true"
            >
              03
            </div>

            <p className="about-kicker">
              COMMON QUESTIONS
            </p>

            <h2>
              Things worth
              <br />
              knowing <em>beforehand.</em>
            </h2>

            <p className="about-questions__description">
              Straightforward answers to some of the questions
              we receive about projects, services and
              enquiries.
            </p>

          </motion.div>



          {/* FAQ LIST */}

          <motion.div
            className="about-questions__list"
            {...reveal}
          >

            {faqs.map((faq, index) => {

              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className={
                    isOpen
                      ? 'about-question about-question--open'
                      : 'about-question'
                  }
                >

                  <button
                    type="button"
                    className="about-question__button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                  >

                    <span className="about-question__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="about-question__title">
                      {faq.question}
                    </span>

                    <span
                      className="about-question__toggle"
                      aria-hidden="true"
                    >
                      {isOpen ? '−' : '+'}
                    </span>

                  </button>


                  <AnimatePresence initial={false}>

                    {isOpen && (

                      <motion.div
                        className="about-question__answer-wrap"
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >

                        <div className="about-question__answer">
                          <p>
                            {faq.answer}
                          </p>
                        </div>

                      </motion.div>

                    )}

                  </AnimatePresence>

                </div>
              )

            })}

          </motion.div>

        </div>

      </section>



      {/* =====================================================
          STUDIO-STYLE CONTACT ENDING
          ===================================================== */}

      <section className="about-contact">

        <div className="about-shell">

          <div className="about-contact__top">

            <motion.div {...reveal}>

              <span className="about-contact__small">
                PREMIUM LINING SOLUTIONS
              </span>

              <h2>
                Start a
                <br />
                <em>conversation.</em>
              </h2>

            </motion.div>


            <motion.div
              className="about-contact__arrow"
              {...reveal}
              aria-hidden="true"
            >
              ↘
            </motion.div>

          </div>



          <motion.div
            className="about-contact__details"
            {...reveal}
          >

            <div>
              <span>LOCATION</span>

              <strong>
                Melbourne, Victoria
                <br />
                Australia
              </strong>
            </div>


            <div>
              <span>POSTAL</span>

              <strong>
                PO Box 1157
                <br />
                Kensington VIC 3031
              </strong>
            </div>


            <div>
              <span>PROJECT ENQUIRIES</span>

              <a href="mailto:orders@premiumliningsolutions.com.au">
                orders@premiumliningsolutions.com.au
              </a>

              <a href="tel:0451215223">
                0451 215 223
              </a>
            </div>


            <div className="about-contact__project">

              <Link to="/contact#enquiry">

                <span>
                  START A PROJECT
                </span>

                <span aria-hidden="true">
                  →
                </span>

              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  )
}


export default About