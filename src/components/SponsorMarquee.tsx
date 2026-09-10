import React from 'react';
import { Building2, Award, ExternalLink } from 'lucide-react';
import { SPONSOR_DATA } from '../data/mockData';

export const SponsorMarquee: React.FC = () => {
  // Row 1: Standard order duplicated for seamless infinite loop
  const row1Sponsors = [...SPONSOR_DATA, ...SPONSOR_DATA, ...SPONSOR_DATA];

  // Row 2: Shifted order (offset by 5 items) for varied animation
  const shiftedData = [
    ...SPONSOR_DATA.slice(5),
    ...SPONSOR_DATA.slice(0, 5)
  ];
  const row2Sponsors = [...shiftedData, ...shiftedData, ...shiftedData];

  return (
    <section id="sponsor" className="py-20 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
          <Building2 className="w-3.5 h-3.5 text-emerald-400" />
          <span>EKOSISTEM DU/DI & MITRA DUKUNGAN</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Didukung oleh Industri & Instansi Terdepan
        </h3>
        
        <p className="mt-2 text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
          Sinergi nyata antara pemerintah, BUMN, raksasa teknologi global, dan sektor industri vokasi untuk mengakselerasi talenta muda SMK.
        </p>
      </div>

      {/* Marquee Track Container with Clean Edge Gradient Fades */}
      <div className="relative w-full overflow-hidden space-y-6 sm:space-y-7 py-3 z-10">
        
        {/* Left & Right Edge Fades (Dark Slate Fade) */}
        <div className="absolute top-0 bottom-0 left-0 w-28 sm:w-52 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-28 sm:w-52 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        {/* LINE 1 (Atas) - Running Left */}
        <div className="animate-marquee flex items-center gap-6 sm:gap-8">
          {row1Sponsors.map((sponsor, idx) => (
            <div
              key={`row1-${sponsor.id}-${idx}`}
              className="group relative flex-shrink-0 min-w-[260px] sm:min-w-[310px] px-5 py-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-400/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1"
            >
              {/* Tier Badge */}
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-md ${
                  sponsor.tier === 'Platinum' ? 'bg-slate-100 text-slate-800 border border-slate-200' :
                  sponsor.tier === 'Gold' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                  'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {sponsor.tier}
                </span>
              </div>

              {/* Logo & Brand Info */}
              <div className="my-2 flex items-center justify-start gap-3.5 h-12 w-full px-1">
                {sponsor.logoUrl ? (
                  <div className="p-1.5 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name}
                      className="filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 max-h-7 sm:max-h-8 w-auto max-w-[90px] sm:max-w-[110px] object-contain shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-black text-sm flex items-center justify-center shrink-0">
                    {sponsor.name.charAt(0)}
                  </div>
                )}

                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-600 tracking-tight leading-tight transition-colors">
                    {sponsor.name}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 group-hover:text-emerald-600 mt-0.5 transition-colors">
                    {sponsor.category}
                  </span>
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>
          ))}
        </div>

        {/* LINE 2 (Bawah) - Running Right & Offset Cards */}
        <div className="animate-marquee-reverse flex items-center gap-6 sm:gap-8 pl-16 sm:pl-28">
          {row2Sponsors.map((sponsor, idx) => (
            <div
              key={`row2-${sponsor.id}-${idx}`}
              className="group relative flex-shrink-0 min-w-[260px] sm:min-w-[310px] px-5 py-4 rounded-2xl bg-white border border-slate-200/80 hover:border-emerald-400/50 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center cursor-pointer hover:-translate-y-1"
            >
              {/* Tier Badge */}
              <div className="absolute top-3 right-3">
                <span className={`text-[10px] font-mono font-extrabold px-2 py-0.5 rounded-md ${
                  sponsor.tier === 'Platinum' ? 'bg-slate-100 text-slate-800 border border-slate-200' :
                  sponsor.tier === 'Gold' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                  'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {sponsor.tier}
                </span>
              </div>

              {/* Logo & Brand Info */}
              <div className="my-2 flex items-center justify-start gap-3.5 h-12 w-full px-1">
                {sponsor.logoUrl ? (
                  <div className="p-1.5 rounded-lg bg-white shadow-sm flex items-center justify-center shrink-0">
                    <img 
                      src={sponsor.logoUrl} 
                      alt={sponsor.name}
                      className="filter grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 max-h-7 sm:max-h-8 w-auto max-w-[90px] sm:max-w-[110px] object-contain shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono font-black text-sm flex items-center justify-center shrink-0">
                    {sponsor.name.charAt(0)}
                  </div>
                )}

                <div className="flex flex-col text-left">
                  <span className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-600 tracking-tight leading-tight transition-colors">
                    {sponsor.name}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500 group-hover:text-emerald-600 mt-0.5 transition-colors">
                    {sponsor.category}
                  </span>
                </div>
              </div>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-6 right-6 h-1 bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
            </div>
          ))}
        </div>

      </div>

      {/* Partnership CTA Banner */}
      <div className="max-w-4xl mx-auto px-4 mt-12 text-center relative z-10">
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 shadow-sm">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Tertarik Menjadi Mitra & Sponsor Event?</h4>
              <p className="text-xs text-slate-600">Buka peluang rekrutmen talenta SMK terbaik dan dukung ekosistem vokasi Indonesia.</p>
            </div>
          </div>
          <a
            href="mailto:mitra@hackathonsmk2026.id"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-xs inline-flex items-center gap-1.5 transition-all shrink-0 shadow-md hover:scale-[1.02]"
          >
            <span>Hubungi Panitia Sponsor</span>
            <ExternalLink className="w-3.5 h-3.5 text-white" />
          </a>
        </div>
      </div>

    </section>
  );
};

