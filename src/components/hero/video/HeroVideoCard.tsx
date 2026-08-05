'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroVideoCard() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full flex items-center justify-center">
      <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-[#00E5FF]/30 via-purple-600/30 to-pink-500/20 blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#00E5FF]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />

      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[350px] sm:h-[480px] lg:h-[540px] rounded-[18px] sm:rounded-[24px] overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] shadow-purple-950/40 group cursor-pointer"
        style={{ willChange: 'transform' }}
      >
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover rounded-[18px] sm:rounded-[24px] pointer-events-none transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/10 flex items-center gap-2 text-[10px] font-mono text-cyan-300 shadow-lg pointer-events-none">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-cyan-400 animate-pulse' : 'bg-slate-500'}`} />
          <span>SOLO LEVELING CINEMATIC</span>
        </div>
      </motion.div>
    </div>
  );
}