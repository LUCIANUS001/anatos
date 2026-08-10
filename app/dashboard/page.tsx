"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import { getCurrentLesson } from "@/lib/progress/currentLesson";
import LessonProgress from "@/components/lesson/LessonProgress";

interface ReadingHistory {
  lessonId: string;
  lessonTitle: string;
  lastOpened: number;
}

const recommendations = [
  "Revise Femur Anatomy",
  "Practice Upper Limb Spotters",
  "Review Histology Notes",
  "Take Thorax Mock Exam",
];

export default function DashboardPage() {
  const [continueLearning, setContinueLearning] = useState<ReadingHistory[]>(
    [],
  );

  const [currentLessonId, setCurrentLessonId] = useState("humerus");

  useEffect(() => {
    const history = JSON.parse(
      localStorage.getItem("anatos-reading-history") || "[]",
    );

    setContinueLearning(history);

    const currentLesson = getCurrentLesson();

    if (currentLesson) {
      setCurrentLessonId(currentLesson.lessonId);
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-white">
          <h1 className="text-5xl font-bold">Welcome Back, Student 👋</h1>

          <p className="mt-4 max-w-3xl text-cyan-100">
            Continue your anatomy journey, track your progress, and improve your
            exam preparation.
          </p>
        </div>

        <div className="mt-10">
          <>
            <DashboardStats lessonId={currentLessonId} />
          </>
        </div>

        <div className="mt-10">
          <LessonProgress />
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 shadow lg:col-span-2">
            <h2 className="text-3xl font-bold">Continue Learning</h2>

            <div className="mt-6 space-y-6">
              {continueLearning.length === 0 ? (
                <div className="rounded-2xl border border-dashed border-slate-300 p-8 text-center">
                  <p className="text-lg font-semibold text-slate-600">
                    📚 No recent lessons yet.
                  </p>

                  <p className="mt-2 text-slate-500">
                    Start studying any lesson and it will appear here
                    automatically.
                  </p>
                </div>
              ) : (
                continueLearning.map((item) => (
                  <div key={item.lessonId} className="rounded-2xl border p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold">
                          {item.lessonTitle}
                        </h3>

                        <p className="text-slate-500">
                          Last opened{" "}
                          {new Date(item.lastOpened).toLocaleString()}
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          window.location.href = "/lessons";
                        }}
                        className="rounded-lg bg-sky-700 px-4 py-2 text-white hover:bg-sky-800"
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">Recommended Study</h2>

            <div className="mt-6 space-y-4">
              {recommendations.map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-sky-50 p-4 font-medium text-sky-700"
                >
                  🎯 {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-3xl font-bold">Weekly Study Activity</h2>

            <div className="mt-8 grid grid-cols-7 gap-3">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, index) => (
                  <div key={day} className="text-center">
                    <div
                      className={`mx-auto h-16 w-10 rounded-lg ${
                        index < 5 ? "bg-teal-600" : "bg-slate-200"
                      }`}
                    />

                    <p className="mt-2 text-sm text-slate-600">{day}</p>
                  </div>
                ),
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-3xl font-bold">Achievements</h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-xl bg-yellow-50 p-5">
                🏆 Completed First Anatomy Course
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                🔥 14 Day Study Streak
              </div>

              <div className="rounded-xl bg-blue-50 p-5">
                🧠 Mastered 100 Flashcards
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">
          <h2 className="text-3xl font-bold">Quick Actions</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Link
              href="/courses"
              className="rounded-xl bg-white/10 p-5 text-center hover:bg-white/20"
            >
              📚 Browse Courses
            </Link>

            <Link
              href="/flashcards"
              className="rounded-xl bg-white/10 p-5 text-center hover:bg-white/20"
            >
              🧠 Practice Flashcards
            </Link>

            <Link
              href="/mock-exam"
              className="rounded-xl bg-white/10 p-5 text-center hover:bg-white/20"
            >
              📝 Take Mock Exam
            </Link>

            <Link
              href="/ai-tutor"
              className="rounded-xl bg-white/10 p-5 text-center hover:bg-white/20"
            >
              🤖 Ask AI Tutor
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
