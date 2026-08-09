import React from 'react'
import { useNavigate } from 'react-router-dom'
import tp_tn from '@assets/tp_tn.jpg'
import gw_tn from '@assets/gw_tn.jpg'
import br_tn from '@assets/br_tn.jpg'
import mc_tn from '@assets/mc_tn.jpg'
import btc_tn from '@assets/btc_tn.png'
import na_tn from '@assets/na_tn.png'

const ProjectsGrid = () => {
  const navigate = useNavigate()

  const projects = [
    {
      id: 5,
      title: "NavisAI",
      date: "May 2026 - Present",
      tags: ["Artificial Intelligence", "Neural Network", "Version Control"],
      path: "/projects/navisai",
      thumbnail: na_tn
    },
    {
      id: 6,
      title: "Brightway to Canada",
      date: "May 2025 - Present",
      tags: ["Web Design", "Fullstack Development", "Version Control"],
      path: "/projects/brightway-to-canada",
      thumbnail: btc_tn
    },
    {
      id: 1,
      title: "Aimsun Microsimulation Project",
      date: "February 2026 - April 2026",
      tags: ["Aimsun Next", "Python", "Traffic Simulation", "Network Modeling"],
      path: "/projects/aimsun",
      thumbnail: mc_tn
    },
    {
      id: 2,
      title: "Concrete Bridge Design Project",
      date: "February 2026 - April 2026",
      tags: ["Bridge Design", "Reinforced Concrete", "AutoCAD", "Excel"],
      path: "/projects/concrete",
      thumbnail: br_tn
    },
    {
      id: 3,
      title: "Transportation Impacts Video Project",
      date: "December 2025",
      tags: ["Transportation Analysis", "Video Editing"],
      path: "/projects/transportation",
      thumbnail: tp_tn
    },
    {
      id: 4,
      title: "Groundwater Engineering Internship",
      date: "May 2024 - July 2024",
      tags: ["Groundwater", "Field Work", "Excel"],
      path: "/projects/groundwater",
      thumbnail: gw_tn
    }
  ]

  return (
    <section className="max-w-7xl mx-auto sm:px-10 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            {project.thumbnail ? (
              <div className="relative h-96 overflow-hidden flex items-center justify-center bg-gray-100 flex-shrink-0">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-6">
                  <div>
                    <p className="text-base font-semibold text-gray-200">{project.date}</p>
                    <p className="text-2xl font-bold text-white">{project.title}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative h-96 overflow-hidden flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-slate-700 to-slate-800" style={{ background: 'linear-gradient(to right, #334e68, #2a3d54)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end justify-start p-6">
                  <div>
                    <p className="text-base font-semibold text-gray-200">{project.date}</p>
                    <p className="text-2xl font-bold text-white">{project.title}</p>
                  </div>
                </div>
              </div>
            )}
            <div className="pb-6 px-6 flex-grow flex flex-col">
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => navigate(project.path)}
                className="mt-auto bg-slate-700 text-white px-6 py-2 rounded-lg hover:bg-slate-800 font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                style={{ backgroundColor: '#334e68' }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsGrid
