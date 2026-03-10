import React from 'react'

export default function Footer(){
  return (
    <footer className="py-8 sm:py-12 bg-gradient-to-t from-indigo-900 via-slate-900 to-indigo-900 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-center items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-lg sm:text-xl">🚀</span>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white">Bajrang Sihag</span>
          </div>
          <p className="text-slate-400 max-w-md mx-auto text-sm sm:text-base">
            Full Stack Developer passionate about creating amazing digital experiences
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <p className="text-base sm:text-lg text-slate-300 italic mb-2">
            "Code is not just about solving problems, it's about creating solutions that make life easier."
          </p>
          <p className="text-indigo-300 font-semibold text-sm sm:text-base">— Bajrang Sihag</p>
        </div>

        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          <a
            href="https://github.com/sihagbajrang8875-jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-gray-500/25"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.932 0-1.31.46-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.046.138 3.003.404 2.292-1.552 3.298-1.23 3.298-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.922.43.372.823 1.105.823 2.228 0 1.61-.015 2.907-.015 3.303 0 .32.216.694.825.576C20.565 21.796 24 17.298 24 12 24 5.372 18.628 0 12 0z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/bajrang-sihag"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg hover:shadow-blue-500/25"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.85-3.037-1.85 0-2.134 1.445-2.134 2.938v5.668H9.355V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.367-1.85 3.602 0 4.268 2.371 4.268 5.456v6.285zM5.337 7.433c-1.144 0-2.07-.928-2.07-2.07 0-1.143.926-2.07 2.07-2.07 1.144 0 2.07.927 2.07 2.07 0 1.142-.926 2.07-2.07 2.07zm1.777 13.019H3.559V9h3.555v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451c.98 0 1.778-.775 1.778-1.729V1.729C24 .774 23.205 0 22.225 0z"/>
            </svg>
          </a>
          <a
            href="mailto:your-email@example.com"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <span className="text-lg sm:text-xl">✉️</span>
          </a>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <p className="text-slate-500 text-xs sm:text-sm">
            © 2024 Bajrang Sihag. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
