import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Design from './components/Design'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Partner from './components/Partner'
import Rezalits from './Components/Rezalits'


const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Design />
        <About />
        <Testimonials />
        <Partner />
        <Rezalits />
      </main>

    </div>
  )
}

