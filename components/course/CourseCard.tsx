type CourseCardProps = {
  title: string;
  description: string;
  lessons: number;
};

export default function CourseCard({
  title,
  description,
  lessons,
}: CourseCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
        {lessons} Lessons
      </div>

      <h3 className="text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-7">
        {description}
      </p>

      <button className="mt-8 rounded-xl bg-sky-700 px-5 py-3 font-semibold text-white hover:bg-sky-800">
        Open Course
      </button>
    </div>
  );
}