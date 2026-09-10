import React from 'react';
import { KeyRound, Download, ChevronRight, Sparkles, Code2, Cpu } from 'lucide-react';
import heroNewImg from '../assets/images/hero_new.png';

interface HeroProps {
  onOpenCodeModal: () => void;
  onOpenGuideModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCodeModal, onOpenGuideModal }) => {
  return (
    <section id="hero" className="relative min-h-[88vh] pt-28 pb-16 lg:pb-20 overflow-hidden flex flex-col justify-center bg-[#F8FAFC]">
      
      {/* FULL-BLEED BACKGROUND HERO IMAGE (Gambar Anak SMK sebagai Background Hero Section) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* The Full Hero Background Image - 100% OPAQUE */}
        <img 
          src={heroNewImg || "/hero-students.png"} 
          alt="Hackathon SMK Students Full Hero Background" 
          className="w-full h-full object-cover object-right lg:object-center opacity-100 filter saturate-[1.05] drop-shadow-md"
          referrerPolicy="no-referrer"
        />

        {/* Soft Off-White Light Mode Gradient Overlay ONLY on Left Side for Readable Text */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/95 to-transparent" />
        
        {/* Subtle Ambient Light Glows */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-200/20 rounded-full blur-[140px]" />
        
        {/* Subtle Light Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.025]" 
          style={{
            backgroundImage: `linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)`,
            backgroundSize: '3.5rem 3.5rem'
          }}
        />
      </div>

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start space-y-6 text-left">

          {/* Eyebrow Badge - Fresh Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-300 text-emerald-800 text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span># Kategori Inovasi Kunci</span>
          </div>

          {/* Bold Headline with High-Contrast Dark Slate & Emerald-to-Cyan Accent */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]">
            Transformasi Digital untuk{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 drop-shadow-sm">
              Pendidikan, Lingkungan, &amp; Masyarakat
            </span>
          </h1>

          {/* High Contrast Description Text (Dark Slate #334155 / WCAG AA Compliant) */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
            Ajang kompetisi hackathon bagi talenta SMK untuk merancang dan merealisasikan solusi teknologi terapan yang berdampak nyata di lingkungan sekolah, ekosistem alam, serta kehidupan sosial.
          </p>

          {/* Two Main CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            
            {/* Primary CTA - Solid Vivid Emerald Green */}
            <button
              onClick={onOpenCodeModal}
              className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-[#0F172A] font-black text-sm sm:text-base tracking-wide shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-400 cursor-pointer"
            >
              <KeyRound className="w-5 h-5 text-[#0F172A] group-hover:rotate-12 transition-transform shrink-0" />
              <span>MASUKKAN KODE UNDANGAN</span>
              <ChevronRight className="w-4 h-4 text-[#0F172A] group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            {/* Secondary CTA - Clean White Button with Thin Slate Border */}
            <button
              onClick={onOpenGuideModal}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-950 font-bold text-sm sm:text-base border border-slate-300 hover:border-slate-400 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>UNDUH PANDUAN TEKNIS</span>
            </button>
          </div>

          {/* Value Props List with Soft Green Checkmarks */}
          <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-semibold text-[#334155]">
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <span className="text-emerald-600 font-bold">✓</span> <span>Gratis Pendaftaran</span>
            </span>
            <span className="text-slate-400 font-bold">•</span>
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <span className="text-emerald-600 font-bold">✓</span> <span>Mentorship Eksklusif</span>
            </span>
            <span className="text-slate-400 font-bold">•</span>
            <span className="inline-flex items-center gap-1.5 font-semibold">
              <span className="text-emerald-600 font-bold">✓</span> <span>Sertifikat Kemendikbudristek</span>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};



