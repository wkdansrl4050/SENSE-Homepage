
export interface ResearchProject {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface Publication {
  id: number;
  authors: string;
  year: number;
  month?: number; // Added month for better sorting
  title: string;
  journal: string;
  link?: string;
}

export interface Member {
  id: number;
  name: string;
  nameEn: string;
  role: 'Professor' | 'Graduate Student' | 'Undergraduate Researcher' | 'Alumni';
  photo: string;
  email: string;
  affiliation?: string;
  office?: string;
  tel?: string;
  link?: string;
  // Detailed fields for professor
  education?: string[];
  experience?: string[];
  achievements?: string[];
}
