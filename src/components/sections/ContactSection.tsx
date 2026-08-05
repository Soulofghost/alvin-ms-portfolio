'use client';

import { useState, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/utils/variants';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { sendContactEmail } from '@/utils/emailService';
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord, FaEnvelope, FaWhatsapp, FaTelegram, FaTwitter, FaFacebook } from 'react-icons/fa';
import { HiPaperAirplane, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi';

const SOCIAL_LINKS = [
  { name: 'GitHub', icon: FaGithub, url: PERSONAL_INFO.githubUrl, color: 'hover:text-white hover:border-slate-500' },
  { name: 'LinkedIn', icon: FaLinkedin, url: PERSONAL_INFO.linkedinUrl, color: 'hover:text-cyan-400 hover:border-cyan-500' },
  { name: 'Instagram', icon: FaInstagram, url: PERSONAL_INFO.instagramUrl, color: 'hover:text-pink-400 hover:border-pink-500' },
  { name: 'Discord', icon: FaDiscord, url: PERSONAL_INFO.discordUrl, color: 'hover:text-indigo-400 hover:border-indigo-500' },
  { name: 'Email', icon: FaEnvelope, url: `mailto:${PERSONAL_INFO.email}`, color: 'hover:text-amber-400 hover:border-amber-500' },
  { name: 'WhatsApp', icon: FaWhatsapp, url: PERSONAL_INFO.whatsappUrl, color: 'hover:text-emerald-400 hover:border-emerald-500' },
  { name: 'Telegram', icon: FaTelegram, url: PERSONAL_INFO.telegramUrl, color: 'hover:text-sky-400 hover:border-sky-500' },
  { name: 'Twitter', icon: FaTwitter, url: PERSONAL_INFO.twitterUrl, color: 'hover:text-blue-400 hover:border-blue-500' },
  { name: 'Facebook', icon: FaFacebook, url: PERSONAL_INFO.facebookUrl, color: 'hover:text-blue-600 hover:border-blue-600' },
];

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', msg: 'Please complete all required fields.' });
      return;
    }

    setLoading(true);
    setStatus(null);

    const res = await sendContactEmail(formData);
    setLoading(false);

    if (res.success) {
      setStatus({ type: 'success', msg: res.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus({ type: 'error', msg: res.message });
    }
  }, [formData]);

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-950/60">
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-3">
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Info & Social Media Grid */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Available for internships, freelance projects, collaborations, and startup ventures.
              </p>
              <div className="space-y-3 text-xs font-mono text-slate-300">
                <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></div>
                <div>Location: <span className="text-slate-200">{PERSONAL_INFO.location}</span></div>
                <div>GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="text-purple-400 underline">@Soulofghost</a></div>
              </div>
            </div>

            {/* Social Media Cards */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4">Social Ecosystem</h4>
              <div className="grid grid-cols-3 gap-3">
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 flex flex-col items-center gap-1.5 transition-all duration-300 ${item.color}`}
                    >
                      <Icon className="text-xl" />
                      <span className="text-[10px] font-mono">{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeIn('left', 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 border border-purple-500/30 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">Your Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project Collaboration / Internship Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-300 mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              {status && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-center gap-2 ${
                    status.type === 'success'
                      ? 'bg-emerald-950/80 border border-emerald-500/40 text-emerald-300'
                      : 'bg-rose-950/80 border border-rose-500/40 text-rose-300'
                  }`}
                >
                  {status.type === 'success' ? <HiCheckCircle className="text-lg flex-shrink-0" /> : <HiExclamationCircle className="text-lg flex-shrink-0" />}
                  <span>{status.msg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all duration-300 disabled:opacity-50"
              >
                {loading ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <HiPaperAirplane className="text-base" />
                    <span>Send Message to Alvin MS</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default memo(ContactSection);