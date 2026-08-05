'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { HiLocationMarker, HiAcademicCap, HiSparkles, HiCode, HiChip } from 'react-icons/hi';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-slate-900/80 px-3 py-1 rounded-full border border-cyan-500/30">
            About Alvin MS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Biography & <span className="text-gradient">Vision</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Bio & Avatar Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Avatar Image Card */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group w-72 h-72 sm:w-80 sm:h-80 rounded-2xl p-1 bg-gradient-to-tr from-cyan-500 via-purple-600 to-pink-500 shadow-2xl shadow-purple-900/30">
              <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-slate-950">
                <Image
                  src="/profile.jpg"
                  alt="Alvin MS About Photo"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 288px, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs font-mono text-cyan-300">
                  <div className="flex items-center gap-1.5">
                    <HiLocationMarker className="text-pink-400 text-sm" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <span className="text-emerald-400 font-bold">● Online</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <h3 className="text-2xl font-bold text-slate-100 leading-snug">
              Passionate Computer Science & AI Student Engineer from Kerala, India.
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              With hands-on experience in Java Spring Boot backend engineering, full-stack React/Next.js platforms, and machine learning models, I bridge the gap between complex software architecture and delightful user interfaces.
            </p>

            {/* Quick Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <HiCode className="text-2xl text-purple-400" />
                <div>
                  <div className="text-xs text-slate-400">Core Focus</div>
                  <div className="text-sm font-bold text-slate-200">Java & AI Solutions</div>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <HiAcademicCap className="text-2xl text-cyan-400" />
                <div>
                  <div className="text-xs text-slate-400">Education</div>
                  <div className="text-sm font-bold text-slate-200">B.Tech CS & AI</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Stat Counters */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="p-6 rounded-2xl glass-card text-center border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <div className="text-4xl lg:text-5xl font-black text-gradient mb-1">
              {PERSONAL_INFO.stats.projectsCompleted}+
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Projects Completed
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card text-center border border-cyan-500/20 hover:border-cyan-500/50 transition-all">
            <div className="text-4xl lg:text-5xl font-black text-gradient-cyan mb-1">
              {PERSONAL_INFO.stats.technologiesLearned}+
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Technologies Learned
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card text-center border border-purple-500/20 hover:border-purple-500/50 transition-all">
            <div className="text-4xl lg:text-5xl font-black text-gradient mb-1">
              {PERSONAL_INFO.stats.githubRepositories}+
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              GitHub Repositories
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card text-center border border-pink-500/20 hover:border-pink-500/50 transition-all">
            <div className="text-4xl lg:text-5xl font-black text-gradient-cyan mb-1">
              {PERSONAL_INFO.stats.yearsLearning}+
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Years Learning
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}