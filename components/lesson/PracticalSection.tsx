interface PracticalItem {
  title: string;
  steps: string[];
}

interface PracticalSectionProps {
  items: PracticalItem[];
}

export default function PracticalSection({
  items,
}: PracticalSectionProps) {
  return (
    <section
      id="practical-anatomy"
      className="scroll-mt-28 rounded-3xl bg-white p-8 shadow"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Practical & Laboratory Guide
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          This practical guide is designed to help students identify the
          humerus confidently during osteology demonstrations, anatomy
          practical examinations, and laboratory sessions. Follow each step
          carefully to develop a systematic approach to bone identification
          and orientation.
        </p>
      </div>

      <div className="space-y-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-6"
          >
            <h3 className="text-xl font-bold text-slate-900">
              {item.title}
            </h3>

            <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7 text-slate-700">
              {item.steps.map((step, stepIndex) => (
                <li key={stepIndex}>{step}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}