import {
  useCallback,
  useEffect,
  useRef,
} from 'react'

import {
  motion,
  useReducedMotion,
  useScroll,
  useMotionValueEvent,
} from 'motion/react'

import { Link } from 'react-router-dom'

import './Hero.css'


const hotspots = [
  {
    number: '01',
    name: 'ROOF',
    className: 'hotspot--roof',
    to: '/architectural-systems#roof',
  },
  {
    number: '02',
    name: 'WALLS',
    className: 'hotspot--walls',
    to: '/architectural-systems#hebel',
  },
  {
    number: '03',
    name: 'INSULATION',
    className: 'hotspot--insulation',
    to: '/architectural-systems#insulation',
  },
  {
    number: '04',
    name: 'PLASTER',
    className: 'hotspot--plaster',
    to: '/architectural-systems#plaster',
  },
  {
    number: '05',
    name: 'CLADDING',
    className: 'hotspot--cladding',
    to: '/architectural-systems#cladding',
  },
  {
    number: '06',
    name: 'PAINT',
    className: 'hotspot--paint',
    to: '/architectural-systems#paint',
  },
]


function Hero() {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)

  const targetProgress = useRef(0)
  const currentProgress = useRef(0)

  const frame = useRef(null)
  const last = useRef(0)

  const reduceMotion = useReducedMotion()


  /* =======================================================
     HERO SCROLL
     ======================================================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [
      'start start',
      'end end',
    ],
  })


  /* =======================================================
     FRAME-RATE-INDEPENDENT VIDEO SMOOTHING
     ======================================================= */

  const tick = useCallback((now) => {
    const video = videoRef.current

    if (
      !video ||
      !video.duration ||
      Number.isNaN(video.duration)
    ) {
      frame.current = null
      return
    }

    const dt = Math.min(
      (now - last.current) / 1000,
      0.05
    )

    last.current = now

    const k =
      1 - Math.exp(-dt * 7)

    currentProgress.current +=
      (
        targetProgress.current -
        currentProgress.current
      ) * k

    const progress = Math.max(
      0,
      Math.min(
        currentProgress.current,
        1
      )
    )

    video.currentTime =
      progress * video.duration

    if (
      Math.abs(
        targetProgress.current -
        currentProgress.current
      ) > 0.0005
    ) {
      frame.current =
        requestAnimationFrame(tick)
    } else {
      currentProgress.current =
        targetProgress.current

      video.currentTime =
        targetProgress.current *
        video.duration

      frame.current = null
    }
  }, [])


  /* =======================================================
     VIDEO INITIAL STATE / LOAD SYNC
     ======================================================= */

  useEffect(() => {
    const video = videoRef.current

    if (!video) return undefined

    const prepareVideo = () => {
      video.pause()

      const rawProgress =
        scrollYProgress.get()

      const progress = Math.max(
        0,
        Math.min(rawProgress, 1)
      )

      if (reduceMotion) {
        targetProgress.current = 0
        currentProgress.current = 0

        try {
          video.currentTime = 0
        } catch {
          // Seeking can fail before metadata is fully available.
        }

        return
      }

      targetProgress.current = progress
      currentProgress.current = progress

      try {
        if (
          video.duration &&
          !Number.isNaN(video.duration)
        ) {
          video.currentTime =
            progress * video.duration
        }
      } catch {
        // Browser may briefly reject seeking during load.
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

      if (frame.current !== null) {
        cancelAnimationFrame(
          frame.current
        )
      }

      frame.current = null
    }
  }, [
    reduceMotion,
    scrollYProgress,
  ])


  /* =======================================================
     SCROLL-CONTROLLED VIDEO
     ======================================================= */

  useMotionValueEvent(
    scrollYProgress,
    'change',
    (rawProgress) => {
      const video = videoRef.current

      if (
        !video ||
        !video.duration ||
        Number.isNaN(video.duration)
      ) {
        return
      }

      if (reduceMotion) {
        targetProgress.current = 0
        currentProgress.current = 0
        video.currentTime = 0

        if (frame.current !== null) {
          cancelAnimationFrame(
            frame.current
          )

          frame.current = null
        }

        return
      }

      const progress = Math.max(
        0,
        Math.min(rawProgress, 1)
      )

      targetProgress.current = progress

      if (frame.current === null) {
        last.current =
          performance.now()

        frame.current =
          requestAnimationFrame(tick)
      }
    }
  )


  return (
    <section
      ref={sectionRef}
      id="home"
      className={
        reduceMotion
          ? 'hero-film hero-film--static'
          : 'hero-film'
      }
      aria-labelledby="hero-title"
    >
      <div className="hero-film__sticky">

        {/* ================================================
            RESPONSIVE HERO STAGE
            ================================================ */}

        <div className="hero-film__stage">

          {/* ==============================================
              LEFT CONTENT
              ============================================== */}

          <motion.div
            className="hero-film__content"
            initial={{
              opacity: 0,
              y: reduceMotion ? 0 : 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: reduceMotion
                ? 0
                : 0.9,
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


          {/* ==============================================
              HOUSE VISUAL
              ============================================== */}

          <motion.div
            className="hero-film__visual"
            initial={{
              opacity: 0,
              scale: reduceMotion
                ? 1
                : 0.985,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: reduceMotion
                ? 0
                : 1.1,
              delay: reduceMotion
                ? 0
                : 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="hero-film__media">

              <video
                ref={videoRef}
                className="hero-film__video"
                src="/videos/pls-house-hero-1s.mp4"
                poster="/images/hero/pls-house-hero-poster.jpg"
                muted
                playsInline
                preload="auto"
                disablePictureInPicture
                aria-label="Premium Lining Solutions construction showcase"
              />

              <div className="hero-film__hotspots">
                {hotspots.map(
                  (hotspot) => (
                    <Link
                      to={hotspot.to}
                      key={hotspot.number}
                      className={
                        `hero-hotspot ${hotspot.className}`
                      }
                      aria-label={
                        `View ${hotspot.name.toLowerCase()} architectural system`
                      }
                    >
                      <span
                        className="hero-hotspot__anchor"
                        aria-hidden="true"
                      />

                      <span className="hero-hotspot__label">
                        <span className="hero-hotspot__number">
                          {hotspot.number}
                        </span>

                        <strong className="hero-hotspot__name">
                          {hotspot.name}
                        </strong>
                      </span>
                    </Link>
                  )
                )}
              </div>

            </div>
          </motion.div>

        </div>


        {/* ================================================
            SCROLL INDICATOR
            ================================================ */}

        {!reduceMotion && (
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
        )}


        {/* ================================================
            BOTTOM TRANSITION
            ================================================ */}

        <div
          className="hero-film__bottom-fade"
          aria-hidden="true"
        />

      </div>
    </section>
  )
}


export default Hero