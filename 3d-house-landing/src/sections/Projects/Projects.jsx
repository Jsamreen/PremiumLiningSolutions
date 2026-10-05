import { motion } from 'motion/react'
import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'Residential',
    location: 'Melbourne, VIC',
    category: 'Complete Lining Package',
    image: '/images/projects/project-01.jpg',
    size: 'large',
  },
  {
    number: '02',
    title: 'Exterior Systems',
    location: 'Victoria',
    category: 'Hebel · Cladding · Wrap',
    image: '/images/projects/project-02.jpg',
    size: 'small',
  },
  {
    number: '03',
    title: 'Interior Finish',
    location: 'Melbourne, VIC',
    category: 'Plaster · Paint',
    image: '/images/projects/project-03.jpg',
    size: 'small',
  },
  {
    number: '04',
    title: 'Complete Build',
    location: 'Victoria',
    category: 'Frame to Finish',
    image: '/images/projects/project-04.jpg',
    size: 'large',
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

function Projects() {
  return (
    <section
      id="projects"
      className="projects"
      aria-labelledby="projects-title"
    >
      <div className="projects__inner">

        {/* =========================================
            HEADER
            ========================================= */}

        <div className="projects__header">

          <motion.div
            className="projects__heading"
            {...reveal}
          >
            <p className="projects__eyebrow">
              SELECTED WORK
            </p>

            <h2
              id="projects-title"
              className="projects__title"
            >
              Built properly.
              <br />

              <em>
                Finished beautifully.
              </em>
            </h2>
          </motion.div>


          <motion.div
            className="projects__intro"
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
            <span className="projects__intro-label">
              OUR WORK
            </span>

            <p>
              From building envelope systems to
              refined interior finishes, our work
              is delivered with the same focus on
              coordination, detail and quality.
            </p>
          </motion.div>

        </div>


        {/* =========================================
            PROJECT GRID
            ========================================= */}

        <div className="projects__grid">

          {projects.map((project, index) => (

            <motion.article
              key={project.number}
              className={`project-card project-card--${project.size}`}

              initial={{
                opacity: 0,
                y: 32,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.18,
              }}

              transition={{
                duration: 0.85,
                delay: index % 2 === 0 ? 0 : 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >

              <div className="project-card__media">

                <img
                  src={project.image}
                  alt={`${project.title} project by Premium Lining Solutions`}
                  loading="lazy"
                  decoding="async"
                />

                <div
                  className="project-card__shade"
                  aria-hidden="true"
                />


                {/* NUMBER */}

                <span className="project-card__number">
                  {project.number}
                </span>


                {/* VIEW PROJECT */}

                <span
                  className="project-card__view"
                  aria-hidden="true"
                >
                  <span>VIEW</span>
                  <span>↗</span>
                </span>


                {/* PROJECT DETAILS */}

                <div className="project-card__content">

                  <div
                    className="project-card__rule"
                    aria-hidden="true"
                  />

                  <div className="project-card__meta">
                    <span>
                      {project.location}
                    </span>

                    <span>
                      {project.category}
                    </span>
                  </div>

                  <h3>
                    {project.title}
                  </h3>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* =========================================
            BOTTOM
            ========================================= */}

        <motion.div
          className="projects__footer"

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
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <p>
            Quality across every layer of the build.
          </p>

          <a href="#contact">
            DISCUSS YOUR PROJECT

            <span aria-hidden="true">
              →
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  )
}

export default Projects