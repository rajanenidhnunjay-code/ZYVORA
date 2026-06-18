export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  client: string;
  concept: string;
  deliverables: string[];
  themeColor: string;
  stats?: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  duration: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  timeline: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}
