import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const categories = [
  "Bones",
  "Muscles",
  "Joints",
  "Nerves",
  "Arteries",
  "Veins",
  "Histology",
  "Embryology",
  "Neuroanatomy",
  "Practical Anatomy",
];

const recentSearches = [
  "Humerus",
  "Femur",
  "Median Nerve",
  "Brachial Plexus",
];

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-cyan-600 p-10 text-white">

          <h1 className="text-5xl font-bold">
            Anatomy Search
          </h1>

          <p className="mt-4 max-w-2xl text-cyan-100">
            Search anatomy lessons, bones, muscles, nerves,
            quizzes, practicals and revision notes.
          </p>

          <input
            type="text"
            placeholder="Search anything in AnatOS..."
            className="mt-8 w-full rounded-2xl border-0 bg-white p-5 text-lg text-slate-800 outline-none"
          />

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Browse Categories
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4">

              {categories.map((category) => (

                <button
                  key={category}
                  className="rounded-xl bg-sky-50 p-4 text-left font-semibold text-sky-700 transition hover:bg-sky-700 hover:text-white"
                >
                  {category}
                </button>

              ))}

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Recent Searches
            </h2>

            <div className="mt-6 space-y-4">

              {recentSearches.map((item) => (

                <div
                  key={item}
                  className="flex items-center justify-between rounded-xl border p-4"
                >

                  <span className="font-semibold">
                    {item}
                  </span>

                  <button className="rounded-lg bg-sky-700 px-4 py-2 text-white hover:bg-sky-800">
                    Open
                  </button>

                </div>

              ))}

            </div>

          </div>
          <div className="mt-10 rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Popular Anatomy Topics
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="font-bold text-sky-700">🦴 Osteology</h3>
                <p className="mt-2 text-slate-600">
                  Bones, landmarks and articulations.
                </p>
              </div>

              <div className="rounded-2xl bg-green-50 p-5">
                <h3 className="font-bold text-green-700">💪 Myology</h3>
                <p className="mt-2 text-slate-600">
                  Muscles, attachments and actions.
                </p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-5">
                <h3 className="font-bold text-purple-700">🧠 Neuroanatomy</h3>
                <p className="mt-2 text-slate-600">
                  Brain, spinal cord and cranial nerves.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <h3 className="font-bold text-orange-700">🔬 Histology</h3>
                <p className="mt-2 text-slate-600">
                  Microscopic anatomy and tissues.
                </p>
              </div>

            </div>

          </div>

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">

            <h2 className="text-3xl font-bold">
              Search Suggestions
            </h2>

            <div className="mt-8 flex flex-wrap gap-4">

              {[
                "Humerus",
                "Femur",
                "Scapula",
                "Clavicle",
                "Radius",
                "Ulna",
                "Pelvis",
                "Heart",
                "Lungs",
                "Kidney",
                "Brachial Plexus",
                "Cranial Nerves",
              ].map((topic) => (

                <button
                  key={topic}
                  className="rounded-full bg-white/10 px-5 py-3 transition hover:bg-white/20"
                >
                  {topic}
                </button>

              ))}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}