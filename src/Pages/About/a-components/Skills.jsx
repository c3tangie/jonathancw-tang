import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      category: "Civil Engineering Software",
      skills: ["Aimsun", "AutoCAD", "Rhinocerous3D", "Revit", "ArcGIS Pro"]
    },
    {
      category: "Programming",
      skills: ["Python", "PyTorch", "C", "C++", "Javascript"]
    },
    {
      category: "Tools & Others",
      skills: ["Excel", "PowerPoint", "Word", "Google Docs", "Google Slides"]
    }
  ]

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-4 text-navy-600">
                {category.category}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
