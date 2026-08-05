'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { EXPERIENCES } from '@/data/portfolioData';
import { HiBriefcase, HiCheckCircle } from 'react-icons/hi';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-slate-900/80 px-3 py-1 rounded-full border border-cyan-500/30">
            Professional Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Work & <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mt-1">{exp.role}</h3>
                  <div className="text-sm font-semibold text-purple-400 flex items-center gap-2 mt-0.5">
                    <HiBriefcase className="text-base" />
                    <span>{exp.company}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Key Achievements</h4>
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-200">
                    <HiCheckCircle className="text-cyan-400 text-base flex-shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] font-mono px-3 py-1 rounded-md bg-slate-900 text-slate-300 border border-slate-800">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}