import React from 'react'
import Navbar from '@components/Navbar'
import AboutHero from './a-components/AboutHero'
import AboutContent from './a-components/AboutContent'
import Skills from './a-components/Skills'
import Footer from '@components/Footer'

const About = () => {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutContent />
      <Skills />
      <Footer />
    </div>
  )
}

export default About
