import Image from "next/image";

interface ImagingItem {
  title: string;
  image: string;
  modality: string;
  description: string;
}

interface ImagingSectionProps {
  items: ImagingItem[];
}

export default function ImagingSection({
  items,
}: ImagingSectionProps) {
  return (
    <section id="imaging">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Imaging Correlation
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Learn how this anatomical structure appears on different
          medical imaging modalities used in clinical practice.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {items.map((item, index) => (

          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
          >

            <Image
              src={item.image}
              alt={item.title}
              width={900}
              height={700}
              className="h-auto w-full object-cover"
            />

            <div className="p-6">

              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
                {item.modality}
              </span>

              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-700">
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}