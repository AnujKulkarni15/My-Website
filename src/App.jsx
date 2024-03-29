import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Resume from './component/Resume'
import Portfolio from './component/Portfolio'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {


  return (
    <>
      <Navbar />
      <Home/>
      <About/>
      <Resume/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
