import React from 'react';
import { Sparkles, Mail, Phone, MapPin, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Micro Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xl tracking-tight text-white">
                  HACKATHON<span className="text-emerald-500">.SMK</span>
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  Transformasi Digital untuk Pendidikan, Lingkungan & Masyarakat
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              Ajang kompetisi hackathon resmi nasional bagi siswa SMK Indonesia untuk merancang solusi teknologi terapan berdampak nyata di lingkungan sekolah, ekosistem alam, serta kehidupan sosial.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-[10px] font-mono text-emerald-400">
                PROGRAM RESMI VOKASI 2026
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-900/80 border border-emerald-700/50 text-[10px] font-mono text-slate-400">
                KEMENDIKDASMEN RI
              </span>
            </div>
          </div>

          {/* Nav Links Col */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
              NAVIGASI UTAMA
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><a href="#hero" className="hover:text-white transition-colors">Beranda & Countdown</a></li>
              <li><a href="#bento-tema" className="hover:text-white transition-colors">Bento Grid Kategori Tema</a></li>
              <li><a href="#alur-kompetisi" className="hover:text-white transition-colors">Alur Kompetisi & Jadwal</a></li>
              <li><a href="#hadiah" className="hover:text-white transition-colors">Paket Sponsorship</a></li>
              <li><a href="#sponsor" className="hover:text-white transition-colors">Mitra Industri & Sponsor</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Pertanyaan Umum (FAQ)</a></li>
            </ul>
          </div>

          {/* Secretariat Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">
              SEKRETARIAT PANITIA
            </h4>

            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Gedung Direktorat SMK, Kemendikdasmen RI, Kompleks Senayan, Jakarta Pusat</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>sekretariat@hackathonsmk2026.id</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+62 (021) 572-5477 / Hotline Vokasi</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <p>© 2026 Hackathon SMK Indonesia. Hak Cipta Dilindungi Undang-Undang.</p>
          <p className="flex items-center gap-1">
            Human-crafted design dengan presisi UI/UX Vokasi
          </p>
        </div>

      </div>
    </footer>
  );
};
