import React from 'react'

export default function About(){
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto px-4">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-indigo-400/30 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl sm:text-3xl mr-3">👨‍💻</span>
                Who I Am
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Hello! I'm Bajrang Sihag, a passionate Full Stack Developer who enjoys building web applications that are fast, scalable, and user-friendly. I specialize in both frontend and backend development, allowing me to create complete web solutions from design to deployment.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl sm:text-3xl mr-3">🎯</span>
                My Mission
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                My goal is to continuously improve my skills and build applications that provide real value to users. I love learning new technologies, solving coding challenges, and working on creative web projects that push the boundaries of what's possible.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-indigo-500/20">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6 flex items-center">
                <span className="text-2xl sm:text-3xl mr-3">🚀</span>
                What Drives Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-2xl sm:text-3xl mb-2">💡</div>
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Innovation</h4>
                  <p className="text-xs sm:text-sm text-slate-400">Always exploring new technologies</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-2xl sm:text-3xl mb-2">🎨</div>
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Design</h4>
                  <p className="text-xs sm:text-sm text-slate-400">Creating beautiful user experiences</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-2xl sm:text-3xl mb-2">⚡</div>
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Performance</h4>
                  <p className="text-xs sm:text-sm text-slate-400">Building fast and efficient apps</p>
                </div>
                <div className="text-center p-3 sm:p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="text-2xl sm:text-3xl mb-2">🤝</div>
                  <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">Collaboration</h4>
                  <p className="text-xs sm:text-sm text-slate-400">Working together to achieve goals</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 flex items-center">
                <span className="text-2xl sm:text-3xl mr-3">📈</span>
                Always Learning
              </h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 rounded-full text-xs sm:text-sm font-medium border border-indigo-500/30 hover:border-indigo-400/50 transition-colors"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
