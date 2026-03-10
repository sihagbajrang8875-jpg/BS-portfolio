import React, { useState } from 'react'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMenu()
    }
  }

  return (
    <>
      {/* Hamburger Button */}
      {!isOpen && (
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center group bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg border border-indigo-400 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/40 hover:from-indigo-500 hover:to-purple-500"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 rounded-full ${
            isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
          }`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 rounded-full ${
            isOpen ? 'opacity-0' : 'opacity-100'
          }`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 rounded-full ${
            isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
          }`}></span>
        </button>
      )}

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={closeMenu}
        ></div>

        {/* Menu Panel */}
        <div className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 backdrop-blur-xl border-l border-indigo-500/50 transform transition-transform duration-300 shadow-2xl shadow-indigo-500/30 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-8">
            {/* Close button */}
            <button
              onClick={closeMenu}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-indigo-300 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex items-center gap-4 mb-12 group">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🚀</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-30"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                  Bajrang Sihag
                </span>
                <span className="text-sm text-indigo-300 font-medium tracking-wide">
                  Full Stack Developer
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white rounded-lg transition-all duration-200 flex items-center gap-3 group hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 border border-transparent hover:border-indigo-500/30"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">👨‍💻</span>
                <span className="font-medium">About</span>
              </button>

              <button
                onClick={() => scrollToSection('skills')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white rounded-lg transition-all duration-200 flex items-center gap-3 group hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 border border-transparent hover:border-purple-500/30"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">🚀</span>
                <span className="font-medium">Skills</span>
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white rounded-lg transition-all duration-200 flex items-center gap-3 group hover:bg-gradient-to-r hover:from-pink-600/20 hover:to-indigo-600/20 border border-transparent hover:border-pink-500/30"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">💼</span>
                <span className="font-medium">Projects</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-3 text-slate-300 hover:text-white rounded-lg transition-all duration-200 flex items-center gap-3 group hover:bg-gradient-to-r hover:from-indigo-600/20 hover:to-purple-600/20 border border-transparent hover:border-indigo-500/30"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">📧</span>
                <span className="font-medium">Contact</span>
              </button>
            </nav>

            {/* Social Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <h3 className="text-white font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/sihagbajrang8875-jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <span className="text-lg">🐙</span>
                </a>
                <a
                  href="https://linkedin.com/in/bajrang-sihag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <span className="text-lg">💼</span>
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <span className="text-lg">✉️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}