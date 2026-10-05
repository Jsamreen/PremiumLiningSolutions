import {
  useEffect,
  useRef,
} from 'react'

import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
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
     HERO SCROLL
     ======================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,

    /*
     * Navbar is fixed.
     *
     * Hero begins at document top and the sticky viewport
     * itself handles navbar clearance in CSS.
     */

    offset: [
      'start start',
      'end end',
    ],
  })


  /* =======================================================
     VIDEO INITIAL STATE
     ======================================================= */

  useEffect(() => {

    const video = videoRef.current

    if (!video) return


    const prepareVideo = () => {

      /*
       * Start precisely on first frame.
       */

      video.pause()

      try {
        video.currentTime = 0
      } catch {
        // Browser may not allow seeking until metadata exists.
      }

    }


    if (video.readyState >= 1) {
      prepareVideo()
    } else {
      video.addEventListener(
        'loadedmetadata',
        prepareVideo,
        { once: true }
      )
    }


    return () => {

      video.removeEventListener(
        'loadedmetadata',
        prepareVideo
      )

      if (animationFrame.current) {
        cancelAnimationFrame(
          animationFrame.current
        )
      }

    }

  }, [])


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
        Number.isNaN(video.duration)
      ) {
        return
      }


      /*
       * Reduced motion:
       * keep the architectural visual stationary.
       */

      if (reduceMotion) {
        video.currentTime = 0
        return
      }


      targetProgress.current = progress


      if (animationFrame.current) {
        return
      }


      const animate = () => {

        const video =
          videoRef.current


        if (
          !video ||
          !video.duration
        ) {

          animationFrame.current =
            null

          return
        }


        const difference =
          targetProgress.current -
          currentProgress.current


        /*
         * 0.085 gives the camera movement a little
         * more weight than the previous 0.1.
         *
         * Still responsive, but less twitchy.
         */

        currentProgress.current +=
          difference * 0.085


        const smoothProgress =
          Math.max(
            0,
            Math.min(
              currentProgress.current,
              1
            )
          )


        video.currentTime =
          smoothProgress *
          video.duration


        if (
          Math.abs(difference) >
          0.0008
        ) {

          animationFrame.current =
            requestAnimationFrame(
              animate
            )

        } else {

          currentProgress.current =
            targetProgress.current


          video.currentTime =
            targetProgress.current *
            video.duration


          animationFrame.current =
            null

        }

      }


      animationFrame.current =
        requestAnimationFrame(
          animate
        )

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


        {/* ================================================
            LEFT CONTENT
            ================================================ */}

        <motion.div
          className="hero-film__content"
          initial={{
            opacity: 0,
            y: 18,
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
            <span>
              EXPLORE THE HOUSE
            </span>

            <span
              className="hero-film__button-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </a>

        </motion.div>


        {/* ================================================
            HOUSE VISUAL
            ================================================ */}

        <motion.div
          className="hero-film__visual"
          initial={{
            opacity: 0,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          {/*
           * IMPORTANT:
           *
           * Video and labels stay inside the SAME 16:9
           * coordinate system.
           *
           * Therefore resizing this container will not
           * break hotspot positioning.
           */}

          <div className="hero-film__media">


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


            <div
              className="hero-film__hotspots"
              aria-hidden="true"
            >

              {hotspots.map(
                (hotspot) => (

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

                )
              )}

            </div>

          </div>

        </motion.div>


        {/* ================================================
            SCROLL INDICATOR
            ================================================ */}

        <motion.div
          className="hero-film__scroll"
          initial={{
            opacity: 0,
            y: 8,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          aria-hidden="true"
        >

          <span
            className="hero-film__mouse"
          />


          <span>
            SCROLL TO EXPLORE
          </span>


          <span
            className="hero-film__divider"
          >
            ·
          </span>


          <span>
            DISCOVER THE BUILD
          </span>

        </motion.div>


        {/* subtle bottom fade into next section */}

        <div
          className="hero-film__bottom-fade"
          aria-hidden="true"
        />

      </div>

    </section>

  )
}


export default Hero