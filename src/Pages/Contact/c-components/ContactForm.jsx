import React, { useState } from 'react'

const ContactForm = () => {
  const recipientEmail = 'jonathancw.tang@mail.utoronto.ca'
  const formEndpoint = `https://formsubmit.co/ajax/${recipientEmail}`
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitStatus, setSubmitStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), 12000)
    const payload = new FormData()
    payload.append('name', formData.name)
    payload.append('email', formData.email)
    payload.append('_replyto', formData.email)
    payload.append('message', formData.message)
    payload.append('_subject', `Portfolio message from ${formData.name}`)
    payload.append('_template', 'table')
    payload.append('_url', window.location.href)

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: payload,
        signal: controller.signal
      })

      if (!response.ok) {
        throw new Error('Unable to submit form')
      }

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Form submission failed:', error)
      setSubmitStatus('error')
    } finally {
      window.clearTimeout(timeoutId)
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 h-full flex flex-col">
      <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="flex flex-1 flex-col min-h-0">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full flex-1 min-h-48 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-600 focus:border-transparent resize-none"
            placeholder="Your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-navy-700 text-white py-3 rounded-lg hover:bg-navy-800 transition-colors font-medium disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
        {submitStatus === 'success' && (
          <p className="text-sm font-medium text-green-700">
            Message sent. Thank you for reaching out.
          </p>
        )}
        {submitStatus === 'error' && (
          <p className="text-sm font-medium text-red-700">
            Something went wrong or the request timed out. Please try again or email me directly.
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
