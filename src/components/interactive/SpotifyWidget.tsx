'use client';

import { useState } from 'react';
import { FaSpotify, FaPlay, FaPause } from 'react-icons/fa';

export default function SpotifyWidget() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-xs font-mono shadow-lg shadow-emerald-950/20">
      <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 text-base">
        <FaSpotify className={isPlaying ? 'animate-spin-slow' : ''} />
      </div>
      <div>
        <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[11px]">
          <span>Coding Playlist</span>
          <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="text-slate-400 text-[10px]">Lo-Fi Cyberpunk Beats</div>
      </div>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white ml-2"
        title="Toggle Music Player"
      >
        {isPlaying ? <FaPause className="text-[10px]" /> : <FaPlay className="text-[10px]" />}
      </button>
    </div>
  );
}