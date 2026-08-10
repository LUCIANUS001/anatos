"use client";

import { useEffect, useMemo, useState } from "react";

interface MCQOption {
  id: string;
  text: string;
}

interface MCQ {
  id: string | number;
  question: string;
  options: MCQOption[];
  answer: string;
  explanation: string;
  topic?: string;
  difficulty?: "easy" | "medium" | "hard";
}

interface Props {
  items: MCQ[];
}

export default function MCQRevision({ items }: Props) {
  const STORAGE_KEY = "anatos-mcq-progress";

  const [current, setCurrent] = useState(0);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    const data = JSON.parse(saved);

    setCurrent(data.current ?? 0);
    setAnswers(data.answers ?? {});
    setFinished(data.finished ?? false);
  }, []);
  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        current,
        answers,
        finished,
      }),
    );
  }, [current, answers, finished]);

  const question = items[current];

  const selected = answers[String(question.id)];

  function chooseAnswer(optionId: string) {
    if (finished) return;

    setAnswers((prev) => ({
      ...prev,
      [String(question.id)]: optionId,
    }));
  }

  function nextQuestion() {
    if (current < items.length - 1) {
      setCurrent((p) => p + 1);
    }
  }

  function previousQuestion() {
    if (current > 0) {
      setCurrent((p) => p - 1);
    }
  }

  function finishExam() {
    setFinished(true);
  }

  const score = useMemo(() => {
    return items.filter((q) => answers[String(q.id)] === q.answer).length;
  }, [answers, items]);

  const percentage = Math.round((score / items.length) * 100);

  const wrongQuestions = useMemo(() => {
    return items.filter((q) => answers[String(q.id)] !== q.answer);
  }, [answers, items]);

  const weakTopics = useMemo(() => {
    const map = new Map<string, number>();

    wrongQuestions.forEach((q) => {
      const topic = q.topic ?? "General";

      map.set(topic, (map.get(topic) ?? 0) + 1);
    });

    return [...map.entries()].sort((a, b) => b[1] - a[1]);
  }, [wrongQuestions]);
  if (finished) {
    return (
      <div className="space-y-8 rounded-xl border bg-white p-6 shadow">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Exam Completed</h2>

          <p className="mt-4 text-xl">
            Score: <strong>{score}</strong> / {items.length}
          </p>

          <p className="text-lg">
            Percentage: <strong>{percentage}%</strong>
          </p>
        </div>

        {weakTopics.length > 0 && (
          <section>
            <h3 className="mb-4 text-2xl font-semibold">Weak Topics</h3>

            <div className="space-y-2">
              {weakTopics.map(([topic, count]) => (
                <div key={topic} className="rounded-lg border bg-red-50 p-3">
                  <strong>{topic}</strong> — {count} mistake(s)
                </div>
              ))}
            </div>
          </section>
        )}

        <section>
          <h3 className="mb-4 text-2xl font-semibold">
            Wrong Questions Review
          </h3>

          <div className="space-y-6">
            {wrongQuestions.map((q) => (
              <div key={q.id} className="rounded-xl border p-5">
                <h4 className="font-semibold">{q.question}</h4>

                <p className="mt-3 text-red-600">
                  Your Answer: {answers[String(q.id)] ?? "No Answer"}
                </p>

                <p className="text-green-700">Correct Answer: {q.answer}</p>

                <div className="mt-4 rounded-lg bg-slate-50 p-3">
                  {q.explanation}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-8 rounded-xl border bg-white p-6 shadow">
      <div className="flex items-center justify-between text-sm text-slate-500">
        <span>
          Question {current + 1} of {items.length}
        </span>

        <span>
          Answered {Object.keys(answers).length} / {items.length}
        </span>
      </div>

      <h2 className="text-2xl font-semibold">{question.question}</h2>

      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => chooseAnswer(option.id)}
            className={`w-full rounded-lg border p-4 text-left transition ${
              selected === option.id
                ? "border-blue-600 bg-blue-100"
                : "hover:bg-slate-50"
            }`}
          >
            <strong>{option.id}.</strong> {option.text}
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={previousQuestion}
          disabled={current === 0}
          className="rounded-lg border px-5 py-2 disabled:opacity-40"
        >
          Previous
        </button>

        {current === items.length - 1 ? (
          <button
            onClick={finishExam}
            className="rounded-lg bg-green-600 px-5 py-2 text-white"
          >
            Finish Test
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="rounded-lg bg-slate-900 px-5 py-2 text-white"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
