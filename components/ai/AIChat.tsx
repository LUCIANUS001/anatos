"use client";

import { useState } from "react";

import AIInput from "./AIInput";
import AIMessage from "./AIMessage";

import { AIMessage as Message } from "./types";

import { AIContext } from "./types";
import { buildPrompt } from "./buildPrompt";

interface Props {
  context: AIContext;
}

export default function AIChat({ context }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello 👋 I am your AnatOS AI Tutor. Ask me anything about this lesson.",
    },
  ]);

  async function send(message: string) {
    // Show user's message immediately
    const userMessage = {
      id: crypto.randomUUID(),
      role: "user" as const,
      content: message,
    };

    setMessages((prev) => [...prev, userMessage]);

    // Build lesson-aware prompt
    const prompt = buildPrompt(context, message);

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: "Unable to contact AnatOS AI.",
        },
      ]);
    }
  }

  return (
    <>
      <div className="mt-6 space-y-4">
        {messages.map((message) => (
          <AIMessage key={message.id} message={message} />
        ))}
      </div>

      <AIInput onSend={send} />
    </>
  );
}
