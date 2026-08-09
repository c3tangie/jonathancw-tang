import React, { useState } from 'react'

const ContactForm = () => {
  const web3FormsEndpoint = 'https://api.web3forms.com/submit'
  const web3FormsApiKey = import.meta.env.VITE_WEB3FORMS_API_KEY
  const isEmailConfigured = Boolean(web3FormsApiKey)
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

    if (!isEmailConfigured) {
      setSubmitStatus('setup')
      setIsSubmitting(false)
      return
    }

    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), 12000)

    try {
      const response = await fetch(web3FormsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: web3FormsApiKey,
          subject: `Portfolio message from ${formData.name}`,
          from_name: 'Jonathan Tang Portfolio',
          name: formData.name,
          email: formData.email,
          replyto: formData.email,
          message: formData.message,
          botcheck: ''
        }),
        signal: controller.signal
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
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
        {submitStatus === 'setup' && (
          <p className="text-sm font-medium text-red-700">
            Email sending is not configured yet. Add the Web3Forms API key to enable this form.
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm
