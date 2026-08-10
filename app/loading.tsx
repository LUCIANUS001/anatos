export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="mx-auto h-20 w-20 animate-spin rounded-full border-4 border-slate-300 border-t-sky-600"></div>

        <h1 className="mt-8 text-3xl font-bold text-slate-800">
          Loading AnatOS...
        </h1>

        <p className="mt-3 text-slate-600">
          Preparing your anatomy learning experience.
        </p>
      </div>
    </main>
  );
}
