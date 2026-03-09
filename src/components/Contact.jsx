import React, { useState } from 'react'

export default function Contact(){
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
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Have a project in mind or just want to chat? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Contact Info */}
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-400/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">📧</span>
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white font-medium">your-email@example.com</p>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">💼</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">LinkedIn</p>
                  <a href="https://linkedin.com/in/bajrang-sihag" target="_blank" className="text-indigo-300 hover:text-indigo-200 transition-colors">
                    linkedin.com/in/bajrang-sihag
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl">🐙</span>
                </div>
                <div>
                  <p className="text-sm text-slate-400">GitHub</p>
                  <a href="https://github.com/sihagbajrang8875-jpg" target="_blank" className="text-indigo-300 hover:text-indigo-200 transition-colors">
                    github.com/bajrang-sihag
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="text-3xl mr-3">🚀</span>
              What I Do
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-200">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Build responsive and modern websites
              </li>
              <li className="flex items-center text-slate-200">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                Create full-stack web applications
              </li>
              <li className="flex items-center text-slate-200">
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                Develop robust REST APIs
              </li>
              <li className="flex items-center text-slate-200">
                <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                Solve real-world problems with code
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
            <span className="text-3xl mr-3">💬</span>
            Send a Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project or just say hello!"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  )
}
