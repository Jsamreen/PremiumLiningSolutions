import { useState } from 'react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import './Feedback.css'


const services = [
  'Complete Lining Package',
  'Hebel',
  'Cladding',
  'Building Wrap',
  'Insulation',
  'Plaster',
  'Painting',
  'Other',
]


function Feedback() {
  const [rating, setRating] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()

    // Connect to backend / email service later.
  }


  return (
    <div className="feedback-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="feedback-hero">

        <motion.div
          className="feedback-container feedback-hero__inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <p className="feedback-eyebrow">
            CLIENT FEEDBACK
          </p>

          <h1>
            Tell us how
            <br />
            <em>we did.</em>
          </h1>

          <p className="feedback-hero__description">
            Your feedback helps us maintain high standards
            across our workmanship, communication and service.
          </p>

        </motion.div>

      </section>



      {/* =====================================================
          SIMPLE FEEDBACK FORM
          ===================================================== */}

      <section className="feedback-section">

        <div className="feedback-container feedback-layout">

          <div className="feedback-intro">

            <p className="feedback-eyebrow">
              01 / YOUR EXPERIENCE
            </p>

            <h2>
              Share your
              <br />
              <em>feedback.</em>
            </h2>

            <p>
              It only takes a minute. Let us know what went
              well or where we can improve.
            </p>

          </div>



          <form
            className="feedback-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <div className="feedback-field">

              <label htmlFor="name">
                NAME *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                required
              />

            </div>


            {/* EMAIL */}

            <div className="feedback-field">

              <label htmlFor="email">
                EMAIL *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@email.com"
                autoComplete="email"
                required
              />

            </div>


            {/* SERVICE */}

            <div className="feedback-field feedback-field--full">

              <label htmlFor="service">
                SERVICE
              </label>

              <div className="feedback-select">

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                >

                  <option value="">
                    Select service
                  </option>

                  {services.map((service) => (
                    <option
                      key={service}
                      value={service}
                    >
                      {service}
                    </option>
                  ))}

                </select>

              </div>

            </div>



            {/* RATING */}

            <fieldset className="feedback-rating">

              <legend>
                HOW WOULD YOU RATE YOUR EXPERIENCE? *
              </legend>

              <div className="feedback-rating__options">

                {[1, 2, 3, 4, 5].map((number) => (

                  <label
                    key={number}
                    className={
                      rating === number
                        ? 'feedback-rating__option feedback-rating__option--active'
                        : 'feedback-rating__option'
                    }
                  >

                    <input
                      type="radio"
                      name="rating"
                      value={number}
                      checked={rating === number}
                      onChange={() => setRating(number)}
                      required
                    />

                    <span>
                      {number}
                    </span>

                  </label>

                ))}

              </div>


              <div className="feedback-rating__labels">

                <span>
                  Not great
                </span>

                <span>
                  Excellent
                </span>

              </div>

            </fieldset>



            {/* FEEDBACK */}

            <div className="feedback-field feedback-field--full">

              <label htmlFor="feedback">
                YOUR FEEDBACK *
              </label>

              <textarea
                id="feedback"
                name="feedback"
                rows="5"
                placeholder="Tell us about your experience..."
                required
              />

            </div>



            {/* TESTIMONIAL */}

            <label className="feedback-checkbox">

              <input
                type="checkbox"
                name="testimonialPermission"
              />

              <span className="feedback-checkbox__box">
                ✓
              </span>

              <span>
                You may use my feedback as a testimonial
                on the PLS website or marketing material.
              </span>

            </label>



            {/* SUBMIT */}

            <div className="feedback-form__footer">

              <span>
                * Required fields
              </span>

              <button
                type="submit"
                className="feedback-submit"
              >

                <span>
                  SUBMIT FEEDBACK
                </span>

                <span aria-hidden="true">
                  →
                </span>

              </button>

            </div>

          </form>

        </div>

      </section>



      {/* =====================================================
          SIMPLE CLOSING
          ===================================================== */}

      <section className="feedback-closing">

        <div className="feedback-container feedback-closing__inner">

          <div>

            <p className="feedback-eyebrow">
              PREMIUM LINING SOLUTIONS
            </p>

            <h2>
              Thank you for helping us
              <br />
              <em>do better work.</em>
            </h2>

          </div>


          <Link
            to="/contact#enquiry"
            className="feedback-contact-button"
          >

            <span>
              CONTACT OUR TEAM
            </span>

            <span aria-hidden="true">
              →
            </span>

          </Link>

        </div>

      </section>

    </div>
  )
}


export default Feedback