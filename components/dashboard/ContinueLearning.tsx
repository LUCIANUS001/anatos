"use client";

import { useEffect, useState } from "react";
import {
  getLessonProgress,
  subscribeToProgress,
} from "@/lib/progress/progress";

export default function ContinueLearning() {
  const [progress, setProgress] = useState(getLessonProgress("humerus"));

  useEffect(() => {
    setProgress(getLessonProgress("humerus"));

    const unsubscribe = subscribeToProgress(() => {
      setProgress(getLessonProgress("humerus"));
    });

    return unsubscribe;
  }, []);
  
  return (
    <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">Continue Learning</h2>

      <p className="mt-2 text-slate-600"> Humerus </p>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full bg-sky-700 transition-all"
          style={{
            width: `${progress.completionPercentage}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Progress: {progress.completionPercentage}%
      </p>

      <button className="mt-8 rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white hover:bg-sky-800">
        Resume Lesson
      </button>
    </section>
  );
}
