import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-8xl font-bold text-sky-700">404</h1>

        <h2 className="mt-6 text-4xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-4 text-lg text-slate-600">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-xl bg-sky-700 px-8 py-4 font-semibold text-white transition hover:bg-sky-800"
        >
          Back to Dashboard
        </Link>
      </div>
    </main>
  );
}
