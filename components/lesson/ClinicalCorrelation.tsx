interface ClinicalItem {
  title: string;
  description: string;
}

interface ClinicalCorrelationProps {
  items: ClinicalItem[];
}

export default function ClinicalCorrelation({
  items,
}: ClinicalCorrelationProps) {
  return (
    <section
      id="clinical-correlation"
      className="scroll-mt-28 rounded-3xl bg-white p-8 shadow"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Clinical Correlation
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Clinical anatomy bridges basic anatomical knowledge with patient care.
          Understanding these correlations enables students and healthcare
          professionals to explain common injuries, interpret clinical signs,
          understand disease processes, and appreciate the anatomical basis of
          diagnosis and treatment.
        </p>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border-l-4 border-emerald-600 bg-emerald-50 p-6"
          >
            <h3 className="text-xl font-bold text-emerald-700">
              {item.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}