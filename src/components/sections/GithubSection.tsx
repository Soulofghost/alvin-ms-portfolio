'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { fetchGithubData, GithubStats } from '@/utils/githubApi';
import { FaGithub, FaStar, FaCodeBranch, FaUserFriends, FaBook, FaFire } from 'react-icons/fa';
import { HiExternalLink, HiRefresh } from 'react-icons/hi';

export default function GithubSection() {
  const [stats, setStats] = useState<GithubStats | null>(null);
  const [loading, setLoading] = useState(true);

  const loadStats = async () => {
    setLoading(true);
    const data = await fetchGithubData('Soulofghost');
    setStats(data);
    setLoading(false);
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <section id="github" className="py-24 relative z-10 bg-slate-950/60">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-slate-900/80 px-3 py-1 rounded-full border border-purple-500/30">
            Open Source Activity
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            GitHub <span className="text-gradient">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Live GitHub Stats Cards Header */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-2xl glass-card border border-purple-500/30 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-purple-900/40 text-purple-400 text-2xl">
              <FaBook />
            </div>
            <div>
              <div className="text-2xl font-black text-white">{loading ? '...' : stats?.publicRepos}</div>
              <div className="text-xs font-mono text-slate-400">Repositories</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-cyan-500/30 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-900/40 text-cyan-400 text-2xl">
              <FaUserFriends />
            </div>
            <div>
              <div className="text-2xl font-black text-white">{loading ? '...' : stats?.followers}</div>
              <div className="text-xs font-mono text-slate-400">Followers</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-pink-500/30 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-pink-900/40 text-pink-400 text-2xl">
              <FaFire />
            </div>
            <div>
              <div className="text-2xl font-black text-white">Active</div>
              <div className="text-xs font-mono text-slate-400">Streak Stats</div>
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-card border border-emerald-500/30 flex items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-900/40 text-emerald-400 text-2xl">
              <FaGithub />
            </div>
            <div>
              <div className="text-2xl font-black text-white">@Soulofghost</div>
              <div className="text-xs font-mono text-slate-400">GitHub Profile</div>
            </div>
          </div>
        </div>

        {/* Live Repository Cards Grid */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <span>Recent Repositories</span>
            <span className="text-xs font-mono text-cyan-400 font-normal">(Live API Fetch)</span>
          </h3>
          <button
            onClick={loadStats}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors text-sm flex items-center gap-1.5"
            title="Refresh GitHub Data"
          >
            <HiRefresh className={loading ? 'animate-spin' : ''} />
            <span className="text-xs font-mono">Refresh</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats?.repos.map((repo) => (
            <div
              key={repo.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 hover:border-purple-500/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 font-bold text-slate-100 text-sm">
                    <FaBook className="text-purple-400 text-xs" />
                    <span className="truncate max-w-[180px]">{repo.name}</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800">
                    {repo.language}
                  </span>
                </div>

                <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1">
                    <FaStar className="text-amber-400 text-xs" />
                    <span>{repo.stargazers_count}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch className="text-cyan-400 text-xs" />
                    <span>{repo.forks_count}</span>
                  </span>
                </div>

                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-purple-400 hover:text-cyan-300 flex items-center gap-1"
                >
                  <span>Code</span>
                  <HiExternalLink className="text-xs" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}