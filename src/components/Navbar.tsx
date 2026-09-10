import React, { useState, useEffect } from 'react';
import { KeyRound, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCodeModal: () => void;
  onOpenGuideModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCodeModal, onOpenGuideModal }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

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
      const scrollPosition = window.scrollY;

      // Check if user scrolled past the Hero section (around 320px)
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight - 150;
        setScrolledPastHero(scrollPosition > heroBottom || scrollPosition > 300);
      } else {
        setScrolledPastHero(scrollPosition > 300);
      }

      // Track active section for navigation highlighting
      const sections = navItems.map(item => document.getElementById(item.id));
      const calcScroll = scrollPosition + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= calcScroll) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
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
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/85 border-b border-slate-200/90 shadow-sm backdrop-blur-xl py-3.5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600 shadow-sm group-hover:border-emerald-500 transition-colors">
              <Sparkles className="w-4 h-4 text-emerald-600 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                  HACKATHON<span className="text-emerald-600">.SMK</span>
                </span>
                <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 rounded">
                  2026
                </span>
              </div>
              <span className="text-[10px] font-medium text-slate-500">
                Inovasi &amp; Solusi Terapan
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
                          ? 'text-emerald-600'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span>{item.label}</span>
                      
                      {/* Active Indicator Line */}
                      {isActive ? (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 shadow-sm" />
                      ) : (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-emerald-500/0 hover:bg-emerald-500/60 transition-all duration-300 scale-x-0 hover:scale-x-100" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Dynamic Action Buttons - Hidden in Hero, Slide In when Scrolled Past Hero */}
          <div className="hidden sm:flex items-center min-w-[240px] justify-end">
            <div 
              className={`flex items-center gap-3 transition-all duration-500 transform ${
                scrolledPastHero 
                  ? 'opacity-100 translate-x-0 pointer-events-auto' 
                  : 'opacity-0 translate-x-8 pointer-events-none'
              }`}
            >
              <button
                onClick={onOpenGuideModal}
                className="text-xs font-bold px-3.5 py-2 rounded-lg text-slate-700 border border-slate-300 hover:border-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all cursor-pointer shadow-sm"
              >
                Panduan
              </button>
              
              <button
                onClick={onOpenCodeModal}
                className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white text-xs font-black tracking-wide shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all border border-emerald-400 cursor-pointer"
              >
                <KeyRound className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
                <span>KODE UNDANGAN</span>
                <ChevronRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border text-emerald-700 border-slate-300 bg-white hover:bg-slate-100 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 shadow-xl space-y-3">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-3 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center justify-between ${
                      isActive 
                        ? 'bg-emerald-50 text-emerald-700 border-l-4 border-emerald-600' 
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenGuideModal(); }}
              className="w-full text-center py-2.5 rounded-lg border border-slate-300 text-slate-800 text-xs font-bold bg-slate-50"
            >
              Unduh Panduan Teknis
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenCodeModal(); }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-black shadow-md"
            >
              <KeyRound className="w-4 h-4 text-white" />
              MASUKKAN KODE UNDANGAN
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

