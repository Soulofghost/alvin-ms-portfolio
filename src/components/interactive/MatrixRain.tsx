'use client';

import { useEffect, useRef } from 'react';
import { HiX } from 'react-icons/hi';

interface MatrixRainProps {
  active: boolean;
  onClose: () => void;
}

export default function MatrixRain({ active, onClose }: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const characters = '01ABCDEFGHIJKLMNOPQRSTUVWXYZJAVASPRINGBOOTAIKERALA0101';
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const render = () => {
      ctx.fillStyle = 'rgba(3, 7, 18, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#06b6d4';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-auto bg-slate-950/90">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
        <div className="px-4 py-2 rounded-xl bg-slate-900/90 border border-cyan-500/40 text-xs font-mono text-cyan-300">
          ● KONAMI MATRIX RAIN MODE ACTIVATED
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-xl"
        >
          <HiX className="text-xl" />
        </button>
      </div>
    </div>
  );
}