import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const suggestions = [
  "Explain the Humerus",
  "Teach me the Brachial Plexus",
  "Histology of Bone",
  "Embryology of the Heart",
  "Revision for Thorax",
  "Quiz me on Skull Bones",
];

export default function AITutorPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-violet-700 to-sky-700 p-10 text-white">

          <h1 className="text-5xl font-bold">
            AI Anatomy Tutor
          </h1>

          <p className="mt-4 max-w-3xl text-violet-100">
            Ask questions about anatomy, histology, embryology,
            neuroanatomy and clinical anatomy. Tomorrow this page
            will be connected to AI.
          </p>

          <div className="mt-8 flex gap-4">

            <input
              type="text"
              placeholder="Ask your anatomy question..."
              className="flex-1 rounded-xl p-5 text-slate-800 outline-none"
            />

            <button className="rounded-xl bg-white px-8 font-semibold text-violet-700 hover:bg-slate-100">
              Ask AI
            </button>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              Suggested Questions
            </h2>

            <div className="mt-6 space-y-4">

              {suggestions.map((question) => (

                <button
                  key={question}
                  className="w-full rounded-xl border p-4 text-left font-medium hover:bg-slate-50"
                >
                  {question}
                </button>

              ))}

            </div>

          </div>

          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              AI Response
            </h2>

            <div className="mt-6 rounded-2xl bg-slate-100 p-6">

              <p className="leading-8 text-slate-700">
                Welcome to the AnatOS AI Tutor.
                Tomorrow this page will become fully functional after
                backend integration.
              </p>

            </div>

          </div>
          <div className="rounded-3xl bg-white p-8 shadow">

            <h2 className="text-2xl font-bold">
              AI Features
            </h2>

            <div className="mt-6 grid gap-4">

              <div className="rounded-xl bg-violet-50 p-5">
                🧠 Explain complex anatomy concepts
              </div>

              <div className="rounded-xl bg-sky-50 p-5">
                📚 Generate revision summaries
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                ❓ Create practice quiz questions
              </div>

              <div className="rounded-xl bg-orange-50 p-5">
                🩺 Explain clinical correlations
              </div>

              <div className="rounded-xl bg-indigo-50 p-5">
                🔬 Help with histology and embryology
              </div>

            </div>

          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">

          <h2 className="text-3xl font-bold">
            Coming Tomorrow
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-xl bg-white/10 p-5">
              💬 Real AI Conversation
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              🎤 Voice Questions
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              🖼️ Image-Based Anatomy Help
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              📝 AI Study Planner
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}