interface LessonImage {
  src: string;
  title: string;
  description?: string;
}

interface LessonSectionProps {
  id: string;
  title: string;
  content: string;
  images?: LessonImage[];

  items?: {
    title: string;
    description?: string;
  }[];

  icon?: string;

  component?: React.ReactNode;
}

import Image from "next/image";
import MedicalCardGrid from "./MedicalCardGrid";

export default function LessonSection({
  id,
  title,
  content,
  images = [],
  items = [],
  icon,
  component,
}: LessonSectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-slate-200 pb-14 mb-14"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-6">{title}</h2>

      <div className="prose prose-slate max-w-none whitespace-pre-line leading-8">
        {content}
      </div>
      {component && <div className="mt-8">{component}</div>}

      {items.length > 0 && (
        <div className="mt-8">
          <MedicalCardGrid items={items} icon={icon} />
        </div>
      )}

      {images.length > 0 && (
        <div className="mt-10 space-y-8">
          {images.map((image, index) => (
            <figure
              key={index}
              className="overflow-hidden rounded-2xl border bg-white shadow"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={1400}
                height={900}
                className="w-full object-contain bg-white"
              />

              <figcaption className="p-6">
                <h3 className="text-xl font-bold">{image.title}</h3>

                <p className="mt-3 text-slate-600">{image.description}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
