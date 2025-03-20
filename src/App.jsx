import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Design from './components/Design'
import About from './components/About'

const App = () => {
  return (
    <div>
      <Header/>
      <main>
        <Hero/>
        <Design />
        <About />
      </main>
      
    </div>
  )
}

export default App