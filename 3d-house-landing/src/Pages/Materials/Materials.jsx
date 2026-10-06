import { motion } from 'motion/react'

import './Materials.css'


const materials = [
  {
    number: '01',
    brand: 'CSR HEBEL',
    category: 'WALL SYSTEMS',
    title: 'Solid systems for the building envelope.',
    description:
      'Hebel wall systems form part of our complete exterior lining package, coordinated with the surrounding building systems for a clean and consistent installation.',
    image: '/images/materials/hebel.jpg',
  },

  {
    number: '02',
    brand: 'JAMES HARDIE',
    category: 'ARCHITECTURAL CLADDING',
    title: 'Exterior finishes with architectural character.',
    description:
      'We install James Hardie cladding systems including Linea, Stria and Axon to create considered exterior finishes across residential projects.',
    image: '/images/materials/james-hardie.jpg',
  },

  {
    number: '03',
    brand: 'PGF CLIMA',
    category: 'BUILDING WRAP',
    title: 'Protection begins behind the finish.',
    description:
      'Building wrap forms an important layer within the external wall system, installed as part of a coordinated approach before the exterior finishes are completed.',
    image: '/images/materials/clima-wrap.jpg',
  },

  {
    number: '04',
    brand: 'BRADFORD',
    category: 'INSULATION',
    title: 'Comfort built into every layer.',
    description:
      'Bradford insulation is incorporated into the lining package to support a complete wall and ceiling system before internal surfaces are closed.',
    image: '/images/materials/bradford.jpg',
  },

  {
    number: '05',
    brand: 'KNAUF',
    category: 'PLASTERBOARD',
    title: 'Precision behind every finished surface.',
    description:
      'Knauf plasterboard systems provide the foundation for clean internal walls and ceilings, installed and finished with close attention to detail.',
    image: '/images/materials/knauf.jpg',
  },

  {
    number: '06',
    brand: 'DULUX',
    category: 'PAINT & FINISHES',
    title: 'The final layer brings it together.',
    description:
      'Professional painting completes the lining package, bringing the internal surfaces together with a clean and consistent final finish.',
    image: '/images/materials/dulux.jpg',
  },
]


const reveal = {
  initial: {
    opacity: 0,
    y: 28,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1],
  },
}


function Materials() {

  return (
    <>

      <main className="materials-page">


        {/* =================================================
            HERO
            ================================================= */}

        <section
          className="materials-hero"
          aria-labelledby="materials-title"
        >

          <div className="materials-hero__inner">


            <motion.div
              className="materials-hero__copy"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <p className="materials-hero__eyebrow">
                MATERIALS / SYSTEMS
              </p>


              <h1
                id="materials-title"
                className="materials-hero__title"
              >
                Built with
                <br />

                materials
                <br />

                <em>we trust.</em>
              </h1>

            </motion.div>


            <motion.div
              className="materials-hero__intro"
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <span className="materials-hero__index">
                01 — 06
              </span>


              <p>
                A complete lining system depends on
                every layer working together. We work
                with established building materials
                across the exterior envelope, internal
                linings and final finish.
              </p>


              <a
                href="#materials-list"
                className="materials-hero__explore"
              >
                EXPLORE MATERIALS

                <span aria-hidden="true">
                  ↓
                </span>
              </a>

            </motion.div>

          </div>


          <div
            className="materials-hero__line"
            aria-hidden="true"
          />

        </section>



        {/* =================================================
            MATERIALS
            ================================================= */}

        <section
          id="materials-list"
          className="materials-list"
          aria-label="Premium Lining Solutions materials"
        >

          <div className="materials-list__inner">

            {materials.map(
              (material, index) => (

                <motion.article
                  key={material.number}
                  className={
                    `material-feature ${
                      index % 2 !== 0
                        ? 'material-feature--reverse'
                        : ''
                    }`
                  }
                  {...reveal}
                >


                  {/* IMAGE */}

                  <div className="material-feature__media">

                    <img
                      src={material.image}
                      alt={`${material.brand} ${material.category}`}
                      loading="lazy"
                      decoding="async"
                    />


                    <div
                      className="material-feature__shade"
                      aria-hidden="true"
                    />


                    <span
                      className="material-feature__image-number"
                      aria-hidden="true"
                    >
                      {material.number}
                    </span>

                  </div>



                  {/* CONTENT */}

                  <div className="material-feature__content">

                    <div className="material-feature__top">

                      <span className="material-feature__number">
                        {material.number}
                      </span>


                      <span
                        className="material-feature__line"
                        aria-hidden="true"
                      />


                      <span className="material-feature__category">
                        {material.category}
                      </span>

                    </div>


                    <h2>
                      {material.brand}
                    </h2>


                    <h3>
                      {material.title}
                    </h3>


                    <p>
                      {material.description}
                    </p>


                    <span
                      className="material-feature__arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>

                  </div>

                </motion.article>

              )
            )}

          </div>

        </section>



        {/* =================================================
            SYSTEM STATEMENT
            ================================================= */}

        <section className="materials-statement">

          <div className="materials-statement__inner">

            <motion.div
              className="materials-statement__label"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
              transition={{
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <span>
                COMPLETE LINING SOLUTIONS
              </span>


              <span
                className="materials-statement__label-line"
                aria-hidden="true"
              />

            </motion.div>


            <motion.div
              className="materials-statement__content"
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

              <h2>
                Materials are only
                <br />
                part of the system.
              </h2>


              <p>
                The difference is how every layer is
                coordinated, installed and finished
                as part of one complete package.
              </p>


              <a
                href="#contact"
                className="materials-statement__cta"
              >
                START A PROJECT

                <span aria-hidden="true">
                  →
                </span>
              </a>

            </motion.div>

          </div>

        </section>



        {/* =================================================
            PAGE CTA
            ================================================= */}

        <section
          id="contact"
          className="materials-cta"
        >

          <div className="materials-cta__inner">

            <motion.p
              className="materials-cta__eyebrow"
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.5,
              }}
            >
              HAVE A PROJECT?
            </motion.p>


            <motion.h2
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
                amount: 0.4,
              }}
              transition={{
                duration: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              One team.
              <br />

              <em>
                Every layer.
              </em>
            </motion.h2>


            <motion.a
              href="mailto:orders@premiumliningsolutions.com.au"
              className="materials-cta__button"
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
                amount: 0.5,
              }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <span>
                START A PROJECT
              </span>

              <span aria-hidden="true">
                →
              </span>

            </motion.a>

          </div>

        </section>

      </main>


    </>
  )
}


export default Materials