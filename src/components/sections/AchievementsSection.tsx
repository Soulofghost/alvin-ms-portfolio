'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { ACHIEVEMENTS } from '@/data/portfolioData';
import { FaTrophy } from 'react-icons/fa';

export default function AchievementsSection() {
  return (
    <section className="py-24 relative z-10">
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
            Recognitions & Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ACHIEVEMENTS.map((ach, index) => (
            <motion.div
              key={ach.title}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 flex items-start gap-6"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-purple-600 flex items-center justify-center text-3xl text-white shadow-lg shadow-amber-500/20 flex-shrink-0">
                <FaTrophy />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-amber-300 border border-amber-500/30 font-semibold">
                    {ach.badge}
                  </span>
                  <span className="text-xs font-mono text-slate-400">{ach.date}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{ach.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}