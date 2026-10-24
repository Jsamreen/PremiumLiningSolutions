import Hero from '../../sections/Hero/Hero'
import Systems from '../../sections/Systems/Systems'
import CompleteSystem from '../../sections/CompleteSystem/CompleteSystem'
import WhyPLS from '../../sections/WhyPLS/WhyPLS'
import Projects from '../../sections/Projects/Projects'
import FinalCTA from '../../sections/FinalCTA/FinalCTA'

import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <Systems />
      <CompleteSystem />
      <WhyPLS />
      <Projects />
      <FinalCTA />
    </main>
  )
}

export default Home