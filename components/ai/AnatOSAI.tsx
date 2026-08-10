"use client";

import { AIContext } from "./types";

import AIChat from "./AIChat";

interface Props {
  context: AIContext;
}

export default function AnatOSAI({ context }: Props) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold">🤖 AnatOS AI Tutor</h2>

      <p className="mt-4 text-slate-600">Current Lesson:</p>

      <div className="mt-2 rounded-xl bg-slate-100 p-4">
        <p className="font-semibold">{context.lessonTitle}</p>

        <p className="text-sm text-slate-500">{context.lessonId}</p>
      </div>

      <AIChat context={context} />
    </div>
  );
}
