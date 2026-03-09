import React from 'react'

const projects = [
  {
    title: 'Shagun Book (Shagun Tracker App)',
    desc: 'A comprehensive web application that helps users track shagun money records during weddings and events. Features include adding and managing shagun entries with an intuitive and user-friendly interface.',
    tech: ['React', 'JavaScript', 'Node.js', 'MongoDB'],
    icon: '💰',
    github: 'https://github.com/yourusername/shagun-book',
    demo: '#'
  },
  {
    title: 'Todo App',
    desc: 'A modern task management application with full CRUD operations. Users can create, edit, delete, and mark tasks as complete with a clean and responsive design.',
    tech: ['React', 'Context API', 'JavaScript', 'Tailwind CSS'],
    icon: '✅',
    github: 'https://github.com/yourusername/todo-app',
    demo: '#'
  },
  {
    title: 'Portfolio Website',
    desc: 'A stunning personal portfolio website showcasing projects, skills, and experience. Built with modern web technologies and featuring beautiful animations and responsive design.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'JavaScript'],
    icon: '🚀',
    github: 'https://github.com/yourusername/portfolio',
    demo: '#'
  }
]

const ProjectCard = ({ project, index }) => (
  <div
    className="group bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-indigo-400/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
    style={{animationDelay: `${index * 0.1}s`}}
  >
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center">
        <span className="text-4xl mr-4">{project.icon}</span>
        <div>
          <h3 className="font-bold text-xl text-white group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-2 mt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <span className="text-lg">🐙</span>
            </a>
            <a
              href={project.demo}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <span className="text-lg">🌐</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    <p className="text-slate-300 mb-6 leading-relaxed">{project.desc}</p>

    <div className="flex flex-wrap gap-2">
      {project.tech.map((tech, techIndex) => (
        <span
          key={techIndex}
          className="px-3 py-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 rounded-full text-sm font-medium border border-indigo-500/30"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
)

export default function Projects(){
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-indigo-500/20 inline-block max-w-full">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">More Coming Soon</h3>
            <p className="text-slate-300 mb-4 sm:mb-6 text-sm sm:text-base">I'm always working on new exciting projects</p>
            <a
              href="https://github.com/sihagbajrang8875-jpg"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
            >
              <span>🐙</span>
              View All on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
