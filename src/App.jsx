import React from 'react'
import RecentBlogs from './components/RecentBlogs'
import Consultation from './components/Consultation'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <main>
        <RecentBlogs />
        <Consultation />
      </main>
      <Footer />
    </>
  )
}

export default App