export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 px-6 py-10 text-white">

      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">

        <div>
          <h2 className="text-3xl font-bold text-sky-400">
            AnatOS
          </h2>

          <p className="mt-3 text-slate-400">
            Anatomy Operating System — a digital learning ecosystem
            for medical and health science students.
          </p>
        </div>


        <div>
          <h3 className="font-bold">
            Platform
          </h3>

          <ul className="mt-3 space-y-2 text-slate-400">
            <li>Courses</li>
            <li>Practical Lab</li>
            <li>Quiz Centre</li>
            <li>AI Tutor</li>
          </ul>
        </div>


        <div>
          <h3 className="font-bold">
            Future Features
          </h3>

          <ul className="mt-3 spanpce-y-2 text-slate-400">
            <li>3D Anatomy Viewer</li>
            <li>Virtual Laboratory</li>
            <li>AI Learning Assistant</li>
            <li>Medical Simulations</li>
          </ul>
        </div>

      </div>


      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-5 text-sm text-slate-500">
        © 2026 AnatOS. Built for the future of anatomy education.
      </div>

    </footer>
  );
}