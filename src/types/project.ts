
export interface Project {
  id: string;
  name: string;
  description: string;
  objective: string;
  participation: string[];
  technologies: {
    languages: string[];
    frameworks: string[];
    tools: string[];
  };
  implementation: string[];
  results: string[];
  image: {
    src: string;
    alt: string;
  };
  url?: string;
}
