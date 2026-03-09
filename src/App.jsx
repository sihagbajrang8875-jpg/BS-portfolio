import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HamburgerMenu from './components/HamburgerMenu'
import logo from './assets/logo.svg'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-2 sm:py-3 sticky top-0 z-50 bg-gradient-to-r from-slate-900/95 via-indigo-900/90 to-slate-900/95 backdrop-blur-xl border-b border-indigo-500/30 shadow-xl shadow-indigo-500/20 transition-all duration-300">
        <nav className="container flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300 group-hover:scale-110">
                <img src={logo} alt="logo" className="w-6 h-6" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Bajrang Sihag
              </span>
              <span className="text-xs text-indigo-300 font-medium tracking-wide">
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#about"
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 group flex items-center gap-2"
            >
              <span className="text-base">👨‍💻</span>
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#skills"
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 group flex items-center gap-2"
            >
              <span className="text-base">🚀</span>
              <span className="relative z-10">Skills</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#projects"
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 group flex items-center gap-2"
            >
              <span className="text-base">💼</span>
              <span className="relative z-10">Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-indigo-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-all duration-300 rounded-lg hover:bg-white/10 group flex items-center gap-2"
            >
              <span className="text-base">📧</span>
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Hamburger Menu */}
          <HamburgerMenu />
        </nav>
      </header>

      <main className="flex-grow">
        <section className="hero-bg relative overflow-hidden">
          <div className="particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          <Hero />
        </section>

        <section className="about-bg relative">
          <About />
        </section>

        <section className="skills-bg relative">
          <Skills />
        </section>

        <section className="projects-bg relative">
          <Projects />
        </section>

        <section className="contact-bg relative">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  )
}
