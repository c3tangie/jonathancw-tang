import React from 'react'
import Navbar from '@components/Navbar'
import ProjectsHero from './p-components/ProjectsHero'
import ProjectsGrid from './p-components/ProjectsGrid'
import Footer from '@components/Footer'
import BackToTop from '@components/BackToTopButton'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <BackToTop />
      <Footer />
    </div>
  )
}

export default Projects
