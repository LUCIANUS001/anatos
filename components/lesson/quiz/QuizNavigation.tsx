"use client";

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export default function QuizNavigation({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  onSubmit,
}: QuizNavigationProps) {

  const isFirstQuestion = currentQuestion === 0;
  const isLastQuestion = currentQuestion === totalQuestions - 1;


  return (

    <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">


      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className="
          rounded-xl
          border
          border-slate-200
          px-6
          py-3
          text-sm
          font-medium
          text-slate-700
          transition
          hover:bg-slate-50
          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        ← Previous
      </button>



      <div className="text-sm text-slate-500">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>



      {isLastQuestion ? (

        <button
          onClick={onSubmit}
          className="
            rounded-xl
            bg-sky-700
            px-7
            py-3
            text-sm
            font-medium
            text-white
            transition
            hover:bg-sky-800
          "
        >
          Submit Assessment
        </button>

      ) : (

        <button
          onClick={onNext}
          className="
            rounded-xl
            bg-sky-700
            px-7
            py-3
            text-sm
            font-medium
            text-white
            transition
            hover:bg-sky-800
          "
        >
          Next Question →
        </button>

      )}


    </div>

  );

}