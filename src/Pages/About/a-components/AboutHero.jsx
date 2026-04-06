import React from 'react'
import bannerImage from '@assets/about_me_banner.jpg'

const AboutHero = () => {
  return (
    <section className="relative h-80 overflow-hidden">
      {/* Banner image with overlay */}
      <img 
        src={bannerImage} 
        alt="About me banner" 
        className="w-full h-full object-cover"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Text content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">About Me</h1>
          <p className="text-xl text-gray-100">
            Learn more about my journey, skills, and passion
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutHero

