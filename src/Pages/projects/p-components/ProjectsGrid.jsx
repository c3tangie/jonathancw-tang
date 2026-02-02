import React from 'react'

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of your first project and its key features.",
      tags: ["React", "TailwindCSS", "Node.js"],
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of your second project and what makes it special.",
      tags: ["JavaScript", "API", "CSS"],
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A brief description of your third project and its impact.",
      tags: ["Python", "Data Science", "ML"],
      image: "https://via.placeholder.com/400x300"
    },
    {
      id: 4,
      title: "Project Four",
      description: "A brief description of your fourth project and the tech stack used.",
      tags: ["React", "Firebase", "UI/UX"],
      image: "https://via.placeholder.com/400x300"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
