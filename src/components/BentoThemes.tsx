import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, ChevronRight, Cpu, Globe2, BookOpen } from 'lucide-react';
import { ThemeItem } from '../types';

interface BentoThemesProps {
  themes: ThemeItem[];
  onSelectTheme: (theme: ThemeItem) => void;
}

export const BentoThemes: React.FC<BentoThemesProps> = ({ themes, onSelectTheme }) => {
  // Find specific themes by id or fall back to array order
  const themeEdu = themes.find(t => t.id === 'edukasi') || themes[0];
  const themeEnv = themes.find(t => t.id === 'lingkungan') || themes[1];
  const themeSoc = themes.find(t => t.id === 'masyarakat') || themes[2];

  // Ref for scroll-driven central timeline filling
  const roadmapContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: roadmapContainerRef,
    offset: ['start 70%', 'end 90%']
  });

  const lineHeightProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Motion variants for staggered entrance animations
  const contentContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemChildVariantsLeft = {
    hidden: { opacity: 0, x: -35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 14 }
    }
  };

  const itemChildVariantsRight = {
    hidden: { opacity: 0, x: 35 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 80, damping: 14 }
    }
  };

  return (
    <section id="bento-tema" className="py-28 relative bg-slate-50 text-slate-900 overflow-hidden">
      
      {/* Dynamic Background Ambient Glows & Grid */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Cyber Grid Background overlay */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 211, 238, 0.8) 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>INTERACTIVE THEME ROADMAP</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Roadmap Inovasi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-teal-200 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              3 Pilar Utama Hackathon
            </span>
          </h2>

          <p className="mt-5 text-[#E2E8F0] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Jelajahi alur perjalanan teknologi terapan vokasi. Pilih salah satu simpul pilar di bawah ini untuk melihat ruang lingkup tantangan dan mengajukan gagasan terbaik tim Anda.
          </p>
        </motion.div>

        {/* ROADMAP JOURNEY CONTAINER WITH CENTRAL VERTICAL PIPELINE */}
        <div ref={roadmapContainerRef} className="relative py-10">
          
          {/* Central Vertical Pipeline (Scroll-Driven Neon Circuit Line) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1.5 bg-slate-900/80 rounded-full">
            {/* Scroll-driven glowing neon gradient fill */}
            <motion.div 
              style={{ height: lineHeightProgress }}
              className="w-full bg-gradient-to-b from-cyan-400 via-emerald-400 via-amber-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)] rounded-full relative"
            >
              {/* Travelling Light Particles along line */}
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_16px_#38bdf8] animate-ping" />
              <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-3.5 h-3.5 bg-emerald-300 rounded-full shadow-[0_0_16px_#34d399] animate-ping delay-700" />
            </motion.div>

            {/* Smooth Vertical Alpha Gradient Fade-Out at Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#070B14]/80 to-[#070B14] pointer-events-none z-10" />
          </div>

          {/* Mobile Vertical Line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-emerald-400 via-amber-400 to-transparent shadow-[0_0_12px_#22d3ee] rounded-full" />

          <div className="space-y-24 lg:space-y-36">

            {/* ================================================================ */}
            {/* NODE 1 (LEFT - EDUCATION & DIGITALIZATION) */}
            {/* ================================================================ */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              
              {/* Central Glowing Radar Node Point with Dual Circuit Connectors (Desktop) */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                
                {/* Radar Ripple Rings */}
                <div className="absolute w-20 h-20 rounded-full border border-cyan-400/30 animate-ping opacity-75 pointer-events-none" />
                <div className="absolute w-16 h-16 rounded-full border border-cyan-400/50 animate-pulse pointer-events-none" />

                {/* Node Core */}
                <div className="w-12 h-12 rounded-full bg-slate-50 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.9)] relative z-10">
                  <div className="w-4 h-4 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />
                </div>

                {/* Horizontal Circuit Branch Connector Left (To Text) */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 xl:w-28 h-0.5 bg-gradient-to-l from-cyan-400 via-cyan-400/60 to-transparent shadow-[0_0_10px_#22d3ee]">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                </div>
                {/* Horizontal Circuit Branch Connector Right (To Graphic) */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 xl:w-28 h-0.5 bg-gradient-to-r from-cyan-400 via-cyan-400/60 to-transparent shadow-[0_0_10px_#22d3ee]">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#22d3ee] animate-pulse" />
                </div>
              </div>

              {/* Mobile Node Point */}
              <div className="lg:hidden absolute left-6 top-8 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-slate-50 border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_15px_#22d3ee]">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* LEFT CONTENT BLOCK (Node 1 Staggered Text Hierarchy) */}
              <motion.div 
                variants={contentContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="w-full lg:w-[46%] pl-12 lg:pl-0 lg:text-right flex flex-col lg:items-end z-10"
              >
                {/* Frameless Organic Floating Container */}
                <div className="space-y-4 group">
                  
                  {/* Badge */}
                  <motion.div variants={itemChildVariantsLeft}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(6,182,212,0.25)]">
                      <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                      <span>PILAR 01 &bull; EDUKASI</span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 variants={itemChildVariantsLeft} className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-cyan-300 transition-colors">
                    Edukasi &amp; Digitalisasi
                  </motion.h3>

                  {/* Tagline */}
                  <motion.p variants={itemChildVariantsLeft} className="text-xs sm:text-sm font-semibold text-cyan-300/90 italic">
                    "{themeEdu?.tagline || 'Meningkatkan Kualitas & Aksesibilitas Pembelajaran Vokasi'}"
                  </motion.p>

                  {/* Description */}
                  <motion.p variants={itemChildVariantsLeft} className="text-[#E2E8F0] text-sm sm:text-base leading-relaxed max-w-xl">
                    {themeEdu?.description || 'Fokus pada pengembangan solusi digital yang mentransformasi ekosistem pembelajaran SMK, manajemen sekolah, laboratorium praktikum virtual, serta sistem evaluasi berbasis teknologi terapan.'}
                  </motion.p>

                  {/* Cyan Hashtag Badges with High Contrast & Hover Glow */}
                  <motion.div variants={itemChildVariantsLeft} className="flex flex-wrap gap-2 pt-2 lg:justify-end">
                    {(themeEdu?.subtopics || ['#SmartClassroom', '#VirtualLabVokasi', '#AdaptiveLearningAI', '#PresensiSiswaIOT']).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-md hover:border-cyan-400/80 hover:text-cyan-200 hover:shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Interactive Trigger CTA Button with Background Sheen */}
                  <motion.div variants={itemChildVariantsLeft} className="pt-4 flex lg:justify-end">
                    <button 
                      onClick={() => onSelectTheme(themeEdu!)}
                      className="relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] hover:scale-105 transition-all duration-300 group/btn"
                    >
                      {/* Background Sheen effect */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                      
                      <span className="relative z-10">Eksplorasi Ide Edukasi</span>
                      <ChevronRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT GRAPHIC BLOCK (Node 1 - Continuous 3D Floating Hologram Graphic) */}
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-[46%] pl-12 lg:pl-0 flex justify-center lg:justify-start z-10"
              >
                {/* Continuous 3D Floating Animation Wrapper */}
                <motion.div 
                  animate={{ y: [-10, 10, -10], rotate: [0, 1.5, 0, -1.5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full max-w-md aspect-square flex items-center justify-center cursor-pointer group/graphic" 
                  onClick={() => onSelectTheme(themeEdu!)}
                >
                  
                  {/* Ambient Glow Aura */}
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl group-hover/graphic:bg-cyan-500/35 transition-all duration-500 pointer-events-none" />
                  
                  {/* 3D Holographic Isometric Base Platform SVG */}
                  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_35px_rgba(34,211,238,0.4)] group-hover/graphic:scale-105 transition-transform duration-500">
                    <defs>
                      <linearGradient id="holoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#0d9488" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="cyberRingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38bdf8" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                      <filter id="glowCyan" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Concentric Rotating Cyber Rings */}
                    <ellipse cx="200" cy="270" rx="140" ry="50" fill="none" stroke="url(#cyberRingGrad)" strokeWidth="2" strokeDasharray="10 8" opacity="0.6">
                      <animateTransform attributeName="transform" type="rotate" from="0 200 270" to="360 200 270" dur="20s" repeatCount="indefinite" />
                    </ellipse>
                    <ellipse cx="200" cy="270" rx="100" ry="36" fill="rgba(6, 182, 212, 0.08)" stroke="#22d3ee" strokeWidth="1.5" opacity="0.8" />
                    
                    {/* Glowing Hologram Laser Beams shooting up */}
                    <path d="M 120,270 L 150,110 L 250,110 L 280,270 Z" fill="url(#holoGrad1)" opacity="0.18" filter="url(#glowCyan)" />

                    {/* Floating 3D VR Glasses & Futuristic Digital Book Hologram */}
                    <g transform="translate(100, 100)">
                      {/* Floating Digital Book Base */}
                      <path d="M 20,90 L 100,130 L 180,90 L 100,50 Z" fill="rgba(15, 23, 42, 0.85)" stroke="#22d3ee" strokeWidth="2.5" />
                      <path d="M 20,90 L 100,130 L 100,145 L 20,105 Z" fill="rgba(6, 182, 212, 0.4)" stroke="#0891b2" strokeWidth="1.5" />
                      <path d="M 100,130 L 180,90 L 180,105 L 100,145 Z" fill="rgba(20, 184, 166, 0.4)" stroke="#0d9488" strokeWidth="1.5" />
                      
                      {/* Glowing Hologram Code Lines on Book */}
                      <line x1="45" y1="85" x2="85" y2="105" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="50" y1="95" x2="80" y2="110" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="115" y1="105" x2="155" y2="85" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="120" y1="110" x2="150" y2="95" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" />

                      {/* Floating 3D VR Headset Hovering Above */}
                      <g transform="translate(45, 10)">
                        <rect x="10" y="20" width="90" height="42" rx="12" fill="rgba(7, 11, 20, 0.9)" stroke="#22d3ee" strokeWidth="3" filter="url(#glowCyan)" />
                        <rect x="22" y="28" width="28" height="24" rx="6" fill="#0284c7" opacity="0.8" />
                        <rect x="60" y="28" width="28" height="24" rx="6" fill="#0284c7" opacity="0.8" />
                        <path d="M 50,30 L 60,30" stroke="#38bdf8" strokeWidth="3" />
                        {/* VR Strap */}
                        <path d="M 10,40 C -10,35 -10,15 20,10" fill="none" stroke="#0891b2" strokeWidth="3" />
                        <path d="M 100,40 C 120,35 120,15 90,10" fill="none" stroke="#0891b2" strokeWidth="3" />
                      </g>
                    </g>

                    {/* Floating Data Spheres / Particles */}
                    <circle cx="110" cy="140" r="6" fill="#38bdf8" filter="url(#glowCyan)">
                      <animate attributeName="cy" values="140;125;140" dur="4s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="290" cy="160" r="8" fill="#34d399" filter="url(#glowCyan)">
                      <animate attributeName="cy" values="160;145;160" dur="5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="210" cy="80" r="5" fill="#67e8f9" filter="url(#glowCyan)">
                      <animate attributeName="cy" values="80;68;80" dur="3.5s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </motion.div>
              </motion.div>

            </div>

            {/* ================================================================ */}
            {/* NODE 2 (RIGHT - ENVIRONMENT & ECOSYSTEM) */}
            {/* ================================================================ */}
            <div className="relative flex flex-col lg:flex-row-reverse items-center justify-between gap-8 lg:gap-16">
              
              {/* Central Glowing Radar Node Point with Dual Circuit Connectors (Desktop) */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                
                {/* Radar Ripple Rings */}
                <div className="absolute w-20 h-20 rounded-full border border-emerald-400/30 animate-ping opacity-75 pointer-events-none" />
                <div className="absolute w-16 h-16 rounded-full border border-emerald-400/50 animate-pulse pointer-events-none" />

                {/* Node Core */}
                <div className="w-12 h-12 rounded-full bg-slate-50 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_25px_rgba(52,211,153,0.9)] relative z-10">
                  <div className="w-4 h-4 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                </div>

                {/* Horizontal Circuit Branch Connector Right (To Text) */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 xl:w-28 h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-400/60 to-transparent shadow-[0_0_10px_#34d399]">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-[0_0_8px_#34d399] animate-pulse" />
                </div>
                {/* Horizontal Circuit Branch Connector Left (To Graphic) */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 xl:w-28 h-0.5 bg-gradient-to-l from-emerald-400 via-emerald-400/60 to-transparent shadow-[0_0_10px_#34d399]">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-emerald-300 shadow-[0_0_8px_#34d399] animate-pulse" />
                </div>
              </div>

              {/* Mobile Node Point */}
              <div className="lg:hidden absolute left-6 top-8 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-slate-50 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_15px_#34d399]">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* RIGHT CONTENT BLOCK (Node 2 Staggered Text Hierarchy) */}
              <motion.div 
                variants={contentContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="w-full lg:w-[46%] pl-12 lg:pl-0 lg:text-left flex flex-col lg:items-start z-10"
              >
                {/* Frameless Organic Floating Container */}
                <div className="space-y-4 group">
                  
                  {/* Badge */}
                  <motion.div variants={itemChildVariantsRight}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.25)]">
                      <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                      <span>PILAR 02 &bull; LINGKUNGAN</span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 variants={itemChildVariantsRight} className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-emerald-300 transition-colors">
                    Lingkungan &amp; Ekosistem
                  </motion.h3>

                  {/* Tagline */}
                  <motion.p variants={itemChildVariantsRight} className="text-xs sm:text-sm font-semibold text-emerald-300/90 italic">
                    "{themeEnv?.tagline || 'Teknologi Terapan untuk Kelestarian & Efisiensi Energi'}"
                  </motion.p>

                  {/* Description */}
                  <motion.p variants={itemChildVariantsRight} className="text-[#E2E8F0] text-sm sm:text-base leading-relaxed max-w-xl">
                    {themeEnv?.description || 'Menciptakan perangkat hardware, IoT, atau software pemantau kualitas lingkungan, sistem otomatisasi pemilah sampah, serta manajemen energi terbarukan di kawasan sekolah dan pemukiman.'}
                  </motion.p>

                  {/* Emerald Green Hashtag Badges with High Contrast & Hover Glow */}
                  <motion.div variants={itemChildVariantsRight} className="flex flex-wrap gap-2 pt-2 lg:justify-start">
                    {(themeEnv?.subtopics || ['#IoTMonitoringUdara', '#SmartWasteSorting', '#EcoTechSekolah', '#RenewableEnergyControl']).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-white text-emerald-700 border border-slate-200 shadow-md hover:border-emerald-400/80 hover:text-emerald-200 hover:shadow-[0_0_12px_rgba(52,211,153,0.35)] transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Interactive Trigger CTA Button with Background Sheen */}
                  <motion.div variants={itemChildVariantsRight} className="pt-4 flex lg:justify-start">
                    <button 
                      onClick={() => onSelectTheme(themeEnv!)}
                      className="relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(52,211,153,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.7)] hover:scale-105 transition-all duration-300 group/btn"
                    >
                      {/* Background Sheen effect */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                      
                      <span className="relative z-10">Eksplorasi Ide Lingkungan</span>
                      <ChevronRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* LEFT GRAPHIC BLOCK (Node 2 - Continuous 3D Floating Glassmorphism Leaf Graphic) */}
              <motion.div 
                initial={{ opacity: 0, x: -50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-[46%] pl-12 lg:pl-0 flex justify-center lg:justify-end z-10"
              >
                {/* Continuous 3D Floating Animation Wrapper */}
                <motion.div 
                  animate={{ y: [10, -10, 10], rotate: [0, -1.5, 0, 1.5, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full max-w-md aspect-square flex items-center justify-center cursor-pointer group/graphic" 
                  onClick={() => onSelectTheme(themeEnv!)}
                >
                  
                  {/* Ambient Glow Aura */}
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl group-hover/graphic:bg-emerald-500/35 transition-all duration-500 pointer-events-none" />

                  {/* 3D Glassmorphism Leaf & Circuit SVG */}
                  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_35px_rgba(52,211,153,0.4)] group-hover/graphic:scale-105 transition-transform duration-500">
                    <defs>
                      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#059669" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#064e3b" stopOpacity="0.9" />
                      </linearGradient>
                      <filter id="glowGreen" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="7" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Orbiting Glassmorphism Rings */}
                    <circle cx="200" cy="200" r="140" fill="none" stroke="rgba(52, 211, 153, 0.2)" strokeWidth="2" strokeDasharray="12 12" />
                    <circle cx="200" cy="200" r="110" fill="none" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1.5" />

                    {/* Main 3D Glassmorphism Glowing Leaf */}
                    <path 
                      d="M 200,60 C 290,100 330,220 230,320 C 210,340 190,340 170,320 C 70,220 110,100 200,60 Z" 
                      fill="url(#leafGrad)" 
                      stroke="#34d399" 
                      strokeWidth="3" 
                      filter="url(#glowGreen)"
                    />

                    {/* IoT Circuit Veins inside Leaf */}
                    <path d="M 200,80 L 200,320" stroke="#a7f3d0" strokeWidth="3" strokeLinecap="round" />
                    
                    {/* Branch Veins with Glowing Circuit Nodes */}
                    <path d="M 200,140 L 250,110" stroke="#34d399" strokeWidth="2" />
                    <circle cx="250" cy="110" r="5" fill="#38bdf8" filter="url(#glowGreen)" />

                    <path d="M 200,180 L 140,150" stroke="#34d399" strokeWidth="2" />
                    <circle cx="140" cy="150" r="5" fill="#a7f3d0" filter="url(#glowGreen)" />

                    <path d="M 200,220 L 260,190" stroke="#34d399" strokeWidth="2" />
                    <circle cx="260" cy="190" r="5" fill="#38bdf8" filter="url(#glowGreen)" />

                    <path d="M 200,260 L 150,230" stroke="#34d399" strokeWidth="2" />
                    <circle cx="150" cy="230" r="5" fill="#a7f3d0" filter="url(#glowGreen)" />

                    {/* Floating Solar / Wind Energy Particle Nodes */}
                    <g transform="translate(280, 240)">
                      <rect x="0" y="0" width="36" height="36" rx="10" fill="rgba(6, 78, 59, 0.85)" stroke="#34d399" strokeWidth="2" />
                      <path d="M 10,18 L 26,18 M 18,10 L 18,26" stroke="#a7f3d0" strokeWidth="2.5" />
                    </g>
                    
                    <g transform="translate(70, 100)">
                      <circle cx="18" cy="18" r="18" fill="rgba(6, 182, 212, 0.85)" stroke="#38bdf8" strokeWidth="2" />
                      <circle cx="18" cy="18" r="8" fill="#ffffff" />
                    </g>
                  </svg>
                </motion.div>
              </motion.div>

            </div>

            {/* ================================================================ */}
            {/* NODE 3 (LEFT - SOCIETY & SOCIAL INCLUSION) */}
            {/* ================================================================ */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              
              {/* Central Glowing Radar Node Point with Dual Circuit Connectors (Desktop) */}
              <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                
                {/* Radar Ripple Rings */}
                <div className="absolute w-20 h-20 rounded-full border border-amber-400/30 animate-ping opacity-75 pointer-events-none" />
                <div className="absolute w-16 h-16 rounded-full border border-amber-400/50 animate-pulse pointer-events-none" />

                {/* Node Core */}
                <div className="w-12 h-12 rounded-full bg-slate-50 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_25px_rgba(251,191,36,0.9)] relative z-10">
                  <div className="w-4 h-4 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_#fbbf24]" />
                </div>

                {/* Horizontal Circuit Branch Connector Left (To Text) */}
                <div className="absolute right-full top-1/2 -translate-y-1/2 w-16 xl:w-28 h-0.5 bg-gradient-to-l from-amber-400 via-amber-400/60 to-transparent shadow-[0_0_10px_#fbbf24]">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fbbf24] animate-pulse" />
                </div>
                {/* Horizontal Circuit Branch Connector Right (To Graphic) */}
                <div className="absolute left-full top-1/2 -translate-y-1/2 w-16 xl:w-28 h-0.5 bg-gradient-to-r from-amber-400 via-amber-400/60 to-transparent shadow-[0_0_10px_#fbbf24]">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-amber-300 shadow-[0_0_8px_#fbbf24] animate-pulse" />
                </div>
              </div>

              {/* Mobile Node Point */}
              <div className="lg:hidden absolute left-6 top-8 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-slate-50 border-2 border-amber-400 flex items-center justify-center shadow-[0_0_15px_#fbbf24]">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
              </div>

              {/* LEFT CONTENT BLOCK (Node 3 Staggered Text Hierarchy) */}
              <motion.div 
                variants={contentContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="w-full lg:w-[46%] pl-12 lg:pl-0 lg:text-right flex flex-col lg:items-end z-10"
              >
                {/* Frameless Organic Floating Container */}
                <div className="space-y-4 group">
                  
                  {/* Badge */}
                  <motion.div variants={itemChildVariantsLeft}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                      <Globe2 className="w-3.5 h-3.5 text-amber-400" />
                      <span>PILAR 03 &bull; MASYARAKAT</span>
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3 variants={itemChildVariantsLeft} className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug group-hover:text-amber-300 transition-colors">
                    Masyarakat &amp; Inklusi Sosial
                  </motion.h3>

                  {/* Tagline */}
                  <motion.p variants={itemChildVariantsLeft} className="text-xs sm:text-sm font-semibold text-amber-300/90 italic">
                    "{themeSoc?.tagline || 'Solusi Digital Inklusif untuk Pemberdayaan Komunitas'}"
                  </motion.p>

                  {/* Description */}
                  <motion.p variants={itemChildVariantsLeft} className="text-[#E2E8F0] text-sm sm:text-base leading-relaxed max-w-xl">
                    {themeSoc?.description || 'Merancang aplikasi pemberdayaan UMKM lokal, sistem peringatan dini bencana berbasis warga, layanan aksesibilitas disabilitas, serta marketplace produk unggulan Teaching Factory (TEFA) SMK.'}
                  </motion.p>

                  {/* Amber / Coral Hashtag Badges with High Contrast & Hover Glow */}
                  <motion.div variants={itemChildVariantsLeft} className="flex flex-wrap gap-2 pt-2 lg:justify-end">
                    {(themeSoc?.subtopics || ['#UMKMDigitalization', '#SiagaBencanaWarga', '#InklusiTeknologi', '#MarketplaceTEFA']).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs font-mono font-semibold px-3 py-1.5 rounded-full bg-white text-amber-700 border border-slate-200 shadow-md hover:border-amber-400/80 hover:text-amber-200 hover:shadow-[0_0_12px_rgba(251,191,36,0.35)] transition-all cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  {/* Interactive Trigger CTA Button with Background Sheen */}
                  <motion.div variants={itemChildVariantsLeft} className="pt-4 flex lg:justify-end">
                    <button 
                      onClick={() => onSelectTheme(themeSoc!)}
                      className="relative overflow-hidden inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 text-slate-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:shadow-[0_0_30px_rgba(251,191,36,0.7)] hover:scale-105 transition-all duration-300 group/btn"
                    >
                      {/* Background Sheen effect */}
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out" />
                      
                      <span className="relative z-10">Eksplorasi Ide Sosial</span>
                      <ChevronRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>

              {/* RIGHT GRAPHIC BLOCK (Node 3 - Continuous 3D Floating Community Globe Graphic) */}
              <motion.div 
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full lg:w-[46%] pl-12 lg:pl-0 flex justify-center lg:justify-start z-10"
              >
                {/* Continuous 3D Floating Animation Wrapper */}
                <motion.div 
                  animate={{ y: [-8, 8, -8], rotate: [0, 1.2, 0, -1.2, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative w-full max-w-md aspect-square flex items-center justify-center cursor-pointer group/graphic" 
                  onClick={() => onSelectTheme(themeSoc!)}
                >
                  
                  {/* Ambient Glow Aura */}
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-3xl group-hover/graphic:bg-amber-500/35 transition-all duration-500 pointer-events-none" />

                  {/* 3D Glowing Digital Community Globe SVG */}
                  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_35px_rgba(251,191,36,0.4)] group-hover/graphic:scale-105 transition-transform duration-500">
                    <defs>
                      <linearGradient id="globeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#f97316" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#78350f" stopOpacity="0.9" />
                      </linearGradient>
                      <filter id="glowAmber" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Latitude / Longitude 3D Mesh Globe */}
                    <circle cx="200" cy="200" r="120" fill="rgba(120, 53, 15, 0.15)" stroke="url(#globeGrad)" strokeWidth="2" filter="url(#glowAmber)" />
                    <ellipse cx="200" cy="200" rx="120" ry="40" fill="none" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="6 6" />
                    <ellipse cx="200" cy="200" rx="120" ry="80" fill="none" stroke="#f97316" strokeWidth="1.5" />
                    <ellipse cx="200" cy="200" rx="40" ry="120" fill="none" stroke="#fbbf24" strokeWidth="1.5" />

                    {/* Interconnected Network Avatar Nodes */}
                    <g transform="translate(130, 110)">
                      <circle cx="0" cy="0" r="22" fill="#070B14" stroke="#fbbf24" strokeWidth="2.5" filter="url(#glowAmber)" />
                      <circle cx="0" cy="-6" r="6" fill="#fef08a" />
                      <path d="M -10,10 C -10,2 -2,2 -2,2 C 2,2 10,2 10,10 Z" fill="#fef08a" />
                    </g>

                    <g transform="translate(270, 140)">
                      <circle cx="0" cy="0" r="20" fill="#070B14" stroke="#f97316" strokeWidth="2.5" filter="url(#glowAmber)" />
                      <circle cx="0" cy="-5" r="5" fill="#fed7aa" />
                      <path d="M -8,8 C -8,1 -1,1 -1,1 C 1,1 8,1 8,8 Z" fill="#fed7aa" />
                    </g>

                    <g transform="translate(190, 260)">
                      <circle cx="0" cy="0" r="24" fill="#070B14" stroke="#f59e0b" strokeWidth="3" filter="url(#glowAmber)" />
                      <circle cx="0" cy="-7" r="7" fill="#fef08a" />
                      <path d="M -12,12 C -12,3 -3,3 -3,3 C 3,3 12,3 12,12 Z" fill="#fef08a" />
                    </g>

                    {/* Glowing Network Beams Connecting Avatars */}
                    <path d="M 130,110 L 270,140" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 270,140 L 190,260" stroke="#f97316" strokeWidth="2" strokeDasharray="4 4" />
                    <path d="M 190,260 L 130,110" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />

                    {/* Center Community Pulse Core */}
                    <circle cx="200" cy="170" r="10" fill="#fbbf24" filter="url(#glowAmber)">
                      <animate attributeName="r" values="8;16;8" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </motion.div>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};




