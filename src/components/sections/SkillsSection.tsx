'use client';

import { useState, useMemo, memo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { HiSearch, HiSparkles, HiCode } from 'react-icons/hi';
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from 'react-icons/fa';

const ICON_MAP: Record<string, any> = {
  SiOpenjdk: FaJava,
  SiPython: FaPython,
  SiJavascript: FaJs,
  SiPostgresql: FaDatabase,
  SiHtml5: FaHtml5,
  SiCss3: FaCss3Alt,
  SiTailwindcss: HiCode,
  SiReact: FaReact,
  SiNextdotjs: HiCode,
  SiSpringboot: FaJava,
  SiNodedotjs: FaNodeJs,
  SiExpress: FaNodeJs,
  SiPostman: HiCode,
  SiMysql: FaDatabase,
  SiMongodb: FaDatabase,
  SiSupabase: FaDatabase,
  SiGit: FaGitAlt,
  SiGithub: FaGithub,
  SiVisualstudiocode: HiCode,
  SiIntellijidea: FaJava,
  SiFigma: FaFigma,
};

function SkillsSection() {
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].name);
  const [searchQuery, setSearchQuery] = useState('');

  const currentCategory = useMemo(
    () => SKILL_CATEGORIES.find((cat) => cat.name === activeTab) || SKILL_CATEGORIES[0],
    [activeTab]
  );

  const filteredSkills = useMemo(
    () =>
      currentCategory.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [currentCategory, searchQuery]
  );

  return (
    <section id="skills" className="py-24 relative z-10 bg-slate-950/40">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-slate-900/80 px-3 py-1 rounded-full border border-purple-500/30">
            Technical Proficiency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Category Tabs & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800">
            {SKILL_CATEGORIES.map((category) => {
              const isActive = activeTab === category.name;
              return (
                <button
                  key={category.name}
                  onClick={() => setActiveTab(category.name)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-mono font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-600/30'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <HiSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-slate-400 text-base" />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 focus:border-cyan-400 text-xs text-slate-200 placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          key={activeTab}
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, index) => {
            const IconComponent = ICON_MAP[skill.icon] || HiSparkles;
            return (
              <div
                key={skill.name}
                className={`p-6 rounded-2xl glass-card glass-card-hover border relative overflow-hidden ${
                  skill.highlight
                    ? 'border-purple-500/30 hover:border-cyan-400/60'
                    : 'border-slate-800 hover:border-purple-500/40'
                }`}
              >
                {/* Glow dot if highlighted */}
                {skill.highlight && (
                  <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-900/60 border border-purple-500/40 text-purple-300">
                    Core
                  </span>
                )}

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-purple-500/30 flex items-center justify-center text-2xl text-cyan-400 shadow-inner">
                    <IconComponent />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 text-base">{skill.name}</h3>
                    <span className="text-xs font-mono text-slate-400">Mastery: {skill.level}%</span>
                  </div>
                </div>

                {/* Animated Percentage Bar */}
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-slate-800">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full rounded-full bg-gradient-to-r from-purple-600 via-cyan-500 to-emerald-400"
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default memo(SkillsSection);