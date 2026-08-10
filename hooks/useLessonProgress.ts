"use client";

import { useEffect, useState } from "react";
import {
  getLessonProgress,
  updateLessonProgress,
  subscribeToProgress,
} from "@/lib/progress/progress";

const TOTAL_SECTIONS = 22;

export function useLessonProgress(lessonId: string = "humerus") {
  const [progress, setProgress] = useState(getLessonProgress(lessonId));

  const [completedSections, setCompletedSections] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(`anatos-sections-${lessonId}`);

    if (saved) {
      setCompletedSections(JSON.parse(saved));
    }

    setProgress(getLessonProgress(lessonId));

    const unsubscribe = subscribeToProgress(() => {
      setProgress(getLessonProgress(lessonId));
    });

    return unsubscribe;
  }, [lessonId]);

  function markCompleted(sectionId: string) {
    if (completedSections.includes(sectionId)) return;

    const updated = [...completedSections, sectionId];

    setCompletedSections(updated);

    localStorage.setItem(
      `anatos-sections-${lessonId}`,
      JSON.stringify(updated),
    );

    updateLessonProgress(lessonId, {
      readingPosition: updated.length,
      completionPercentage: Math.round((updated.length / TOTAL_SECTIONS) * 100),
    });
  }

  return {
    progress,
    completedSections,
    totalSections: TOTAL_SECTIONS,
    markCompleted,
  };
}
