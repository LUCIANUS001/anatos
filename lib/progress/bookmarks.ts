const STORAGE_KEY = "anatos-bookmarks";

const listeners = new Set<() => void>();

export interface BookmarkItem {
  id: string;
  title: string;
  savedAt: number;
}

export function loadBookmarks(): BookmarkItem[] {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

export function isBookmarked(id: string) {
  return loadBookmarks().some((item) => item.id === id);
}

export function toggleBookmark(id: string, title: string) {
  const bookmarks = loadBookmarks();

  const exists = bookmarks.some((item) => item.id === id);

  const updated = exists
    ? bookmarks.filter((item) => item.id !== id)
    : [...bookmarks, { id, title, savedAt: Date.now() }];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

  listeners.forEach((listener) => listener());

  return !exists;
}

export function subscribeToBookmarks(listener: () => void) {
  listeners.add(listener);

  return () => {
    listeners.delete(listener);
  };
}