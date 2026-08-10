"use client";

import { useEffect, useMemo, useState } from "react";

import { updateLessonProgress } from "@/lib/progress/progress";
import { refreshLessonCompletion } from "@/lib/progress/completion";

interface Flashcard {
  id?: string | number;
  question?: string;
  answer?: string;
  front?: string;
  back?: string;
  topic?: string;
}

interface Props {
  lessonId: string;
  items: Flashcard[];
}

type StudyMode = "all" | "favourite" | "difficult";

const STORAGE_KEY = "anatos-flashcards-progress";

export default function FlashcardRevision({ lessonId, items }: Props) {
  const [current, setCurrent] = useState(0);

  const [flipped, setFlipped] = useState(false);

  const [mode, setMode] = useState<StudyMode>("all");

  const [difficult, setDifficult] = useState<string[]>([]);

  const [favourites, setFavourites] = useState<string[]>([]);

  /*
    Restore previous session
  */
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    const data = JSON.parse(saved);

    setCurrent(data.current ?? 0);
    setFlipped(data.flipped ?? false);
    setMode(data.mode ?? "all");
    setDifficult(data.difficult ?? []);
    setFavourites(data.favourites ?? []);
  }, []);

  /*
    Save every change
  */
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        current,
        flipped,
        mode,
        difficult,
        favourites,
      }),
    );
  }, [current, flipped, mode, difficult, favourites]);

  const normalizedItems = useMemo(() => {
    return items.map((card, index) => ({
      ...card,
      id: card.id ?? index.toString(),
    }));
  }, [items]);

  const cards = useMemo(() => {
    if (mode === "difficult") {
      return normalizedItems.filter((card) =>
        difficult.includes(String(card.id)),
      );
    }

    if (mode === "favourite") {
      return normalizedItems.filter((card) =>
        favourites.includes(String(card.id)),
      );
    }

    return normalizedItems;
  }, [items, mode, difficult, favourites]);

  const card = cards[current];

  const cardQuestion = card?.question ?? card?.front ?? "";

  const cardAnswer = card?.answer ?? card?.back ?? "";

  const cardId = String(card?.id ?? current);

  const flashcardsTotal = cards.length;

  function nextCard() {
    if (current < cards.length - 1) {
      const next = current + 1;

      setCurrent(next);
      setFlipped(false);

      updateLessonProgress(lessonId, {
        flashcardsReviewed: next + 1,
        flashcardsTotal: cards.length,
      });

      refreshLessonCompletion(lessonId);
    }
  }

  function previousCard() {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
      setFlipped(false);
    }
  }

  function toggleFlip() {
    setFlipped((prev) => !prev);
  }

  function toggleFavourite() {
    const id = cardId;

    const updated = favourites.includes(id)
      ? favourites.filter((item) => item !== id)
      : [...favourites, id];

    setFavourites(updated);

    updateLessonProgress(lessonId, {
      favourites: updated,
    });

    refreshLessonCompletion(lessonId);
  }

  function toggleDifficult() {
    const id = cardId;

    const updated = difficult.includes(id)
      ? difficult.filter((item) => item !== id)
      : [...difficult, id];

    setDifficult(updated);

    updateLessonProgress(lessonId, {
      difficult: updated,
    });

    refreshLessonCompletion(lessonId);
  }

  function changeMode(newMode: StudyMode) {
    setMode(newMode);
    setCurrent(0);
    setFlipped(false);
  }

  if (!card) {
    return (
      <div className="rounded-xl border bg-white p-8 text-center shadow">
        <h2 className="text-xl font-bold text-slate-800">No cards available</h2>

        <p className="mt-3 text-gray-500">
          {mode === "difficult"
            ? "You have not marked any difficult cards yet."
            : mode === "favourite"
              ? "You have not added any favourite cards yet."
              : "This lesson has no flashcards."}
        </p>

        {mode !== "all" && (
          <button
            onClick={() => changeMode("all")}
            className="mt-5 rounded-lg bg-blue-600 px-5 py-2 text-white"
          >
            Return to All Cards
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-xl border bg-white p-6 shadow">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Card {current + 1} of {cards.length}
        </span>

        <div className="flex gap-2">
          <button
            onClick={toggleFavourite}
            className={`rounded-lg border px-3 py-1 transition ${
              favourites.includes(cardId)
                ? "border-yellow-400 bg-yellow-100"
                : "bg-white"
            }`}
          >
            {favourites.includes(cardId) ? "⭐" : "☆"}
          </button>

          <button
            onClick={toggleDifficult}
            className={`rounded-lg border px-3 py-1 transition ${
              difficult.includes(cardId)
                ? "border-red-400 bg-red-100"
                : "bg-white"
            }`}
          >
            {difficult.includes(cardId) ? "🔥" : "📌"}
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => changeMode("all")}
          className={`rounded-lg px-3 py-2 ${
            mode === "all" ? "bg-slate-900 text-white" : "border"
          }`}
        >
          All Cards
        </button>

        <button
          onClick={() => changeMode("favourite")}
          className={`rounded-lg px-3 py-2 ${
            mode === "favourite" ? "bg-yellow-500 text-white" : "border"
          }`}
        >
          ⭐ Favourite
        </button>

        <button
          onClick={() => changeMode("difficult")}
          className={`rounded-lg px-3 py-2 ${
            mode === "difficult" ? "bg-red-500 text-white" : "border"
          }`}
        >
          🔥 Difficult
        </button>
      </div>
      <button
        onClick={toggleFlip}
        className="cursor-pointer rounded-xl border bg-slate-50 p-10 text-center transition hover:bg-slate-100"
      >
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          {flipped ? cardAnswer : cardQuestion}
        </h2>

        <p className="text-sm text-gray-500">
          {flipped ? "Tap to view question" : "Tap to reveal answer"}
        </p>
      </button>

      <div className="flex justify-between">
        <button
          onClick={previousCard}
          disabled={current === 0}
          className="rounded-lg border px-4 py-2 disabled:opacity-40"
        >
          Previous
        </button>

        <button
          onClick={toggleFlip}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          Flip Card
        </button>

        <button
          onClick={nextCard}
          disabled={current === cards.length - 1}
          className="rounded-lg bg-slate-900 px-4 py-2 text-white disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
