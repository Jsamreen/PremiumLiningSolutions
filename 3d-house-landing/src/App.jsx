import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'

import Hero from './sections/Hero/Hero'
import Systems from './sections/Systems/Systems'
import CompleteSystem from './sections/CompleteSystem/CompleteSystem'
import WhyPLS from './sections/WhyPLS/WhyPLS'
import Projects from './sections/Projects/Projects'
import Process from './sections/Process/Process'
import FinalCTA from './sections/FinalCTA/FinalCTA'

import Materials from './Pages/Materials/Materials'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Feedback from './Pages/Feedback/Feedback'


/* =========================================================
   SHARED WEBSITE LAYOUT
   ========================================================= */

function SiteLayout() {
  return (
    <>
      <Navbar />

      <main className="site-main">
        <Outlet />
      </main>

      <Footer />
    </>
  )
}


/* =========================================================
   HOME PAGE
   ========================================================= */

function Home() {
  return (
    <>
      <Hero />
      <Systems />
      <CompleteSystem />
      <WhyPLS />
      <Projects />
      <Process />
      <FinalCTA />
    </>
  )
}


/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        <Route element={<SiteLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/materials"
            element={<Materials />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/feedback"
            element={<Feedback />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App