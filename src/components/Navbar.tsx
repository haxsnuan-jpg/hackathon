import React, { useState, useEffect } from 'react';
import { KeyRound, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCodeModal: () => void;
  onOpenGuideModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCodeModal, onOpenGuideModal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'bento-tema', label: 'Tema Utama' },
    { id: 'alur-kompetisi', label: 'Alur & Jadwal' },
    { id: 'hadiah', label: 'Hadiah' },
    { id: 'sponsor', label: 'Sponsor' },
    { id: 'faq', label: 'FAQ' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-slate-900/95 border-b border-slate-800/90 shadow-2xl backdrop-blur-xl py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-slate-800 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-md group-hover:border-emerald-400 transition-colors">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white">
                  HACKATHON<span className="text-emerald-400">.SMK</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                  2026
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-400">
                Inovasi & Solusi Terapan
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`relative py-1.5 text-xs lg:text-sm font-bold transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'text-emerald-400'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      
                      {/* Active Indicator Line */}
                      {isActive ? (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                      ) : (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-emerald-400/0 hover:bg-emerald-400/60 transition-all duration-300 scale-x-0 hover:scale-x-100" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenGuideModal}
              className="text-xs font-bold px-3.5 py-2 rounded-lg text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            >
              Panduan
            </button>
            
            <button
              onClick={onOpenCodeModal}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-slate-950 text-xs font-black tracking-wide shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-300 cursor-pointer"
            >
              <KeyRound className="w-3.5 h-3.5 text-slate-950 group-hover:rotate-12 transition-transform" />
              <span>KODE UNDANGAN</span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-950 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border text-emerald-400 border-slate-700 bg-slate-800 hover:bg-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 mt-3 shadow-2xl space-y-3">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-slate-800 text-emerald-400 border-l-4 border-emerald-400' 
                        : 'text-slate-200 hover:bg-slate-800/50'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenGuideModal(); }}
              className="w-full text-center py-2.5 rounded-lg border border-slate-700 text-slate-200 text-xs font-bold"
            >
              Unduh Panduan Teknis
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCodeModal(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 text-xs font-black shadow-lg"
            >
              <KeyRound className="w-4 h-4 text-slate-950" />
              MASUKKAN KODE UNDANGAN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

