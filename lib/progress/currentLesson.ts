
export interface CurrentLesson {
  lessonId: string;
  lessonTitle: string;
  lastOpened: number;
}

const HISTORY_KEY = "anatos-reading-history";

export function getCurrentLesson(): CurrentLesson | null {
  if (typeof window === "undefined") return null;

  const history = JSON.parse(
    localStorage.getItem(HISTORY_KEY) || "[]",
  ) as CurrentLesson[];

  if (!history.length) return null;

  return history.sort((a, b) => b.lastOpened - a.lastOpened)[0];
}
