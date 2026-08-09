import React, { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTopButton'
import { PageLoadingFallback } from './components/LoadingSpinner'

const Home = lazy(() => import('./Pages/Home/home'))
const Projects = lazy(() => import('./Pages/projects/Projects'))
const Experience = lazy(() => import('./Pages/Experience/Experience'))
const About = lazy(() => import('./Pages/About/About'))
const Contact = lazy(() => import('./Pages/Contact/Contact'))
const Resume = lazy(() => import('./Pages/Resume/Resume'))
const AimsunProject = lazy(() => import('./Pages/projects/AimsunProject'))
const ConcreteProject = lazy(() => import('./Pages/projects/ConcreteProject'))
const TransportationProject = lazy(() => import('./Pages/projects/TransportationProject'))
const GroundwaterProject = lazy(() => import('./Pages/projects/GroundwaterProject'))
const NavisAIProject = lazy(() => import('./Pages/projects/NavisAIProject'))
const BrightwayToCanadaProject = lazy(() => import('./Pages/projects/BrightwayToCanadaProject'))

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
      <BackToTop />
      <Suspense fallback={<PageLoadingFallback />}>
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
      </Suspense>
    </Router>
  )
}

export default App
