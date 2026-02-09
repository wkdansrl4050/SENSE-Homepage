
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
  title: string;
  journal: string;
  link?: string;
}

export interface Member {
  id: number;
  name: string;
  role: 'Professor' | 'Graduate Student' | 'Undergraduate Researcher' | 'Alumni';
  photo: string;
  email: string;
  link?: string;
}
