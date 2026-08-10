import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const systems = [
  "Gross Anatomy",
  "Histology",
  "Embryology",
  "Neuroanatomy",
  "Clinical Anatomy",
  "Radiological Anatomy",
];

const stats = [
  {
    number: "350+",
    title: "Anatomy Lessons",
  },
  {
    number: "1,000+",
    title: "Practice Questions",
  },
  {
    number: "18",
    title: "Learning Modules",
  },
  {
    number: "24/7",
    title: "Study Support",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <span className="w-fit rounded-full bg-sky-100 px-4 py-2 font-semibold text-sky-700">
            Medical Learning Platform
          </span>

          <h1 className="mt-6 text-6xl font-bold leading-tight text-slate-900">
            Master Human Anatomy
            <span className="text-sky-700"> with AnatOS</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A complete anatomy learning system designed for medical, nursing and
            health science students. Learn structures, understand clinical
            applications and prepare for exams.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-xl bg-sky-700 px-8 py-4 font-semibold text-white hover:bg-sky-800 text-center"
            >
              Start Learning
            </Link>

            <Link
              href="/courses"
              className="rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-white text-center"
            >
              Explore Courses
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <Image
              src="/images/human-anatomy.png"
              alt="Human Anatomy"
              width={500}
              height={500}
              className="rounded-2xl object-contain"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-3xl bg-white p-8 text-center shadow"
            >
              <h2 className="text-4xl font-bold text-sky-700">{stat.number}</h2>

              <p className="mt-3 text-slate-600">{stat.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h2 className="text-4xl font-bold text-slate-900">
          Explore Anatomy Systems
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <Link
              key={system}
              href="/courses"
              className="rounded-3xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl block"
            >
              <h3 className="text-2xl font-bold text-sky-700">{system}</h3>

              <p className="mt-4 text-slate-600">
                Comprehensive lessons, practical resources, revision materials
                and exam preparation.
              </p>
            </Link>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-white p-10 shadow">
          <h2 className="text-4xl font-bold text-slate-900">
            Featured Learning Paths
          </h2>

          <p className="mt-4 text-slate-600">
            Follow structured learning paths designed to take you from basic
            anatomy concepts to advanced clinical understanding.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-sky-50 p-6">
              <h3 className="text-2xl font-bold text-sky-700">
                🦴 Osteology Mastery
              </h3>

              <p className="mt-3 text-slate-600">
                Learn bones, landmarks, articulations and clinical importance of
                the skeletal system.
              </p>
            </div>

            <div className="rounded-2xl bg-teal-50 p-6">
              <h3 className="text-2xl font-bold text-teal-700">
                🧠 Neuroanatomy Track
              </h3>

              <p className="mt-3 text-slate-600">
                Understand the brain, spinal cord, cranial nerves and nervous
                pathways.
              </p>
            </div>

            <div className="rounded-2xl bg-indigo-50 p-6">
              <h3 className="text-2xl font-bold text-indigo-700">
                🩺 Clinical Anatomy
              </h3>

              <p className="mt-3 text-slate-600">
                Connect anatomical structures with real clinical cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-violet-700 to-sky-700 p-10 text-white">
          <h2 className="text-4xl font-bold">
            Learn with Your AI Anatomy Tutor
          </h2>

          <p className="mt-4 max-w-3xl text-violet-100">
            Get explanations, revision summaries, practice questions and
            clinical insights while studying anatomy.
          </p>

          <Link
            href="/ai-tutor"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-violet-700 hover:bg-slate-100"
          >
            Try AI Tutor
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-slate-900 p-10 text-white">
          <h2 className="text-4xl font-bold">Prepare for Your Anatomy Exams</h2>

          <p className="mt-4 max-w-3xl text-slate-300">
            Practice with mock examinations, flashcards, quizzes and revision
            tools designed for medical students.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-6">📝 Mock Exams</div>

            <div className="rounded-2xl bg-white/10 p-6">🧠 Flashcards</div>

            <div className="rounded-2xl bg-white/10 p-6">
              📚 Revision Centre
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-center text-white">
          <h2 className="text-4xl font-bold">
            Start Building Your Anatomy Knowledge Today
          </h2>

          <p className="mt-4 text-cyan-100">
            Learn smarter, revise faster and understand the human body.
          </p>

          <Link
            href="/dashboard"
            className="mt-8 inline-block rounded-xl bg-white px-10 py-4 font-bold text-sky-700"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
