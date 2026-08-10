"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect, useState } from "react";

export default function HistoryPage() {
  const [history, setHistory] = useState<
    {
      lessonId: string;
      lessonTitle: string;
      lastOpened: number;
    }[]
  >([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("anatos-reading-history") || "[]",
    );

    setHistory(saved);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-sky-600 p-10 text-white">
          <h1 className="text-5xl font-bold">Reading History</h1>

          <p className="mt-4 max-w-2xl text-indigo-100">
            View the lessons you've recently studied and continue where you left
            off.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-2xl font-bold">Recently Viewed Lessons</h2>

          {history.length > 0 ? (
            <div className="mt-6 space-y-6">
              {history.map((item) => (
                <div
                  key={item.lessonId}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="text-lg font-bold text-indigo-700">
                    {item.lessonTitle}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    Last Opened: {new Date(item.lastOpened).toLocaleString()}
                  </p>

                  <button
                    onClick={() => {
                      window.location.href = "/lessons";
                    }}
                    className="mt-5 rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
                  >
                    Continue
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-slate-600">
              You haven't opened any lessons yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
