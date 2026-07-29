export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-sky-50 via-white to-teal-50">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
          Version 1.0 • Anatomy Operating System
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl">
          Learn Human Anatomy
          <span className="block text-sky-700">
            Smarter. Faster. Better.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          AnatOS is a modern anatomy learning platform built for Medical,
          Nursing, Physiotherapy, Pharmacy, Medical Laboratory Science,
          Radiography and Allied Health Science students.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-sky-700 px-8 py-4 font-semibold text-white transition hover:bg-sky-800">
            Start Learning
          </button>

          <button className="rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-100">
            Explore Courses
          </button>
        </div>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-4">

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-3xl font-bold text-sky-700">25+</h2>
            <p className="mt-2 text-slate-600">Courses</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-3xl font-bold text-sky-700">800+</h2>
            <p className="mt-2 text-slate-600">Lessons</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-3xl font-bold text-sky-700">5000+</h2>
            <p className="mt-2 text-slate-600">Quiz Questions</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-3xl font-bold text-sky-700">150+</h2>
            <p className="mt-2 text-slate-600">Practical Labs</p>
          </div>

        </div>

      </div>
    </section>
  );
}