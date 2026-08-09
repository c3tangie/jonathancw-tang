import React from 'react'
import Navbar from '@components/Navbar'
import ProjectsHero from './p-components/ProjectsHero'
import ProjectsGrid from './p-components/ProjectsGrid'
import Footer from '@components/Footer'

const Projects = () => {
  return (
    <div>
      <Navbar />
      <ProjectsHero />
      <ProjectsGrid />
      <Footer />
    </div>
  )
}

export default Projects
