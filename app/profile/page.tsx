import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const achievements = [
  "Completed Gross Anatomy",
  "7-Day Study Streak",
  "50 Flashcards Reviewed",
  "10 Quizzes Completed",
];

const recentActivity = [
  "Studied Humerus",
  "Completed Flashcards",
  "Revised Thorax",
  "Scored 90% in Osteology Quiz",
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-white">

          <div className="flex flex-col items-center gap-6 md:flex-row">

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-white text-5xl font-bold text-sky-700">
              L
            </div>

            <div>

              <h1 className="text-5xl font-bold">
                Lucianus
              </h1>

              <p className="mt-3 text-cyan-100 text-lg">
                Anatomy Student • AnatOS Learner
              </p>

            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-slate-500">
              Lessons Completed
            </h2>
            <p className="mt-3 text-4xl font-bold text-sky-700">
              24
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-slate-500">
              Quiz Average
            </h2>
            <p className="mt-3 text-4xl font-bold text-teal-600">
              89%
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-slate-500">
              Flashcards Reviewed
            </h2>
            <p className="mt-3 text-4xl font-bold text-indigo-600">
              128
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow">
            <h2 className="text-lg font-semibold text-slate-500">
              Study Streak
            </h2>
            <p className="mt-3 text-4xl font-bold text-orange-500">
              7 Days
            </p>
          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Achievements
            </h2>

            <div className="mt-6 space-y-4">

              {achievements.map((item) => (

                <div
                  key={item}
                  className="rounded-xl bg-green-50 p-4 font-medium text-green-700"
                >
                  🏆 {item}
                </div>

              ))}

            </div>

          </div>
          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Recent Activity
            </h2>

            <div className="mt-6 space-y-4">

              {recentActivity.map((activity) => (

                <div
                  key={activity}
                  className="flex items-center justify-between rounded-xl border p-4"
                >

                  <span className="font-medium text-slate-700">
                    {activity}
                  </span>

                  <span className="rounded-full bg-sky-100 px-3 py-1 text-sm text-sky-700">
                    Completed
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Weekly Goal
            </h2>

            <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">
              <div className="h-4 w-4/5 rounded-full bg-teal-600"></div>
            </div>

            <p className="mt-4 text-slate-600">
              80% of your weekly study target completed.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Continue Learning
            </h2>

            <p className="mt-4 text-slate-600">
              Resume your last lesson and continue building your anatomy knowledge.
            </p>

            <button className="mt-6 w-full rounded-xl bg-sky-700 py-3 font-semibold text-white hover:bg-sky-800">
              Continue Lesson
            </button>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Quick Actions
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              📚 My Courses
            </button>

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              📝 Notes
            </button>

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              🧠 Flashcards
            </button>

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              🏆 Certificates
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}