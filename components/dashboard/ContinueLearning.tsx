export default function ContinueLearning() {
  return (
    <section className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Continue Learning
      </h2>

      <p className="mt-2 text-slate-600">
        Foundations of Anatomy
      </p>

      <div className="mt-6 h-3 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-2/5 bg-sky-700" />
      </div>

      <p className="mt-3 text-sm text-slate-500">
        Progress: 40%
      </p>

      <button className="mt-8 rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white hover:bg-sky-800">
        Resume Lesson
      </button>
    </section>
  );
}