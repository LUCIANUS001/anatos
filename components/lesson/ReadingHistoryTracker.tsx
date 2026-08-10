"use client";

import { useReadingHistory } from "@/hooks/useReadingHistory";

interface ReadingHistoryTrackerProps {
  lessonId: string;
  lessonTitle: string;
}

export default function ReadingHistoryTracker({
  lessonId,
  lessonTitle,
}: ReadingHistoryTrackerProps) {
  useReadingHistory({
    lessonId,
    lessonTitle,
  });

  return null;
}
