import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import './About.css'

const clubs = ['Sydenham Park', 'Westgate', 'Preston Lions', 'Lalor Sloga']
const faqs = [
  { question: 'What types of projects does PLS work on?', answer: 'We support residential construction projects across Melbourne and Victoria. Send through your project details and we can discuss the scope and availability.' },
  { question: 'Can PLS provide an individual service?', answer: 'Yes. You can enquire about a single lining service or multiple systems for the same project.' },
  { question: 'What services does PLS offer?', answer: 'Our services include AAC / Hebel systems, external cladding, wall wrap, insulation, Rondo stud and track, and plaster systems. The scope depends on your project requirements.' },
  { question: 'Where does PLS operate?', answer: 'Premium Lining Solutions is based in Melbourne and works on projects across Victoria.' },
  { question: 'How do I request a quote?', answer: 'Send your project location, drawings if available, and required services through our contact page. Our team will review your enquiry.' },
]

export default function About() {
  const [openFaq, setOpenFaq] = useState(null)
  const reduceMotion = useReducedMotion()
  const reveal = {
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: reduceMotion ? 0 : 0.55 },
  }

  return (
    <main className="about-page">
      {/* 01 — Sponsorship feature is the first section, directly below the site navbar. */}
      <section className="about-feature" aria-labelledby="about-feature-title">
        <div className="about-feature__photo">
          <img src="/images/About/sydenham-park.jpeg" alt="Sydenham Park Soccer Club's 2026 club partner announcement featuring Premium Lining Solutions" fetchPriority="high" />
        </div>
        <div className="about-feature__content">
          <motion.div {...reveal}>
            <span className="about-eyebrow">PLS / COMMUNITY PARTNERSHIPS</span>
            <h1 id="about-feature-title">Backing the<br /><em>local game.</em></h1>
            <p>Premium Lining Solutions proudly supports local football and the communities that bring people together.</p>
            <span className="about-feature__subheading">CLUBS WE SUPPORT</span>
            <div className="about-feature__clubs">
              {clubs.map((club, i) => (
                <div className="about-feature__club" key={club}>
                  <span>{String(i + 1).padStart(2, '0')}</span><strong>{club}</strong>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02 — Company introduction */}
      <section className="about-company" aria-labelledby="about-company-title">
        <div className="about-container about-company__grid">
          <motion.div {...reveal}>
            <span className="about-eyebrow">01 / ABOUT THE COMPANY</span>
            <h2 id="about-company-title">From frame<br /><em>to finish.</em></h2>
            <span className="about-company__est">ESTABLISHED 2022 · MELBOURNE, VICTORIA</span>
          </motion.div>
          <motion.div className="about-company__text" {...reveal}>
            <p>Established in 2022, Premium Lining Solutions is a Melbourne-based construction services business focused on residential lining and exterior wall systems.</p>
            <p>We bring complementary services together through a practical, coordinated approach — with attention to workmanship, communication and the details that help projects progress smoothly.</p>
            <p>Our work includes AAC / Hebel systems, cladding, wall wrap, insulation, stud and track, and plaster systems.</p>
          </motion.div>
        </div>
      </section>

      {/* 03 — Compact FAQs */}
      <section className="about-faq" aria-labelledby="about-faq-title">
        <div className="about-container about-faq__grid">
          <motion.div {...reveal}>
            <span className="about-eyebrow">02 / FREQUENTLY ASKED QUESTIONS</span>
            <h2 id="about-faq-title">Good to know<br /><em>before we begin.</em></h2>
            <p className="about-faq__intro">A few helpful answers about our services and project enquiries.</p>
          </motion.div>
          <motion.div className="about-faq__list" {...reveal}>
            {faqs.map((faq, index) => {
              const expanded = openFaq === index
              return (
                <div className="about-faq__item" key={faq.question}>
                  <button className="about-faq__question" type="button" aria-expanded={expanded} aria-controls={`about-answer-${index}`} onClick={() => setOpenFaq(expanded ? null : index)}>
                    <span className="about-faq__number">{String(index + 1).padStart(2, '0')}</span>
                    <span>{faq.question}</span>
                    <span className="about-faq__toggle" aria-hidden="true">{expanded ? '−' : '+'}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded && (
                      <motion.div id={`about-answer-${index}`} className="about-faq__answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : 0.22 }}>
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </div>
      </section>
      {/* Existing global Footer in App/layout follows this page. */}
    </main>
  )
}
