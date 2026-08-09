import React from 'react'
import Navbar from '@components/Navbar'
import ContactHero from './c-components/ContactHero'
import ContactForm from './c-components/ContactForm'
import ContactInfo from './c-components/ContactInfo'
import Footer from '@components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
      <Footer />
    </div>
  )
}

export default Contact
