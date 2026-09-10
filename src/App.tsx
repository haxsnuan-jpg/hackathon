import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeroBridge } from './components/HeroBridge';
import { BentoThemes } from './components/BentoThemes';
import { SponsorMarquee } from './components/SponsorMarquee';
import { TimelineSection } from './components/TimelineSection';
import { PrizesSection } from './components/PrizesSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

import { InvitationModal } from './components/InvitationModal';
import { GuideModal } from './components/GuideModal';
import { ThemeDetailModal } from './components/ThemeDetailModal';

import { THEME_DATA } from './data/mockData';
import { ThemeItem } from './types';

export default function App() {
  // Modal states
  const [codeModalOpen, setCodeModalOpen] = useState(false);
  const [guideModalOpen, setGuideModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<ThemeItem | null>(null);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans antialiased selection:bg-[#22c55e] selection:text-[#022c22]">
      
      {/* Navigation Bar */}
      <Navbar
        onOpenCodeModal={() => setCodeModalOpen(true)}
        onOpenGuideModal={() => setGuideModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section with Invitation Code & Countdown Box */}
        <Hero
          onOpenCodeModal={() => setCodeModalOpen(true)}
          onOpenGuideModal={() => setGuideModalOpen(true)}
        />

        {/* 1.5 Hero Bridge: Stat Counter Bar & Scroll Indicator */}
        <HeroBridge />

        {/* 2. Main Themes Bento Grid Section */}
        <BentoThemes
          themes={THEME_DATA}
          onSelectTheme={(theme) => setSelectedTheme(theme)}
        />

        {/* 3. Sponsor Infinite Marquee Animation */}
        <SponsorMarquee />

        {/* 4. Competition Roadmap & Timeline Stepper */}
        <TimelineSection />

        {/* 5. Prizes & Benefits Section */}
        <PrizesSection />

        {/* 6. Frequently Asked Questions (FAQ) */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <InvitationModal
        isOpen={codeModalOpen}
        onClose={() => setCodeModalOpen(false)}
      />

      <GuideModal
        isOpen={guideModalOpen}
        onClose={() => setGuideModalOpen(false)}
      />

      <ThemeDetailModal
        theme={selectedTheme}
        onClose={() => setSelectedTheme(null)}
        onOpenCodeModal={() => setCodeModalOpen(true)}
      />

    </div>
  );
}
