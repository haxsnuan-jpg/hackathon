import React, { useState } from 'react';
import { Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { TIMELINE_DATA } from '../data/mockData';

export const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(TIMELINE_DATA[0].number);

  const activePhase = TIMELINE_DATA.find(p => p.number === activeTab) || TIMELINE_DATA[0];

  return (
    <section id="alur-kompetisi" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
      
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>ALUR KOMPETISI & TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Tahapan Lengkap Perjalanan <span className="text-emerald-400">Inovator SMK</span>
          </h2>

          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Dari aktivasi kode undangan hingga panggung Grand Final On-Site 36 Jam. Setiap tahap dirancang untuk mengasah kapasitas inovasi terapan Anda.
          </p>
        </div>

        {/* Phase Numbers Navigation Stepper */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {TIMELINE_DATA.map((phase) => {
            const isSelected = phase.number === activeTab;
            return (
              <button
                key={phase.number}
                onClick={() => setActiveTab(phase.number)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-emerald-950 text-white border-emerald-500 shadow-xl ring-2 ring-emerald-500/40 scale-[1.02]'
                    : 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700 hover:border-emerald-500/50'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-emerald-800 text-[#86efac]' : 'bg-slate-700 text-slate-300'
                  }`}>
                    FASE {phase.number}
                  </span>
                  {phase.status === 'active' && (
                    <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                  )}
                </div>

                <div className="mt-3">
                  <h4 className="font-extrabold text-sm line-clamp-1">
                    {phase.title}
                  </h4>
                  <p className={`text-[11px] font-mono mt-1 ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`}>
                    {phase.date.split('-')[0]}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Showcase Card */}
        <div className="rounded-3xl p-8 sm:p-10 border border-slate-700 shadow-2xl relative overflow-hidden bg-slate-800">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column Info */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-slate-900 text-emerald-300 border border-emerald-500/40">
                  FASE {activePhase.number} / 05
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                  Status: {activePhase.status === 'active' ? 'Sedang Berlangsung' : 'Mendatang'}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {activePhase.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activePhase.description}
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 shadow-sm">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white">{activePhase.date}</span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700 shadow-sm">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span className="font-bold text-white">{activePhase.location}</span>
                </div>
              </div>
            </div>

            {/* Right Column Visual / Action */}
            <div className="lg:col-span-4 bg-slate-900 text-white rounded-2xl p-6 border border-emerald-500/40 flex flex-col justify-between space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-emerald-300 text-xs font-mono font-bold">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>CATATAN PENTING FASE</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Pastikan seluruh anggota tim dan guru pembimbing telah memverifikasi identitas sekolah sebelum batas akhir pengumpulan berkas.
              </p>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400">Verifikasi Resmi</span>
                <CheckCircle className="w-4 h-4 text-[#22c55e]" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
