export type ThemeMode = 'light' | 'dark' | 'system';

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  location?: string;
  category: 'Workshop' | 'Seminar' | 'Hackathon' | 'Webinar' | 'Flagship';
  description: string;
  imagePlaceholder: string;
  imageUrl?: string;
  featured?: boolean;
  registrationOpen?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  technology: string[];
  description: string;
  category: string;
  imagePlaceholder: string;
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ChapterItem {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  logoPlaceholder: string;
  logoUrl?: string;
  established?: string;
  color: string;
  officialJoinUrl: string;
  officialWebUrl: string;
  focusTracks: string[];
  benefits: string[];
}

export interface FacultyAdvisor {
  id: string;
  name: string;
  designation: string;
  department: string;
  ieeeRole: string;
  imagePlaceholder: string;
  imageUrl?: string;
  bio: string;
}

export interface AchievementItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
  imagePlaceholder: string;
  imageUrl?: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  year: string;
  imagePlaceholder: string;
  imageUrl?: string;
  linkedin?: string;
  github?: string;
}

export interface StorySlide {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  imagePlaceholder: string;
  imageUrl?: string;
  tag: string;
}
