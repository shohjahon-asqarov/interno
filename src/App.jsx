import RecentBlogs from './components/RecentBlogs'
import Consultation from './components/Consultation'
import Footer from './components/Footer'
import RecentProjects from './components/RecentProjects'

const App = () => {
  return (
    <>
      <main>
        <RecentProjects />
        <RecentBlogs />
        <Consultation />
      </main>
      <Footer />
    </>
  )
}

export default App