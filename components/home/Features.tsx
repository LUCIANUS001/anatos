const features = [
  {
    title: "Interactive Lessons",
    description:
      "Study anatomy using structured lessons with illustrations, summaries and clinical applications.",
  },
  {
    title: "Practical Laboratory",
    description:
      "Prepare for practical examinations including OSPE, spotters and specimen identification.",
  },
  {
    title: "Smart Revision",
    description:
      "Revise faster using high-yield notes, flashcards and examination-focused content.",
  },
  {
    title: "Progress Tracking",
    description:
      "Monitor your learning progress, completed lessons and study streaks.",
  },
  {
    title: "Bookmarks & Notes",
    description:
      "Save important lessons and write personal notes while studying.",
  },
  {
    title: "AI Anatomy Tutor",
    description:
      "Future-ready intelligent assistant for explanations, quizzes and revision planning.",
  },
];

export default function Features() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-slate-900">
          Why Choose AnatOS?
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-slate-600">
          Everything a healthcare student needs in one modern learning platform.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-sky-700">
                {feature.title}
              </h3>

              <p className="leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}