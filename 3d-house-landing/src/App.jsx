import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/layout/ScrollToTop'


import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Feedback from './Pages/Feedback/Feedback'
import ArchitecturalSystems from './Pages/ArchitecturalSystems/ArchitecturalSystems'


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

          <Route
            path="/architectural-systems"
            element={<ArchitecturalSystems />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App