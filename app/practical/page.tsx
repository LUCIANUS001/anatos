import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const practicals = [
  {
    title: "Osteology",
    description: "Study bones, landmarks and identification.",
    colour: "bg-sky-100",
  },
  {
    title: "Histology",
    description: "Microscope slide identification and tissue recognition.",
    colour: "bg-emerald-100",
  },
  {
    title: "Embryology",
    description: "Stages of human development and embryo models.",
    colour: "bg-amber-100",
  },
  {
    title: "Radiological Anatomy",
    description: "Interpret X-rays, CT scans and MRI images.",
    colour: "bg-violet-100",
  },
  {
    title: "Surface Anatomy",
    description: "Body landmarks and clinical surface marking.",
    colour: "bg-rose-100",
  },
  {
    title: "OSPE Preparation",
    description: "Timed practical examination practice.",
    colour: "bg-cyan-100",
  },
];

export default function PracticalPage() {
  return (
    <main className="min-h-screen bg-slate-100">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-white">
          <h1 className="text-5xl font-bold">
            Practical Laboratory
          </h1>

          <p className="mt-4 max-w-3xl text-sky-100">
            Prepare for practical examinations with specimen identification,
            histology, osteology, radiology and OSPE practice.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {practicals.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`mb-5 inline-block rounded-full px-4 py-2 ${item.colour}`}>
                {item.title}
              </div>

              <p className="leading-7 text-slate-600">
                {item.description}
              </p>

              <button className="mt-8 rounded-xl bg-sky-700 px-5 py-3 font-semibold text-white hover:bg-sky-800">
                Start Practical
              </button>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}