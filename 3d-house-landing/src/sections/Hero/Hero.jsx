import { useRef } from 'react'
import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
  useTransform,
} from 'motion/react'

import './Hero.css'


const hotspots = [
  {
    number: '01',
    name: 'ROOF',
    className: 'hotspot--roof',
  },
  {
    number: '02',
    name: 'WALLS',
    className: 'hotspot--walls',
  },
  {
    number: '03',
    name: 'INSULATION',
    className: 'hotspot--insulation',
  },
  {
    number: '04',
    name: 'PLASTER',
    className: 'hotspot--plaster',
  },
  {
    number: '05',
    name: 'CLADDING',
    className: 'hotspot--cladding',
  },
  {
    number: '06',
    name: 'PAINT',
    className: 'hotspot--paint',
  },
]


function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  const targetProgress = useRef(0)
  const currentProgress = useRef(0)
  const animationFrame = useRef(null)

  const reduceMotion = useReducedMotion()


  /* =======================================================
     HERO SCROLL PROGRESS
     ======================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })


  /* =======================================================
     PARALLAX MOVEMENT

     Background = slow
     Foreground = faster
     ======================================================= */

  const treeY = useTransform(
    scrollYProgress,
    [0, 1],
    [15, -35]
  )

  const treeX = useTransform(
    scrollYProgress,
    [0, 1],
    [10, -10]
  )


  const leavesLeftY = useTransform(
    scrollYProgress,
    [0, 1],
    [30, -90]
  )

  const leavesLeftX = useTransform(
    scrollYProgress,
    [0, 1],
    [-20, 30]
  )


  const leavesRightY = useTransform(
    scrollYProgress,
    [0, 1],
    [40, -120]
  )

  const leavesRightX = useTransform(
    scrollYProgress,
    [0, 1],
    [20, -35]
  )


  /* =======================================================
     SMOOTH SCROLL-CONTROLLED VIDEO
     ======================================================= */

  useMotionValueEvent(
    scrollYProgress,
    'change',
    (progress) => {
      const video = videoRef.current

      if (
        !video ||
        !video.duration ||
        Number.isNaN(video.duration) ||
        reduceMotion
      ) {
        return
      }

      targetProgress.current = progress

      if (animationFrame.current) return


      const animate = () => {
        const video = videoRef.current

        if (!video) {
          animationFrame.current = null
          return
        }


        const difference =
          targetProgress.current -
          currentProgress.current


        /*
         * Smooth cinematic response
         */

        currentProgress.current +=
          difference * 0.1


        const progress = Math.max(
          0,
          Math.min(
            currentProgress.current,
            1
          )
        )


        video.currentTime =
          progress * video.duration


        if (Math.abs(difference) > 0.001) {
          animationFrame.current =
            requestAnimationFrame(animate)
        } else {
          currentProgress.current =
            targetProgress.current

          video.currentTime =
            targetProgress.current *
            video.duration

          animationFrame.current = null
        }
      }


      animationFrame.current =
        requestAnimationFrame(animate)
    }
  )


  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero-film"
      aria-labelledby="hero-title"
    >

      <div className="hero-film__sticky">


        {/* =================================================
            LEFT CONTENT
            ================================================= */}

        <div className="hero-film__content">

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
            EXPLORE THE HOUSE

            <span aria-hidden="true">
              →
            </span>
          </a>

        </div>


        {/* =================================================
            HOUSE
            ================================================= */}

        <div className="hero-film__visual">

          {/*
           * Video + hotspots share this
           * exact 16:9 coordinate system.
           */}

          <div className="hero-film__media">


            {/* VIDEO */}

            <video
              ref={videoRef}
              className="hero-film__video"
              src="/videos/pls-house-hero-1s.mp4"
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              aria-label="Premium Lining Solutions construction showcase"
            />

          

            {/* FLOATING LABELS */}

            <div
              className="hero-film__hotspots"
              aria-hidden="true"
            >

              {hotspots.map((hotspot) => (

                <div
                  key={hotspot.number}
                  className={
                    `hero-hotspot ${hotspot.className}`
                  }
                >

                  <span
                    className="hero-hotspot__anchor"
                  />


                  <div
                    className="hero-hotspot__label"
                  >

                    <span
                      className="hero-hotspot__number"
                    >
                      {hotspot.number}
                    </span>


                    <strong
                      className="hero-hotspot__name"
                    >
                      {hotspot.name}
                    </strong>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>


        {/* =================================================
            SCROLL PROMPT
            ================================================= */}

        <motion.div
          className="hero-film__scroll"
          initial={{
            opacity: 0,
            y: 6,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          aria-hidden="true"
        >

          <span className="hero-film__mouse" />


          <span>
            SCROLL TO EXPLORE
          </span>


          <span className="hero-film__divider">
            ·
          </span>


          <span>
            DISCOVER THE BUILD
          </span>

        </motion.div>

      </div>

    </section>
  )
}


export default Hero