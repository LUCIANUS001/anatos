import {
  BookOpen,
  Target,
  Clock3,
  ClipboardCheck,
} from "lucide-react";

interface QuizHeaderProps {
  title: string;
  passingScore?: number;
  totalQuestions: number;
}

export default function QuizHeader({
  title,
  passingScore = 50,
  totalQuestions,
}: QuizHeaderProps) {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

      {/* Header */}

      <div className="border-b border-slate-200 bg-gradient-to-r from-sky-700 via-cyan-700 to-teal-700 px-8 py-8">

        <div className="flex items-center gap-3">

          <div className="rounded-2xl bg-white/20 p-3">

            <ClipboardCheck className="h-8 w-8 text-white" />

          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-100">
              Final Assessment
            </p>

            <h1 className="mt-1 text-3xl font-bold text-white">
              {title}
            </h1>

          </div>

        </div>

        <p className="mt-6 max-w-3xl text-base leading-7 text-sky-100">
          This assessment evaluates your understanding of this lesson.
          Read every question carefully and choose the single best answer
          before proceeding.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid gap-5 p-8 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <BookOpen className="h-7 w-7 text-sky-700" />

            <div>

              <p className="text-sm text-slate-500">
                Questions
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                {totalQuestions}
              </h2>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <Target className="h-7 w-7 text-emerald-700" />

            <div>

              <p className="text-sm text-slate-500">
                Pass Mark
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                {passingScore}%
              </h2>

            </div>

          </div>

        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

          <div className="flex items-center gap-3">

            <Clock3 className="h-7 w-7 text-amber-600" />

            <div>

              <p className="text-sm text-slate-500">
                Time Limit
              </p>

              <h2 className="text-2xl font-bold text-slate-900">
                60 min
              </h2>

            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

          <div>

            <p className="text-sm font-semibold text-slate-500">
              Instructions
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">

              <li>• Choose one best answer for each question.</li>

              <li>• You can move between questions freely.</li>

              <li>• Review your answers before submitting.</li>

              <li>• Your score will be shown immediately after submission.</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}