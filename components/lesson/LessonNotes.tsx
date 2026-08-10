"use client";

import { useEffect, useState } from "react";

interface LessonNotesProps {
  lessonId: string;
}

export default function LessonNotes({ lessonId }: LessonNotesProps) {
  const [notes, setNotes] = useState("");

  useEffect(() => {
  function loadNotes() {
    const saved = localStorage.getItem(
      `anatos-notes-${lessonId}`
    );

    setNotes(saved || "");
  }

  loadNotes();

  window.addEventListener("focus", loadNotes);

  return () => {
    window.removeEventListener("focus", loadNotes);
  };
}, [lessonId]);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = event.target.value;

    setNotes(value);

    localStorage.setItem(`anatos-notes-${lessonId}`, value);
  }

  return (
    <section className="mt-10 rounded-3xl bg-white p-8 shadow">
      <h2 className="text-2xl font-bold">Personal Notes</h2>

      <p className="mt-2 text-slate-600">
        Write your own study notes. They are saved automatically.
      </p>

      <textarea
        value={notes}
        onChange={handleChange}
        placeholder="Write your notes here..."
        className="mt-6 min-h-[220px] w-full rounded-2xl border border-slate-300 p-4 outline-none focus:border-sky-600"
      />
    </section>
  );
}
