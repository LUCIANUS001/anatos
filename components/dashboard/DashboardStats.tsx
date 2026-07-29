const stats = [
  {
    title: "Courses",
    value: "25",
  },
  {
    title: "Lessons Completed",
    value: "18",
  },
  {
    title: "Study Streak",
    value: "7 Days",
  },
  {
    title: "Quiz Average",
    value: "92%",
  },
];

export default function DashboardStats() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl bg-white p-6 shadow-sm"
        >
          <p className="text-sm text-slate-500">
            {item.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-sky-700">
            {item.value}
          </h2>
        </div>
      ))}
    </section>
  );
}