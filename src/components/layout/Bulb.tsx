'use client';

export default function Bulb() {
  return (
    <div className="absolute left-0 -bottom-12 rotate-12 opacity-40 pointer-events-none z-0">
      <div className="w-[260px] h-[260px] rounded-full bg-gradient-to-t from-cyan-500/30 via-purple-600/20 to-transparent blur-[90px] animate-pulse-glow" />
    </div>
  );
}