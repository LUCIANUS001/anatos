"use client";

import { useEffect, useState } from "react";

import {
  isBookmarked,
  subscribeToBookmarks,
  toggleBookmark,
} from "@/lib/progress/bookmarks";

interface BookmarkButtonProps {
  id: string;
  title: string;
}

export default function BookmarkButton({ id, title }: BookmarkButtonProps) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSaved(isBookmarked(id));

    const unsubscribe = subscribeToBookmarks(() => {
      setSaved(isBookmarked(id));
    });

    return unsubscribe;
  }, [id]);

  function handleBookmark() {
    const state = toggleBookmark(id, title);

    setSaved(state);
  }

  return (
    <button
      onClick={handleBookmark}
      className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
    >
      {saved ? "⭐ Bookmarked" : "☆ Bookmark"}
    </button>
  );
}
