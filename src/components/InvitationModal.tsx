import React, { useState } from 'react';
import { X, KeyRound, CheckCircle2, AlertCircle, Building, Sparkles, School, ArrowRight, ShieldCheck, Copy, Check } from 'lucide-react';
import { VALID_INVITATION_CODES } from '../data/mockData';

interface InvitationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InvitationModal: React.FC<InvitationModalProps> = ({ isOpen, onClose }) => {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<'idle' | 'checking' | 'valid' | 'invalid' | 'submitted'>('idle');
  const [validatedData, setValidatedData] = useState<typeof VALID_INVITATION_CODES[0] | null>(null);
  const [copied, setCopied] = useState(false);

  // Registration Form State for Validated Code
  const [teamName, setTeamName] = useState('');
  const [leaderName, setLeaderName] = useState('');
  const [mentorTeacher, setMentorTeacher] = useState('');
  const [selectedTheme, setSelectedTheme] = useState('01 / EDUKASI');

  if (!isOpen) return null;

  const handleValidate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    setStatus('checking');
    setTimeout(() => {
      const formattedCode = code.trim().toUpperCase();
      const match = VALID_INVITATION_CODES.find(c => c.code === formattedCode);

      if (match) {
        setValidatedData(match);
        setStatus('valid');
      } else if (formattedCode.startsWith('SMK') || formattedCode.length >= 6) {
        // Fallback demo match for user flexibility
        setValidatedData({
          code: formattedCode,
          school: 'SMK Mitra Terverifikasi',
          region: 'Wilayah Khusus Vokasi',
          quota: 'Sisa 1 Slot'
        });
        setStatus('valid');
      } else {
        setStatus('invalid');
      }
    }, 700);
  };

  const handleCompleteRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitted');
  };

  const handleCopyDemoCode = (demoCode: string) => {
    setCode(demoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const resetModal = () => {
    setStatus('idle');
    setCode('');
    setValidatedData(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      
      {/* Container Card */}
      <div className="relative w-full max-w-xl bg-[#022c22] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Glow Header Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-[#86efac] to-emerald-600" />
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-emerald-900/60 text-emerald-300 hover:text-white hover:bg-emerald-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-[#022c22] border border-emerald-400/40 flex items-center justify-center text-[#86efac] shadow-lg">
            <KeyRound className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono text-[11px] font-bold text-[#86efac] tracking-widest uppercase">
              PORTAL REGISTRASI UNDANGAN
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Aktivasi Kode Undangan SMK
            </h3>
          </div>
        </div>

        {/* STEP 1: Code Verification Input Form */}
        {status !== 'valid' && status !== 'submitted' && (
          <div className="space-y-6">
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Masukkan Kode Undangan resmi yang telah dikirimkan ke email Kepala Sekolah atau Guru Pembimbing SMK Anda untuk membuka slot pendaftaran tim.
            </p>

            <form onSubmit={handleValidate} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-emerald-300 uppercase mb-2">
                  KODE UNDANGAN RESMI (8-16 Karakter)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value.toUpperCase());
                      if (status === 'invalid') setStatus('idle');
                    }}
                    placeholder="Contoh: SMK-INOVASI-2026"
                    className="w-full px-4 py-3.5 rounded-xl bg-emerald-950/90 border border-emerald-500/50 text-white font-mono text-base font-bold placeholder-emerald-700/60 focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[#22c55e]/30 uppercase transition-all"
                  />
                  {status === 'checking' && (
                    <div className="absolute right-4 top-3.5">
                      <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                </div>

                {status === 'invalid' && (
                  <div className="mt-2.5 p-3 rounded-xl bg-red-950/80 border border-red-500/50 flex items-center gap-2 text-xs text-red-300">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Kode undangan tidak terdaftar atau telah kedaluwarsa. Silakan periksa kembali.</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'checking' || !code.trim()}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#22c55e] to-emerald-500 hover:from-[#86efac] hover:to-[#22c55e] text-[#022c22] font-black text-sm tracking-wide shadow-lg hover-glow transition-all disabled:opacity-50 cursor-pointer"
              >
                {status === 'checking' ? 'MEMVERIFIKASI KODE...' : 'VERIFIKASI & BUKALAH SLOT'}
              </button>
            </form>

            {/* Demo Codes Helper */}
            <div className="pt-4 border-t border-emerald-800/60">
              <span className="text-[11px] font-mono text-emerald-300 font-bold block mb-2">
                ★ COBA KODE DEMO TERVERIFIKASI:
              </span>
              <div className="flex flex-wrap gap-2">
                {VALID_INVITATION_CODES.slice(0, 3).map((item) => (
                  <button
                    key={item.code}
                    onClick={() => handleCopyDemoCode(item.code)}
                    className="text-[11px] font-mono px-2.5 py-1 rounded bg-emerald-900/60 hover:bg-emerald-800 text-emerald-200 border border-emerald-700/50 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{item.code}</span>
                    <Copy className="w-3 h-3 text-[#86efac]" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Validated - Fill Team Information Form */}
        {status === 'valid' && validatedData && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-emerald-900/60 border border-[#22c55e]/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#22c55e]/20 text-[#86efac] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{validatedData.school}</h4>
                  <span className="text-xs text-emerald-300">{validatedData.region} • {validatedData.quota}</span>
                </div>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-[#22c55e] text-[#022c22]">
                VALID
              </span>
            </div>

            <form onSubmit={handleCompleteRegistration} className="space-y-4 text-xs">
              <div>
                <label className="block text-emerald-300 font-bold mb-1">NAMA TIM HACKATHON</label>
                <input
                  type="text"
                  required
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="Contoh: InnovateVokasi Team"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-white font-medium focus:outline-none focus:border-[#22c55e]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-emerald-300 font-bold mb-1">NAMA KETUA TIM (SISWA)</label>
                  <input
                    type="text"
                    required
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    placeholder="Nama Lengkap Siswa"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-white font-medium focus:outline-none focus:border-[#22c55e]"
                  />
                </div>

                <div>
                  <label className="block text-emerald-300 font-bold mb-1">GURU PEMBIMBING</label>
                  <input
                    type="text"
                    required
                    value={mentorTeacher}
                    onChange={(e) => setMentorTeacher(e.target.value)}
                    placeholder="Nama Guru Pendamping"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-white font-medium focus:outline-none focus:border-[#22c55e]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-emerald-300 font-bold mb-1">PILIHAN KATEGORI TEMA</label>
                <select
                  value={selectedTheme}
                  onChange={(e) => setSelectedTheme(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-emerald-950 border border-emerald-500/40 text-white font-medium focus:outline-none focus:border-[#22c55e]"
                >
                  <option value="01 / EDUKASI">01 / EDUKASI & DIGITALISASI SEKOLAH</option>
                  <option value="02 / LINGKUNGAN">02 / LINGKUNGAN & EKOSISTEM ALAM</option>
                  <option value="03 / MASYARAKAT">03 / MASYARAKAT & SOSIAL</option>
                </select>
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={resetModal}
                  className="px-4 py-3 rounded-xl border border-emerald-700 text-emerald-300 font-bold hover:bg-emerald-900"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#22c55e] hover:bg-[#86efac] text-[#022c22] font-black text-sm tracking-wide shadow-lg"
                >
                  KONFIRMASI PENDAFTARAN TIM
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 3: Submitted Success View */}
        {status === 'submitted' && (
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 text-[#86efac] flex items-center justify-center mx-auto border border-[#22c55e]/40 shadow-inner">
              <ShieldCheck className="w-10 h-10 animate-bounce" />
            </div>

            <h3 className="text-2xl font-black text-white">Pendaftaran Tim Berhasil!</h3>

            <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed max-w-md mx-auto">
              Selamat tim <strong className="text-white">{teamName || 'SMK Innovator'}</strong>! Slot pendaftaran Anda telah resmi terkunci untuk kategori <strong className="text-[#86efac]">{selectedTheme}</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-950 border border-emerald-800 text-xs text-emerald-300 text-left space-y-2">
              <div className="flex justify-between">
                <span>Sekolah:</span>
                <span className="font-bold text-white">{validatedData?.school}</span>
              </div>
              <div className="flex justify-between">
                <span>Ketua Tim:</span>
                <span className="font-bold text-white">{leaderName || 'Siswa SMK'}</span>
              </div>
              <div className="flex justify-between">
                <span>Status Berkas:</span>
                <span className="font-bold text-[#86efac]">Terkirim ke Email Sekretariat</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 rounded-xl bg-white text-[#022c22] font-extrabold text-sm hover:bg-emerald-100 transition-colors"
            >
              KEMBALI KE BERANDA
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
