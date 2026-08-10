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

   IMPORTANT:
   These types are intentionally compatible with the existing lesson data
   while providing a stable master structure for future AnatOS content.
============================================================================ */

/* ============================================================================
   SUBJECTS
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

/* ============================================================================
   CORE LESSON TYPES
============================================================================ */

export interface LessonObjective {
  id?: string;
  text: string;
}

export interface LessonImage {
  id?: string;
  src: string;
  alt?: string;
  title?: string;
  caption?: string;
  description?: string;
  credit?: string;
}

export interface LessonTable {
  id?: string;
  title?: string;
  headers: string[];
  rows: string[][];
}

export interface LessonSection {
  id?: string;
  title: string;
  content: string;
}

export interface ClinicalCorrelation {
  id?: string;
  title: string;
  description: string;
}

export interface PracticalNote {
  id?: string;
  title: string;
  description?: string;
  steps?: string[];
}

/* ============================================================================
   FLASHCARDS
   ----------------------------------------------------------------------------
   Supports both the master format and the existing legacy front/back format.
============================================================================ */

export interface Flashcard {
  id?: string;
  question?: string;
  answer?: string;
  front?: string;
  back?: string;
}

/* ============================================================================
   MCQs
============================================================================ */

export interface MCQOption {
  id?: string;
  text: string;
}

export interface MCQ {
  id: string | number;

  question: string;

  options: MCQOption[];

  answer: string;

  explanation?: string;

  topic?: string;

  difficulty?: "easy" | "medium" | "hard";
}

/* ============================================================================
   VIVA
============================================================================ */

export interface VivaQuestion {
  id?: string;
  question: string;
  answer: string;
}

/* ============================================================================
   REFERENCES
============================================================================ */

export interface Reference {
  id?: string;
  title: string;
  author?: string;
  edition?: string;
  publisher?: string;
  year?: string | number;
  url?: string;
}

/* ============================================================================
   SUMMARY
============================================================================ */

export interface LessonSummary {
  keyPoints: string[];
}

/* ============================================================================
   ANATOMY-SPECIFIC SUPPORT TYPES
   ----------------------------------------------------------------------------
   These are generic enough to work across all anatomy lessons without
   creating subject-specific lesson interfaces.
============================================================================ */

export interface AnatomyLandmark {
  id?: string;
  name: string;
  description?: string;
  location?: string;
  significance?: string;
}

export interface AnatomyMuscle {
  id?: string;
  name: string;
  attachment?: string;
  attachments?: string;
  origin?: string;
  insertion?: string;
  action?: string;
  innervation?: string;
  nerve?: string;
  description?: string;
}

export interface AnatomyBloodSupply {
  id?: string;
  artery?: string;
  vein?: string;
  supply?: string;
  description?: string;
  name?: string;
}

export interface AnatomyNerve {
  id?: string;
  name: string;
  significance?: string;
  function?: string;
  distribution?: string;
  description?: string;
}

export interface RelatedTopic {
  id?: string;
  title?: string;
  name?: string;
  slug?: string;
  description?: string;
}

/* ============================================================================
   INFO BOXES
============================================================================ */

export interface LessonInfoBox {
  id?: string;
  title: string;
  content?: string;
  description?: string;
  type?: string;
}

/* ============================================================================
   CONTENT SECTIONS
============================================================================ */

export interface LessonContentSection {
  id?: string;
  title: string;
  content: string;
}

/* ============================================================================
   ATLAS
   ----------------------------------------------------------------------------
   Kept flexible here because the dedicated Atlas system has its own types.
============================================================================ */

export interface LessonAtlas {
  [key: string]: unknown;
}

/* ============================================================================
   MASTER LESSON
============================================================================ */

export interface Lesson {
  /* --------------------------------------------------------------------------
     Identity
  -------------------------------------------------------------------------- */

  id: string;

  slug: string;

  title: string;

  subject: Subject;

  course: string;

  module?: string;

  category?: string;

  /* --------------------------------------------------------------------------
     Metadata
  -------------------------------------------------------------------------- */

  description?: string;

  duration?: string;

  readingTime?: string;

  lastUpdated?: string;

  difficulty?: "Beginner" | "Intermediate" | "Advanced";

  /* --------------------------------------------------------------------------
     Navigation / Outline
  -------------------------------------------------------------------------- */

  outline?: string[];

  /* --------------------------------------------------------------------------
     Core Educational Structure
  -------------------------------------------------------------------------- */

  objectives: LessonObjective[] | string[];

  sections: LessonSection[];

  /* --------------------------------------------------------------------------
     Traditional Lesson Sections
  -------------------------------------------------------------------------- */

  definition?: string;

  introduction?: string;

  anatomicalPosition?: string;

  sideDetermination?: string;

  features?: string;

  relations?: string;

  surfaceAnatomy?: string;

  ossification?: string;

  development?: string;

  variations?: string;

  radiologicalAnatomy?: string;

  mnemonics?: string;

  /* --------------------------------------------------------------------------
     Summary
  -------------------------------------------------------------------------- */

  summary?: LessonSummary | string;

  /* --------------------------------------------------------------------------
     Media
  -------------------------------------------------------------------------- */

  images?: LessonImage[];

  tables?: LessonTable[];

  /* --------------------------------------------------------------------------
     Clinical / Practical
  -------------------------------------------------------------------------- */

  clinical?: ClinicalCorrelation[];

  practical?: PracticalNote[];

  /* --------------------------------------------------------------------------
     Revision Systems
  -------------------------------------------------------------------------- */

  flashcards?: Flashcard[];

  mcqs?: MCQ[];

  viva?: VivaQuestion[];

  /* --------------------------------------------------------------------------
     References
  -------------------------------------------------------------------------- */

  references?: Reference[];

  /* --------------------------------------------------------------------------
     Anatomy Data
  -------------------------------------------------------------------------- */

  atlas?: LessonAtlas | unknown;

  bloodSupply?: AnatomyBloodSupply[] | unknown;

  nerves?: AnatomyNerve[] | unknown;

  muscles?: AnatomyMuscle[] | unknown;

  landmarks?: AnatomyLandmark[] | unknown;

  /* --------------------------------------------------------------------------
     Related / Extended Content
  -------------------------------------------------------------------------- */

  relatedTopics?: RelatedTopic[] | string[] | unknown;

  infoBoxes?: LessonInfoBox[] | unknown;

  contentSections?: LessonContentSection[] | unknown;
}