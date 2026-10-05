import Navbar from './components/layout/Navbar'
import Hero from './sections/Hero/Hero'
import Systems from './sections/Systems/Systems'

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Systems />
      </main>
    </>
  )
}

export default App