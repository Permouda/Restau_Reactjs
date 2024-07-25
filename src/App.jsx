import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Dishes from './components/Dishes'
import About from './components/About'
import Mission from './components/Mission'

const App = () => {
  return (
    <main className='overflow-hidden text-neutral-200 antialiased'>
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
    </main>
  )
}

export default App