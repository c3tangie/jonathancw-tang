import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './Pages/Home/home'
import Projects from './Pages/projects/Projects'
import Experience from './Pages/Experience/Experience'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Resume from './Pages/Resume/Resume'
import AimsunProject from './Pages/projects/AimsunProject'
import ConcreteProject from './Pages/projects/ConcreteProject'
import TransportationProject from './Pages/projects/TransportationProject'
import GroundwaterProject from './Pages/projects/GroundwaterProject'
import NavisAIProject from './Pages/projects/NavisAIProject'
import BrightwayToCanadaProject from './Pages/projects/BrightwayToCanadaProject'

const RedirectHandler = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    const storedRedirect = sessionStorage.getItem('postBuildRedirect')
    const redirect = window.__REDIRECT__ || storedRedirect

    if (redirect) {
      const redirectPath = redirect.replace('/jonathancw-tang', '')
      navigate(redirectPath, { replace: true })
      delete window.__REDIRECT__
      sessionStorage.removeItem('postBuildRedirect')
    }
  }, [navigate])
  
  return null
}

const App = () => {
  return (
    <Router basename="/jonathancw-tang/">
      <ScrollToTop />
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/aimsun" element={<AimsunProject />} />
        <Route path="/projects/concrete" element={<ConcreteProject />} />
        <Route path="/projects/transportation" element={<TransportationProject />} />
        <Route path="/projects/groundwater" element={<GroundwaterProject />} />
        <Route path="/projects/navisai" element={<NavisAIProject />} />
        <Route path="/projects/brightway-to-canada" element={<BrightwayToCanadaProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
