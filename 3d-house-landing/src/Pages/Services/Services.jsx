import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import './Services.css'


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
    image: '/images/services/hebel-01.webp',
    images: ['/images/services/hebel-01.webp', '/images/services/hebel-02.webp', '/images/services/hebel-03.webp'],
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
    image: '/images/services/cladding-01.webp',
    images: ['/images/services/cladding-01.webp', '/images/services/cladding-02.webp', '/images/services/cladding-03.webp'],
    externalLinks: [
      { label: 'EXPLORE JAMES HARDIE CLADDING', url: 'https://www.jameshardie.com.au/products/hardie-brushed-concrete-cladding' },
      { label: 'EXPLORE NRG GREENBOARD', url: 'https://nrggreenboard.com.au/' },
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
    image: '/images/services/wrap-01.webp',
    images: ['/images/services/wrap-01.webp', '/images/services/wrap-02.webp', '/images/services/wrap-03.webp'],
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
    image: '/images/services/insulation-01.webp',
    images: ['/images/services/insulation-01.webp'],
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
    image: '/images/services/plaster-01.webp',
    images: ['/images/services/plaster-01.webp', '/images/services/plaster-02.webp', '/images/services/plaster-03.webp'],
    resource: { label: 'EXPLORE KNAUF WALL SYSTEMS', url: 'https://knauf.com/en-AU/applications/walls' },
  },
  {
    number: '06',
    id: 'steel-framing',
    name: 'Steel Stud & Track',
    category: 'INTERNAL WALL FRAMING',
    brand: 'RONDO',
    title: 'Precision behind every finished wall.',
    description: 'Steel stud and track systems provide the framework for internal plasterboard walls. PLS can discuss the appropriate framing and lining scope for your project.',
    image: '/images/services/stud-track-01.webp',
    images: ['/images/services/stud-track-01.webp'],
    resource: { label: 'EXPLORE RONDO STUD & TRACK', url: 'https://www.rondo.com.au/products/walls/steel-stud-track-wall-framing-system' },
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

function ProjectGallery({ system, index }) {
  const [active, setActive] = useState(0)
  const images = system.images || (system.image ? [system.image] : [])
  const hasMultiple = images.length > 1
  const change = (direction) => setActive((current) => (current + direction + images.length) % images.length)

  return (
    <motion.figure className="system-chapter__visual" initial={{ opacity: 0, scale: 0.985 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8 }}>
      <div className="system-chapter__image-wrap system-gallery">
        {images.length ? (
          <img key={images[active]} src={images[active]} alt={`${system.name} project photograph ${active + 1}`} className="system-chapter__image" loading={index > 0 ? 'lazy' : 'eager'} />
        ) : (
          <div className="system-gallery__placeholder"><span>PROJECT PHOTOGRAPH</span><strong>{system.name}</strong><small>Image to be added</small></div>
        )}
        <div className="system-chapter__image-overlay" aria-hidden="true" />
        <span className="system-chapter__image-number">{system.number}</span>
        <div className="system-chapter__image-caption"><span>PREMIUM LINING SOLUTIONS</span><span>{system.category}</span></div>
        {hasMultiple && (
          <div className="system-gallery__controls">
            <button type="button" onClick={() => change(-1)} aria-label={`Previous ${system.name} photo`}>←</button>
            <span>{String(active + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => change(1)} aria-label={`Next ${system.name} photo`}>→</button>
          </div>
        )}
      </div>
    </motion.figure>
  )
}

const gallerySlides = [
  {
    src: '/images/services/services-crsl-01.webp',
    name: 'Modern Residential Façade',
    category: 'EXTERNAL WALL SYSTEMS',
    description:
      'External wall linings and architectural detailing on a contemporary double-storey residence.',
  },
  {
    src: '/images/services/services-crsl-02.webp',
    name: 'Contemporary Home Exterior',
    category: 'RESIDENTIAL EXTERIORS',
    description:
      'A double-storey residence combining rendered surfaces, brickwork and architectural façade details.',
  },
  {
    src: '/images/services/services-crsl-03.webp',
    name: 'Curved Feature Cladding',
    category: 'ARCHITECTURAL CLADDING',
    description:
      'Timber-look cladding forming a distinctive curved entrance canopy on a contemporary building.',
  },
  {
    src: '/images/services/services-crsl-04.webp',
    name: 'Vertical Feature Cladding',
    category: 'FEATURE WALL CLADDING',
    description:
      'Vertical timber-look cladding creating a refined architectural feature on a residential exterior.',
  },
  {
    src: '/images/services/services-crsl-05.webp',
    name: 'Entrance Canopy Detailing',
    category: 'EXTERIOR FINISHES',
    description:
      'Timber-look cladding and trim detailing around a contemporary residential entrance.',
  },
  {
    src: '/images/services/services-crsl-06.webp',
    name: 'Timber-Look Façade Cladding',
    category: 'EXTERNAL CLADDING',
    description:
      'Vertical cladding panels creating a clean, modern exterior finish with a natural timber appearance.',
  },
  {
    src: '/images/services/services-crsl-07.webp',
    name: 'Contemporary Weatherboard Home',
    category: 'COMPLETED RESIDENTIAL EXTERIORS',
    description:
      'A double-storey residence featuring horizontal exterior cladding and illuminated architectural details.',
  },
  {
    src: '/images/services/services-crsl-08.webp',
    name: 'Interior Plasterboard Finishing',
    category: 'INTERNAL PLASTER SYSTEMS',
    description:
      'Plasterboard walls and detailed ceilings during the jointing and finishing stage of construction.',
  },
]

function SystemsShowcase() {
  const [active, setActive] = useState(0)
  const [failed, setFailed] = useState([])
  const slides = gallerySlides.filter((item) => !failed.includes(item.src))
  const safeActive = slides.length ? active % slides.length : 0
  const slide = slides[safeActive]

  const change = (direction) => {
    if (slides.length > 1) {
      setActive((current) => (current + direction + slides.length) % slides.length)
    }
  }

  return (
    <section className="systems-showcase" aria-label="Project photo carousel">
      <div className="systems-shell">
        <div className="systems-showcase__header">
          <div>
            <span className="systems-showcase__eyebrow">PLS / PROJECT GALLERY</span>
            <h2>Our work <em>in focus.</em></h2>
          </div>
          <p>Explore photographs of the lining systems and finishes featured in our work.</p>
        </div>

        <div className="systems-showcase__frame">
          {slide ? (
            <>
              <div className="systems-showcase__info">
                <span className="systems-showcase__index">SELECTED WORK / {String(safeActive + 1).padStart(2, '0')}</span>
                <div className="systems-showcase__details" aria-live="polite">
                  <span className="systems-showcase__category">{slide.category}</span>
                  <h3 key={slide.name}>{slide.name}</h3>
                  <span className="systems-showcase__rule" aria-hidden="true" />
                  <p>Premium Lining Solutions · Project gallery</p>
                </div>
                <div className="systems-showcase__navigation">
                  <span className="systems-showcase__counter">{String(safeActive + 1).padStart(2, '0')} <span>/</span> {String(slides.length).padStart(2, '0')}</span>
                  <div className="systems-showcase__actions">
                    <button type="button" onClick={() => change(-1)} disabled={slides.length < 2} aria-label="Previous project image">←</button>
                    <button type="button" onClick={() => change(1)} disabled={slides.length < 2} aria-label="Next project image">→</button>
                  </div>
                </div>
              </div>
              <div className="systems-showcase__media">
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={`${slide.name} project photograph`}
                  loading="lazy"
                  onError={() => {
                    console.warn('Project image could not be loaded:', slide.src)
                    setFailed((previous) => previous.includes(slide.src) ? previous : [...previous, slide.src])
                    setActive(0)
                  }}
                />
                <span className="systems-showcase__photo-label">PLS / PROJECT {String(safeActive + 1).padStart(2, '0')}</span>
              </div>
            </>
          ) : (
            <p className="systems-showcase__empty">Project images could not be loaded. Check the filenames in public/images/projects.</p>
          )}
        </div>
      </div>
    </section>
  )
}

function Services() {

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
            <span>Services</span>

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
                06 SYSTEM CATEGORIES · EST. 2022
              </span>
            </motion.div>

          </div>

        </div>

      </section>



      {/* Featured project / systems image carousel */}
      <SystemsShowcase />

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

                <ProjectGallery system={system} index={index} />



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


                  {(system.externalLinks || (system.resource ? [system.resource] : [])).map((link) => (
                    <a key={link.url} className="system-chapter__resource" href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}

                </motion.div>

              </div>

            </article>
          )

        })}

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


export default Services