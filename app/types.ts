export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string; // live demo
  repo?: string; // <-- optional GitHub link
  date: string;
  category: string;
  featured: boolean;
  tech: string[];
};
