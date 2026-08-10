import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MCQSection from "@/components/lesson/MCQSection";
import { humerusLesson } from "@/data/lessons/anatomy/humerus";

export default function QuizPage() {
  const questions = humerusLesson.mcqs ?? [];

  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-10 rounded-3xl bg-gradient-to-r from-indigo-700 to-sky-700 p-10 text-white shadow">
          <h1 className="text-5xl font-bold">Quiz Centre</h1>

          <p className="mt-4 max-w-3xl text-sky-100">
            Test your anatomy knowledge with examination-style questions. Track
            your progress, receive feedback, and review your performance.
          </p>
        </div>

        <MCQSection questions={questions} />
      </section>

      <Footer />
    </main>
  );
}
