import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Design from './components/Design'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Partner from './components/Partner'
import Rezalits from './Components/Rezalits'
import RecentBlogs from './components/RecentBlogs'
import Consultation from './components/Consultation'
import Footer from './components/Footer'
import RecentProjects from './components/RecentProjects'


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Design />
        <About />
        <Testimonials />
        <Partner />
        <RecentProjects />
        <Rezalits />
        <RecentBlogs />
        <Consultation />
      </main>
      <Footer />
    </>
  )
}

export default App
