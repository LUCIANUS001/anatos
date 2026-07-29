import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const stats = [
  {
    title: "Courses Completed",
    value: "8",
    color: "bg-sky-700",
  },
  {
    title: "Lessons Studied",
    value: "64",
    color: "bg-teal-600",
  },
  {
    title: "Quiz Average",
    value: "89%",
    color: "bg-indigo-700",
  },
  {
    title: "Study Streak",
    value: "14 Days",
    color: "bg-orange-500",
  },
];

const continueLearning = [
  {
    title: "Humerus",
    progress: "75%",
    category: "Upper Limb",
  },
  {
    title: "Brachial Plexus",
    progress: "40%",
    category: "Neuroanatomy",
  },
  {
    title: "Heart Anatomy",
    progress: "25%",
    category: "Thorax",
  },
];

const recommendations = [
  "Revise Femur Anatomy",
  "Practice Upper Limb Spotters",
  "Review Histology Notes",
  "Take Thorax Mock Exam",
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-white">

          <h1 className="text-5xl font-bold">
            Welcome Back, Student 👋
          </h1>

          <p className="mt-4 max-w-3xl text-cyan-100">
            Continue your anatomy journey, track your progress,
            and improve your exam preparation.
          </p>

        </div>


        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.title}
              className={`${stat.color} rounded-3xl p-6 text-white shadow-lg`}
            >

              <h2 className="text-lg opacity-90">
                {stat.title}
              </h2>

              <p className="mt-4 text-4xl font-bold">
                {stat.value}
              </p>

            </div>

          ))}

        </div>


        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-white p-8 shadow lg:col-span-2">

            <h2 className="text-3xl font-bold">
              Continue Learning
            </h2>

            <div className="mt-6 space-y-6">

              {continueLearning.map((item) => (

                <div
                  key={item.title}
                  className="rounded-2xl border p-5"
                >

                  <div className="flex justify-between">

                    <div>
                      <h3 className="text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-slate-500">
                        {item.category}
                      </p>
                    </div>

                    <span className="font-bold text-sky-700">
                      {item.progress}
                    </span>

                  </div>

                  <div className="mt-4 h-3 rounded-full bg-slate-200">

                    <div
                      className="h-3 rounded-full bg-sky-700"
                      style={{
                        width: item.progress,
                      }}
                    />

                  </div>

                </div>

              ))}

            </div>

          </div>
          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Recommended Study
            </h2>

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

            <h2 className="text-3xl font-bold">
              Weekly Study Activity
            </h2>

            <div className="mt-8 grid grid-cols-7 gap-3">

              {[
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat",
                "Sun",
              ].map((day, index) => (

                <div
                  key={day}
                  className="text-center"
                >

                  <div
                    className={`mx-auto h-16 w-10 rounded-lg ${
                      index < 5
                        ? "bg-teal-600"
                        : "bg-slate-200"
                    }`}
                  />

                  <p className="mt-2 text-sm text-slate-600">
                    {day}
                  </p>

                </div>

              ))}

            </div>

          </div>


          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold">
              Achievements
            </h2>

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

          <h2 className="text-3xl font-bold">
            Quick Actions
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              📚 Browse Courses
            </button>

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              🧠 Practice Flashcards
            </button>

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              📝 Take Mock Exam
            </button>

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              🤖 Ask AI Tutor
            </button>

          </div>

        </div>


      </section>

      <Footer />

    </main>
  );
}