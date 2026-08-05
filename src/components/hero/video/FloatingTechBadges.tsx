'use client';

import { motion } from 'framer-motion';
import { FaJava, FaReact } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { HiSparkles } from 'react-icons/hi';

const BADGES = [
  {
    id: 'java',
    name: 'Java',
    icon: FaJava,
    color: 'text-amber-400',
    borderColor: 'border-amber-500/30',
    positionClass: '-top-3 left-4 sm:-top-5 sm:left-8',
    delay: 0,
  },
  {
    id: 'springboot',
    name: 'Spring Boot',
    icon: SiSpringboot,
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    positionClass: '-top-3 right-4 sm:-top-5 sm:right-8',
    delay: 0.4,
  },
  {
    id: 'react',
    name: 'React',
    icon: FaReact,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    positionClass: '-bottom-3 left-4 sm:-bottom-5 sm:left-8',
    delay: 0.8,
  },
  {
    id: 'aiml',
    name: 'AI / ML',
    icon: HiSparkles,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    positionClass: '-bottom-3 right-4 sm:-bottom-5 sm:right-8',
    delay: 1.2,
  },
];

export default function FloatingTechBadges() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {BADGES.map((badge) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={badge.id}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: badge.delay,
            }}
            className={`absolute ${badge.positionClass} pointer-events-auto px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-slate-900/80 backdrop-blur-xl border ${badge.borderColor} flex items-center gap-2 shadow-xl shadow-slate-950/60 select-none hover:scale-105 transition-transform`}
          >
            <div className={`text-base sm:text-lg ${badge.color}`}>
              <Icon />
            </div>
            <span className="text-xs font-mono font-bold text-slate-100">{badge.name}</span>
          </motion.div>
        );
      })}
    </div>
  );
}