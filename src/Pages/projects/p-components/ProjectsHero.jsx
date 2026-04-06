import React from 'react'
import project_tn from '@assets/project_tn.jpg'

const ProjectsHero = () => {
  return (
    <section 
      className="relative text-white py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${project_tn})` }}
    >
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
