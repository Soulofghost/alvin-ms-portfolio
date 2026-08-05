'use client';

import { useState, useMemo, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { PROJECTS, Project } from '@/data/portfolioData';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { HiCheckCircle, HiX, HiSparkles } from 'react-icons/hi';

const CATEGORIES = ['All', 'Java / Backend', 'Full Stack / React', 'AI Platform'];

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(
    () =>
      selectedCategory === 'All'
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-slate-900/80 px-3 py-1 rounded-full border border-cyan-500/30">
            Featured Works
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Portfolio <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeIn('up', 0.2 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="group glass-card glass-card-hover rounded-2xl border border-slate-800 hover:border-purple-500/50 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-950/40 to-cyan-950/40 flex items-center justify-center p-6 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <HiSparkles className="text-3xl text-cyan-400 animate-pulse" />
                    <span className="font-bold text-white text-base tracking-wide">{project.title}</span>
                    <span className="text-xs font-mono text-purple-300">{project.category}</span>
                  </div>
                </div>

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-300 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                  >
                    View Details →
                  </button>

                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
                      title="View GitHub Repository"
                    >
                      <FaGithub className="text-base" />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-purple-900/40 hover:bg-purple-900/80 text-purple-300 hover:text-white border border-purple-500/40 transition-colors"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
              onClick={() => setActiveModalProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-slate-900 border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400">{activeModalProject.category}</span>
                    <h3 className="text-2xl font-bold text-white">{activeModalProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <HiX className="text-xl" />
                  </button>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {activeModalProject.fullDescription}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {activeModalProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <HiCheckCircle className="text-emerald-400 text-base flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeModalProject.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center gap-2"
                  >
                    <FaGithub />
                    <span>View GitHub Repo</span>
                  </a>
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/30"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Demo / Code</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default memo(ProjectsSection);