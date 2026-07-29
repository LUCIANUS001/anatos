import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const examTypes = [
  {
    title: "General Anatomy",
    questions: 50,
    duration: "60 Minutes",
  },
  {
    title: "Upper Limb",
    questions: 40,
    duration: "45 Minutes",
  },
  {
    title: "Thorax",
    questions: 30,
    duration: "35 Minutes",
  },
  {
    title: "Neuroanatomy",
    questions: 60,
    duration: "75 Minutes",
  },
];

const previousScores = [
  {
    subject: "Gross Anatomy",
    score: "88%",
  },
  {
    subject: "Osteology",
    score: "91%",
  },
  {
    subject: "Histology",
    score: "82%",
  },
];

export default function MockExamPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-red-600 to-orange-500 p-10 text-white">

          <h1 className="text-5xl font-bold">
            Mock Examination
          </h1>

          <p className="mt-4 max-w-2xl text-red-100">
            Practice with realistic anatomy examinations designed to
            prepare you for university tests, spotters and professional exams.
          </p>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {examTypes.map((exam) => (

            <div
              key={exam.title}
              className="rounded-3xl bg-white p-6 shadow hover:shadow-xl transition"
            >

              <h2 className="text-2xl font-bold">
                {exam.title}
              </h2>

              <p className="mt-4 text-slate-600">
                Questions: {exam.questions}
              </p>

              <p className="mt-2 text-slate-600">
                Duration: {exam.duration}
              </p>

              <button className="mt-6 w-full rounded-xl bg-red-600 py-3 font-semibold text-white hover:bg-red-700">
                Start Exam
              </button>

            </div>

          ))}

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Previous Results
            </h2>

            <div className="mt-6 space-y-4">

              {previousScores.map((item) => (

                <div
                  key={item.subject}
                  className="flex items-center justify-between rounded-xl border p-4"
                >

                  <span className="font-semibold">
                    {item.subject}
                  </span>

                  <span className="rounded-full bg-green-100 px-4 py-2 font-bold text-green-700">
                    {item.score}
                  </span>

                </div>

              ))}

            </div>

          </div>
          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Performance Summary
            </h2>

            <div className="mt-6">

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Average Score</span>
                  <span className="font-bold text-green-600">87%</span>
                </div>

                <div className="mt-2 h-3 overflow-hidden rounded-full bg-slate-200">
                  <div className="h-3 w-[87%] rounded-full bg-green-500"></div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex justify-between">
                  <span className="font-medium">Exams Completed</span>
                  <span className="font-bold text-sky-700">18</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <span className="font-medium">Best Subject</span>
                  <span className="font-bold text-indigo-600">
                    Osteology
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Quick Actions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <button className="rounded-xl bg-white/10 p-5 transition hover:bg-white/20">
              🎯 Random Exam
            </button>

            <button className="rounded-xl bg-white/10 p-5 transition hover:bg-white/20">
              ⏱ Timed Exam
            </button>

            <button className="rounded-xl bg-white/10 p-5 transition hover:bg-white/20">
              📚 Topic Exam
            </button>

            <button className="rounded-xl bg-white/10 p-5 transition hover:bg-white/20">
              📈 View Results
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}