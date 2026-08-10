export type CurriculumDifficulty = "beginner" | "intermediate" | "advanced";

export type AssessmentType =
  | "mcq"
  | "short-answer"
  | "flashcard"
  | "image-question"
  | "spotter"
  | "viva"
  | "ospe"
  | "osce"
  | "mock-exam"
  | "case-based";

export type PracticalType =
  | "specimen-identification"
  | "histology-slide-identification"
  | "radiology-interpretation"
  | "physiology-experiment"
  | "graph-interpretation"
  | "biochemistry-lab"
  | "calculation"
  | "pharmacology-practical"
  | "viva-station"
  | "ospe-station";

export interface CurriculumLearningObjective {
  id: string;
  text: string;
  category?: string;
}

export interface CurriculumMediaAsset {
  id: string;
  type: "image" | "atlas" | "diagram" | "video" | "microscopy" | "radiology";
  title: string;
  src?: string;
  alt?: string;
  caption?: string;
  description?: string;
  tags?: string[];
}

export interface CurriculumQuestion {
  id: string;
  stem: string;
  type: AssessmentType;
  options?: Array<{
    id: string;
    text: string;
    isCorrect?: boolean;
  }>;
  answer?: string;
  explanation?: string;
  difficulty?: CurriculumDifficulty;
  learningObjectiveIds?: string[];
  mediaAssetIds?: string[];
  tags?: string[];
}

export interface CurriculumAssessment {
  id: string;
  title: string;
  type: AssessmentType;
  description?: string;
  difficulty?: CurriculumDifficulty;
  passingScore?: number;
  questions: CurriculumQuestion[];
  learningObjectiveIds?: string[];
  practicalIds?: string[];
}

export interface CurriculumPractical {
  id: string;
  title: string;
  type: PracticalType;
  description?: string;
  instructions?: string[];
  scoring?: {
    points: number;
    feedback?: string;
  };
  learningObjectiveIds?: string[];
  mediaAssetIds?: string[];
  tags?: string[];
}

export interface CurriculumClinicalCase {
  id: string;
  title: string;
  summary: string;
  description?: string;
  questions?: CurriculumQuestion[];
  learningObjectiveIds?: string[];
  mediaAssetIds?: string[];
}

export interface CurriculumAiContext {
  id: string;
  prompt: string;
  summary?: string;
  subjectId?: string;
  moduleId?: string;
  topicId?: string;
  learningUnitId?: string;
  relatedObjectiveIds?: string[];
  relatedAssessmentIds?: string[];
  relatedPracticalIds?: string[];
}

export interface CurriculumLearningUnit {
  id: string;
  slug: string;
  title: string;
  type: "lesson" | "practical" | "assessment" | "combo";
  subjectId: string;
  moduleId: string;
  topicId: string;
  description?: string;
  difficulty?: CurriculumDifficulty;
  readingTime?: string;
  category?: string;
  learningObjectiveIds: string[];
  practicalIds: string[];
  assessmentIds: string[];
  clinicalCaseIds: string[];
  mediaAssetIds: string[];
  aiContextId?: string;
  legacyLessonSlug?: string;
}

export interface CurriculumTopic {
  id: string;
  slug: string;
  title: string;
  description?: string;
  learningUnits: CurriculumLearningUnit[];
}

export interface CurriculumModule {
  id: string;
  slug: string;
  title: string;
  description?: string;
  topics: CurriculumTopic[];
}

export interface CurriculumSubject {
  id: string;
  slug: string;
  title: string;
  description: string;
  modules: CurriculumModule[];
}
