export interface Question {
  id: string;
  passage?: string;
  prompt: string;
  choices: string[];
  correct: number;
  explanation: string;
}

export interface LessonSection {
  heading: string;
  body: string[];
  tips?: string[];
  diagram?: string;
}

export interface Topic {
  id: string;
  domainId: string;
  title: string;
  subtitle: string;
  summary: string;
  lesson: LessonSection[];
  examples: Question[];
  quiz: Question[];
}

export interface Domain {
  id: string;
  subject: 'math' | 'reading';
  title: string;
  englishTitle: string;
  description: string;
  color: string;
  icon: string;
  topics: Topic[];
}

export type Subject = 'math' | 'reading';
