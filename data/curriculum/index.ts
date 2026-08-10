import { humerusLesson } from "@/data/lessons/anatomy/humerus";
import type {
  CurriculumAiContext,
  CurriculumAssessment,
  CurriculumClinicalCase,
  CurriculumLearningObjective,
  CurriculumLearningUnit,
  CurriculumMediaAsset,
  CurriculumModule,
  CurriculumPractical,
  CurriculumSubject,
  CurriculumTopic,
} from "@/data/types/curriculum";

// NOTE: This file registers curriculum data for the app. It is intentionally
// domain-agnostic and treats the current humerus lesson as the first
// vertical slice. Do NOT hard-code the model around anatomy; use this
// registry to add other subjects in the same structure.

const humerusObjectives: CurriculumLearningObjective[] = [
  {
    id: "obj-humerus-1",
    text: "Identify the main anatomical features of the humerus.",
    category: "knowledge",
  },
  {
    id: "obj-humerus-2",
    text: "Relate the humerus to its clinical relevance and common fractures.",
    category: "clinical",
  },
];

const humerusMediaAssets: CurriculumMediaAsset[] = [
  {
    id: "asset-humerus-1",
    type: "atlas",
    title: "Humerus atlas overview",
    description: "Reference atlas view for the humerus lesson.",
    tags: ["atlas", "bone", "upper-limb"],
  },
];

const humerusPractical: CurriculumPractical[] = [
  {
    id: "prac-humerus-1",
    title: "Specimen identification",
    type: "specimen-identification",
    description: "Identify the humeral head, shaft, and epicondyles on a specimen.",
    instructions: [
      "Locate the rounded head and compare it with the scapular glenoid cavity.",
      "Trace the shaft and identify the medial and lateral epicondyles.",
      "Confirm the orientation using landmarks such as the bicipital groove.",
    ],
    scoring: {
      points: 10,
      feedback: "Use surface landmarks and orientation cues to justify the identification.",
    },
    learningObjectiveIds: ["obj-humerus-1"],
    mediaAssetIds: ["asset-humerus-1"],
    tags: ["practical", "osteology"],
  },
];

const humerusAssessment: CurriculumAssessment[] = [
  {
    id: "assessment-humerus-1",
    title: "Humerus assessment",
    type: "mcq",
    description: "A foundational assessment for the humerus lesson.",
    difficulty: "beginner",
    passingScore: 50,
    learningObjectiveIds: ["obj-humerus-1"],
    practicalIds: ["prac-humerus-1"],
    questions: [
      {
        id: "question-humerus-1",
        stem: "Which part of the humerus articulates with the glenoid cavity?",
        type: "mcq",
        options: [
          { id: "option-humerus-a", text: "Head of humerus", isCorrect: true },
          { id: "option-humerus-b", text: "Deltoid tuberosity" },
          { id: "option-humerus-c", text: "Olecranon fossa" },
          { id: "option-humerus-d", text: "Coronoid process" },
        ],
        answer: "Head of humerus",
        explanation: "The rounded head of the humerus articulates with the glenoid cavity.",
        difficulty: "beginner",
        learningObjectiveIds: ["obj-humerus-1"],
        mediaAssetIds: ["asset-humerus-1"],
      },
    ],
  },
];

const humerusClinicalCases: CurriculumClinicalCase[] = [
  {
    id: "case-humerus-1",
    title: "Mid-shaft fracture",
    summary: "A patient presents with a mid-shaft humeral fracture and wrist drop.",
    description: "Use the lesson context to discuss radial nerve involvement and related anatomy.",
    learningObjectiveIds: ["obj-humerus-2"],
    mediaAssetIds: ["asset-humerus-1"],
  },
];

const humerusAiContext: CurriculumAiContext = {
  id: "ai-humerus",
  prompt: "Tutor context for the Humerus lesson.",
  summary: "Provide theory, practicals, assessments, and clinical correlation around the humerus.",
  relatedObjectiveIds: ["obj-humerus-1", "obj-humerus-2"],
  relatedAssessmentIds: ["assessment-humerus-1"],
  relatedPracticalIds: ["prac-humerus-1"],
};

const humerusLearningUnit: CurriculumLearningUnit = {
  id: "unit-humerus",
  slug: humerusLesson.slug,
  title: humerusLesson.title,
  type: "combo",
  subjectId: "subject-anatomy",
  moduleId: "module-upper-limb",
  topicId: "topic-osteology",
  description: humerusLesson.description,
  difficulty: "beginner",
  readingTime: humerusLesson.readingTime,
  category: humerusLesson.category,
  learningObjectiveIds: humerusObjectives.map((o) => o.id),
  practicalIds: humerusPractical.map((p) => p.id),
  assessmentIds: humerusAssessment.map((a) => a.id),
  clinicalCaseIds: humerusClinicalCases.map((c) => c.id),
  mediaAssetIds: humerusMediaAssets.map((m) => m.id),
  aiContextId: humerusAiContext.id,
  legacyLessonSlug: humerusLesson.slug,
};

const anatomyTopic: CurriculumTopic = {
  id: "topic-osteology",
  slug: "osteology",
  title: "Osteology",
  description: "Foundational skeletal anatomy and clinical correlations.",
  learningUnits: [humerusLearningUnit],
};

const anatomyModule: CurriculumModule = {
  id: "module-upper-limb",
  slug: "upper-limb",
  title: "Upper Limb",
  description: "Core anatomy for the upper limb and related clinical applications.",
  topics: [anatomyTopic],
};

export const anatOSCurriculum: CurriculumSubject[] = [
  {
    id: "subject-anatomy",
    slug: "anatomy",
    title: "Anatomy",
    description: "Foundational anatomy curriculum for theory, practicals, and assessment.",
    modules: [anatomyModule],
  },
];

export function getLearningUnitBySlug(slug: string) {
  for (const subject of anatOSCurriculum) {
    for (const module of subject.modules) {
      for (const topic of module.topics) {
        const unit = topic.learningUnits.find((learningUnit) => learningUnit.slug === slug);
        if (unit) {
          return {
            subject,
            module,
            topic,
            unit,
            objectives: humerusObjectives,
            mediaAssets: humerusMediaAssets,
            practicals: humerusPractical,
            assessments: humerusAssessment,
            clinicalCases: humerusClinicalCases,
            aiContext: humerusAiContext,
          };
        }
      }
    }
  }
  return null;
}

export function getSubjectById(subjectId: string) {
  return anatOSCurriculum.find((subject) => subject.id === subjectId) ?? null;
}
