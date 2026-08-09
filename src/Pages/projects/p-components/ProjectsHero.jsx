import React from 'react'
import project_tn from '@assets/project_tn_optimized.jpg'
import HeroImage from '@components/HeroImage'

const ProjectsHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-800 text-white py-20">
      <HeroImage src={project_tn} alt="Projects banner" />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Projects</h1>
        <p className="text-xl opacity-90">
          Here are some of my most notable projects and accomplishments!        </p>
      </div>
    </section>
  )
}

export default ProjectsHero
