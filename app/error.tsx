"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-bold text-red-600">Oops!</h1>

        <h2 className="mt-6 text-3xl font-bold text-slate-800">
          Something went wrong
        </h2>

        <p className="mt-4 text-slate-600">
          AnatOS encountered an unexpected error.
        </p>

        <p className="mt-2 text-sm text-slate-500 break-words">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-xl bg-sky-700 px-8 py-4 font-semibold text-white transition hover:bg-sky-800"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
