interface LessonObjectivesProps {
  objectives: string[];
}

export default function LessonObjectives({
  objectives,
}: LessonObjectivesProps) {
  return (
   <section
   id="learning-objectives"
  className="rounded-2xl bg-white p-6 shadow"
>

      <h2 className="text-2xl font-bold">
        Learning Objectives
      </h2>

      <ul className="mt-4 space-y-3 text-slate-700">
        {objectives.map((objective, index) => (
          <li key={index}>
            ✅ {objective}
          </li>
        ))}
      </ul>

    </section>
  );
}