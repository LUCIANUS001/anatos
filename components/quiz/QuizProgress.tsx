interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizProgress({
  currentQuestion,
  totalQuestions,
}: QuizProgressProps) {
  const progress =
    Math.round((currentQuestion / totalQuestions) * 100);

  return (
    <div className="mb-6">

      <div className="mb-2 flex items-center justify-between text-sm font-medium text-slate-600">
        <span>
          Question {currentQuestion} of {totalQuestions}
        </span>

        <span>
          {progress}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-sky-600 transition-all duration-300"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

    </div>
  );
}