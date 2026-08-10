"use client";

import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

export default function AIInput({ onSend }: Props) {
  const [value, setValue] = useState("");

  function send() {
    if (!value.trim()) return;

    onSend(value);

    setValue("");
  }

  return (
    <div className="mt-4 flex gap-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Ask AnatOS AI..."
        className="flex-1 rounded-xl border border-slate-300 px-4 py-3 outline-none"
      />

      <button onClick={send} className="rounded-xl bg-sky-700 px-6 text-white">
        Send
      </button>
    </div>
  );
}
