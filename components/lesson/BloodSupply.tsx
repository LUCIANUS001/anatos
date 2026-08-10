interface BloodVessel {
  artery: string;
  supply: string;
}

interface BloodSupplyProps {
  vessels: BloodVessel[];
}

export default function BloodSupply({
  vessels,
}: BloodSupplyProps) {
  return (
    <section
      id="blood-supply"
      className="scroll-mt-28 rounded-3xl bg-white p-8 shadow"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">
          Blood Supply
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Understanding the blood supply of the humerus is essential for
          interpreting fractures, bone healing, surgical planning, and
          vascular complications. Injury to the arterial supply may delay
          fracture healing or lead to avascular necrosis of the humeral head.
        </p>
      </div>

      <div className="space-y-6">
        {vessels.map((vessel, index) => (
          <div
            key={index}
            className="rounded-2xl border-l-4 border-red-600 bg-red-50 p-6"
          >
            <h3 className="text-xl font-bold text-red-700">
              {vessel.artery}
            </h3>

            <p className="mt-3 leading-7 text-slate-700">
              {vessel.supply}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}