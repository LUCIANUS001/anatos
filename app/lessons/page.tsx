import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LessonsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <span className="rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
              Gross Anatomy
            </span>

            <h1 className="mt-5 text-5xl font-bold text-slate-900">
              Humerus
            </h1>

            <p className="mt-3 text-slate-500">
  📚 Estimated Study Time: 20 minutes
</p>

<div className="mt-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
  Beginner Friendly
</div>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              The humerus is the longest bone of the upper arm,
              extending from the shoulder to the elbow. It forms
              joints with the scapula, radius and ulna and provides
              attachment for numerous muscles.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow">

              <h2 className="text-2xl font-bold">
                Learning Objectives
              </h2>

              <ul className="mt-4 space-y-3 text-slate-700">
                <li>✅ Identify the anatomical parts of the humerus.</li>
                <li>✅ Describe its articulations.</li>
                <li>✅ Explain muscle attachments.</li>
                <li>✅ Recognise important clinical correlations.</li>
              </ul>

            </div>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow">

              <h2 className="text-2xl font-bold">
                Clinical Correlation
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Fractures of the surgical neck may injure the axillary
                nerve, leading to weakness of shoulder abduction and
                sensory loss over the lateral shoulder.
              </p>

            </div>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow">

  <h2 className="text-2xl font-bold">
    Key Examination Points
  </h2>

  <ul className="mt-4 space-y-3 text-slate-700">
    <li>📌 Head of the humerus articulates with the glenoid cavity.</li>
    <li>📌 Surgical neck fractures commonly affect the axillary nerve.</li>
    <li>📌 Radial groove transmits the radial nerve.</li>
    <li>📌 Greater and lesser tubercles serve as muscle attachment sites.</li>
    <li>📌 Distally, the humerus articulates with both the radius and ulna.</li>
  </ul>

</div>

<div className="mt-8 rounded-2xl border-l-4 border-teal-600 bg-teal-50 p-6">

  <h2 className="text-2xl font-bold text-teal-800">
    Did You Know?
  </h2>

  <p className="mt-4 leading-7 text-slate-700">
    The humerus is the longest and largest bone of the upper limb.
    Its structure allows both stability and a wide range of movement,
    making it essential for lifting, pushing and pulling actions.
  </p>

</div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="rounded-3xl bg-white p-6 shadow">

              <img
                src="/images/human-anatomy.png"
                alt="Human Anatomy"
                className="mx-auto h-[520px] object-contain"
              />

            </div>

            <div className="mt-6 flex gap-4">

              <button className="flex-1 rounded-xl bg-sky-700 py-3 font-semibold text-white hover:bg-sky-800">
                Previous Lesson
              </button>

              <button className="flex-1 rounded-xl bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700">
                Next Lesson
              </button>

            </div>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow">

  <h2 className="text-2xl font-bold">
    Lesson Progress
  </h2>

  <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">

    <div className="h-4 w-3/4 rounded-full bg-teal-600"></div>

  </div>

  <p className="mt-4 text-slate-600">
    Progress: <strong>75%</strong> Complete
  </p>

</div>

<div className="mt-8">
  <a
    href="/quiz"
    className="block rounded-xl bg-sky-700 py-4 text-center font-semibold text-white transition hover:bg-sky-800"
  >
    Start Lesson Quiz
  </a>
</div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}