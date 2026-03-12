import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import BackToTop from '@components/BackToTopButton'

const Resume = () => {
  // You'll need to place your resume PDF in the public folder
  // For example: /public/resume.pdf
  const resumeUrl = '/resume.pdf'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Jonathan_Tang_Resume.pdf' // Change this to your name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Resume</h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>
        </div>
      </div>

      {/* Resume Content Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          
          {/* Download Button at Top */}
          <div className="text-center mb-12">
            <button
              onClick={handleDownload}
              className="inline-flex items-center px-8 py-4 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg 
                className="w-6 h-6 mr-3" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                />
              </svg>
              Download Resume (PDF)
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden bg-gray-100">
            <iframe
              src={resumeUrl}
              className="w-full min-h-[800px] md:min-h-[1000px]"
              title="Resume Preview"
              style={{ border: 'none' }}
            >
              <p className="p-8 text-center">
                Your browser does not support PDF viewing. 
                <button 
                  onClick={handleDownload}
                  className="text-blue-900 hover:underline ml-2 font-semibold"
                >
                  Click here to download the resume.
                </button>
              </p>
            </iframe>
          </div>

          {/* Alternative Download Section */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Having trouble viewing the resume? 
            </p>
            <button
              onClick={handleDownload}
              className="text-blue-900 hover:text-blue-700 font-semibold underline"
            >
              Download it directly
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">📄</div>
                <h3 className="font-semibold text-gray-800 mb-2">Updated Resume</h3>
                <p className="text-sm text-gray-600">Always current and comprehensive</p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">💼</div>
                <h3 className="font-semibold text-gray-800 mb-2">Professional Format</h3>
                <p className="text-sm text-gray-600">ATS-friendly and well-structured</p>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-900 mb-2">📧</div>
                <h3 className="font-semibold text-gray-800 mb-2">Get in Touch</h3>
                <p className="text-sm text-gray-600">Questions? Feel free to contact me</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </div>
  )
}

export default Resume
