import React from 'react';
import { Trophy, Award, Medal, Briefcase, GraduationCap, Laptop, Sparkles, Check } from 'lucide-react';

export const PrizesSection: React.FC = () => {
  return (
    <section id="hadiah" className="py-24 bg-[#022c22] text-white relative overflow-hidden">
      
      {/* Background Glow & Pattern */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern-light opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-900/80 border border-emerald-500/40 text-[#86efac] text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>TOTAL HADIAH & BENEFIT LENGKAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Apresiasi Inovator <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#86efac]">Talenta Vokasi</span>
          </h2>

          <p className="mt-3 text-emerald-200/80 text-sm sm:text-base leading-relaxed">
            Dukungan dana pengembangan produk, beasiswa pendidikan tinggi, perangkat kerja profesional, serta karir langsung di mitra industri nasional.
          </p>
        </div>

        {/* Podium Prize Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Juara 2 (Silver) */}
          <div className="order-2 md:order-1 bg-emerald-950/70 border border-emerald-500/30 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-xl hover-glow">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/60">
                <span className="font-mono text-xs font-bold text-slate-300 uppercase tracking-widest bg-slate-800/80 px-3 py-1 rounded-full">
                  JUARA 2
                </span>
                <Medal className="w-6 h-6 text-slate-300" />
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-emerald-300 font-semibold block">DANA PENGEMBANGAN</span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight mt-1 block">
                  Rp 40.000.000
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-slate-300 pt-4 border-t border-emerald-800/50">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>Beasiswa Kuliah Vokasi & Sertifikasi Kompetensi</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>Tablet Grafis High-Spec untuk Setiap Anggota Tim</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>Piala Bergilir & Sertifikat Nasional Kemendikdasmen</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Juara 1 (Gold Highlight) */}
          <div className="order-1 md:order-2 bg-gradient-to-b from-emerald-900 via-[#064e3b] to-[#022c22] border-2 border-[#22c55e] rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden transform md:-translate-y-4 hover-glow">
            
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-500 text-[#022c22] font-mono font-extrabold text-[10px] px-4 py-1 rounded-bl-xl uppercase tracking-wider">
              ★ UTAMA
            </div>

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-700/60">
                <span className="font-mono text-xs font-bold text-amber-300 uppercase tracking-widest bg-amber-950/80 px-3 py-1 rounded-full border border-amber-500/40">
                  JUARA 1 (WINNER)
                </span>
                <Trophy className="w-8 h-8 text-amber-400 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-[#86efac] font-bold block">DANA PENGEMBANGAN UTAMA</span>
                <span className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight mt-1 block">
                  Rp 60.000.000
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-xs sm:text-sm text-emerald-100 pt-4 border-t border-emerald-700/60">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#86efac] shrink-0 mt-0.5" />
                  <span className="font-bold">Beasiswa Penuh 100% Kuliah Politeknik/Universitas Vokasi</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#86efac] shrink-0 mt-0.5" />
                  <span>Laptop Developer / Designer Workstation Per Siswa</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#86efac] shrink-0 mt-0.5" />
                  <span>Incubation & Akselerasi Produk bersama Mitra Industri</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#86efac] shrink-0 mt-0.5" />
                  <span>Sertifikat Penghargaan Khusus Menteri Pendidikan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Juara 3 (Bronze) */}
          <div className="order-3 bg-emerald-950/70 border border-emerald-500/30 rounded-3xl p-8 flex flex-col justify-between hover:border-amber-600 transition-all shadow-xl hover-glow">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-emerald-800/60">
                <span className="font-mono text-xs font-bold text-amber-500 uppercase tracking-widest bg-amber-950/60 px-3 py-1 rounded-full">
                  JUARA 3
                </span>
                <Award className="w-6 h-6 text-amber-500" />
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-emerald-300 font-semibold block">DANA PENGEMBANGAN</span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight mt-1 block">
                  Rp 25.000.000
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-xs text-slate-300 pt-4 border-t border-emerald-800/50">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>Subsidi Beasiswa Pendidikan & Pelatihan Sertifikasi</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>Gadget & Tools Kit Pengembang untuk Tim</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#22c55e] shrink-0 mt-0.5" />
                  <span>Sertifikat Juara Nasional Hackathon SMK</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Special Category Awards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-emerald-900/40 border border-emerald-500/30 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-[#86efac] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Best Innovation Category</h4>
              <p className="text-xs text-emerald-300">Rp 10.000.000 + Tropi Kategori</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-900/40 border border-emerald-500/30 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-[#86efac] flex items-center justify-center shrink-0">
              <Laptop className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Best UI/UX & Design</h4>
              <p className="text-xs text-emerald-300">Rp 10.000.000 + Tropi Kategori</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-900/40 border border-emerald-500/30 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-[#86efac] flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Fast-Track Rekrutmen Industri</h4>
              <p className="text-xs text-emerald-300">Direct Interview ke Telkom & Tokopedia</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
