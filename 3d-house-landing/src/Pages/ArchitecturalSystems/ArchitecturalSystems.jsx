import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import './ArchitecturalSystems.css'


/* =========================================================
   SYSTEM DATA
   ========================================================= */

const systems = [
  {
    number: '01',
    id: 'hebel',
    name: 'Hebel',
    category: 'EXTERNAL WALL SYSTEM',
    brand: 'CSR HEBEL',
    title: 'A solid foundation for the building envelope.',
    description:
      'Hebel provides a lightweight autoclaved aerated concrete wall system suited to modern residential construction. PLS coordinates the system as part of the broader external lining package.',
    image: '/images/systems/hebel.png',
    details: [
      'External wall systems',
      'Residential applications',
      'Coordinated installation',
    ],
  },

  {
    number: '02',
    id: 'cladding',
    name: 'Cladding',
    category: 'EXTERNAL FINISH',
    brand: 'JAMES HARDIE',
    title: 'Character, protection and architectural definition.',
    description:
      'Cladding plays both a practical and visual role in the finished home. PLS works with James Hardie systems including Linea, Stria and Axon depending on the architectural requirements of the project.',
    image: '/images/systems/cladding.png',
    details: [
      'Linea',
      'Stria',
      'Axon',
    ],
  },

  {
    number: '03',
    id: 'wrap',
    name: 'Building Wrap',
    category: 'WEATHER BARRIER',
    brand: 'PGF CLIMA',
    title: 'A considered layer behind the finished wall.',
    description:
      'Building wrap forms an important part of the external wall build-up. It is incorporated into the construction sequence before the external lining system is completed.',
    image: '/images/systems/wrap.png',
    details: [
      'Wall protection',
      'Building envelope',
      'Sequenced installation',
    ],
  },

  {
    number: '04',
    id: 'insulation',
    name: 'Insulation',
    category: 'THERMAL LAYER',
    brand: 'BRADFORD',
    title: 'Performance starts inside the building envelope.',
    description:
      'Insulation is coordinated within wall and ceiling areas before internal linings are completed, helping the project progress through the next stage of the lining sequence.',
    image: '/images/systems/insulation.png',
    details: [
      'Wall insulation',
      'Ceiling insulation',
      'Coordinated before plaster',
    ],
  },

  {
    number: '05',
    id: 'plaster',
    name: 'Plaster',
    category: 'INTERNAL LINING',
    brand: 'KNAUF SHEETROCK',
    title: 'Where structure begins to feel like interior space.',
    description:
      'Internal plasterboard creates the surfaces that define rooms, ceilings and interior architecture. PLS coordinates plaster installation as the project moves toward its finished state.',
    image: '/images/systems/plaster.png',
    details: [
      'Wall linings',
      'Ceiling linings',
      'Interior preparation',
    ],
  },

  {
    number: '06',
    id: 'paint',
    name: 'Paint',
    category: 'FINISH',
    brand: 'DULUX',
    title: 'The final layer that brings the interior together.',
    description:
      'Painting completes the visual transition from construction to finished interior. It forms the final stage of the PLS lining sequence where included within the project scope.',
    image: '/images/systems/paint.png',
    details: [
      'Interior finishes',
      'Final surface preparation',
      'Project completion',
    ],
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
    amount: 0.15,
  },

  transition: {
    duration: 0.7,
    ease: [0.16, 1, 0.3, 1],
  },
}


/* =========================================================
   ARCHITECTURAL SYSTEMS
   ========================================================= */

function ArchitecturalSystems() {

  const scrollToSystem = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }


  return (
    <div className="architectural-systems">

      {/* =====================================================
          OPENING
          ===================================================== */}

      <section className="systems-opening">

        <div
          className="systems-opening__background"
          aria-hidden="true"
        >
          SYSTEMS
        </div>


        <div className="systems-shell systems-opening__inner">

          <motion.div
            className="systems-opening__top"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <span>ARCHITECTURAL SYSTEMS</span>

            <span>PLS / MELBOURNE</span>
          </motion.div>


          <div className="systems-opening__content">

            <motion.div
              className="systems-opening__title"
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
                Built layer
                <br />
                <em>by layer.</em>
              </h1>
            </motion.div>


            <motion.div
              className="systems-opening__intro"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <p>
                Explore the wall systems, linings and finishes
                that come together across a Premium Lining
                Solutions project.
              </p>

              <span>
                06 SYSTEM CATEGORIES
              </span>
            </motion.div>

          </div>

        </div>

      </section>



      {/* =====================================================
          SYSTEM INDEX
          ===================================================== */}

      <section className="systems-index">

        <div className="systems-shell">

          <div className="systems-index__header">

            <span>
              SYSTEM INDEX
            </span>

            <span>
              SELECT A LAYER
            </span>

          </div>


          <div className="systems-index__list">

            {systems.map((system) => (

              <button
                key={system.id}
                type="button"
                className="systems-index__item"
                onClick={() => scrollToSystem(system.id)}
              >
                <span className="systems-index__number">
                  {system.number}
                </span>

                <span className="systems-index__name">
                  {system.name}
                </span>

                <span
                  className="systems-index__arrow"
                  aria-hidden="true"
                >
                  ↓
                </span>
              </button>

            ))}

          </div>

        </div>

      </section>



      {/* =====================================================
          SYSTEM CHAPTERS
          ===================================================== */}

      <section className="systems-catalogue">

        {systems.map((system, index) => {

          const reversed = index % 2 !== 0

          return (
            <article
              key={system.id}
              id={system.id}
              className={
                reversed
                  ? 'system-chapter system-chapter--reverse'
                  : 'system-chapter'
              }
            >

              <div className="systems-shell system-chapter__grid">

                {/* ===========================================
                    IMAGE
                    =========================================== */}

                <motion.figure
                  className="system-chapter__visual"
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
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >

                  <div className="system-chapter__image-wrap">

                    <img
                      src={system.image}
                      alt={`${system.name} architectural system`}
                      className="system-chapter__image"
                      loading={index > 0 ? 'lazy' : 'eager'}
                    />


                    <div
                      className="system-chapter__image-overlay"
                      aria-hidden="true"
                    />


                    <span className="system-chapter__image-number">
                      {system.number}
                    </span>


                    <div className="system-chapter__image-caption">

                      <span>
                        PREMIUM LINING SOLUTIONS
                      </span>

                      <span>
                        {system.category}
                      </span>

                    </div>

                  </div>

                </motion.figure>



                {/* ===========================================
                    CONTENT
                    =========================================== */}

                <motion.div
                  className="system-chapter__content"
                  {...reveal}
                >

                  <div className="system-chapter__meta">

                    <span>
                      {system.number}
                    </span>

                    <span>
                      {system.category}
                    </span>

                  </div>


                  <h2>
                    {system.name}
                  </h2>


                  <p className="system-chapter__brand">
                    {system.brand}
                  </p>


                  <h3>
                    {system.title}
                  </h3>


                  <p className="system-chapter__description">
                    {system.description}
                  </p>


                  <div className="system-chapter__details">

                    {system.details.map((detail) => (

                      <div
                        key={detail}
                        className="system-chapter__detail"
                      >
                        <span
                          aria-hidden="true"
                        >
                          +
                        </span>

                        <p>
                          {detail}
                        </p>
                      </div>

                    ))}

                  </div>

                </motion.div>

              </div>

            </article>
          )

        })}

      </section>



      {/* =====================================================
          COMPLETE BUILD SEQUENCE
          ===================================================== */}

      <section className="systems-sequence">

        <div className="systems-shell">

          <motion.div
            className="systems-sequence__header"
            {...reveal}
          >

            <span>
              THE PLS SEQUENCE
            </span>

            <p>
              Individual systems. Considered as part of the
              wider build.
            </p>

          </motion.div>


          <motion.div
            className="systems-sequence__flow"
            {...reveal}
          >

            {systems.map((system, index) => (

              <div
                key={system.id}
                className="systems-sequence__item"
              >

                <span className="systems-sequence__number">
                  {system.number}
                </span>

                <strong>
                  {system.name}
                </strong>


                {index < systems.length - 1 && (

                  <span
                    className="systems-sequence__arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                )}

              </div>

            ))}

          </motion.div>

        </div>

      </section>



      {/* =====================================================
          MATERIAL PARTNERS
          ===================================================== */}

      <section className="systems-partners">

        <div className="systems-shell systems-partners__grid">

          <motion.div
            className="systems-partners__intro"
            {...reveal}
          >

            <span className="systems-partners__number">
              07
            </span>

            <p className="systems-partners__eyebrow">
              MATERIAL SYSTEMS
            </p>

            <h2>
              Recognised names.
              <br />
              <em>Specified with purpose.</em>
            </h2>

          </motion.div>


          <motion.div
            className="systems-partners__list"
            {...reveal}
          >

            <div>
              <span>01</span>
              <strong>CSR Hebel</strong>
              <small>External wall systems</small>
            </div>

            <div>
              <span>02</span>
              <strong>James Hardie</strong>
              <small>Architectural cladding</small>
            </div>

            <div>
              <span>03</span>
              <strong>PGF Clima</strong>
              <small>Building wrap</small>
            </div>

            <div>
              <span>04</span>
              <strong>Bradford</strong>
              <small>Insulation</small>
            </div>

            <div>
              <span>05</span>
              <strong>Knauf Sheetrock</strong>
              <small>Internal plaster systems</small>
            </div>

            <div>
              <span>06</span>
              <strong>Dulux</strong>
              <small>Paint finishes</small>
            </div>

          </motion.div>

        </div>

      </section>



      {/* =====================================================
          PROJECT ENQUIRY
          ===================================================== */}

      <section className="systems-enquiry">

        <div className="systems-shell systems-enquiry__inner">

          <motion.div
            className="systems-enquiry__title"
            {...reveal}
          >

            <span>
              NEED HELP WITH YOUR SCOPE?
            </span>

            <h2>
              Not sure which systems
              <br />
              your project <em>requires?</em>
            </h2>

          </motion.div>


          <motion.div
            className="systems-enquiry__action"
            {...reveal}
          >

            <p>
              Send us your project details, drawings or
              required services and the PLS team can discuss
              the appropriate scope with you.
            </p>


            <Link
              to="/contact#enquiry"
              className="systems-enquiry__link"
            >
              <span>
                DISCUSS YOUR PROJECT
              </span>

              <span aria-hidden="true">
                →
              </span>
            </Link>

          </motion.div>

        </div>

      </section>

    </div>
  )
}


export default ArchitecturalSystems