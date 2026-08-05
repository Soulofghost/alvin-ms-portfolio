'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from '@/data/portfolioData';
import { HiX, HiDownload, HiPrinter, HiCheckCircle } from 'react-icons/hi';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="w-full max-w-4xl bg-slate-900 border border-purple-500/40 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-purple-950/60 max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white">{PERSONAL_INFO.name} — Curriculum Vitae</h3>
              <span className="text-xs font-mono text-cyan-400">{PERSONAL_INFO.title} • {PERSONAL_INFO.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/profile.jpg"
                download="Alvin_MS_Resume.jpg"
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-purple-600/30"
              >
                <HiDownload />
                <span>Download Resume</span>
              </a>
              <button onClick={onClose} className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
                <HiX className="text-xl" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="space-y-8 font-sans text-xs text-slate-300">
            {/* Bio Summary */}
            <section>
              <h4 className="text-sm font-mono uppercase font-bold text-purple-400 mb-2 border-b border-slate-800 pb-1">Summary</h4>
              <p className="leading-relaxed">{PERSONAL_INFO.bio}</p>
            </section>

            {/* Education */}
            <section>
              <h4 className="text-sm font-mono uppercase font-bold text-purple-400 mb-2 border-b border-slate-800 pb-1">Education</h4>
              <div>
                <div className="flex justify-between font-bold text-white text-sm">
                  <span>Bachelor of Technology (B.Tech) - Computer Science & AI</span>
                  <span className="font-mono text-cyan-400">2023 - 2027</span>
                </div>
                <div className="text-slate-400 mb-2">Mar Baselios Christian College of Engineering & Technology, Peermade</div>
              </div>
            </section>

            {/* Key Projects */}
            <section>
              <h4 className="text-sm font-mono uppercase font-bold text-purple-400 mb-2 border-b border-slate-800 pb-1">Featured Projects</h4>
              <div className="space-y-4">
                {PROJECTS.map((p) => (
                  <div key={p.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="flex justify-between font-bold text-white mb-1">
                      <span>{p.title}</span>
                      <span className="font-mono text-cyan-400 text-[10px]">{p.category}</span>
                    </div>
                    <p className="text-slate-400 mb-2">{p.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}