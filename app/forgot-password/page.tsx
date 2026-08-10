"use client";

import Link from "next/link";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  function handleResetPassword(e: React.FormEvent) {
    e.preventDefault();

    alert(
      "Password reset request received.\nBackend email service will be connected later.",
    );

    setEmail("");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto flex max-w-7xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Forgot Password
            </h1>

            <p className="mt-3 text-slate-500">
              Enter your email address and we'll send you instructions to reset
              your password.
            </p>
          </div>

          <form onSubmit={handleResetPassword} className="mt-10 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-sky-700 py-4 font-semibold text-white transition hover:bg-sky-800"
            >
              Send Reset Link
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link
              href="/login"
              className="font-semibold text-sky-700 hover:underline"
            >
              ← Back to Login
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
