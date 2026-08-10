"use client";

import { useEffect, useRef, useState } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const suggestions = [
  "Explain the Humerus",
  "Teach me the Brachial Plexus",
  "Histology of Bone",
  "Embryology of the Heart",
  "Revision for Thorax",
  "Quiz me on Skull Bones",
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AITutorPage() {
  const [question, setQuestion] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Welcome to AnatOS AI Tutor. Ask me any anatomy question.",
    },
  ]);

  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("anatos-ai-chat");

    if (saved) {
      setMessages(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("anatos-ai-chat", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, isThinking]);

  function handleAskAI(customQuestion?: string) {
    const currentQuestion = customQuestion ?? question;

    if (!currentQuestion.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: currentQuestion,
    };

    setMessages((previous) => [...previous, userMessage]);

    setQuestion("");

    setIsThinking(true);

    setTimeout(() => {
      const aiMessage: Message = {
        role: "assistant",
        content: "AI connection coming soon. AnatOS received your question.",
      };

      setMessages((previous) => [...previous, aiMessage]);

      setIsThinking(false);
    }, 3000);
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-violet-700 to-sky-700 p-10 text-white">
          <h1 className="text-5xl font-bold">AI Anatomy Tutor</h1>

          <p className="mt-4 max-w-3xl text-violet-100">
            Ask questions about anatomy, histology, embryology, neuroanatomy and
            clinical anatomy.
          </p>

          <div className="mt-8 flex gap-4">
            <input
              ref={inputRef}
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleAskAI();
                }
              }}
              placeholder="Ask your anatomy question..."
              className="flex-1 rounded-xl border border-slate-300 bg-white p-5 text-lg font-medium text-slate-900 placeholder:text-slate-400 shadow-sm outline-none transition focus:border-violet-600 focus:ring-2 focus:ring-violet-200"
            />

            <button
              onClick={() => handleAskAI()}
              className="h-[60px] rounded-xl bg-white px-8 font-semibold text-violet-700 shadow-sm transition hover:bg-slate-100"
            >
              Ask AI
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">Suggested Questions</h2>

            <div className="mt-6 space-y-4">
              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    handleAskAI(item);
                  }}
                  className="w-full rounded-xl border border-slate-200 p-4 text-left font-medium transition hover:bg-slate-50"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">AI Response</h2>

              <button
                onClick={() =>
                  setMessages([
                    {
                      role: "assistant",
                      content:
                        "Welcome to AnatOS AI Tutor. Ask me any anatomy question.",
                    },
                  ])
                }
                className="rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-600 transition hover:bg-red-100"
              >
                🗑️ Clear Chat
              </button>
            </div>

            <div
              ref={chatContainerRef}
              className="mt-6 max-h-[500px] space-y-4 overflow-y-auto"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={
                    message.role === "user"
                      ? "rounded-2xl bg-sky-50 p-5"
                      : "rounded-2xl bg-slate-100 p-5"
                  }
                >
                  <p
                    className={`text-sm font-semibold ${
                      message.role === "user"
                        ? "text-sky-700"
                        : "text-violet-700"
                    }`}
                  >
                    {message.role === "user" ? "You" : "AnatOS AI"}
                  </p>

                  <p className="mt-2 leading-8 text-slate-700">
                    {message.content}
                  </p>
                </div>
              ))}

              {isThinking && (
                <div className="rounded-2xl bg-slate-100 p-5">
                  <p className="text-sm font-semibold text-violet-700">
                    AnatOS AI
                  </p>

                  <p className="mt-2 flex items-center gap-2 text-slate-600">
                    <span>Thinking</span>

                    <span className="animate-bounce">.</span>

                    <span className="animate-bounce [animation-delay:200ms]">
                      .
                    </span>

                    <span className="animate-bounce [animation-delay:400ms]">
                      .
                    </span>
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow">
            <h2 className="text-2xl font-bold">AI Features</h2>

            <div className="mt-6 grid gap-4">
              <div className="rounded-xl bg-violet-50 p-5">
                🧠 Explain complex anatomy concepts
              </div>

              <div className="rounded-xl bg-sky-50 p-5">
                📚 Generate revision summaries
              </div>

              <div className="rounded-xl bg-green-50 p-5">
                ❓ Create practice quiz questions
              </div>

              <div className="rounded-xl bg-orange-50 p-5">
                🩺 Explain clinical correlations
              </div>

              <div className="rounded-xl bg-indigo-50 p-5">
                🔬 Help with histology and embryology
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-10 text-white">
          <h2 className="text-3xl font-bold">Coming Soon</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white/10 p-5">
              💬 Real AI Conversation
            </div>

            <div className="rounded-xl bg-white/10 p-5">🎤 Voice Questions</div>

            <div className="rounded-xl bg-white/10 p-5">
              🖼️ Image-Based Anatomy Help
            </div>

            <div className="rounded-xl bg-white/10 p-5">
              📝 AI Study Planner
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
