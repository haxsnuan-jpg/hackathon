import React from 'react';
import { Trophy, Award, Medal, Briefcase, GraduationCap, Laptop, Sparkles, Check, HeartHandshake, Building, Megaphone, Star } from 'lucide-react';

export const PrizesSection: React.FC = () => {
  return (
    <section id="sponsorship" className="py-24 bg-white text-slate-900 relative overflow-hidden">
      
      {/* Background Glow & Pattern */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-sm">
            <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
            <span>Peluang Kemitraan & Donasi</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Paket <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Sponsorship</span> & Donasi
          </h2>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
            Pilih paket dukungan untuk memberdayakan talenta muda vokasi. Dapatkan eksposur maksimal untuk brand Anda mulai dari penempatan logo eksklusif di Hero Section hingga akses rekrutmen langsung.
          </p>
        </div>

        {/* Sponsorship Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          
          {/* Paket Silver */}
          <div className="order-2 md:order-1 bg-gradient-to-b from-slate-50 to-slate-100 border border-slate-200 rounded-3xl p-8 flex flex-col justify-between hover:border-slate-300 transition-all shadow-lg hover:shadow-xl group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-slate-300" />
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <span className="font-mono text-xs font-bold text-slate-700 uppercase tracking-widest bg-slate-200 px-3 py-1 rounded-full">
                  PAKET SILVER
                </span>
                <Medal className="w-7 h-7 text-slate-400 group-hover:scale-110 transition-transform" />
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-slate-500 font-semibold block uppercase tracking-wide">Nilai Dukungan</span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-800 tracking-tight mt-1 block">
                  Rp 35 Juta
                </span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Penyebutan nama brand pada saat pembukaan & penutupan acara.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Penempatan logo ukuran medium di section Mitra & Sponsor website.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="font-medium">1x Dedicated Social Media Shoutout di Instagram & LinkedIn resmi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Akses ke database portofolio finalis (Tier 2).</span>
                </li>
              </ul>
            </div>
            
            <button className="mt-8 w-full py-3 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-900 transition-colors">
              Pilih Paket Silver
            </button>
          </div>

          {/* Paket Emas (Gold Highlight) */}
          <div className="order-1 md:order-2 bg-gradient-to-b from-amber-50 via-[#fffbeb] to-amber-100/80 border-2 border-amber-300 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden transform md:-translate-y-4 group">
            
            <div className="absolute top-0 right-0 bg-gradient-to-l from-amber-400 to-amber-500 text-amber-950 font-mono font-extrabold text-[10px] px-4 py-1.5 rounded-bl-xl uppercase tracking-wider shadow-sm">
              ★ PALING DIMINATI
            </div>

            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-300 to-orange-400" />

            <div>
              <div className="flex items-center justify-between pb-4 border-b border-amber-200/80">
                <span className="font-mono text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-200/50 px-3 py-1 rounded-full border border-amber-300">
                  PAKET EMAS
                </span>
                <Trophy className="w-9 h-9 text-amber-500 animate-bounce" style={{ animationDuration: '3s' }} />
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-amber-700 font-bold block uppercase tracking-wide">Nilai Dukungan</span>
                <span className="text-4xl sm:text-5xl font-black font-mono text-slate-900 tracking-tight mt-1 block">
                  Rp 75 Juta
                </span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <div className="bg-amber-200/50 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="font-bold">Penempatan Logo Eksklusif & Super Besar di Hero Section utama.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-amber-200/50 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="font-semibold">Penyebutan status "Sponsor Utama" di seluruh media rilis & promosi.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-amber-200/50 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="font-semibold">Area booth pameran VIP di lokasi Grand Final.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-amber-200/50 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="font-semibold">Akses prioritas rekrutmen langsung & database seluruh peserta.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-amber-200/50 p-1 rounded-full shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-amber-700" />
                  </div>
                  <span className="font-semibold">Logo tayang di semua sertifikat resmi yang dibagikan ke peserta.</span>
                </li>
              </ul>
            </div>
            
            <button className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Jadilah Sponsor Utama
            </button>
          </div>

          {/* Paket Perunggu */}
          <div className="order-3 bg-gradient-to-b from-orange-50/50 to-orange-50/80 border border-orange-200/80 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-300 transition-all shadow-lg hover:shadow-xl group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-orange-300/80" />
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-orange-200/60">
                <span className="font-mono text-xs font-bold text-orange-800 uppercase tracking-widest bg-orange-200/50 px-3 py-1 rounded-full">
                  PAKET PERUNGGU
                </span>
                <Award className="w-7 h-7 text-orange-400 group-hover:scale-110 transition-transform" />
              </div>

              <div className="mt-6 text-center">
                <span className="text-xs text-orange-600 font-semibold block uppercase tracking-wide">Nilai Dukungan</span>
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-800 tracking-tight mt-1 block">
                  Rp 15 Juta
                </span>
              </div>

              <ul className="mt-8 space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Penempatan logo (ukuran kecil) di area bawah (Footer) website acara.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Logo disertakan dalam 1x slide presentasi saat istirahat acara.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <span className="font-medium">Sertifikat apresiasi resmi sebagai pendukung acara dari panitia.</span>
                </li>
              </ul>
            </div>
            
            <button className="mt-8 w-full py-3 rounded-xl bg-orange-100 hover:bg-orange-200 text-orange-900 font-bold border border-orange-200 transition-colors">
              Pilih Paket Perunggu
            </button>
          </div>

        </div>

        {/* Alternative Support Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
              <Laptop className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Donasi Perangkat (In-Kind)</h4>
              <p className="text-xs text-slate-500 mt-0.5">Dukung dengan laptop, server cloud, atau software lisensi.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Media & Community Partner</h4>
              <p className="text-xs text-slate-500 mt-0.5">Bantu gaungkan acara ini ke jaringan audiens Anda secara luas.</p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
              <Building className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Sponsorship Kustom</h4>
              <p className="text-xs text-slate-500 mt-0.5">Diskusikan bentuk dukungan lain yang sesuai dengan KPI CSR Anda.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
