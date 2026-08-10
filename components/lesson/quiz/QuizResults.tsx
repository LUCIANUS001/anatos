"use client";

import { QuizResult as QuizResultType } from "./types";

interface QuizResultProps {
  result: QuizResultType;
  onRetry: () => void;
}

export default function QuizResult({
  result,
  onRetry,
}: QuizResultProps) {

  return (

    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">


      <div className="text-center">

        <div className="text-5xl">
          {result.passed ? "🎉" : "📚"}
        </div>


        <h2 className="mt-4 text-2xl font-semibold text-slate-900">
          {result.passed ? "Assessment Passed" : "Keep Practicing"}
        </h2>


        <p className="mt-2 text-sm text-slate-600">
          Here is your performance summary for this lesson assessment.
        </p>

      </div>



      <div className="mt-8 grid gap-4 sm:grid-cols-3">


        <ResultCard
          title="Score"
          value={`${result.score}/${result.totalQuestions}`}
        />


        <ResultCard
          title="Percentage"
          value={`${result.percentage}%`}
        />


        <ResultCard
          title="Status"
          value={result.passed ? "PASS" : "REVIEW"}
          highlight={result.passed}
        />


      </div>




      <div className="mt-6 grid gap-4 sm:grid-cols-3">


        <SmallResultCard
          title="Correct"
          value={result.correctAnswers}
          style="text-emerald-700 bg-emerald-50"
        />


        <SmallResultCard
          title="Wrong"
          value={result.wrongAnswers}
          style="text-red-700 bg-red-50"
        />


        <SmallResultCard
          title="Unanswered"
          value={result.unansweredQuestions}
          style="text-amber-700 bg-amber-50"
        />


      </div>




      <div className="mt-8 text-center">

        <button
          onClick={onRetry}
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
          Retry Assessment
        </button>


      </div>


    </section>

  );

}




function ResultCard({
  title,
  value,
  highlight = false,
}: {
  title: string;
  value: string;
  highlight?: boolean;
}) {

  return (

    <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">

      <p className="text-sm text-slate-500">
        {title}
      </p>


      <p
        className={`mt-2 text-2xl font-semibold ${
          highlight
            ? "text-emerald-700"
            : "text-slate-900"
        }`}
      >
        {value}
      </p>


    </div>

  );

}




function SmallResultCard({
  title,
  value,
  style,
}: {
  title: string;
  value: number;
  style: string;
}) {

  return (

    <div className={`rounded-xl p-4 text-center ${style}`}>

      <p className="text-sm font-medium">
        {title}
      </p>


      <p className="mt-2 text-2xl font-semibold">
        {value}
      </p>


    </div>

  );

}