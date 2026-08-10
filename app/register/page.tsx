"use client";

import Link from "next/link";
import { useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert(
      "Frontend registration completed.\nBackend registration will be connected later.",
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto flex max-w-7xl items-center justify-center px-6 py-16">
        <div className="w-full max-w-lg rounded-3xl bg-white p-10 shadow-xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-slate-900">
              Create Your Account
            </h1>

            <p className="mt-3 text-slate-500">
              Join AnatOS and start mastering Anatomy.
            </p>
          </div>

          <form onSubmit={handleRegister} className="mt-10 space-y-6">
            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="John Doe"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                School / Institution
              </label>

              <input
                type="text"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="University / College"
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
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
                placeholder="Create password"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold text-slate-700">
                Confirm Password
              </label>

              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                required
                className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-sky-600 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-sky-700 py-4 font-semibold text-white transition hover:bg-sky-800"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center text-slate-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-sky-700 hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
