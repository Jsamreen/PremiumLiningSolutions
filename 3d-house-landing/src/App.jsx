import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CompleteSystem from './sections/CompleteSystem/CompleteSystem'
import FinalCTA from './sections/FinalCTA/FinalCTA'
import Hero from './sections/Hero/Hero'
import Process from './sections/Process/Process'
import Projects from './sections/Projects/Projects'
import Systems from './sections/Systems/Systems'
import WhyPLS from './sections/WhyPLS/WhyPLS'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Systems />
        <CompleteSystem />
        <WhyPLS />
        <Projects />
        <Process />
        <FinalCTA />
        <Footer/>
      </main>
    </>
  )
}

export default App