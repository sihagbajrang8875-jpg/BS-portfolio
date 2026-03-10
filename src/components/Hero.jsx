import React from 'react'
import profileImg from '../assets/baj.jpeg'

export default function Hero(){
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-indigo-600/20 text-indigo-300 rounded-full text-xs sm:text-sm font-medium mb-4 border border-indigo-500/30">
                👋 Hello, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4 leading-tight">
                Bajrang
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  Sihag
                </span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-indigo-200 font-medium mb-2">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-sm sm:text-base">
                <span>💻</span>
                <span>Building digital experiences</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0">
              I craft modern, responsive, and scalable web applications using cutting-edge technologies.
              Passionate about solving real-world problems through clean code and intuitive user interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>🚀</span>
                View My Work
              </a>
              <a
                href="#contact"
                className="group px-6 py-3 sm:px-8 sm:py-4 border-2 border-indigo-400/50 hover:border-indigo-400 rounded-xl text-indigo-100 hover:bg-indigo-400/10 font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm text-sm sm:text-base"
              >
                <span>💬</span>
                Let's Talk
              </a>
            </div>

            <div className="mt-8 lg:mt-12 flex justify-center lg:justify-start gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">50+</div>
                <div className="text-xs sm:text-sm text-slate-400">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">2+</div>
                <div className="text-xs sm:text-sm text-slate-400">Years Exp</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-white">10+</div>
                <div className="text-xs sm:text-sm text-slate-400">Technologies</div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              {/* Animated background rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>

              {/* Profile container */}
              <div className="relative w-64 h-64 sm:w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-500">
                <div className="w-56 h-56 sm:w-72 h-72 lg:w-80 lg:h-80 bg-slate-900 rounded-full flex items-center justify-center border-4 border-white/20">
                  <img
                    src={profileImg}
                    alt="Bajrang Sihag"
                    className="w-40 h-40 sm:w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover"
                  />
                </div>

                {/* Floating tech icons */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
                  <span className="text-lg sm:text-xl">⚛️</span>
                </div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '1s'}}>
                  <span className="text-lg sm:text-xl">🚀</span>
                </div>
                <div className="absolute top-1/4 -left-6 sm:-left-8 w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce" style={{animationDelay: '2s'}}>
                  <span className="text-lg sm:text-xl">💻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-indigo-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 sm:w-1 sm:h-3 bg-indigo-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
