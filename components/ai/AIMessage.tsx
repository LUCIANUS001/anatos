"use client";

import { AIMessage as AIMessageType } from "./types";

interface Props {
  message: AIMessageType;
}

export default function AIMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
          isUser ? "bg-sky-700 text-white" : "bg-slate-100 text-slate-900"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
