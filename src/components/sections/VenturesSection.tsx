'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import {
  STARTUPS,
  VENTURES_STATS,
  FOUNDER_VISION,
  STATUS_BADGES,
} from '@/data/portfolioData';
import {
  HiDesktopComputer,
  HiLightBulb,
  HiGlobeAlt,
  HiAcademicCap,
  HiCheckCircle,
  HiSparkles,
  HiTrendingUp,
} from 'react-icons/hi';
import { FaBrain, FaBookOpen, FaQuoteLeft, FaRocket } from 'react-icons/fa';

const STAT_ICONS: Record<string, any> = {
  Rocket: FaRocket,
  Laptop: HiDesktopComputer,
  Brain: FaBrain,
  BookOpen: FaBookOpen,
  Lightbulb: HiLightBulb,
  Globe: HiGlobeAlt,
};

function VenturesSection() {
  return (
    <section id="ventures" className="py-24 relative z-10 bg-slate-950/70 overflow-hidden">
      {/* Background Aurora Glow Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-purple-600/15 via-cyan-500/15 to-pink-500/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-cyan-500/30 shadow-lg shadow-cyan-950/40 inline-flex items-center gap-2">
            <FaRocket className="text-cyan-400 text-sm animate-bounce" />
            <span>Startups & Entrepreneurship</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            🚀 Ventures I'm <span className="text-gradient">Building</span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed mt-4">
            Building innovative technology startups focused on solving real-world problems through software, artificial intelligence, and modern digital solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Animated Status Badges Bar */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          {STATUS_BADGES.map((badge, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md border border-purple-500/30 text-xs font-mono text-cyan-300 shadow-md hover:border-cyan-400/60 hover:scale-105 transition-all cursor-default"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        {/* Two Premium Glassmorphism Startup Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          {STARTUPS.map((startup, index) => (
            <motion.div
              key={startup.id}
              variants={fadeIn(index === 0 ? 'right' : 'left', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="glass-card rounded-3xl p-8 sm:p-10 border border-purple-500/30 hover:border-cyan-400/60 shadow-2xl shadow-purple-950/40 relative overflow-hidden flex flex-col justify-between group"
            >
              {/* Corner Glow Blob */}
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-500/30 blur-2xl group-hover:opacity-100 transition-opacity opacity-50 pointer-events-none" />

              <div>
                {/* Header Row: Title, Status Badge & Role */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-cyan-500 to-blue-600 p-[1.5px] shadow-lg shadow-purple-500/30">
                      <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-black text-white text-lg tracking-wider">
                        {startup.name.slice(0, 2)}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                        {startup.name}
                      </h3>
                      <span className="text-xs font-mono text-purple-300">{startup.industry}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{startup.status}</span>
                    </span>
                    <span className="px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
                      {startup.role}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {startup.description}
                </p>

                {/* Current Focus Checklist */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
                    <HiTrendingUp className="text-sm" />
                    <span>Current Focus:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {startup.focusPoints.map((point, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-200">
                        <HiCheckCircle className="text-cyan-400 text-base flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack Badges */}
                <div className="mb-8">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2">
                    <HiSparkles className="text-sm" />
                    <span>Technology Stack:</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {startup.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-900/90 text-slate-300 border border-slate-800 hover:border-cyan-500/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Animated Progress Indicator */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs font-mono mb-2">
                  <span className="text-cyan-300 font-semibold">{startup.progressLabel}</span>
                  <span className="text-purple-400 font-bold">{startup.progressPercentage}%</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${startup.progressPercentage}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-400 shadow-glow"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Entrepreneur Dashboard Stats Grid */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-slate-900/80 px-3 py-1 rounded-full border border-purple-500/30">
              Metrics & Vision
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Entrepreneur Dashboard
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {VENTURES_STATS.map((stat, idx) => {
              const IconComp = STAT_ICONS[stat.icon] || FaRocket;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-card text-center border border-slate-800 hover:border-cyan-500/50 transition-all hover:scale-105 flex flex-col items-center justify-between"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-purple-500/30 flex items-center justify-center text-cyan-400 text-xl mb-3 shadow-inner">
                    <IconComp />
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider leading-tight">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Founder's Vision Quote Card */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-500/40 relative overflow-hidden text-center max-w-4xl mx-auto shadow-2xl shadow-purple-950/60"
        >
          <div className="absolute top-4 left-6 text-purple-500/20 text-6xl pointer-events-none">
            <FaQuoteLeft />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-4 block">
            Founder's Vision & Philosophy
          </span>

          <blockquote className="text-base sm:text-xl font-medium text-slate-100 leading-relaxed italic max-w-2xl mx-auto relative z-10">
            "{FOUNDER_VISION}"
          </blockquote>

          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600 to-cyan-500 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center font-bold text-white text-xs">
                AM
              </div>
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-white">Alvin MS</div>
              <div className="text-[10px] font-mono text-cyan-400">Founder & CS/AI Student Engineer</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default memo(VenturesSection);