'use client';

import { useState, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import Transition from '@/components/layout/Transition';
import TopLeftImg from '@/components/layout/TopLeftImg';
import Circles from '@/components/layout/Circles';
import Bulb from '@/components/layout/Bulb';
import Header from '@/components/layout/Header';
import Nav from '@/components/layout/Nav';
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import VenturesSection from '@/components/sections/VenturesSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import EducationSection from '@/components/sections/EducationSection';
import CertificatesSection from '@/components/sections/CertificatesSection';
import GithubSection from '@/components/sections/GithubSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

// Code-split interactive tools & heavy canvases to minimize initial JS bundle size and LCP
const ParticlesContainer = dynamic(() => import('@/components/hero/ParticlesContainer'), { ssr: false });
const AIChatbot = dynamic(() => import('@/components/interactive/AIChatbot'), { ssr: false });
const ResumeModal = dynamic(() => import('@/components/interactive/ResumeModal'), { ssr: false });
const CommandPalette = dynamic(() => import('@/components/layout/CommandPalette'), { ssr: false });
const MatrixRain = dynamic(() => import('@/components/interactive/MatrixRain'), { ssr: false });

function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isMatrixActive, setIsMatrixActive] = useState(false);

  const handleOpenResume = useCallback(() => setIsResumeModalOpen(true), []);
  const handleCloseResume = useCallback(() => setIsResumeModalOpen(false), []);
  const handleToggleMatrix = useCallback(() => setIsMatrixActive((prev) => !prev), []);
  const handleCloseMatrix = useCallback(() => setIsMatrixActive(false), []);
  const handleOpenCommandPalette = useCallback(() => setIsCommandPaletteOpen(true), []);
  const handleCloseCommandPalette = useCallback(() => setIsCommandPaletteOpen(false), []);

  return (
    <main className="relative min-h-screen bg-[#030712] text-slate-100 overflow-x-hidden selection:bg-purple-500 selection:text-white">
      {/* Page Entry Transition Curtains */}
      <Transition />

      {/* Ambient Cyberpunk Glow Graphic Overlays */}
      <TopLeftImg />
      <Circles />
      <Bulb />

      {/* Dynamic Interactive Particles Background Canvas */}
      <ParticlesContainer />

      {/* Top Header */}
      <Header
        onToggleMatrix={handleToggleMatrix}
        onOpenCommandPalette={handleOpenCommandPalette}
      />

      {/* Floating Curved Dock Navigation Bar */}
      <Nav />

      {/* Main Sections */}
      <HeroSection onOpenResumeModal={handleOpenResume} />
      <AboutSection />
      <VenturesSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ExperienceSection />
      <EducationSection />
      <CertificatesSection />
      <GithubSection />
      <AchievementsSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Assistants & Modals */}
      <AIChatbot />
      
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={handleCloseResume}
      />

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={handleCloseCommandPalette}
        onOpenResume={handleOpenResume}
        onToggleMatrix={handleToggleMatrix}
      />

      <MatrixRain
        active={isMatrixActive}
        onClose={handleCloseMatrix}
      />
    </main>
  );
}

export default memo(Home);