"use client";

import { useState } from "react";
import type { Flashcard } from "./types";

interface FlashcardCardProps {
  card: Flashcard;
}

export default function FlashcardCard({
  card,
}: FlashcardCardProps) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <h3 className="text-2xl font-bold text-slate-900">
        Question
      </h3>

      <p className="mt-5 text-lg leading-8 text-slate-700">
        {card.front}
      </p>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="mt-8 rounded-xl bg-amber-500 px-8 py-3 font-semibold text-white transition hover:bg-amber-600"
        >
          Reveal Answer
        </button>
      ) : (
        <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">

          <h4 className="text-xl font-bold text-emerald-700">
            Answer
          </h4>

          <p className="mt-4 text-lg leading-8 text-slate-700">
            {card.back}
          </p>

        </div>
      )}

    </div>
  );
}