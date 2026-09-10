import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';

const SPONSORS = [
  'KEMENDIKBUDRISTEK',
  'TELKOM INDONESIA',
  'GOOGLE CLOUD',
  'AWS EDUCATION',
  'CISCO ACADEMY',
  'INTEL INDONESIA',
  'MICROSOFT FOR STARTUPS',
  'DIREKTORAT SMK',
];

export const HeroBridge: React.FC = () => {
  return (
    <section className="relative bg-[#F8FAFC] py-8 lg:py-12 overflow-hidden z-20">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Spacious Radial Ambient Glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[220px] bg-emerald-300/20 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Sleek Micro-Pills / Frameless Floating Stats in Light Mode */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:gap-x-6 text-center text-xs sm:text-sm md:text-base font-semibold text-[#334155] py-2.5 px-6 rounded-full bg-white/80 backdrop-blur-md border border-slate-200 shadow-sm"
        >
          <span className="flex items-center gap-2">
            <span className="text-slate-900 font-bold tracking-tight">Rp 50M+</span>
            <span>Innovation Fund</span>
          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />

          <span className="flex items-center gap-2">
            <span className="text-slate-900 font-bold tracking-tight">100+</span>
            <span>SMK Registered</span>
          </span>

          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />

          <span className="flex items-center gap-2">
            <span className="text-slate-900 font-bold tracking-tight">3</span>
            <span>Main Pillars</span>
          </span>
        </motion.div>

        {/* Logo Marquee Ribbon */}
        <div className="mt-8 w-full max-w-5xl relative overflow-hidden py-3">
          {/* Mask Fades on Left and Right Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

          <div className="flex space-x-12 animate-marquee whitespace-nowrap items-center opacity-60 hover:opacity-90 transition-opacity duration-300">
            {[...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
              <span 
                key={idx} 
                className="text-xs font-mono font-bold tracking-widest text-slate-600 uppercase inline-block px-2 hover:text-emerald-600 transition-colors"
              >
                {sponsor}
              </span>
            ))}
          </div>
        </div>

        {/* CONNECTOR: Single Ultra-Thin Glowing Emerald Circuit Line */}
        <div className="mt-6 flex flex-col items-center justify-center relative">
          {/* Single Ultra-Thin Circuit Line */}
          <div className="relative h-16 w-[1.5px] bg-slate-300 rounded-full overflow-hidden">
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear' }}
              className="w-full h-1/2 bg-gradient-to-b from-transparent via-emerald-500 to-teal-400 shadow-sm"
            />
          </div>

          {/* Minimalist Scroll Trigger Badge */}
          <motion.button 
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => {
              const el = document.getElementById('bento-tema');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-2 group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-emerald-700 hover:text-emerald-800 hover:border-emerald-300 text-xs font-mono font-semibold tracking-wider uppercase shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-emerald-600 animate-pulse" />
            <span>INTERACTIVE ROADMAP</span>
            <ChevronDown className="w-3.5 h-3.5 text-emerald-600 group-hover:translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

      </div>
    </section>
  );
};

