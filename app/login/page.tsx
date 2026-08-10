"use client";

import Link from "next/link";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    alert("Frontend login completed.\nBackend authentication will be connected later.");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto flex max-w-7xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Welcome Back
            </h1>

            <p className="mt-3 text-slate-500">
              Sign in to continue your AnatOS learning journey.
            </p>
          </div>

          <form onSubmit={handleLogin} className="mt-10 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
                required
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
                required
              />
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-sky-700 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-sky-700 py-4 font-semibold text-white transition hover:bg-sky-800"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center text-slate-600">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-sky-700 hover:underline"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}