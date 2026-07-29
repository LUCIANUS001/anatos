import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const weakTopics = [
  "Upper Limb",
  "Thorax",
  "Histology",
  "Embryology",
];

const recentLessons = [
  "Humerus",
  "Scapula",
  "Clavicle",
  "Radius & Ulna",
];

export default function RevisionPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-white">

          <h1 className="text-5xl font-bold">
            Revision Centre
          </h1>

          <p className="mt-4 max-w-2xl text-cyan-100">
            Prepare for anatomy practicals, spotters and professional
            examinations with organised revision tools.
          </p>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold text-slate-900">
              Continue Revision
            </h2>

            <p className="mt-4 text-slate-600">
              Last lesson studied
            </p>

            <h3 className="mt-2 text-3xl font-bold text-sky-700">
              Humerus
            </h3>

            <button className="mt-8 w-full rounded-xl bg-sky-700 py-3 font-semibold text-white hover:bg-sky-800">
              Continue Learning
            </button>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Daily Goal
            </h2>

            <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">
              <div className="h-4 w-3/4 rounded-full bg-teal-600"></div>
            </div>

            <p className="mt-4 text-slate-600">
              75% Complete
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Weak Topics
            </h2>

            <div className="mt-5 space-y-3">

              {weakTopics.map((topic) => (

                <div
                  key={topic}
                  className="rounded-xl bg-red-50 p-3 font-medium text-red-700"
                >
                  {topic}
                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Recently Studied
            </h2>

            <div className="mt-6 space-y-4">

              {recentLessons.map((lesson) => (

                <div
                  key={lesson}
                  className="flex items-center justify-between rounded-xl border p-4"
                >

                  <span className="font-semibold">
                    {lesson}
                  </span>

                  <button className="rounded-lg bg-sky-700 px-4 py-2 text-white hover:bg-sky-800">
                    Review
                  </button>

                </div>

              ))}

            </div>

          </div>
          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              High-Yield Revision
            </h2>

            <div className="mt-6 space-y-5">

              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="font-bold text-sky-700">
                  Upper Limb
                </h3>
                <p className="mt-2 text-slate-600">
                  Focus on osteology, muscle attachments, nerve supply,
                  blood supply and common clinical correlations.
                </p>
              </div>

              <div className="rounded-2xl bg-teal-50 p-5">
                <h3 className="font-bold text-teal-700">
                  Thorax
                </h3>
                <p className="mt-2 text-slate-600">
                  Revise the heart, lungs, mediastinum and thoracic wall.
                </p>
              </div>

              <div className="rounded-2xl bg-indigo-50 p-5">
                <h3 className="font-bold text-indigo-700">
                  Neuroanatomy
                </h3>
                <p className="mt-2 text-slate-600">
                  Review cranial nerves, brainstem structures and major pathways.
                </p>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Revision Tips
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-xl font-semibold">
                📚 Study Daily
              </h3>

              <p className="mt-3 text-slate-200">
                Spend at least 30–60 minutes revising anatomy every day.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-xl font-semibold">
                🦴 Practice Spotters
              </h3>

              <p className="mt-3 text-slate-200">
                Identify bones, foramina, muscle attachments and clinical landmarks regularly.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-xl font-semibold">
                📝 Make Short Notes
              </h3>

              <p className="mt-3 text-slate-200">
                Summarise important concepts into concise revision notes.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <h3 className="text-xl font-semibold">
                🎯 Test Yourself
              </h3>

              <p className="mt-3 text-slate-200">
                Use quizzes and flashcards frequently to strengthen recall.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}