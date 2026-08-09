import React from 'react'
import contactBanner from '@assets/contact_banner2.png'

const ContactHero = () => {
  return (
    <section
      className="relative text-white py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${contactBanner})` }}
    >
      <div className="absolute inset-0 bg-navy-900 bg-opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl opacity-90">
          I'm always open to opportunities, so let's work together!
        </p>
      </div>
    </section>
  )
}

export default ContactHero
