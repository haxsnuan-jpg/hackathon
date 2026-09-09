export interface ThemeItem {
  id: string;
  code: string;
  title: string;
  category: 'EDUKASI' | 'LINGKUNGAN' | 'MASYARAKAT';
  tagline: string;
  description: string;
  subtopics: string[];
  ideas: string[];
  impactMetric: string;
  iconName: 'GraduationCap' | 'Trees' | 'Users';
  isHighlight?: boolean;
}

export interface Sponsor {
  id: string;
  name: string;
  category: 'Penyelenggara Utama' | 'Mitra Teknologi' | 'Mitra Media' | 'Dukungan Industri';
  logoText: string;
  logoUrl?: string;
  tier: 'Platinum' | 'Gold' | 'Silver';
}

export interface TimelinePhase {
  number: string;
  title: string;
  date: string;
  description: string;
  location: string;
  status: 'active' | 'upcoming' | 'completed';
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
