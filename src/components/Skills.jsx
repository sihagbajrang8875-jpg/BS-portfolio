import React from 'react'

const SkillColumn = ({title, items, icon}) => (
  <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:transform hover:scale-105">
    <h3 className="font-semibold mb-6 text-xl text-white flex items-center">
      <span className="text-3xl mr-3">{icon}</span>
      {title}
    </h3>
    <ul className="space-y-3">
      {items.map((s,i)=>(
        <li key={i} className="bg-gradient-to-r from-purple-900/50 to-indigo-900/50 px-4 py-3 rounded-lg text-slate-200 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:translate-x-2">
          <span className="inline-block w-2 h-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mr-3"></span>
          {s}
        </li>
      ))}
    </ul>
  </div>
)

export default function Skills(){
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <SkillColumn
            title="Frontend"
            icon="🎨"
            items={["HTML5 & CSS3","JavaScript (ES6+)","React.js","Tailwind CSS","Responsive Design","TypeScript"]}
          />
          <SkillColumn
            title="Backend"
            icon="⚙️"
            items={["Node.js","Express.js","REST APIs","MongoDB","Mongoose","Authentication"]}
          />
          <SkillColumn
            title="Tools & Others"
            icon="🛠️"
            items={["Git & GitHub","VS Code","Vite","Docker","AWS","Linux"]}
          />
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-purple-500/20 inline-block max-w-full">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Continuous Learning</h3>
            <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">Always exploring new technologies and frameworks</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {[
                { name: 'Next.js', color: 'from-blue-500 to-cyan-500' },
                { name: 'GraphQL', color: 'from-pink-500 to-rose-500' },
                { name: 'Python', color: 'from-green-500 to-emerald-500' },
                { name: 'PostgreSQL', color: 'from-indigo-500 to-blue-500' },
                { name: 'Kubernetes', color: 'from-purple-500 to-indigo-500' }
              ].map((tech) => (
                <span
                  key={tech.name}
                  className={`px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r ${tech.color} text-white rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
