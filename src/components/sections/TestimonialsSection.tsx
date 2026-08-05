'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { TESTIMONIALS } from '@/data/portfolioData';
import { FaQuoteLeft } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 relative z-10 bg-slate-950/60">
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
            Endorsements & Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Client & Peer <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Testimonial Card Slider */}
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={current.id}
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            className="glass-card rounded-3xl p-8 sm:p-12 border border-purple-500/30 relative overflow-hidden shadow-2xl shadow-purple-950/40"
          >
            <FaQuoteLeft className="text-5xl text-purple-500/20 absolute top-6 left-8 pointer-events-none" />

            <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic mb-8 relative z-10 font-normal">
              "{current.content}"
            </p>

            <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400 flex-shrink-0">
                <Image
                  src={current.avatar}
                  alt={current.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">{current.name}</h4>
                <div className="text-xs font-mono text-cyan-300">{current.role}</div>
                <div className="text-xs text-slate-400">{current.company}</div>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all shadow-md"
              title="Previous Testimonial"
            >
              <HiChevronLeft className="text-xl" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === i ? 'bg-cyan-400 w-8' : 'bg-slate-700 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-all shadow-md"
              title="Next Testimonial"
            >
              <HiChevronRight className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}