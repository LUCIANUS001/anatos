"use client";

import {
  BookOpen,
  Clock3,
  Target,
  BarChart3,
} from "lucide-react";

interface QuizDashboardProps {
  title: string;
  totalQuestions: number;
  passingScore: number;
  timeLimit?: number;
  difficulty?: string;
  onStart: () => void;
}

export default function QuizDashboard({
  title,
  totalQuestions,
  passingScore,
  timeLimit = 60,
  difficulty = "Medium",
  onStart,
}: QuizDashboardProps) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">

      <div>

        <p className="text-sm font-medium text-sky-700">
          Final Assessment
        </p>

        <h2 className="mt-2 text-2xl font-semibold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
          Test your understanding of this lesson. Answer the questions
          carefully and review your performance after submission.
        </p>

      </div>


      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <InfoCard
          icon={<BookOpen />}
          title="Questions"
          value={String(totalQuestions)}
        />

        <InfoCard
          icon={<Target />}
          title="Pass Mark"
          value={`${passingScore}%`}
        />

        <InfoCard
          icon={<Clock3 />}
          title="Time"
          value={`${timeLimit} min`}
        />

        <InfoCard
          icon={<BarChart3 />}
          title="Difficulty"
          value={difficulty}
        />

      </div>


      <div className="mt-8 rounded-xl bg-slate-50 p-5">

        <h3 className="text-lg font-semibold text-slate-900">
          Instructions
        </h3>


        <ul className="mt-3 space-y-2 text-sm text-slate-600">

          <li>
            • Choose the best answer for each question.
          </li>

          <li>
            • You can review your answers before submission.
          </li>

          <li>
            • Your score and explanations will appear after completion.
          </li>

        </ul>

      </div>


      <button
        onClick={onStart}
        className="mt-8 rounded-xl bg-sky-700 px-6 py-3 text-sm font-medium text-white transition hover:bg-sky-800"
      >
        Start Assessment
      </button>


    </section>
  );
}



function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {

  return (

    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4">

      <div className="text-sky-700">
        {icon}
      </div>


      <div>

        <p className="text-xs text-slate-500">
          {title}
        </p>

        <p className="text-lg font-semibold text-slate-900">
          {value}
        </p>

      </div>

    </div>

  );

}