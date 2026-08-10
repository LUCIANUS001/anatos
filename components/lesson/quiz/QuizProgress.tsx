interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export default function QuizProgress({
  currentQuestion,
  totalQuestions,
}: QuizProgressProps) {
  const percentage = Math.round(
    ((currentQuestion + 1) / totalQuestions) * 100
  );

  return (
    <div className="mb-8 rounded-3xl bg-white p-6 shadow">

      <div className="mb-4 flex items-center justify-between">

        <div>

          <h3 className="text-xl font-bold text-slate-900">
            Quiz Progress
          </h3>

          <p className="mt-1 text-slate-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </p>

        </div>

        <div className="rounded-full bg-sky-100 px-4 py-2">

          <span className="font-bold text-sky-700">
            {percentage}%
          </span>

        </div>

      </div>

      <div className="h-4 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-sky-600 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </div>
  );
}