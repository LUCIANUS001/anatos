"use client";

import { useEffect, useRef } from "react";
import { useLessonProgress } from "@/hooks/useLessonProgress";

interface LessonTrackerProps {
  sectionId: string;
  children: React.ReactNode;
}

export default function LessonTracker({
  sectionId,
  children,
}: LessonTrackerProps) {
  const { completedSections, markCompleted } = useLessonProgress();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    if (completedSections.includes(sectionId)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          markCompleted(sectionId);
          observer.disconnect();
        }
      },
      {
        threshold: 0.6,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [completedSections, markCompleted, sectionId]);

  return <div ref={ref}>{children}</div>;
}
