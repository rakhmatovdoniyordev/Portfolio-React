import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import ScrollToTopButton from './components/ScrollToTopbutton'
import Services from './components/Services/Services'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'

function App() {
  return (
    <>
      <Header/>
      <Main/>
      <About/>
      <Skills/>
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
      <ScrollToTopButton/>
    </>
  )
}

export default App
