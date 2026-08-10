import Link from "next/link";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { anatomyLessons } from "@/data/lessons/anatomy";

export default function LessonsPage() {
  const lessons = Object.values(anatomyLessons);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="text-5xl font-bold text-slate-900">Anatomy Lessons</h1>

        <p className="mt-4 text-slate-600">
          Select a lesson to begin studying.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/lessons/${lesson.slug}`}
              className="rounded-3xl bg-white p-8 shadow transition hover:shadow-lg"
            >
              <p className="text-sm font-medium text-sky-700">
                {lesson.category}
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                {lesson.title}
              </h2>

              <p className="mt-4 text-slate-600">{lesson.description}</p>

              <div className="mt-6 flex items-center justify-between">
                <span className="rounded-lg bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                  {lesson.difficulty}
                </span>

                <span className="text-sm text-slate-500">
                  {lesson.readingTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
