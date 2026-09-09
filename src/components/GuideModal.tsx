import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, ShieldAlert, Award, FileCheck, ExternalLink } from 'lucide-react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GuideModal: React.FC<GuideModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      <div className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-8 text-slate-800 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto border border-slate-200">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-emerald-700 tracking-wider uppercase">
                DOKUMEN RESMI KEMENDIKDASMEN
              </span>
              <h3 className="text-xl font-extrabold text-[#022c22]">
                Panduan Teknis Hackathon SMK 2026
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="py-6 space-y-6 text-xs sm:text-sm">
          
          {/* Summary Banner */}
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3 text-emerald-900">
            <FileCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block text-emerald-950">Buku Panduan Teknis Lengkap (PDF v2.4)</span>
              <p className="text-xs text-emerald-800 leading-relaxed">
                Panduan ini memuat pedoman pendaftaran,Format Proposal Teknis, standar repositori kode (GitHub/GitLab), petunjuk demonstrasi prototype, serta lembar penilaian dewan juri.
              </p>
            </div>
          </div>

          {/* Section: Syarat Kepesertaan */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-[#022c22] text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>1. Ketentuan Umum Tim & Pembimbing</span>
            </h4>
            <ul className="space-y-2 text-slate-600 text-xs pl-6 list-disc">
              <li>Peserta adalah siswa aktif SMK (Negeri/Swasta) kelas X, XI, atau XII.</li>
              <li>Setiap tim terdiri dari 3 hingga 5 siswa aktif dalam 1 sekolah yang sama.</li>
              <li>Wajib didampingi oleh 1 orang Guru Pembimbing dari SMK bersangkutan.</li>
              <li>Setiap tim hanya diperbolehkan mengirimkan 1 karya inovasi utama.</li>
            </ul>
          </div>

          {/* Section: Bobot Penilaian (Rubrik Juri) */}
          <div className="space-y-3 pt-2">
            <h4 className="font-extrabold text-[#022c22] text-base flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>2. Kriteria & Bobot Penilaian Juri</span>
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-lg font-black font-mono text-emerald-700 block">30%</span>
                <span className="text-[11px] font-bold text-slate-800 mt-1 block">Impact & Dampak</span>
                <span className="text-[10px] text-slate-500">Relevansi masalah</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-lg font-black font-mono text-emerald-700 block">30%</span>
                <span className="text-[11px] font-bold text-slate-800 mt-1 block">Inovasi Solusi</span>
                <span className="text-[10px] text-slate-500">Kebaruan ide</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-lg font-black font-mono text-emerald-700 block">20%</span>
                <span className="text-[11px] font-bold text-slate-800 mt-1 block">Kualitas Teknis</span>
                <span className="text-[10px] text-slate-500">Prototype fungsional</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-lg font-black font-mono text-emerald-700 block">20%</span>
                <span className="text-[11px] font-bold text-slate-800 mt-1 block">UI/UX & Pitch</span>
                <span className="text-[10px] text-slate-500">Presentasi karya</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-500 font-mono">
            Ukuran Berkas: 4.2 MB • Format: PDF
          </span>

          <button
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#022c22] hover:bg-emerald-900 text-white font-extrabold text-xs inline-flex items-center justify-center gap-2 shadow-lg transition-all"
          >
            <Download className="w-4 h-4 text-[#86efac]" />
            <span>{downloading ? 'MENGUNDUH BERKAS...' : 'UNDUH PANDUAN LENGKAP (PDF)'}</span>
          </button>
        </div>

        {downloadSuccess && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-600 text-white text-xs font-bold text-center animate-fadeIn">
            ✓ Berkas Panduan Teknis Hackathon SMK 2026 telah berhasil diunduh ke perangkat Anda.
          </div>
        )}

      </div>
    </div>
  );
};
