import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-indigo-700 to-sky-700 p-10 text-white">
          <h1 className="text-5xl font-bold">
            Quiz Centre
          </h1>

          <p className="mt-4 text-sky-100">
            Test your anatomy knowledge with examination-style questions.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow">

          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Question 1 of 20
            </h2>

            <span className="rounded-full bg-red-100 px-4 py-2 text-red-600">
              ⏱ 19:42
            </span>
          </div>

          <h3 className="text-xl font-semibold">
            Which bone articulates with the glenoid cavity?
          </h3>

          <div className="mt-8 space-y-4">

            <button className="w-full rounded-xl border p-4 text-left transition hover:bg-sky-50">
              A. Radius
            </button>

            <button className="w-full rounded-xl border p-4 text-left transition hover:bg-sky-50">
              B. Ulna
            </button>

            <button className="w-full rounded-xl border p-4 text-left transition hover:bg-sky-50">
              C. Humerus
            </button>

            <button className="w-full rounded-xl border p-4 text-left transition hover:bg-sky-50">
              D. Clavicle
            </button>

          </div>

          <div className="mt-10 flex justify-between">

            <button className="rounded-xl bg-slate-200 px-6 py-3">
              Previous
            </button>

            <button className="rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white hover:bg-sky-800">
              Next Question
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </main>
  );
}