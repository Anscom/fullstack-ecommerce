import ContactUs from '../assets/contactus.jpg'
import React, { useState } from 'react'

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add your form submission logic here
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[300px]">
        {/* Background image - you can replace this URL with your actual image */}
        <img 
          src={ContactUs}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
        
        {/* Text content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10">
            <h1 className="text-4xl font-bold">CONTACT US</h1>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                We would love to hear from you.
              </h2>
              <p className="text-gray-600 mb-8">
                If you have any query or any type of suggestion, you can contact us here. We would love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors uppercase"
                >
                  Send Message
                </button>
              </div>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-8 py-10">
              {/* Visit Us */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Visit Us</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Jalan Universiti, Bandar Sunway, Malaysia</p>
                  <p>Phone: +0123456789</p>
                </div>
              </div>

              {/* Get In Touch */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch</h3>
                <div className="text-gray-600 space-y-2">
                  <p>You can get in touch with us on the provided email:</p>
                  <p className="text-blue-600">Email: testing@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage