interface Nerve {
  nerve: string;
  significance: string;
}

interface NerveSupplyProps {
  nerves: Nerve[];
}

export default function NerveSupply({
  nerves,
}: NerveSupplyProps) {
  return (
    <section
      id="nerve-supply"
      className="scroll-mt-28 rounded-3xl bg-white p-8 shadow"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Nerve Supply
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Knowledge of the nerves related to the humerus is essential for
          understanding upper limb function, diagnosing nerve injuries, and
          interpreting the neurological deficits associated with fractures.
          Because several major nerves lie in close relation to the humerus,
          fractures at different levels may produce characteristic patterns of
          motor weakness and sensory loss.
        </p>
      </div>

      <div className="space-y-6">
        {nerves.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border-l-4 border-indigo-600 bg-indigo-50 p-6"
          >
            <h3 className="text-xl font-bold text-indigo-700">
              {item.nerve}
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              {item.significance}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}