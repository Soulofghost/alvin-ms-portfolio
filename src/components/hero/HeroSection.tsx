'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { HiDownload, HiPaperAirplane, HiCode } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from 'react-icons/fa';

const HeroVideoCard = dynamic(() => import('./video/HeroVideoCard'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] sm:h-[480px] lg:h-[540px] rounded-[18px] sm:rounded-[24px] glass-card border border-white/20 flex flex-col items-center justify-center gap-3 p-6 text-center">
      <div className="w-10 h-10 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
      <span className="text-xs font-mono text-cyan-300 font-bold uppercase tracking-wider">
        Loading Solo Leveling Video...
      </span>
    </div>
  ),
});

const FloatingTechBadges = dynamic(() => import('./video/FloatingTechBadges'), {
  ssr: false,
});

interface HeroSectionProps {
  onOpenResumeModal: () => void;
}

export default function HeroSection({ onOpenResumeModal }: HeroSectionProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = PERSONAL_INFO.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          {/* Left Column (45% Desktop Layout Split) */}
          <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            {/* Greeting Pill */}
            <motion.div
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-purple-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-lg shadow-purple-950/40"
            >
              <HiCode className="text-purple-400 text-sm" />
              <span>Hello, I am</span>
              <span className="text-white font-bold tracking-wide">Alvin MS</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeIn('down', 0.3)}
              initial="hidden"
              animate="show"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4"
            >
              Transforming Ideas Into <br />
              <span className="text-gradient">Intelligent Software</span>
            </motion.h1>

            {/* Dynamic Typewriter Role */}
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              className="h-10 text-xl sm:text-2xl font-mono text-cyan-400 font-semibold mb-6 flex items-center"
            >
              <span>I am a&nbsp;</span>
              <span className="text-purple-400 underline decoration-cyan-500 decoration-2 underline-offset-4">
                {displayedText}
              </span>
              <span className="animate-pulse text-cyan-400">|</span>
            </motion.div>

            {/* Subtitle / Bio */}
            <motion.p
              variants={fadeIn('down', 0.5)}
              initial="hidden"
              animate="show"
              className="text-slate-300 max-w-xl text-base sm:text-lg leading-relaxed mb-8 font-normal"
            >
              {PERSONAL_INFO.tagline} Focused on building robust enterprise Java applications, full-stack web platforms, and AI-driven digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              animate="show"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <button
                onClick={onOpenResumeModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-purple-600/30 hover:scale-105 transition-all duration-300"
              >
                <HiDownload className="text-lg" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-purple-500/30 hover:border-cyan-400 text-slate-200 font-semibold text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all duration-300"
              >
                <HiPaperAirplane className="text-lg text-cyan-400" />
                <span>Hire Me</span>
              </a>

              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-sm font-semibold hover:border-slate-700 transition-all duration-300"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              variants={fadeIn('down', 0.7)}
              initial="hidden"
              animate="show"
              className="flex items-center gap-4 text-slate-400"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect:</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-purple-500/50 hover:text-white hover:scale-110 transition-all"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-400 hover:scale-110 transition-all"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={PERSONAL_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-pink-500/50 hover:text-pink-400 hover:scale-110 transition-all"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href={PERSONAL_INFO.discordUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:text-indigo-400 hover:scale-110 transition-all"
              >
                <FaDiscord className="text-lg" />
              </a>
            </motion.div>
          </div>

          {/* Right Column (55% Desktop Layout Split with Premium Video Card & 4 Badges) */}
          <div className="w-full lg:w-[55%] flex flex-col items-center justify-center relative z-10">
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              className="relative w-full"
            >
              <HeroVideoCard />
              <FloatingTechBadges />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}