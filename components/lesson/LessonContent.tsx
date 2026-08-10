interface LessonContentProps {
  id?: string;
  title: string;
  content: string;
  icon?: string;
  image?: string;
  imageAlt?: string;
}

export default function LessonContent({
  id,
  title,
  content,
  icon,
  image,
  imageAlt,
}: LessonContentProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl bg-white p-8 shadow"
    >
      <h2 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
        {icon && (
          <span className="text-3xl">
            {icon}
          </span>
        )}

        {title}
      </h2>

      {image && (
        <img
          src={image}
          alt={imageAlt || title}
          className="mt-6 w-full rounded-2xl border object-cover"
        />
      )}

      <div className="mt-6 whitespace-pre-line leading-8 text-slate-700">
        {content}
      </div>
    </section>
  );
}