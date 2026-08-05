'use client';

export default function Circles() {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 z-0 opacity-40 pointer-events-none animate-spin-slow">
      <div className="w-full h-full rounded-full border border-purple-500/20 border-dashed p-8">
        <div className="w-full h-full rounded-full border border-cyan-500/30 border-dotted" />
      </div>
    </div>
  );
}