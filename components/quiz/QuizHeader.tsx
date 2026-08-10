interface QuizHeaderProps {
  title: string;
  description?: string;
}

export default function QuizHeader({
  title,
  description,
}: QuizHeaderProps) {
  return (
    <div className="rounded-3xl bg-gradient-to-r from-indigo-700 to-sky-700 p-10 text-white shadow">

      <h1 className="text-4xl font-bold">
        {title}
      </h1>

      {description && (
        <p className="mt-4 max-w-3xl leading-7 text-sky-100">
          {description}
        </p>
      )}

    </div>
  );
}