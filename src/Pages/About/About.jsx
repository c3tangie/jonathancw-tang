import React from 'react'
import Navbar from '@components/Navbar'
import AboutHero from './a-components/AboutHero'
import AboutContent from './a-components/AboutContent'
import Skills from './a-components/Skills'
import Footer from '@components/Footer'
import BackToTop from '@components/BackToTopButton'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutContent />
      <Skills />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default About
