export default function QuickActions() {
  return (
    <section className="mt-10">
      <h2 className="mb-6 text-2xl font-bold text-slate-900">
        Quick Actions
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <button className="rounded-2xl bg-sky-700 p-6 text-white">
          Browse Courses
        </button>

        <button className="rounded-2xl bg-teal-600 p-6 text-white">
          Practical Labs
        </button>

        <button className="rounded-2xl bg-amber-500 p-6 text-white">
          Take Quiz
        </button>

        <button className="rounded-2xl bg-slate-800 p-6 text-white">
          Revision Centre
        </button>
      </div>
    </section>
  );
}