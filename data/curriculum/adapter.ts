import { anatomyLessons } from "@/data/lessons/anatomy";
import type { Lesson } from "@/data/types/lesson";
import type {
  CurriculumAiContext,
  CurriculumAssessment,
  CurriculumClinicalCase,
  CurriculumLearningObjective,
  CurriculumLearningUnit,
  CurriculumMediaAsset,
  CurriculumPractical,
} from "@/data/types/curriculum";

type LookupResult = {
  subject: any;
  module: any;
  topic: any;
  unit: CurriculumLearningUnit;
  objectives: CurriculumLearningObjective[];
  mediaAssets: CurriculumMediaAsset[];
  practicals: CurriculumPractical[];
  assessments: CurriculumAssessment[];
  clinicalCases: CurriculumClinicalCase[];
  aiContext: CurriculumAiContext;
};

export function toLegacyLesson(lookup: LookupResult): Lesson | null {
  // If the learning unit references an existing legacy lesson slug, prefer
  // returning the original lesson object to preserve content exactly.
  const legacySlug = lookup.unit.legacyLessonSlug;

  if (legacySlug && (anatomyLessons as any)[legacySlug]) {
    return (anatomyLessons as any)[legacySlug] as Lesson;
  }

  // Otherwise, synthesize a minimal Lesson object compatible with existing UI.
  const unit = lookup.unit;

  const objectives = lookup.objectives?.map((o) => o.text) ?? [];

  const mcqs = lookup.assessments?.flatMap((a) => a.questions ?? []) ?? [];

  const flashcards: any[] = lookup.assessments?.flatMap(a => a.questions?.filter(q => q.type === 'flashcard').map(q => ({ question: q.stem, answer: q.answer })) ?? []) ?? [];
  const viva: any[] = lookup.assessments?.flatMap(a => a.questions?.filter(q => q.type === 'viva').map(q => ({ question: q.stem, answer: q.answer })) ?? []) ?? [];

  const legacyLesson: Lesson = {
    id: unit.id,
    slug: unit.slug,
    title: unit.title,
    subject: lookup.subject?.slug ?? "other",
    course: lookup.module?.title ?? unit.category ?? "",
    module: lookup.module?.slug ?? undefined,
    category: unit.category ?? lookup.module?.title ?? "",
    description: unit.description ?? "",
    readingTime: unit.readingTime,
    difficulty:
      unit.difficulty === "beginner"
        ? "Beginner"
        : unit.difficulty === "intermediate"
        ? "Intermediate"
        : "Advanced",
    outline: [],
    sections: [],
    objectives: objectives,
    definition: undefined,
    introduction: undefined,
    anatomicalPosition: undefined,
    sideDetermination: undefined,
    features: undefined,
    relations: undefined,
    surfaceAnatomy: undefined,
    ossification: undefined,
    development: undefined,
    variations: undefined,
    radiologicalAnatomy: undefined,
    mnemonics: undefined,
    summary: undefined,
    images: [],
    tables: [],
    clinical: (lookup.clinicalCases ?? []).map(c => ({ id: c.id, title: c.title, description: c.description ?? '' })),
    practical: lookup.practicals ?? [],
    flashcards: flashcards,
    mcqs: mcqs as any,
    viva: viva,
    references: [],
    atlas: {},
    bloodSupply: undefined,
    nerves: undefined,
    muscles: undefined,
    landmarks: undefined,
    relatedTopics: [],
    infoBoxes: [],
    contentSections: [],
  };

  return legacyLesson;
}
