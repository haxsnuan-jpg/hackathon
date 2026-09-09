import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Trees, Users, ArrowUpRight, Sparkles, Lightbulb, CheckCircle2 } from 'lucide-react';
import { ThemeItem } from '../types';

interface BentoThemesProps {
  themes: ThemeItem[];
  onSelectTheme: (theme: ThemeItem) => void;
}

export const BentoThemes: React.FC<BentoThemesProps> = ({ themes, onSelectTheme }) => {
  const getIcon = (iconName: string, categoryId: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-7 h-7 text-[#86efac] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />;
      case 'Trees':
        return <Trees className="w-7 h-7 text-teal-300 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />;
      case 'Users':
        return <Users className="w-7 h-7 text-amber-400 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#86efac] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" />;
    }
  };

  const getThemeAccent = (categoryId: string) => {
    switch (categoryId.toLowerCase()) {
      case 'edukasi':
        return {
          codeBadge: 'bg-emerald-950/80 text-[#86efac] border-emerald-500/30',
          iconBg: 'bg-emerald-500/10 border-emerald-500/30',
          hoverBorder: 'hover:border-emerald-400/60',
          titleHover: 'group-hover:text-[#86efac]',
          taglineText: 'text-[#86efac]',
          chipText: 'text-[#86efac]',
          chipBg: 'bg-slate-800/80 border-slate-700/60 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/40',
          glowBg: 'bg-emerald-500/15',
          btnText: 'text-[#86efac]',
        };
      case 'lingkungan':
        return {
          codeBadge: 'bg-teal-950/80 text-teal-300 border-teal-500/30',
          iconBg: 'bg-teal-500/10 border-teal-500/30',
          hoverBorder: 'hover:border-teal-400/60',
          titleHover: 'group-hover:text-teal-300',
          taglineText: 'text-teal-300',
          chipText: 'text-teal-300',
          chipBg: 'bg-slate-800/80 border-slate-700/60 hover:bg-teal-500/20 hover:text-teal-200 hover:border-teal-500/40',
          glowBg: 'bg-teal-500/15',
          btnText: 'text-teal-300',
        };
      case 'masyarakat':
        return {
          codeBadge: 'bg-amber-950/80 text-amber-300 border-amber-500/30',
          iconBg: 'bg-amber-500/10 border-amber-500/30',
          hoverBorder: 'hover:border-amber-400/60',
          titleHover: 'group-hover:text-amber-300',
          taglineText: 'text-amber-300',
          chipText: 'text-amber-300',
          chipBg: 'bg-slate-800/80 border-slate-700/60 hover:bg-amber-500/20 hover:text-amber-200 hover:border-amber-500/40',
          glowBg: 'bg-amber-500/15',
          btnText: 'text-amber-300',
        };
      default:
        return {
          codeBadge: 'bg-emerald-950/80 text-[#86efac] border-emerald-500/30',
          iconBg: 'bg-emerald-500/10 border-emerald-500/30',
          hoverBorder: 'hover:border-emerald-400/60',
          titleHover: 'group-hover:text-[#86efac]',
          taglineText: 'text-[#86efac]',
          chipText: 'text-[#86efac]',
          chipBg: 'bg-slate-800/80 border-slate-700/60 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/40',
          glowBg: 'bg-emerald-500/15',
          btnText: 'text-[#86efac]',
        };
    }
  };

  return (
    <section id="bento-tema" className="py-24 relative bg-slate-900 text-white overflow-hidden">
      
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-950/80 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern-light opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-[#86efac] text-xs font-mono font-bold tracking-wider uppercase mb-4">
            <Lightbulb className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>KATEGORI INOVASI KUNCI</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tiga Pilar Utama <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] via-[#86efac] to-teal-300">Tantangan Hackathon</span>
          </h2>

          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Pilih salah satu bidang fokus di bawah ini. Ciptakan karya inovasi teknologi terapan yang dapat diimplementasikan secara nyata untuk mempercepat kemajuan bangsa.
          </p>
        </motion.div>

        {/* Symmetric 3-Column Grid Container with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          
          {themes.map((theme, idx) => {
            const accent = getThemeAccent(theme.id);
            return (
              <motion.div 
                key={theme.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                onClick={() => onSelectTheme(theme)}
                className={`group relative bg-slate-800/90 rounded-3xl p-6 sm:p-7 border border-slate-700/80 ${accent.hoverBorder} transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col justify-between overflow-hidden cursor-pointer h-full`}
              >
                {/* Accent Background Tint */}
                <div className={`absolute -top-12 -right-12 w-44 h-44 ${accent.glowBg} rounded-full opacity-40 group-hover:scale-150 transition-all duration-500 pointer-events-none`} />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Content Area */}
                <div className="flex flex-col flex-1">
                  {/* Card Top Meta */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className={`font-mono text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border ${accent.codeBadge}`}>
                      {theme.code}
                    </span>
                    {theme.isHighlight && (
                      <span className="px-2.5 py-1 text-[10px] font-mono font-extrabold bg-amber-500/10 text-amber-300 border border-amber-500/30 rounded-full">
                        ★ HIGHLIGHT
                      </span>
                    )}
                  </div>

                  {/* Header Icon & Title */}
                  <div className="mt-5 space-y-2.5 flex-1">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-2xl border ${accent.iconBg} shadow-inner group-hover:scale-105 transition-transform shrink-0`}>
                        {getIcon(theme.iconName, theme.id)}
                      </div>
                      <div>
                        <span className={`text-[11px] font-bold uppercase tracking-wider block ${accent.taglineText}`}>
                          {theme.category}
                        </span>
                        <h3 className={`text-xl font-extrabold text-white tracking-tight mt-0.5 ${accent.titleHover} transition-colors`}>
                          {theme.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-slate-400 italic">
                      "{theme.tagline}"
                    </p>

                    {/* WCAG AA High-Contrast Description */}
                    <p className="text-slate-300 text-sm leading-relaxed pt-1">
                      {theme.description}
                    </p>
                  </div>

                  {/* Accessible High-Contrast Hashtags / Subtopics */}
                  <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                    {theme.subtopics.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx}
                        className={`text-xs font-mono font-medium px-2.5 py-1 rounded-lg ${accent.chipBg} ${accent.chipText} transition-all duration-200`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Interactive Trigger Link (Neatly Aligned horizontally across all cards) */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between shrink-0">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 max-w-[62%] truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                    <span className="truncate">{theme.impactMetric}</span>
                  </div>

                  <div className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold ${accent.btnText} group-hover:text-white transition-colors shrink-0`}>
                    <span>Eksplorasi Ide</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};


