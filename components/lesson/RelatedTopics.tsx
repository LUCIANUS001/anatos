import Link from "next/link";

interface RelatedTopic {
  title: string;
  href: string;
}

interface RelatedTopicsProps {
  topics: RelatedTopic[];
}

export default function RelatedTopics({
  topics,
}: RelatedTopicsProps) {
  return (
    <section id="related-topics">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Related Topics
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Continue your learning by exploring topics closely related
          to this lesson.
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-2">

        {topics.map((topic, index) => (

          <Link
            key={index}
            href={topic.href}
            className="rounded-2xl border border-sky-200 bg-sky-50 p-6 transition hover:bg-sky-100 hover:shadow-md"
          >
            <h3 className="text-lg font-semibold text-sky-800">
              {topic.title}
            </h3>
          </Link>

        ))}

      </div>

    </section>
  );
}