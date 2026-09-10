import React, { useState } from 'react';
import { HelpCircle, ChevronDown, MessageSquare, Mail } from 'lucide-react';
import { FAQ_DATA } from '../data/mockData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>PERTANYAAN SERING DIAJUKAN (FAQ)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Punya Pertanyaan Mengenai <span className="text-emerald-400">Kompetisi?</span>
          </h2>

          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Temukan jawaban langsung seputar syarat tim, penggunaan kode undangan, mekanisme penjurian, serta fasilitas peserta.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-100 border-emerald-500 shadow-md ring-1 ring-emerald-500/30'
                    : 'bg-slate-100/80 hover:bg-slate-100 border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/30 shrink-0">
                      {faq.category}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-emerald-500 text-slate-950' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-300/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact Support Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-100 text-slate-900 border border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Pertanyaan Belum Terjawab?</h4>
              <p className="text-xs text-slate-600">Tim sekretariat panitia siap membantu sekolah & siswa 24/7.</p>
            </div>
          </div>

          <a
            href="mailto:helpdesk@hackathonsmk2026.id"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 font-extrabold text-xs inline-flex items-center gap-2 transition-colors shrink-0 shadow"
          >
            <Mail className="w-4 h-4" />
            <span>Kirim Email Panitia</span>
          </a>
        </div>

      </div>
    </section>
  );
};
