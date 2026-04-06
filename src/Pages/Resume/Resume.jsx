import React from 'react'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import BackToTop from '@components/BackToTopButton'

const Resume = () => {
  // Points to your resume PDF in the public folder
  const resumeUrl = '/Resume 2Ci Jonathan Tang (3) (4).pdf'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Jonathan_Tang_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="bg-gradient-to-r from-slate-700 to-slate-800 text-white py-20"
        style={{ backgroundImage: 'linear-gradient(to right, #334e68, #2c3e50)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Here is my resume</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            Feel free to take a look through the PDF preview or download it directly!
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
              className="inline-flex items-center px-8 py-4 bg-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#334e68' }}
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
                  className="text-slate-700 hover:underline ml-2 font-semibold"
                  style={{ color: '#334e68' }}
                >
                  Click here to download the resume.
                </button>
              </p>
            </iframe>
          </div>
        </div>
      </div>

      <BackToTop />
      <Footer />
    </div>
  )
}

export default Resume
