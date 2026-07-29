import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const courses = [
  {
    title: "Foundations of Anatomy",
    lessons: 12,
    color: "bg-blue-50 text-blue-700",
    description: "Introduction, anatomical terms, planes and positions.",
  },
  {
    title: "Osteology",
    lessons: 18,
    color: "bg-green-50 text-green-700",
    description: "Study of bones, landmarks and ossification.",
  },
  {
    title: "Arthrology",
    lessons: 15,
    color: "bg-purple-50 text-purple-700",
    description: "Joints, ligaments and movements.",
  },
  {
    title: "Myology",
    lessons: 22,
    color: "bg-orange-50 text-orange-700",
    description: "Muscles, origins, insertions, actions and nerve supply.",
  },
  {
    title: "Upper Limb",
    lessons: 40,
    color: "bg-cyan-50 text-cyan-700",
    description: "Bones, muscles, nerves, arteries and clinical anatomy.",
  },
  {
    title: "Lower Limb",
    lessons: 42,
    color: "bg-pink-50 text-pink-700",
    description: "Hip, thigh, leg and foot anatomy.",
  },
  {
    title: "Thorax",
    lessons: 28,
    color: "bg-red-50 text-red-700",
    description: "Heart, lungs, mediastinum and thoracic wall.",
  },
  {
    title: "Abdomen",
    lessons: 35,
    color: "bg-yellow-50 text-yellow-700",
    description: "Abdominal organs, vessels and peritoneum.",
  },
];

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-white">

          <h1 className="text-5xl font-bold">
            Anatomy Course Library
          </h1>

          <p className="mt-4 max-w-3xl text-cyan-100">
            Browse comprehensive anatomy courses designed for university
            students, medical students and allied health professionals.
          </p>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {courses.map((course) => (

            <div
              key={course.title}
              className="rounded-3xl bg-white p-6 shadow transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className={`inline-block rounded-full px-3 py-1 text-sm font-semibold ${course.color}`}>
                {course.lessons} Lessons
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                {course.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {course.description}
              </p>

              <button className="mt-8 w-full rounded-xl bg-sky-700 py-3 font-semibold text-white hover:bg-sky-800">
                Start Learning
              </button>

            </div>

          ))}
          </div>

        <div className="mt-12 rounded-3xl bg-white p-8 shadow">

          <h2 className="text-3xl font-bold">
            Additional Anatomy Modules
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Pelvis & Perineum",
              "Head & Neck",
              "Neuroanatomy",
              "Histology",
              "Embryology",
              "Radiological Anatomy",
              "Clinical Anatomy",
              "Surface Anatomy",
              "Practical Anatomy",
              "General Physiology",
              "Revision Hub",
              "Mock Examinations",
            ].map((module) => (

              <div
                key={module}
                className="rounded-2xl border border-slate-200 p-5 transition hover:border-sky-600 hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-slate-800">
                  {module}
                </h3>

                <p className="mt-3 text-sm text-slate-600">
                  Comprehensive lessons, practical demonstrations,
                  revision resources and assessments.
                </p>

              </div>

            ))}

          </div>

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl bg-sky-700 p-8 text-white">
            <h3 className="text-4xl font-bold">18</h3>
            <p className="mt-3">Core Anatomy Courses</p>
          </div>

          <div className="rounded-3xl bg-teal-600 p-8 text-white">
            <h3 className="text-4xl font-bold">350+</h3>
            <p className="mt-3">Lessons Planned</p>
          </div>

          <div className="rounded-3xl bg-indigo-700 p-8 text-white">
            <h3 className="text-4xl font-bold">1,000+</h3>
            <p className="mt-3">Practice Questions (Target)</p>
          </div>

        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Featured Learning Paths
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-2xl bg-white/10 p-6">
              🦴 Osteology Mastery
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              💪 Upper Limb Complete Course
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              🧠 Neuroanatomy Essentials
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              ❤️ Thorax & Heart
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              🔬 Histology Crash Revision
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              🎯 Exam Preparation Track
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}