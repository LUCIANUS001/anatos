interface QuizNavigationProps {
  showResult: boolean;
  hasSelectedAnswer: boolean;
  isLastQuestion: boolean;
  onSubmit: () => void;
  onNext: () => void;
  onPrevious?: () => void;
}

export default function QuizNavigation({
  showResult,
  hasSelectedAnswer,
  isLastQuestion,
  onSubmit,
  onNext,
  onPrevious,
}: QuizNavigationProps) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">

      <button
        onClick={onPrevious}
        disabled={!onPrevious}
        className="rounded-xl bg-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>


      {!showResult ? (
        <button
          onClick={onSubmit}
          disabled={!hasSelectedAnswer}
          className="rounded-xl bg-sky-700 px-8 py-3 font-semibold text-white transition hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Submit Answer
        </button>
      ) : (
        <button
          onClick={onNext}
          className="rounded-xl bg-teal-600 px-8 py-3 font-semibold text-white transition hover:bg-teal-700"
        >
          {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </button>
      )}

    </div>
  );
}