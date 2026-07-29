import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const flashcards = [
  {
    id: 1,
    title: "Humerus",
    question: "What is the humerus?",
    answer:
      "The humerus is the longest bone of the upper limb. It extends from the shoulder to the elbow and articulates with the scapula, radius and ulna.",
    category: "Gross Anatomy",
  },
  {
    id: 2,
    title: "Scapula",
    question: "Where is the scapula located?",
    answer:
      "The scapula is a flat triangular bone located on the posterior thoracic wall.",
    category: "Gross Anatomy",
  },
  {
    id: 3,
    title: "Femur",
    question: "Which is the longest bone in the human body?",
    answer:
      "The femur is the longest and strongest bone in the human body.",
    category: "Osteology",
  },
  {
    id: 4,
    title: "Radius",
    question: "Which side of the forearm is the radius found?",
    answer:
      "The radius is located on the lateral (thumb) side of the forearm.",
    category: "Upper Limb",
  },
  {
    id: 5,
    title: "Ulna",
    question: "Which bone forms the point of the elbow?",
    answer:
      "The olecranon process of the ulna forms the point of the elbow.",
    category: "Upper Limb",
  },
  {
    id: 6,
    title: "Skull",
    question: "How many bones make up the adult skull?",
    answer:
      "The adult skull consists of 22 bones.",
    category: "Head & Neck",
  },
];

export default function FlashcardsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-white">

          <h1 className="text-5xl font-bold">
            Anatomy Flashcards
          </h1>

          <p className="mt-4 max-w-2xl text-cyan-100">
            Quickly revise anatomy concepts using interactive flashcards.
            Designed for rapid revision before practicals and examinations.
          </p>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {flashcards.map((card) => (

            <div
              key={card.id}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
                {card.category}
              </span>

              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                {card.title}
              </h2>

              <div className="mt-6">
                <h3 className="font-semibold text-sky-700">
                  Question
                </h3>

                <p className="mt-2 text-slate-700 leading-7">
                  {card.question}
                </p>
              </div>

              <div className="mt-6 rounded-2xl bg-slate-100 p-4">

                <h3 className="font-semibold text-teal-700">
                  Answer
                </h3>

                <p className="mt-2 text-slate-700 leading-7">
                  {card.answer}
                </p>

              </div>
              <div className="mt-8 flex gap-3">

                <button className="flex-1 rounded-xl bg-sky-700 py-3 font-semibold text-white transition hover:bg-sky-800">
                  Previous
                </button>

                <button className="flex-1 rounded-xl bg-teal-600 py-3 font-semibold text-white transition hover:bg-teal-700">
                  Next
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-slate-900">
              Study Progress
            </h2>

            <div className="mt-6 h-4 overflow-hidden rounded-full bg-slate-200">
              <div className="h-4 w-2/3 rounded-full bg-teal-600"></div>
            </div>

            <p className="mt-4 text-slate-600">
              24 of 36 flashcards reviewed today.
            </p>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold text-slate-900">
              Daily Revision Tip
            </h2>

            <p className="mt-5 leading-8 text-slate-700">
              Review your flashcards at least three times:
              once after class, once before sleeping,
              and once before your practical session.
              This improves long-term memory and recall.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}