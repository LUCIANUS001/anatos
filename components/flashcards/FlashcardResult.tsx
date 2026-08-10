interface FlashcardResultProps {
  mastered: number;
  review: number;
  total: number;
  onRestart: () => void;
  onReviewCards?: () => void;
}

export default function FlashcardResult({
  mastered,
  review,
  total,
  onRestart,
  onReviewCards,
}: FlashcardResultProps) {
  const percentage = Math.round((mastered / total) * 100);

  return (
    <div className="rounded-3xl bg-white p-10 shadow">

      <div className="text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          🎉 Revision Completed
        </h2>

        <p className="mt-3 text-slate-600">
          Great work! Here is your revision summary.
        </p>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-emerald-50 p-6 text-center">

          <h3 className="text-lg font-semibold text-slate-700">
            Mastered
          </h3>

          <p className="mt-3 text-4xl font-bold text-emerald-700">
            {mastered}
          </p>

        </div>

        <div className="rounded-2xl bg-amber-50 p-6 text-center">

          <h3 className="text-lg font-semibold text-slate-700">
            Review Again
          </h3>

          <p className="mt-3 text-4xl font-bold text-amber-600">
            {review}
          </p>

        </div>

        <div className="rounded-2xl bg-sky-50 p-6 text-center">

          <h3 className="text-lg font-semibold text-slate-700">
            Mastery
          </h3>

          <p className="mt-3 text-4xl font-bold text-sky-700">
            {percentage}%
          </p>

        </div>

      </div>

      <div className="mt-10 flex flex-wrap gap-4">

        <button
          onClick={() => onReviewCards?.()}
          disabled={review === 0 || !onReviewCards}
          className="flex-1 rounded-xl bg-amber-500 px-6 py-4 font-semibold text-white hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-slate-300"
        >
          🔁 Review Weak Cards
        </button>

        <button
          onClick={onRestart}
          className="flex-1 rounded-xl bg-sky-700 px-6 py-4 font-semibold text-white hover:bg-sky-800"
        >
          🔄 Restart Revision
        </button>

      </div>

    </div>
  );
}