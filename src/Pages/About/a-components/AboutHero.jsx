import React from 'react'
import bannerImage from '@assets/about_me_banner.jpg'

const AboutHero = () => {
  return (
    <section className="relative text-white py-20 bg-cover bg-center overflow-hidden">
      {/* Banner image */}
      <img 
        src={bannerImage} 
        alt="About me banner" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Text content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">About Me</h1>
        <p className="text-xl text-gray-100">
          Learn more about my journey, skills, and passion.
        </p>
      </div>
    </section>
  )
}

export default AboutHero

