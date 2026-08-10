interface FlashcardNavigationProps {
  currentCard: number;
  totalCards: number;
  onPrevious: () => void;
  onNext: () => void;
  onMastered: () => void;
  onReview: () => void;
}

export default function FlashcardNavigation({
  currentCard,
  totalCards,
  onPrevious,
  onNext,
  onMastered,
  onReview,
}: FlashcardNavigationProps) {
  return (
    <div className="mt-8 space-y-6">

      <div className="grid gap-4 md:grid-cols-2">

        <button
          onClick={onMastered}
          className="rounded-xl bg-emerald-600 px-6 py-4 font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
        >
          ✅ I Know This
        </button>

        <button
          onClick={onReview}
          className="rounded-xl bg-amber-500 px-6 py-4 font-semibold text-white transition hover:bg-amber-600 active:scale-95"
        >
          🔁 Review Again
        </button>

      </div>

      <div className="flex justify-between">

        <button
          onClick={onPrevious}
          disabled={currentCard === 1}
          className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-300 disabled:opacity-50"
        >
          ← Previous
        </button>

        <button
          onClick={onNext}
          className="rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white hover:bg-sky-800"
        >
          {currentCard === totalCards
            ? "Finish Revision"
            : "Skip →"}
        </button>

      </div>

    </div>
  );
}