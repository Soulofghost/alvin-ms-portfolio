'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiX, HiCode, HiDownload, HiUser, HiBriefcase, HiMail } from 'react-icons/hi';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
  onToggleMatrix: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResume, onToggleMatrix }: CommandPaletteProps) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Go to Home', href: '#home', icon: HiUser },
    { label: 'View About Bio', href: '#about', icon: HiUser },
    { label: 'Explore Skills Matrix', href: '#skills', icon: HiCode },
    { label: 'Browse Featured Projects', href: '#projects', icon: HiCode },
    { label: 'View Services', href: '#services', icon: HiBriefcase },
    { label: 'Work Experience', href: '#experience', icon: HiBriefcase },
    { label: 'GitHub Activity', href: '#github', icon: HiCode },
    { label: 'Contact Alvin MS', href: '#contact', icon: HiMail },
    { label: 'Download Resume (CV)', action: onOpenResume, icon: HiDownload },
    { label: 'Toggle Matrix Mode Easter Egg', action: onToggleMatrix, icon: HiCode },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="w-full max-w-xl bg-slate-900 border border-purple-500/40 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/60"
        >
          {/* Input Header */}
          <div className="relative border-b border-slate-800 p-4 flex items-center gap-3">
            <HiSearch className="text-cyan-400 text-xl" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or section name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
            />
            <button onClick={onClose} className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white">
              <HiX className="text-lg" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-72 overflow-y-auto p-2 space-y-1">
            {filtered.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  onClick={() => {
                    if (item.action) item.action();
                    else if (item.href) window.location.href = item.href;
                    onClose();
                  }}
                  className="px-4 py-3 rounded-xl hover:bg-slate-800 text-slate-200 hover:text-white flex items-center justify-between cursor-pointer transition-colors text-xs font-mono"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="text-cyan-400 text-base" />
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] text-slate-500">Jump →</span>
                </div>
              );
            })}
          </div>

          <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex justify-between">
            <span>Navigation Command Menu</span>
            <span>Press ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}