import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import Welcome from './components/Welcome'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <div className='container-flex'>
        <div className="content">
          <Navbar />
          <div className="content-grid">
            <SocialMedia />
            <main>
              <Welcome />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
