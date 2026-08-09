import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const NavisAIProject = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/projects')
  }

  return (
    <div>
      <Navbar />
      <section className="max-w-7xl mx-auto sm:px-10 py-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8">NavisAI (May 2026 - Present)</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            Project details coming soon.
          </p>
        </div>

        <button
          onClick={handleBackClick}
          className="mt-8 px-6 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-800 font-semibold shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          style={{ backgroundColor: '#334e68' }}
        >
          ← Back to Projects
        </button>
      </section>
      <Footer />
    </div>
  )
}

export default NavisAIProject
