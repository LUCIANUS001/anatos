import { getLessonProgress, updateLessonProgress } from "./progress";

export interface CompletionResult {
  completed: boolean;

  completionPercentage: number;
}

export function calculateCompletion(lessonId: string): CompletionResult {
  const progress = getLessonProgress(lessonId);

  const flashcardPercent =
    progress.flashcardsTotal === 0
      ? 100
      : (progress.flashcardsReviewed / progress.flashcardsTotal) * 100;

  const mcqPercent =
    progress.mcqTotal === 0 ? 0 : (progress.mcqScore / progress.mcqTotal) * 100;

  const vivaPercent =
    progress.vivaTotal === 0
      ? 0
      : (progress.vivaCompleted / progress.vivaTotal) * 100;

  const completionPercentage = Math.round(
    flashcardPercent * 0.4 + mcqPercent * 0.4 + vivaPercent * 0.2,
  );

  return {
    completed: completionPercentage >= 100,
    completionPercentage,
  };
}

export function refreshLessonCompletion(lessonId: string): CompletionResult {
  const result = calculateCompletion(lessonId);

  updateLessonProgress(lessonId, {
    completed: result.completed,
    completionPercentage: result.completionPercentage,
  });

  return result;
}
