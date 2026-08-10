"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, EyeOff } from "lucide-react";

interface VivaItem {
  question: string;
  answer: string;
}

interface VivaRevisionProps {
  items: VivaItem[];
}

export default function VivaRevision({ items }: VivaRevisionProps) {
  const storageKey = "humerus-viva-progress";

  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);

    if (saved) {
      const data = JSON.parse(saved);

      setCurrent(data.current ?? 0);
      setShowAnswer(data.showAnswer ?? false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      storageKey,
      JSON.stringify({
        current,
        showAnswer,
      }),
    );
  }, [current, showAnswer]);

  if (!items || items.length === 0) return null;

  const viva = items[current];

  const previous = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const next = () => {
    if (current < items.length - 1) {
      setCurrent(current + 1);
    }
  };

  const progress = ((current + 1) / items.length) * 100;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-5 text-white">
        <h2 className="text-xl font-bold">Anatomy Viva Revision</h2>

        <p className="mt-1 text-sm text-blue-100">
          Question {current + 1} of {items.length}
        </p>
      </div>

      <div className="p-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-600">
          Viva Question
        </p>

        <h3 className="mt-3 text-2xl font-bold leading-9 text-slate-900">
          {viva.question}
        </h3>

        {showAnswer && (
          <div className="mt-8 rounded-2xl bg-slate-50 p-6">
            <p className="text-sm font-semibold text-blue-700">Answer</p>

            <p className="mt-3 whitespace-pre-line leading-8 text-slate-700">
              {viva.answer}
            </p>
          </div>
        )}

        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 font-medium text-white hover:bg-cyan-700"
        >
          {showAnswer ? (
            <>
              <EyeOff size={20} />
              Hide Answer
            </>
          ) : (
            <>
              <Eye size={20} />
              Show Answer
            </>
          )}
        </button>
      </div>

      <div className="px-8">
        <div className="h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-cyan-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t bg-slate-50 px-8 py-5">
        <button
          onClick={previous}
          disabled={current === 0}
          className="flex items-center gap-2 rounded-xl border px-5 py-3 font-medium disabled:opacity-40"
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        <span className="font-semibold text-slate-600">
          {current + 1} / {items.length}
        </span>

        <button
          onClick={next}
          disabled={current === items.length - 1}
          className="flex items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-medium text-white disabled:opacity-40"
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
