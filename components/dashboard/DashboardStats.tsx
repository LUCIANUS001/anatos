"use client";

import { useEffect, useState } from "react";

import {
  getLessonProgress,
  subscribeToProgress,
  getStudyStreak,
  getCompletedLessonsCount,
} from "@/lib/progress/progress";

interface Props {
  lessonId: string;
}

export default function DashboardStats({ lessonId }: Props) {
  const [progress, setProgress] = useState(getLessonProgress(lessonId));

  useEffect(() => {
    setProgress(getLessonProgress(lessonId));

    const unsubscribe = subscribeToProgress(() => {
      setProgress(getLessonProgress(lessonId));
    });

    return unsubscribe;
  }, [lessonId]);

  const stats = [
    {
      title: "Current Lesson",
      value: lessonId.charAt(0).toUpperCase() + lessonId.slice(1),
      color: "text-sky-700",
    },
    {
      title: "Overall Progress",
      value: `${progress.completionPercentage}%`,
      color: "text-green-600",
    },
    {
      title: "Lessons Completed",
      value: String(getCompletedLessonsCount()),
      color: "text-indigo-700",
    },
    {
      title: "Study Streak",
      value: `${getStudyStreak()} Day${getStudyStreak() === 1 ? "" : "s"}`,
      color: "text-orange-600",
    },
  ];

  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div key={item.title} className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">{item.title}</p>

          <h2 className={`mt-3 text-3xl font-bold ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </section>
  );
}
