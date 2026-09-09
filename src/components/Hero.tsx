import React from 'react';
import { KeyRound, Download, ChevronRight } from 'lucide-react';

interface HeroProps {
  onOpenCodeModal: () => void;
  onOpenGuideModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCodeModal, onOpenGuideModal }) => {
  return (
    <section id="hero" className="relative min-h-[85vh] pt-32 pb-20 overflow-hidden flex flex-col justify-center bg-slate-900">
      
      {/* Background Photo (Layer Belakang - z-0) with Bottom Gradient Mask Fade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/hero-bg.jpg" 
          alt="Hackathon SMK Hero Background" 
          className="w-full h-full object-cover object-right opacity-80"
          style={{
            maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)'
          }}
          referrerPolicy="no-referrer"
        />

        {/* Dark Charcoal / Slate Gradient Overlay to ensure crisp high contrast on left text */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-slate-900 via-slate-900/90 sm:via-slate-900/70 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-900/95 via-slate-900/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-10" />
      </div>

      {/* Main Content Area (Layer Depan - z-20) */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full">
        
        {/* Left Column Content */}
        <div className="max-w-3xl flex flex-col items-start space-y-6 text-left">

          {/* Headline - Pure Clean White */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.14]">
            Transformasi Digital untuk Pendidikan, Lingkungan, dan Masyarakat
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
            Ajang kompetisi hackathon bagi talenta SMK untuk merancang dan merealisasikan solusi teknologi terapan yang berdampak nyata di lingkungan sekolah, ekosistem alam, serta kehidupan sosial.
          </p>

          {/* CTA Hierarchy */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* PRIMARY CTA - Fresh Bright Emerald / Mint Neon Accent */}
            <button
              onClick={onOpenCodeModal}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-black text-sm sm:text-base tracking-wide shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:shadow-[0_0_35px_rgba(16,185,129,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-300 overflow-hidden cursor-pointer"
            >
              <KeyRound className="w-5 h-5 text-slate-950 group-hover:rotate-12 transition-transform shrink-0" />
              <span>MASUKKAN KODE UNDANGAN</span>
              <ChevronRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* SECONDARY CTA - Clean Ghost Button */}
            <button
              onClick={onOpenGuideModal}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-slate-500 backdrop-blur-md shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>UNDUH PANDUAN TEKNIS</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};


