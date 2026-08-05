'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { BLOG_POSTS, BlogPost } from '@/data/portfolioData';
import { HiClock, HiTag, HiX, HiBookOpen } from 'react-icons/hi';
import Image from 'next/image';

export default function BlogSection() {
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 relative z-10">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        {/* Section Heading */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-slate-900/80 px-3 py-1 rounded-full border border-cyan-500/30">
            Insights & Technical Articles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Developer <span className="text-gradient">Blog</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800 hover:border-purple-500/50 overflow-hidden flex flex-col justify-between"
            >
              <div className="relative h-48 w-full bg-slate-950">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 384px"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-slate-950/80 text-cyan-300 border border-cyan-500/30">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-mono mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <HiClock />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white hover:text-cyan-300 transition-colors mb-3 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-slate-400 text-xs line-clamp-3 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setActiveArticle(post)}
                    className="w-full py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-center text-xs font-mono font-semibold text-cyan-400 hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <HiBookOpen className="text-sm" />
                    <span>Read Article</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Article Reader Modal */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
              onClick={() => setActiveArticle(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-3xl bg-slate-900 border border-purple-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/50 max-h-[85vh] overflow-y-auto"
              >
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400">{activeArticle.category} • {activeArticle.readTime}</span>
                    <h3 className="text-2xl font-bold text-white mt-1">{activeArticle.title}</h3>
                  </div>
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                  >
                    <HiX className="text-xl" />
                  </button>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {activeArticle.content}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs font-mono text-slate-400">
                  <span>Author: Alvin MS</span>
                  <span>Published: {activeArticle.date}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}