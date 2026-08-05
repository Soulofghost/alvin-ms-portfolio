'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { EDUCATION } from '@/data/portfolioData';
import { HiAcademicCap, HiLocationMarker, HiCheckCircle } from 'react-icons/hi';

export default function EducationSection() {
  return (
    <section id="education" className="py-24 relative z-10 bg-slate-950/40">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-slate-900/80 px-3 py-1 rounded-full border border-purple-500/30">
            Academic Background
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Education & <span className="text-gradient">Degree</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={edu.institution}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 flex flex-col md:flex-row items-start gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center text-3xl text-white shadow-lg shadow-purple-600/30 flex-shrink-0">
                <HiAcademicCap />
              </div>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">{edu.period}</span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <HiLocationMarker className="text-pink-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">{edu.degree}</h3>
                <h4 className="text-sm font-semibold text-purple-300 mb-4">{edu.institution}</h4>

                <div className="space-y-2">
                  {edu.details.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <HiCheckCircle className="text-cyan-400 text-base flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}