import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'
import BackToTop from '@components/BackToTopButton'
import profilePicture from '@assets/profile_picture.jpg'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-white -mt-20">
        {/* Animated background elements - More visible */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-gray-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
        </div>

        <div className={`relative max-w-7xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">
            
            {/* Left Side - Profile Picture - Larger */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Profile picture with decorative elements */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                  {/* Decorative border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-slate-200 to-gray-300"></div>
                  {/* Image container */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <img 
                      src={profilePicture} 
                      alt="Jonathan Tang" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-center lg:text-left max-w-2xl">

              {/* Main heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="text-slate-700" style={{ color: '#334e68' }}>
                  Jonathan Tang.
                </span>
              </h1>

              {/* Subtitle */}
              <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                <span className="inline-block">
                  Civil Engineer Minoring in Artificial Intellingence Engineering at University of Toronto
                </span>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                Here you will find a curated collection of projects, experiences, and reflections that represent my growth as an engineer and the values guiding my professional identity.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 items-center">
                <Link
                  to="/projects"
                  className="group navy-button px-8 py-4 bg-slate-700 hover:bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                  style={{ backgroundColor: '#334e68' }}
                >
                  View My Projects
                </Link>
                
                {/* Social Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/c3tangie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-slate-700 transform hover:scale-110 transition-all duration-300 text-gray-700 hover:text-slate-700"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://linkedin.com/in/jonathancw-tang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-slate-700 transform hover:scale-110 transition-all duration-300 text-gray-700 hover:text-slate-700"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  
                  <a
                    href="mailto:jonathancw.tang@mail.utoronto.ca"
                    className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full shadow-sm hover:shadow-md hover:border-slate-700 transform hover:scale-110 transition-all duration-300 text-gray-700 hover:text-slate-700"
                    aria-label="Email"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Feel free to navigate to my other pages!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Skill Card 1 - About Me */}
            <Link to="/about" className="group p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors" style={{ backgroundColor: '#334e68' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">About Me</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn more about my journey, skills, and passion.
              </p>
            </Link>

            {/* Skill Card 2 - Projects */}
            <Link to="/projects" className="group p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors" style={{ backgroundColor: '#334e68' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Projects</h3>
              <p className="text-gray-600 leading-relaxed">
                Here are some of my most notable projects and accomplishments!
              </p>
            </Link>

            {/* Skill Card 3 - Resume */}
            <Link to="/resume" className="group p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-slate-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
              <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center mb-6 group-hover:bg-slate-800 transition-colors" style={{ backgroundColor: '#334e68' }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resume</h3>
              <p className="text-gray-600 leading-relaxed">
                Feel free to take a look through the PDF preview or download it directly!
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Open to Opportunities
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Feel free to get in touch regarding opportunities, projects, or potential collaboration.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/c3tangie"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-gray-700 hover:text-slate-700 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            
            <a
              href="https://linkedin.com/in/jonathancw-tang"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center text-gray-700 hover:text-slate-700 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="mailto:jonathancw.tang@mail.utoronto.ca"
              className="w-11 h-11 flex items-center justify-center text-gray-700 hover:text-slate-700 hover:bg-gray-200 rounded-lg transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <BackToTop />
      <Footer />
      
      {/* Custom animations */}
      <style>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Home