import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import './Contact.css'


/* =========================================================
   FORM OPTIONS
   ========================================================= */

const categories = [
  'General Enquiry',
  'Hebel',
  'Cladding',
  'Building Wrap',
  'Insulation',
  'Plaster',
  'Painting',
  'Complete Lining Package',
  'Subcontractor Enquiry',
  'Other',
]


const enquiryTypes = [
  'Builder',
  'Developer',
  'Home Owner',
  'Architect / Designer',
  'Supplier',
  'Subcontractor',
  'Other',
]


/* =========================================================
   REVEAL ANIMATION
   ========================================================= */

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
   CONTACT PAGE
   ========================================================= */

function Contact() {
  return (
    <div className="contact-page">

      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        className="contact-hero"
        aria-labelledby="contact-title"
      >

        {/* HERO IMAGE */}

        <div
          className="contact-hero__image"
          aria-hidden="true"
        >
          <img
            src="/images/Contact/contact-hero.png"
            alt=""
          />
        </div>


        <div className="contact-container contact-hero__inner">

          {/* HERO HEADING */}

          <motion.div
            className="contact-hero__heading"
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <p className="contact-eyebrow">
              CONTACT / PROJECT ENQUIRY
            </p>

            <h1 id="contact-title">
              Start the
              <br />
              <em>conversation.</em>
            </h1>

          </motion.div>


          {/* HERO CONTACT INFORMATION */}

          <motion.div
            className="contact-hero__intro"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <span className="contact-hero__location">
              MELBOURNE · VICTORIA
            </span>

            <p>
              Tell us about your project and the services you need.
              Our team will review your enquiry and get in touch.
            </p>


            <div className="contact-hero__details">

              <a href="tel:+61451215223">
                <span>PHONE</span>

                <strong>
                  0451 215 223
                </strong>
              </a>


              <a href="mailto:orders@premiumliningsolutions.com.au">
                <span>EMAIL</span>

                <strong>
                  orders@premiumliningsolutions.com.au
                </strong>
              </a>

            </div>

          </motion.div>

        </div>


        <div className="contact-hero__line" />

      </section>



      {/* =====================================================
          PROJECT ENQUIRY
          ===================================================== */}

      <section
        id="enquiry"
        className="contact-enquiry"
      >

        <div className="contact-container contact-enquiry__layout">

          {/* LEFT INTRO */}

          <motion.div
            className="contact-enquiry__intro"
            {...reveal}
          >

            <p className="contact-eyebrow">
              01 / PROJECT ENQUIRY
            </p>

            <h2>
              Tell us about
              <br />
              your <em>project.</em>
            </h2>

            <p className="contact-enquiry__description">
              Share your project details and the services you need.
              Complete the fields relevant to your enquiry.
            </p>


            <div className="contact-enquiry__aside">

              <span>
                COMPLETE LINING SOLUTIONS
              </span>

              <p>
                Hebel · Cladding · Wrap · Insulation ·
                Plaster · Paint
              </p>

            </div>

          </motion.div>



          {/* =================================================
              FORM
              ================================================= */}

          <motion.form
            className="contact-form"
            {...reveal}
            onSubmit={(event) => {
              event.preventDefault()

              /*
                Form submission will be connected to the
                website backend / email service later.
              */
            }}
          >

            {/* CATEGORY */}

            <div className="contact-form__field contact-form__field--full">

              <label htmlFor="category">
                CATEGORY *
              </label>

              <div className="contact-form__select">

                <select
                  id="category"
                  name="category"
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select enquiry category
                  </option>

                  {categories.map((category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  ))}

                </select>

              </div>

            </div>



            {/* ENQUIRING AS */}

            <div className="contact-form__field contact-form__field--full">

              <label htmlFor="enquiryType">
                ENQUIRING AS *
              </label>

              <div className="contact-form__select">

                <select
                  id="enquiryType"
                  name="enquiryType"
                  defaultValue=""
                  required
                >

                  <option
                    value=""
                    disabled
                  >
                    Select one
                  </option>

                  {enquiryTypes.map((type) => (
                    <option
                      key={type}
                      value={type}
                    >
                      {type}
                    </option>
                  ))}

                </select>

              </div>

            </div>



            {/* FIRST NAME */}

            <div className="contact-form__field">

              <label htmlFor="firstName">
                FIRST NAME *
              </label>

              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                autoComplete="given-name"
                required
              />

            </div>



            {/* LAST NAME */}

            <div className="contact-form__field">

              <label htmlFor="lastName">
                LAST NAME *
              </label>

              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last name"
                autoComplete="family-name"
                required
              />

            </div>



            {/* EMAIL */}

            <div className="contact-form__field">

              <label htmlFor="email">
                EMAIL *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                autoComplete="email"
                required
              />

            </div>



            {/* PHONE */}

            <div className="contact-form__field">

              <label htmlFor="phone">
                PHONE *
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone number"
                autoComplete="tel"
                required
              />

            </div>



            {/* ADDRESS */}

            <div className="contact-form__field contact-form__field--wide">

              <label htmlFor="address">
                PROJECT ADDRESS
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="Street address"
                autoComplete="street-address"
              />

            </div>



            {/* POST CODE */}

            <div className="contact-form__field contact-form__field--postcode">

              <label htmlFor="postcode">
                POST CODE
              </label>

              <input
                id="postcode"
                name="postcode"
                type="text"
                inputMode="numeric"
                placeholder="Post code"
                autoComplete="postal-code"
              />

            </div>



            {/* ABN */}

            <div className="contact-form__field">

              <label htmlFor="abn">
                ABN
              </label>

              <input
                id="abn"
                name="abn"
                type="text"
                inputMode="numeric"
                placeholder="ABN"
              />

            </div>



            {/* LICENCE */}

            <div className="contact-form__field">

              <label htmlFor="licence">
                BUILDER / CONTRACTOR LICENCE NO.
              </label>

              <input
                id="licence"
                name="licence"
                type="text"
                placeholder="Licence number"
              />

            </div>



            {/* MESSAGE */}

            <div className="contact-form__field contact-form__field--full">

              <label htmlFor="message">
                YOUR MESSAGE *
              </label>

              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Tell us about your project, scope, location and expected timing..."
                required
              />

            </div>



            {/* TERMS */}

            <label className="contact-form__terms">

              <input
                type="checkbox"
                name="terms"
                required
              />

              <span className="contact-form__check">
                ✓
              </span>

              <span>
                I agree to the{' '}

                <Link to="/terms">
                  Terms &amp; Conditions
                </Link>

                {' '}and{' '}

                <Link to="/privacy">
                  Privacy Policy
                </Link>

                , and consent to Premium Lining Solutions
                contacting me about this enquiry.
              </span>

            </label>



            {/* FORM FOOTER */}

            <div className="contact-form__footer">

              <span>
                * Required fields
              </span>

              <button
                type="submit"
                className="contact-form__submit"
              >

                <span>
                  SUBMIT ENQUIRY
                </span>

                <span aria-hidden="true">
                  →
                </span>

              </button>

            </div>

          </motion.form>

        </div>

      </section>



      {/* =====================================================
          SERVICE AREA
          ===================================================== */}

      <section className="contact-office">

        <div className="contact-container">


          {/* SERVICE AREA HEADING */}

          <motion.div
            className="contact-office__heading"
            {...reveal}
          >

            <div>

              <p className="contact-eyebrow">
                02 / SERVICE AREA
              </p>

              <h2>
                Across Melbourne
                <br />
                <em>&amp; Victoria.</em>
              </h2>

            </div>


            <p className="contact-office__description">
              Premium Lining Solutions supports residential
              and construction projects across Melbourne and Victoria.
              Contact our team to discuss availability for your location.
            </p>

          </motion.div>



          {/* SERVICE AREA MAP */}
            <motion.div
  className="contact-office__map"
  {...reveal}
>
  <div className="contact-office__map-wrapper">

    <iframe
      className="contact-office__map-frame"
      src="https://www.google.com/maps?q=Melbourne%2C+Victoria%2C+Australia&z=9&output=embed"
      title="Premium Lining Solutions service area across Melbourne and Victoria"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />

    <div className="contact-office__map-shade" />

    <div className="contact-office__map-copy">

      <span>
        PREMIUM LINING SOLUTIONS
      </span>

      <strong>
        Melbourne
        <br />
        Victoria
      </strong>

      <small>
        Servicing projects across Melbourne and Victoria
      </small>

      <a
        href="https://www.google.com/maps/search/?api=1&query=Melbourne%2C+Victoria%2C+Australia"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-office__map-link"
      >
        VIEW SERVICE AREA
        <span aria-hidden="true">↗</span>
      </a>

    </div>

  </div>
</motion.div>


          {/* CONTACT DETAILS */}

          <div className="contact-office__details">

            <div>

              <span>
                POSTAL ADDRESS
              </span>

              <strong>
                PO Box 1157
                <br />
                Kensington VIC 3031
              </strong>

            </div>


            <div>

              <span>
                PHONE
              </span>

              <a href="tel:+61451215223">
                0451 215 223
              </a>

            </div>


            <div>

              <span>
                EMAIL
              </span>

              <a href="mailto:orders@premiumliningsolutions.com.au">
                orders@premiumliningsolutions.com.au
              </a>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          FEEDBACK
          ===================================================== */}

      <section className="contact-feedback">

        <div className="contact-container contact-feedback__inner">

          <motion.div
            className="contact-feedback__copy"
            {...reveal}
          >

            <p className="contact-eyebrow">
              03 / FEEDBACK
            </p>

            <h2>
              Worked with us?
              <br />
              <em>Tell us how we did.</em>
            </h2>

          </motion.div>


          <motion.div
            className="contact-feedback__action"
            {...reveal}
          >

            <p>
              Your feedback helps us maintain high standards
              of workmanship, coordination and service.
            </p>


            <Link
              to="/feedback"
              className="contact-outline-button"
            >

              <span>
                LEAVE FEEDBACK
              </span>

              <span aria-hidden="true">
                →
              </span>

            </Link>

          </motion.div>

        </div>

      </section>



      {/* =====================================================
          SUBCONTRACTOR
          ===================================================== */}

      <section className="contact-subcontractor">

        <div className="contact-container contact-subcontractor__inner">


          {/* NUMBER */}

          <motion.div
            className="contact-subcontractor__number"
            {...reveal}
          >
            04
          </motion.div>



          {/* COPY */}

          <motion.div
            className="contact-subcontractor__copy"
            {...reveal}
          >

            <p className="contact-eyebrow">
              JOIN OUR NETWORK
            </p>

            <h2>
              Work with
              <br />
              <em>Premium Lining Solutions.</em>
            </h2>

            <p className="contact-subcontractor__description">
              We work with reliable subcontractors who share
              our standards for workmanship, communication
              and dependable delivery.
            </p>

          </motion.div>



          {/* DETAILS */}

          <motion.div
            className="contact-subcontractor__details"
            {...reveal}
          >

            <div className="contact-subcontractor__item">

              <span>
                01
              </span>

              <div>

                <strong>
                  QUALITY WORKMANSHIP
                </strong>

                <p>
                  Consistent attention to detail and a
                  professional standard of finish.
                </p>

              </div>

            </div>



            <div className="contact-subcontractor__item">

              <span>
                02
              </span>

              <div>

                <strong>
                  RELIABLE DELIVERY
                </strong>

                <p>
                  Clear communication and dependable
                  attendance throughout the project.
                </p>

              </div>

            </div>



            <div className="contact-subcontractor__item">

              <span>
                03
              </span>

              <div>

                <strong>
                  TEAM APPROACH
                </strong>

                <p>
                  Work effectively alongside other trades
                  within a coordinated lining package.
                </p>

              </div>

            </div>



            <a
              href="mailto:orders@premiumliningsolutions.com.au?subject=Subcontractor%20Enquiry"
              className="contact-gold-button"
            >

              <span>
                JOIN AS A SUBCONTRACTOR
              </span>

              <span aria-hidden="true">
                →
              </span>

            </a>

          </motion.div>

        </div>

      </section>



      {/* =====================================================
          CLOSING CTA
          ===================================================== */}

      <section className="contact-closing">

        <motion.div
          className="contact-closing__inner"
          {...reveal}
        >

          <p>
            COMPLETE LINING SOLUTIONS
          </p>

          <h2>
            One booking.
            <br />
            One team.
            <br />
            <em>One complete package.</em>
          </h2>


          <a
            href="#enquiry"
            className="contact-gold-button contact-closing__button"
          >

            <span>
              START A PROJECT
            </span>

            <span aria-hidden="true">
              →
            </span>

          </a>

        </motion.div>

      </section>

    </div>
  )
}


export default Contact