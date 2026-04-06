import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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

const App = () => {
  return (
    <Router basename="/jonathancw-tang/">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/aimsun" element={<AimsunProject />} />
        <Route path="/projects/concrete" element={<ConcreteProject />} />
        <Route path="/projects/transportation" element={<TransportationProject />} />
        <Route path="/projects/groundwater" element={<GroundwaterProject />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App