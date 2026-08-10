interface Landmark {
  name: string;
  description: string;
}

interface AnatomyLandmarksProps {
  title?: string;
  landmarks: Landmark[];
}

export default function AnatomyLandmarks({
  title = "Anatomical Landmarks",
  landmarks,
}: AnatomyLandmarksProps) {
  return (
    <section id="anatomy-landmarks">

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-3 text-slate-600">
          Learn the important anatomical landmarks and understand
          why each structure is clinically significant.
        </p>

      </div>

      <div className="grid gap-5 md:grid-cols-2">

        {landmarks.map((landmark, index) => (

          <div
            key={index}
            className="rounded-2xl border border-sky-100 bg-sky-50 p-6 transition hover:shadow-lg"
          >

            <h3 className="text-xl font-semibold text-sky-800">
              {landmark.name}
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              {landmark.description}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}