import Link from "next/link";
import { BookOpen, Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-sky-700 p-2 text-white">
            <BookOpen size={20} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-sky-700">AnatOS</h1>

            <p className="text-xs text-slate-500">Anatomy Operating System</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-slate-600 hover:text-sky-700">
            Home
          </Link>

          <Link href="/courses" className="text-slate-600 hover:text-sky-700">
            Courses
          </Link>

          <Link
            href="/practical-lab"
            className="text-slate-600 hover:text-sky-700"
          >
            Practicals
          </Link>

          <Link href="/revision" className="text-slate-600 hover:text-sky-700">
            Revision
          </Link>

          <Link href="/dashboard" className="text-slate-600 hover:text-sky-700">
            Dashboard
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="/search"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-sky-700"
          >
            <Search size={20} />
          </Link>

          <Link
            href="/login"
            className="rounded-lg px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-slate-100 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-200"
          >
            Register
          </Link>

          <Link
            href="/profile"
            className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-sky-700"
          >
            <User size={20} />
          </Link>

          <Link
            href="/ai-tutor"
            className="rounded-lg bg-sky-700 px-5 py-2 font-medium text-white transition hover:bg-sky-800"
          >
            AI Tutor
          </Link>
        </div>
      </div>
    </header>
  );
}
