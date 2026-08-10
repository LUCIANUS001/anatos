"use client";

import { useEffect } from "react";

interface ReadingHistoryProps {
  lessonId: string;
  lessonTitle: string;
}

export function useReadingHistory({
  lessonId,
  lessonTitle,
}: ReadingHistoryProps) {
  useEffect(() => {
    const history = JSON.parse(
      localStorage.getItem("anatos-reading-history") || "[]"
    );

    const filtered = history.filter(
      (item: any) => item.lessonId !== lessonId
    );

    filtered.unshift({
      lessonId,
      lessonTitle,
      lastOpened: Date.now(),
    });

    localStorage.setItem(
      "anatos-reading-history",
      JSON.stringify(filtered)
    );
  }, [lessonId, lessonTitle]);
}