'use client';

import { useState, useEffect, memo } from 'react';
import {
  HiHome,
  HiUser,
  HiCode,
  HiViewGrid,
  HiBriefcase,
  HiAcademicCap,
  HiBadgeCheck,
  HiDesktopComputer,
  HiMail,
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

export const navData = [
  { name: 'home', path: '#home', icon: <HiHome /> },
  { name: 'about', path: '#about', icon: <HiUser /> },
  { name: 'skills', path: '#skills', icon: <HiCode /> },
  { name: 'projects', path: '#projects', icon: <HiViewGrid /> },
  { name: 'services', path: '#services', icon: <HiDesktopComputer /> },
  { name: 'experience', path: '#experience', icon: <HiBriefcase /> },
  { name: 'education', path: '#education', icon: <HiAcademicCap /> },
  { name: 'certificates', path: '#certificates', icon: <HiBadgeCheck /> },
  { name: 'github', path: '#github', icon: <FaGithub /> },
  { name: 'contact', path: '#contact', icon: <HiMail /> },
];

function Nav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navData.forEach((item) => {
      const el = document.getElementById(item.name);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col items-center xl:justify-center fixed h-max bottom-0 mt-auto xl:right-[1.5%] z-50 top-0 w-full xl:w-12 xl:max-w-md xl:h-screen pointer-events-none">
      {/* Curved floating dock container */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-3 px-4 md:px-40 xl:px-0 h-[64px] xl:h-auto py-4 bg-slate-900/85 backdrop-blur-md border border-white/10 xl:rounded-full pointer-events-auto shadow-2xl shadow-purple-900/20">
        {navData.map((link, index) => {
          const isActive = activeSection === link.name;
          return (
            <a
              key={index}
              href={link.path}
              className={`relative flex items-center group transition-colors duration-300 ${
                isActive ? 'text-cyan-400 font-bold scale-110' : 'text-slate-400 hover:text-purple-400'
              }`}
            >
              {/* Tooltip */}
              <div className="absolute pr-12 right-0 hidden xl:group-hover:flex items-center">
                <div className="bg-slate-850 relative flex text-white items-center p-[5px] rounded-[4px] border border-purple-500/30">
                  <div className="text-[11px] leading-none font-semibold capitalize font-mono text-cyan-300">
                    {link.name}
                  </div>
                  {/* Tooltip triangle */}
                  <div className="border-solid border-l-purple-500/30 border-l-6 border-y-transparent border-y-[5px] border-r-0 absolute -right-1.5" />
                </div>
              </div>

              {/* Icon */}
              <div className="text-base p-1 relative">
                {link.icon}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-glow" />
                )}
              </div>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

export default memo(Nav);