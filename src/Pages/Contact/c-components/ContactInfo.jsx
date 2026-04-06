import React from 'react'

const ContactInfo = () => {
  const contactDetails = [
    {
      title: "Email",
      detail: "jonathancw.tang@mail.utoronto.ca",
      link: "mailto:jonathancw.tang@mail.utoronto.ca"
    },
    {
      title: "Phone",
      detail: "+1 (250) 607-8868",
      link: "tel:+1 (250) 607-8868"
    },
    {
      title: "Location",
      detail: "Toronto ON, Canada",
      link: null
    }
  ]

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/c3tangie" },
    { name: "LinkedIn", url: "https://linkedin.com/in/jonathancw-tang" },
  ]

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
        <div className="space-y-6">
          {contactDetails.map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="text-3xl mr-4">{item.icon}</span>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-purple-600 hover:text-purple-700 transition-colors"
                  >
                    {item.detail}
                  </a>
                ) : (
                  <p className="text-gray-600">{item.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Connect With Me</h2>
        <div className="space-y-3">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors"
            >
              <span className="text-2xl mr-3">{social.icon}</span>
              <span className="font-medium text-gray-800">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
