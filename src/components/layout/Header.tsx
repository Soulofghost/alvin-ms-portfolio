'use client';

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaTerminal } from 'react-icons/fa';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface HeaderProps {
  onToggleMatrix?: () => void;
  onOpenCommandPalette?: () => void;
}

export default function Header({ onToggleMatrix, onOpenCommandPalette }: HeaderProps) {
  return (
    <header className="absolute z-30 w-full flex items-center px-6 lg:px-16 h-[80px]">
      <div className="container mx-auto max-w-7xl flex justify-between items-center">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 via-cyan-500 to-blue-600 p-[1.5px] shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-extrabold text-lg text-gradient tracking-wider">AM</span>
            </div>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-slate-100 tracking-wide text-sm group-hover:text-purple-400 transition-colors">
              Alvin MS
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
              CS & AI Engineer
            </span>
          </div>
        </Link>

        {/* Live Availability Badge */}
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-xs text-emerald-400 font-mono shadow-sm shadow-emerald-500/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for Projects</span>
        </div>

        {/* Quick Actions & Social Icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 text-xs text-slate-300 border border-slate-700 font-mono transition-all"
            title="Open Command Palette"
          >
            <span>Command</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 text-[10px] text-cyan-400 border border-slate-700">Ctrl+K</kbd>
          </button>

          <button
            onClick={onToggleMatrix}
            className="p-2.5 rounded-lg bg-slate-900/80 hover:bg-purple-950/80 border border-purple-500/30 text-purple-400 hover:text-purple-300 transition-all text-sm"
            title="Toggle Matrix Mode (Easter Egg)"
          >
            <FaTerminal />
          </button>

          <div className="flex items-center gap-2 sm:gap-3 text-slate-300 text-lg">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-cyan-400 hover:scale-110 transition-all"
              title="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-purple-400 hover:scale-110 transition-all"
              title="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={PERSONAL_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-pink-400 hover:scale-110 transition-all"
              title="Instagram Profile"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}