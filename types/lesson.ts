/* ============================================================================
   ANATOS MASTER LESSON TYPES
   ----------------------------------------------------------------------------
   This file is the foundation of the entire AnatOS learning engine.

   Every subject uses this structure:
   - Anatomy
   - Physiology
   - Biochemistry
   - Pharmacology
   - Histology
   - Embryology
   - Pathology
   - Microbiology
   - Community Health
   - Future subjects

   Do NOT create subject-specific lesson types.
   Extend this model instead.
============================================================================ */

export type Subject =
  | "anatomy"
  | "physiology"
  | "biochemistry"
  | "pharmacology"
  | "histology"
  | "embryology"
  | "pathology"
  | "microbiology"
  | "community-health"
  | "other";

export interface LessonObjective {
  id: string;
  text: string;
}

export interface LessonImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface LessonTable {
  id: string;
  title: string;
  headers: string[];
  rows: string[][];
}

export interface LessonSection {
  id: string;
  title: string;
  content: string;
}

export interface ClinicalCorrelation {
  id: string;
  title: string;
  description: string;
}

export interface PracticalNote {
  id: string;
  title: string;
  description: string;
}

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
}

export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQ {
  id: string;

  question: string;

  options: MCQOption[];

  answer: string;

  explanation?: string;

  topic?: string;

  difficulty?: "easy" | "medium" | "hard";
}

export interface VivaQuestion {
  id: string;
  question: string;
  answer: string;
}

export interface Reference {
  id: string;
  title: string;
  author?: string;
  edition?: string;
}

export interface LessonSummary {
  keyPoints: string[];
}

export interface Lesson {
  id: string;

  slug: string;

  title: string;

  subject: Subject;

  course: string;

  module?: string;

  duration?: string;

  difficulty?: "Beginner" | "Intermediate" | "Advanced";

  objectives: LessonObjective[];

  sections: LessonSection[];

  images?: LessonImage[];

  tables?: LessonTable[];

  clinical?: ClinicalCorrelation[];

  practical?: PracticalNote[];

  flashcards?: Flashcard[];

  mcqs?: MCQ[];

  viva?: VivaQuestion[];

  summary?: LessonSummary;

  references?: Reference[];
}
