"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotesPage() {
  const [notes, setNotes] = useState<{ lesson: string; content: string }[]>([]);

  useEffect(() => {
    const allNotes: { lesson: string; content: string }[] = [];

    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("anatos-notes-")) {
        const lesson = key.replace("anatos-notes-", "");

        const content = localStorage.getItem(key) || "";

        allNotes.push({
          lesson,
          content,
        });
      }
    });

    setNotes(allNotes);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-600 p-10 text-white">
          <h1 className="text-5xl font-bold">My Notes</h1>

          <p className="mt-4 max-w-2xl text-sky-100">
            View, organise and manage all your personal anatomy notes.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow">
          <h2 className="text-2xl font-bold">Saved Notes</h2>

          {notes.length > 0 ? (
            <div className="mt-6 space-y-6">
              {notes.map((note) => (
                <div
                  key={note.lesson}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <h3 className="text-lg font-bold capitalize text-sky-700">
                    {note.lesson}
                  </h3>

                  <p className="mt-4 whitespace-pre-wrap text-slate-700">
                    {note.content}
                  </p>

                  <button
                    onClick={() => {
                      localStorage.removeItem(`anatos-notes-${note.lesson}`);

                      setNotes((previous) =>
                        previous.filter((item) => item.lesson !== note.lesson),
                      );
                    }}
                    className="mt-5 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                  >
                    Delete Note
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-slate-600">
              You have not written any notes yet.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
