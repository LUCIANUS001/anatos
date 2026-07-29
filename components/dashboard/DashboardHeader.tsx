export default function DashboardHeader() {
  return (
    <div className="mb-10 rounded-3xl bg-gradient-to-r from-sky-700 to-teal-600 p-8 text-white">
      <p className="text-sm uppercase tracking-widest">
        Welcome Back
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Continue Your Anatomy Journey
      </h1>

      <p className="mt-4 max-w-2xl text-sky-100">
        Resume your lessons, monitor your progress and prepare for your
        practical examinations.
      </p>
    </div>
  );
}