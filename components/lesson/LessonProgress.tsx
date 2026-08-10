"use client";

import { useLessonProgress } from "@/hooks/useLessonProgress";

interface Props {
  lessonId: string;
}

export default function LessonProgress({ lessonId }: Props) {
  const { completedSections, totalSections } = useLessonProgress();

  const completed = completedSections.length;

  const percentage =
    totalSections === 0 ? 0 : Math.round((completed / totalSections) * 100);

  return (
    <div className="mt-10 rounded-2xl bg-white p-6 shadow">
      <h2 className="text-2xl font-bold">Current Lesson Progress</h2>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span>Completed Sections</span>
          <strong>
            {completed}/{totalSections}
          </strong>
        </div>

        <div className="flex justify-between">
          <span>Reading Progress</span>
          <strong>{percentage}%</strong>
        </div>
      </div>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-teal-600 transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-4 text-center font-semibold text-slate-700">
        Overall Progress: {percentage}%
      </p>
    </div>
  );
}
