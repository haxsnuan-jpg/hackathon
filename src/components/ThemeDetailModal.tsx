import React from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Lightbulb, Rocket, ShieldCheck } from 'lucide-react';
import { ThemeItem } from '../types';

interface ThemeDetailModalProps {
  theme: ThemeItem | null;
  onClose: () => void;
  onOpenCodeModal: () => void;
}

export const ThemeDetailModal: React.FC<ThemeDetailModalProps> = ({ theme, onClose, onOpenCodeModal }) => {
  if (!theme) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-[#022c22] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow Header */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-[#86efac] to-emerald-600" />
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-emerald-900/60 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Badge & Title */}
        <div className="space-y-3 pb-6 border-b border-emerald-800/60">
          <span className="font-mono text-xs font-bold text-[#86efac] tracking-widest uppercase bg-emerald-950 px-3 py-1 rounded-full border border-emerald-700/50">
            EKSPOLORASI TEMA {theme.code}
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {theme.title}
          </h3>
          <p className="text-xs sm:text-sm text-emerald-200">
            {theme.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 text-xs sm:text-sm">
          <div>
            <h4 className="font-bold text-white text-sm mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[#86efac]" />
              <span>Deskripsi Fokus Kategori</span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              {theme.description}
            </p>
          </div>

          {/* Sample Project Ideas */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3 flex items-center gap-2">
              <Rocket className="w-4 h-4 text-[#86efac]" />
              <span>Contoh Gagasan Inovasi Terapan</span>
            </h4>

            <div className="space-y-2.5">
              {theme.ideas.map((idea, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span className="text-slate-200 font-medium">{idea}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Subtopics Tags */}
          <div>
            <span className="text-xs font-mono font-bold text-emerald-300 uppercase block mb-2">
              SUB-TOPIK REKOMENDASI JURI:
            </span>
            <div className="flex flex-wrap gap-2">
              {theme.subtopics.map((tag, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-emerald-900/60 text-[#86efac] border border-emerald-700/50">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="pt-4 border-t border-emerald-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-emerald-300">
            <ShieldCheck className="w-4 h-4 text-[#22c55e]" />
            <span>{theme.impactMetric}</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenCodeModal();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#22c55e] hover:bg-[#86efac] text-[#022c22] font-black text-xs inline-flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <span>AKTUAKAN IDE DI KATEGORI INI</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
