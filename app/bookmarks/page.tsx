import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const savedLessons = [
  "Humerus",
  "Femur",
  "Scapula",
  "Thoracic Vertebrae",
];

const savedFlashcards = [
  "Bones of the Skull",
  "Cranial Nerves",
  "Muscles of Mastication",
];

export default function BookmarksPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-10 text-white">

          <h1 className="text-5xl font-bold">
            My Bookmarks
          </h1>

          <p className="mt-4 max-w-2xl text-orange-100">
            Access all your saved anatomy lessons, practical notes and
            favourite flashcards in one place.
          </p>

        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">

          <div className="rounded-3xl bg-white p-6 shadow">

            <h2 className="text-lg font-semibold text-slate-500">
              Saved Lessons
            </h2>

            <p className="mt-3 text-4xl font-bold text-orange-600">
              12
            </p>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow">

            <h2 className="text-lg font-semibold text-slate-500">
              Saved Flashcards
            </h2>

            <p className="mt-3 text-4xl font-bold text-sky-700">
              28
            </p>

          </div>

          <div className="rounded-3xl bg-white p-6 shadow">

            <h2 className="text-lg font-semibold text-slate-500">
              Practical Notes
            </h2>

            <p className="mt-3 text-4xl font-bold text-teal-600">
              9
            </p>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Saved Lessons
            </h2>

            <div className="mt-6 space-y-4">

              {savedLessons.map((lesson) => (

                <div
                  key={lesson}
                  className="flex items-center justify-between rounded-xl border p-4"
                >

                  <span className="font-semibold">
                    {lesson}
                  </span>

                  <button className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600">
                    Open
                  </button>

                </div>

              ))}

            </div>

          </div>
          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Favourite Flashcards
            </h2>

            <div className="mt-6 space-y-4">

              {savedFlashcards.map((card) => (

                <div
                  key={card}
                  className="flex items-center justify-between rounded-xl border p-4"
                >

                  <span className="font-semibold">
                    {card}
                  </span>

                  <button className="rounded-lg bg-sky-700 px-4 py-2 text-white hover:bg-sky-800">
                    Review
                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Continue Learning
          </h2>

          <p className="mt-4 text-slate-300">
            Resume your saved lessons and keep your anatomy revision organised.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              📚 Open Saved Lessons
            </button>

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              📝 View Notes
            </button>

            <button className="rounded-xl bg-white/10 p-5 hover:bg-white/20">
              🧠 Practice Flashcards
            </button>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}