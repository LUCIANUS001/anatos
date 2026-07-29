import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LessonPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      <Navbar />

      <section className="mx-auto max-w-6xl px-6 py-10">

        <div className="rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-10 text-white">

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            Upper Limb • Osteology
          </span>

          <h1 className="mt-6 text-5xl font-bold">
            Humerus
          </h1>

          <p className="mt-4 max-w-3xl text-cyan-100">
            Comprehensive study of the humerus including anatomy,
            relations, blood supply, ossification, muscle attachments,
            clinical anatomy and examination preparation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <div className="rounded-xl bg-white/10 px-5 py-3">
              ⭐ Difficulty: Intermediate
            </div>

            <div className="rounded-xl bg-white/10 px-5 py-3">
              ⏱ Reading Time: 25 mins
            </div>

            <div className="rounded-xl bg-white/10 px-5 py-3">
              📝 12 Sections
            </div>

          </div>

        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">

          <aside className="rounded-3xl bg-white p-8 shadow h-fit">

            <h2 className="text-2xl font-bold">
              Lesson Outline
            </h2>

            <ul className="mt-6 space-y-3 text-slate-700">

              <li>• Learning Objectives</li>
              <li>• Definition</li>
              <li>• Anatomical Position</li>
              <li>• Features</li>
              <li>• Muscle Attachments</li>
              <li>• Blood Supply</li>
              <li>• Nerve Supply</li>
              <li>• Ossification</li>
              <li>• Clinical Anatomy</li>
              <li>• Viva Questions</li>
              <li>• MCQs</li>
              <li>• Summary</li>

            </ul>

          </aside>

          <div className="lg:col-span-2 space-y-8">

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold">
                Learning Objectives
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-700">

                <li>Identify the humerus correctly.</li>
                <li>Describe all anatomical features.</li>
                <li>Explain muscle attachments.</li>
                <li>Describe blood and nerve supply.</li>
                <li>Understand common clinical conditions.</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold">
                Definition
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The humerus is the longest bone of the upper limb.
                It extends from the shoulder to the elbow and forms
                articulations with the scapula, radius and ulna.
                It serves as an attachment site for numerous muscles
                and transmits neurovascular structures along the arm.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold">
                Anatomical Features
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-2">

                <div className="rounded-xl bg-sky-50 p-5">
                  • Head
                </div>

                <div className="rounded-xl bg-sky-50 p-5">
                  • Anatomical Neck
                </div>

                <div className="rounded-xl bg-sky-50 p-5">
                  • Surgical Neck
                </div>

                <div className="rounded-xl bg-sky-50 p-5">
                  • Greater Tubercle
                </div>

                <div className="rounded-xl bg-sky-50 p-5">
                  • Lesser Tubercle
                </div>

                <div className="rounded-xl bg-sky-50 p-5">
                  • Deltoid Tuberosity
                </div>

              </div>

            </div>
            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold">
                Muscle Attachments
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-700">

                <li>Deltoid → Deltoid Tuberosity</li>
                <li>Pectoralis Major → Lateral Lip of Intertubercular Sulcus</li>
                <li>Latissimus Dorsi → Floor of Intertubercular Sulcus</li>
                <li>Teres Major → Medial Lip of Intertubercular Sulcus</li>
                <li>Supraspinatus → Greater Tubercle</li>
                <li>Infraspinatus → Greater Tubercle</li>
                <li>Teres Minor → Greater Tubercle</li>
                <li>Subscapularis → Lesser Tubercle</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold">
                Blood Supply
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                The humerus receives its blood supply mainly from the
                nutrient artery and branches of the anterior and posterior
                circumflex humeral arteries.
              </p>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold">
                Nerve Supply & Clinical Anatomy
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                Fractures at the surgical neck commonly endanger the
                axillary nerve, while fractures of the radial groove may
                affect the radial nerve, leading to wrist drop.
              </p>

            </div>

            <div className="rounded-3xl bg-amber-50 border-l-4 border-amber-500 p-8">

              <h2 className="text-3xl font-bold text-amber-800">
                💡 Examination Tips
              </h2>

              <ul className="mt-5 list-disc space-y-3 pl-6 text-amber-900">

                <li>Know every landmark on the humerus.</li>
                <li>Memorise muscle attachments.</li>
                <li>Know the nerves injured in common fractures.</li>
                <li>Understand ossification centres.</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-indigo-50 p-8">

              <h2 className="text-3xl font-bold text-indigo-800">
                Spotter Questions
              </h2>

              <ol className="mt-6 list-decimal space-y-3 pl-6">

                <li>Identify the bone.</li>
                <li>Side the bone.</li>
                <li>Name four important landmarks.</li>
                <li>Name three muscle attachments.</li>
                <li>State one important clinical correlation.</li>

              </ol>

            </div>

            <div className="rounded-3xl bg-green-50 p-8">

              <h2 className="text-3xl font-bold text-green-800">
                Viva Questions
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6">

                <li>Which nerve is injured in a surgical neck fracture?</li>
                <li>What muscles attach to the greater tubercle?</li>
                <li>What is the function of the deltoid muscle?</li>
                <li>How do you side a humerus?</li>

              </ul>

            </div>

            <div className="rounded-3xl bg-white p-8 shadow">

              <h2 className="text-3xl font-bold">
                Key Takeaways
              </h2>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-700">

                <li>The humerus is the longest bone of the upper limb.</li>
                <li>It articulates with the scapula, radius and ulna.</li>
                <li>It provides attachment for many muscles.</li>
                <li>Its fractures have important clinical implications.</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}