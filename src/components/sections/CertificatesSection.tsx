'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { CERTIFICATES } from '@/data/portfolioData';
import { HiBadgeCheck, HiExternalLink } from 'react-icons/hi';

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-24 relative z-10">
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
            Validated Credentials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Certificates & <span className="text-gradient">Honors</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={fadeIn('up', 0.3 + index * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 hover:border-purple-500/50 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-500/40 flex items-center justify-center text-cyan-400 text-2xl">
                    <HiBadgeCheck />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-purple-300 border border-purple-500/30 font-semibold">
                    {cert.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                <div className="text-xs font-semibold text-purple-300 mb-3">{cert.issuer}</div>
                <div className="text-xs font-mono text-slate-400 mb-6">Issued: {cert.date} • ID: {cert.credentialId}</div>
              </div>

              <a
                href={cert.verifyUrl}
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-center text-xs font-mono font-semibold text-cyan-400 hover:text-white flex items-center justify-center gap-2 transition-all"
              >
                <span>Verify Credential</span>
                <HiExternalLink className="text-xs" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}