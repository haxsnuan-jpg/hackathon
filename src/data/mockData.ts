import { ThemeItem, Sponsor, TimelinePhase, FaqItem } from '../types';

export const THEME_DATA: ThemeItem[] = [
  {
    id: 'edukasi',
    code: '01 / EDUKASI',
    title: 'Edukasi & Digitalisasi Sekolah',
    category: 'EDUKASI',
    tagline: 'Meningkatkan Kualitas & Aksesibilitas Pembelajaran Vokasi',
    description: 'Fokus pada pengembangan solusi digital yang mentransformasi ekosistem pembelajaran SMK, manajemen sekolah, laboratorium praktikum virtual, serta sistem evaluasi berbasis teknologi terapan.',
    subtopics: [
      '#SmartClassroom',
      '#VirtualLabVokasi',
      '#AdaptiveLearningAI',
      '#PresensiSiswaIOT',
      '#ManajemenPraktikIndustri'
    ],
    ideas: [
      'Simulator Praktikum Otomotif & Mekatronika berbasis Augmented Reality (AR)',
      'Sistem Rekomendasi Karir & Portofolio Siswa SMK Terintegrasi Industri',
      'Platform Pengujian Kompetensi Keahlian (UKK) Otomatis & Transparan',
      'Aplikasi Presensi Face-Recognition & Monitoring Kehadiran Praktik Kerja Lapangan (PKL)'
    ],
    impactMetric: 'Ditargetkan mengoptimalisasi proses belajar 50,000+ siswa SMK se-Indonesia',
    iconName: 'GraduationCap',
    isHighlight: true
  },
  {
    id: 'lingkungan',
    code: '02 / LINGKUNGAN',
    title: 'Lingkungan & Ekosistem Alam',
    category: 'LINGKUNGAN',
    tagline: 'Teknologi Terapan untuk Kelestarian & Efisiensi Energi',
    description: 'Menciptakan perangkat hardware, IoT, atau software pemantau kualitas lingkungan, sistem otomatisasi pemilah sampah, serta manajemen energi terbarukan di kawasan sekolah dan pemukiman.',
    subtopics: [
      '#IoTMonitoringUdara',
      '#SmartWasteSorting',
      '#EcoTechSekolah',
      '#RenewableEnergyControl',
      '#PrecisionAgriculture'
    ],
    ideas: [
      'Sistem IoT Pemantau Kualitas Air & Udara Real-time di Lingkungan Sekolah',
      'Bin Otomatis Pemilah Sampah Organik/Anorganik berbasis Computer Vision',
      'Panel Surya Pintar dengan Monitoring Konsumsi Daya Listrik Gedung Vokasi',
      'Sensor Hidroponik & Drip Irrigation Otomatis untuk Green House SMK Pertanian'
    ],
    impactMetric: 'Mereduksi emisi karbon dan menghemat hingga 35% konsumsi energi sekolah',
    iconName: 'Trees',
    isHighlight: false
  },
  {
    id: 'masyarakat',
    code: '03 / MASYARAKAT',
    title: 'Masyarakat & Sosial',
    category: 'MASYARAKAT',
    tagline: 'Solusi Digital Inklusif untuk Pemberdayaan Komunitas',
    description: 'Merancang aplikasi pemberdayaan UMKM lokal, sistem peringatan dini bencana berbasis warga, layanan aksesibilitas disabilitas, serta marketplace produk unggulan Teaching Factory (TEFA) SMK.',
    subtopics: [
      '#UMKMDigitalization',
      '#SiagaBencanaWarga',
      '#InklusiTeknologi',
      '#MarketplaceTEFA',
      '#LayananMasyarakat'
    ],
    ideas: [
      'Platform Marketplace Hasil Karya Teaching Factory (TEFA) SMK se-Provinsi',
      'Aplikasi Navigasi & Pendamping Aksesibilitas bagi Disabilitas di Ruang Publik',
      'Sistem Peringatan Dini Bencana Banjir & Kebakaran Berbasis Komunitas Lokal',
      'Aplikasi Kasir & Pembukuan Sederhana untuk UMKM Binaan Vokasi'
    ],
    impactMetric: 'Mendukung digitalisasi 1,000+ UMKM lokal dan memperluas daya serap produk TEFA',
    iconName: 'Users',
    isHighlight: false
  }
];

export interface SponsorData {
  // placeholder
}

export const SPONSOR_DATA: Sponsor[] = [
  {
    id: '1',
    name: 'Kemendikdasmen RI',
    category: 'Penyelenggara Utama',
    logoText: 'KEMENDIKDASMEN',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Tut_Wuri_Handayani.png/300px-Logo_Tut_Wuri_Handayani.png',
    tier: 'Platinum'
  },
  {
    id: '2',
    name: 'Telkom Indonesia',
    category: 'Mitra Teknologi',
    logoText: 'TELKOM INDONESIA',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Telkom_Indonesia_2013.svg',
    tier: 'Platinum'
  },
  {
    id: '3',
    name: 'Google for Education',
    category: 'Mitra Teknologi',
    logoText: 'GOOGLE EDUSPACE',
    logoUrl: 'https://cdn.simpleicons.org/googlecloud/4285F4',
    tier: 'Platinum'
  },
  {
    id: '4',
    name: 'Microsoft Indonesia',
    category: 'Mitra Teknologi',
    logoText: 'MICROSOFT',
    logoUrl: 'https://cdn.simpleicons.org/microsoft/00A4EF',
    tier: 'Gold'
  },
  {
    id: '5',
    name: 'Bank Mandiri',
    category: 'Dukungan Industri',
    logoText: 'BANK MANDIRI',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg',
    tier: 'Gold'
  },
  {
    id: '6',
    name: 'AWS Cloud',
    category: 'Mitra Teknologi',
    logoText: 'AWS ACADEMY',
    logoUrl: 'https://cdn.simpleicons.org/amazonwebservices/232F3E',
    tier: 'Gold'
  },
  {
    id: '7',
    name: 'Gojek (GoTo)',
    category: 'Dukungan Industri',
    logoText: 'GOJEK INDONESIA',
    logoUrl: 'https://cdn.simpleicons.org/gojek/00AA13',
    tier: 'Gold'
  },
  {
    id: '8',
    name: 'Bank BCA',
    category: 'Dukungan Industri',
    logoText: 'BANK BCA',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg',
    tier: 'Gold'
  },
  {
    id: '9',
    name: 'Indosat Ooredoo Hutchison',
    category: 'Mitra Teknologi',
    logoText: 'INDOSAT IOH',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Indosat_Ooredoo_Hutchison_logo.svg',
    tier: 'Silver'
  },
  {
    id: '10',
    name: 'Tokopedia',
    category: 'Dukungan Industri',
    logoText: 'TOKOPEDIA',
    logoUrl: 'https://cdn.simpleicons.org/tokopedia/42B549',
    tier: 'Silver'
  },
  {
    id: '11',
    name: 'Bukalapak',
    category: 'Dukungan Industri',
    logoText: 'BUKALAPAK',
    logoUrl: 'https://cdn.simpleicons.org/bukalapak/E22B4B',
    tier: 'Silver'
  },
  {
    id: '12',
    name: 'Pertamina',
    category: 'Dukungan Industri',
    logoText: 'PERTAMINA',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Pertamina_Logo.svg',
    tier: 'Silver'
  }
];

export const TIMELINE_DATA: TimelinePhase[] = [
  {
    number: '01',
    title: 'Pendaftaran & Validasi Kode Undangan',
    date: '10 Maret - 25 April 2026',
    description: 'Tim yang menerima undangan khusus memasukkan kode registrasi, melengkapi berkas verifikasi sekolah, dan memilih tema inovasi utama.',
    location: 'Portal Daring Hackathon SMK',
    status: 'active'
  },
  {
    number: '02',
    title: 'Workshop Technical Briefing & Mentoring',
    date: '28 April - 10 Mei 2026',
    description: 'Sesi bimbingan intensif dari praktisi industri (Software Engineer, IoT Specialist, UI/UX Designer) untuk mematangkan konsep produk.',
    location: 'Sesi Interaktif Online (Zoom & Discord)',
    status: 'upcoming'
  },
  {
    number: '03',
    title: 'Pengumpulan Proposal & Prototype Awal',
    date: '15 Mei 2026',
    description: 'Batas akhir unggah dokumen proposal teknis, tautan repositori kode/skema hardware, serta video demonstrasi awal berdurasi 3 menit.',
    location: 'Sistem Submisi Karya',
    status: 'upcoming'
  },
  {
    number: '04',
    title: 'Pengumuman 15 Finalis Terbaik',
    date: '22 Mei 2026',
    description: 'Dewan juri mengumumkan 15 tim terbaik dari 3 kategori tema yang berhak melaju ke babak Hackathon On-Site 36 Jam.',
    location: 'Pengumuman Resmi Portal & Email',
    status: 'upcoming'
  },
  {
    number: '05',
    title: 'Hackathon On-Site 36 Jam & Grand Final Demo Day',
    date: '5 - 7 Juni 2026',
    description: 'Kompetisi coding & perakitan prototype langsung selama 36 jam nonstop, diakhiri dengan presentasi pitch di hadapan juri & investor.',
    location: 'Auditorium Vokasi Center, Jakarta',
    status: 'upcoming'
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: 'Siapa saja yang berhak mengikuti Hackathon SMK 2026 ini?',
    answer: 'Kompetisi ini terbuka untuk seluruh siswa aktif SMK (Negeri maupun Swasta) kelas X, XI, dan XII di Indonesia yang telah menerima Kode Undangan Khusus dari sekolah mitra atau dinas pendidikan setempat.',
    category: 'Pendaftaran'
  },
  {
    question: 'Berapa jumlah anggota dalam satu tim?',
    answer: 'Setiap tim terdiri dari 3 hingga 5 siswa aktif, serta didampingi oleh 1 orang Guru Pembimbing dari SMK asal yang sama.',
    category: 'Ketentuan Tim'
  },
  {
    question: 'Bagaimana jika sekolah kami belum menerima Kode Undangan?',
    answer: 'Kepala Sekolah atau Guru Pembimbing dapat mengajukan permohonan penerbitan kode undangan resmi melalui tombol "Pengajuan Undangan Baru" di dalam modal kode undangan atau menghubungi Sekretariat Panitia.',
    category: 'Kode Undangan'
  },
  {
    question: 'Apakah produk yang dibuat harus berupa perangkat lunak (Software)?',
    answer: 'Tidak terbatas pada software saja. Karya dapat berupa gabungan Perangkat Keras (Hardware/IoT), Perangkat Lunak (Web/Mobile App), maupun Sistem Terintegrasi terapan yang menyelesaikan masalah riil.',
    category: 'Karya & Karya'
  },
  {
    question: 'Berapa biaya pendaftaran kompetisi ini?',
    answer: 'Pendaftaran Hackathon SMK 2026 sepenuhnya GRATIS (Rp 0). Panitia juga menanggung fasilitas konsumsi, penginapan, dan subsidi akomodasi bagi 15 tim finalis yang lolos ke babak On-Site.',
    category: 'Biaya'
  }
];

export const VALID_INVITATION_CODES = [
  { code: 'SMK-INOVASI-2026', school: 'SMKN 1 Jakarta', region: 'DKI Jakarta', quota: 'Sisa 1 Slot' },
  { code: 'HACK-SMK-2026', school: 'SMKN 2 Bandung', region: 'Jawa Barat', quota: 'Sisa 2 Slot' },
  { code: 'BERDAMPAK-2026', school: 'SMKN 5 Surabaya', region: 'Jawa Timur', quota: 'Sisa 1 Slot' },
  { code: 'VOKASI-HEBAT-2026', school: 'SMK Telkom Malang', region: 'Jawa Timur', quota: 'Sisa 3 Slot' },
  { code: 'KODE-DEMO-SMK', school: 'SMKN 2 Yogyakarta', region: 'DI Yogyakarta', quota: 'Sisa 2 Slot' }
];
