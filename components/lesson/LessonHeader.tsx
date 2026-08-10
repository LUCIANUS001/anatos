interface LessonHeaderProps {
  category: string;
  title: string;
  description: string;
  difficulty: string;
  readingTime: string;
}

export default function LessonHeader({
  category,
  title,
  description,
  difficulty,
  readingTime,
}: LessonHeaderProps) {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-10 text-white">

      <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
        {category}
      </span>

      <h1 className="mt-5 text-5xl font-bold">
        {title}
      </h1>

      <p className="mt-6 max-w-3xl text-cyan-100 leading-8">
        {description}
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <div className="rounded-xl bg-white/10 px-5 py-3">
          📚 {readingTime}
        </div>

        <div className="rounded-xl bg-white/10 px-5 py-3">
          🎯 {difficulty}
        </div>

      </div>

    </section>
  );
}