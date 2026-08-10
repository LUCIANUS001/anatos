const listeners = new Set<() => void>();
export interface LessonProgress {
  lessonId: string;

  completed: boolean;

  completionPercentage: number;

  mcqScore: number;

  mcqTotal: number;

  flashcardsReviewed: number;

  flashcardsTotal: number;

  vivaCompleted: number;

  vivaTotal: number;

  favourites: string[];

  difficult: string[];

  readingPosition: number;

  studyTime: number;

  lastOpened: string;
}

const STORAGE_KEY = "anatos-progress";
export function loadProgress(): Record<string, LessonProgress> {
  if (typeof window === "undefined") return {};

  try {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return {};

    return JSON.parse(saved);
  } catch {
    return {};
  }
}

export function saveProgress(progress: Record<string, LessonProgress>) {
  if (typeof window === "undefined") return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}
export function getLessonProgress(lessonId: string): LessonProgress {
  const progress = loadProgress();

  return (
    progress[lessonId] ?? {
      lessonId,

      completed: false,

      completionPercentage: 0,

      mcqScore: 0,
      mcqTotal: 0,

      flashcardsReviewed: 0,
      flashcardsTotal: 0,

      vivaCompleted: 0,
      vivaTotal: 0,

      favourites: [],

      difficult: [],

      readingPosition: 0,

      studyTime: 0,

      lastOpened: new Date().toISOString(),
    }
  );
}

export function updateLessonProgress(
  lessonId: string,
  updates: Partial<LessonProgress>,
) {
  const progress = loadProgress();

  const current = getLessonProgress(lessonId);

  progress[lessonId] = {
    ...current,
    ...updates,
    lastOpened: new Date().toISOString(),
  };

  console.log(progress[lessonId]);

  saveProgress(progress);

  notifyProgressChanged();

  return progress[lessonId];
}
export function subscribeToProgress(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}

function notifyProgressChanged() {
  listeners.forEach((listener) => listener());
}

export function getStudyStreak(): number {
  const progress = loadProgress();

  const today = new Date();

  let streak = 0;

  Object.values(progress).forEach((lesson) => {
    if (!lesson.lastOpened) return;

    const last = new Date(lesson.lastOpened);

    const diff = Math.floor(
      (today.getTime() - last.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diff <= 1) {
      streak++;
    }
  });

  return streak;
}

export function getCompletedLessonsCount(): number {
  const progress = loadProgress();

  return Object.values(progress).filter((lesson) => lesson.completed).length;
}
