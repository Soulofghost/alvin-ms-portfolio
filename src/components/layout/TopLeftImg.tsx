'use client';

export default function TopLeftImg() {
  return (
    <div className="absolute left-0 top-0 z-0 w-[200px] xl:w-[400px] opacity-40 pointer-events-none mix-blend-color-dodge">
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-purple-600/30 to-cyan-500/20 blur-[100px]" />
    </div>
  );
}