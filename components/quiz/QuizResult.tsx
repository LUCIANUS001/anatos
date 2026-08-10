interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function QuizResult({
  score,
  totalQuestions,
  onRestart,
}: QuizResultProps) {

  const percentage = Math.round(
    (score / totalQuestions) * 100
  );


  let message = "";

  if (percentage >= 80) {
    message = "Excellent performance! You have a strong understanding of this topic.";
  } else if (percentage >= 50) {
    message = "Good attempt. Review the areas where you made mistakes.";
  } else {
    message = "Keep studying. Review this lesson and try again.";
  }


  return (
    <div className="rounded-3xl bg-white p-10 text-center shadow">

      <h2 className="text-3xl font-bold text-slate-900">
        Quiz Completed 🎉
      </h2>


      <div className="mt-8 rounded-2xl bg-sky-50 p-8">

        <p className="text-lg text-slate-600">
          Your Score
        </p>

        <p className="mt-3 text-5xl font-bold text-sky-700">
          {score}/{totalQuestions}
        </p>

        <p className="mt-3 text-2xl font-semibold text-teal-700">
          {percentage}%
        </p>

      </div>


      <p className="mt-8 leading-7 text-slate-700">
        {message}
      </p>


      <button
        onClick={onRestart}
        className="mt-8 rounded-xl bg-sky-700 px-8 py-3 font-semibold text-white transition hover:bg-sky-800"
      >
        Restart Quiz
      </button>

    </div>
  );
}