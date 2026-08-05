'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { SERVICES } from '@/data/portfolioData';
import { HiCode, HiDesktopComputer, HiViewGrid, HiChip, HiServer, HiPuzzle, HiCheck } from 'react-icons/hi';

const ICON_COMPONENTS: Record<string, any> = {
  Code: HiCode,
  Layout: HiDesktopComputer,
  Layers: HiViewGrid,
  Cpu: HiChip,
  Server: HiServer,
  Webhook: HiPuzzle,
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 relative z-10 bg-slate-950/60">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-mono tracking-widest text-purple-400 uppercase bg-slate-900/80 px-3 py-1 rounded-full border border-purple-500/30">
            What I Provide
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const IconComp = ICON_COMPONENTS[service.icon] || HiCode;
            return (
              <motion.div
                key={service.id}
                variants={fadeIn('up', 0.2 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600/20 to-cyan-500/20 border border-purple-500/30 flex items-center justify-center text-3xl text-cyan-400 mb-6 shadow-inner">
                    <IconComp />
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 mb-3">{service.title}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <HiCheck className="text-cyan-400 text-sm flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#contact"
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-purple-950/60 border border-slate-800 hover:border-purple-500/40 text-center text-xs font-mono font-semibold text-cyan-400 hover:text-white transition-all"
                >
                  Request Service →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}