"use client";

import { useEffect, useMemo, useState } from "react";

import { updateLessonProgress } from "@/lib/progress/progress";

import { refreshLessonCompletion } from "@/lib/progress/completion";

interface VivaQuestion {
  question: string;
  answer?: string;
}

interface VivaQuestionsProps {
  questions: VivaQuestion[];
}

interface VivaProgress {
  currentQuestion: number;
  revealed: boolean;
  completedQuestions: number[];
  revisionQuestions: number[];
  finished: boolean;
}

const STORAGE_KEY = "anatos-viva-progress";

export default function VivaQuestions({ questions }: VivaQuestionsProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [revealed, setRevealed] = useState(false);

  const [completedQuestions, setCompletedQuestions] = useState<number[]>([]);

  const [revisionQuestions, setRevisionQuestions] = useState<number[]>([]);

  const [finished, setFinished] = useState(false);

  const [savedProgress, setSavedProgress] = useState<VivaProgress | null>(null);

  const [showResumePrompt, setShowResumePrompt] = useState(false);

  const activeQuestion = useMemo(() => {
    return questions[currentQuestion];
  }, [questions, currentQuestion]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) return;

    try {
      const progress = JSON.parse(saved) as VivaProgress;

      if (
        progress.currentQuestion > 0 ||
        progress.completedQuestions.length > 0 ||
        progress.revisionQuestions.length > 0
      ) {
        setSavedProgress(progress);

        setShowResumePrompt(true);
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);
  useEffect(() => {
    if (showResumePrompt) return;

    const progress: VivaProgress = {
      currentQuestion,

      revealed,

      completedQuestions,

      revisionQuestions,

      finished,
    };

    if (
      currentQuestion === 0 &&
      completedQuestions.length === 0 &&
      revisionQuestions.length === 0 &&
      !revealed &&
      !finished
    ) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [
    currentQuestion,
    revealed,
    completedQuestions,
    revisionQuestions,
    finished,
    showResumePrompt,
  ]);

  function continueViva() {
    if (!savedProgress) {
      setShowResumePrompt(false);

      return;
    }

    setCurrentQuestion(savedProgress.currentQuestion);

    setRevealed(savedProgress.revealed);

    setCompletedQuestions(savedProgress.completedQuestions);

    setRevisionQuestions(savedProgress.revisionQuestions);

    setFinished(savedProgress.finished);

    setShowResumePrompt(false);
  }

  function restartViva() {
    localStorage.removeItem(STORAGE_KEY);

    setCurrentQuestion(0);

    setRevealed(false);

    setCompletedQuestions([]);

    setRevisionQuestions([]);

    setFinished(false);

    setSavedProgress(null);

    setShowResumePrompt(false);
  }

  function revealAnswer() {
    setRevealed(true);
  }

  function markKnown() {
    if (!completedQuestions.includes(currentQuestion)) {
      setCompletedQuestions((previous) => [...previous, currentQuestion]);
    }
    updateLessonProgress("humerus", {
      vivaCompleted: completedQuestions.length + 1,
      vivaTotal: questions.length,
    });

    refreshLessonCompletion("humerus");

    goNext();
  }

  function markRevision() {
    if (!revisionQuestions.includes(currentQuestion)) {
      setRevisionQuestions((previous) => [...previous, currentQuestion]);
    }
    updateLessonProgress("humerus", {
      vivaCompleted: completedQuestions.length + 1,
      vivaTotal: questions.length,
    });

    refreshLessonCompletion("humerus");

    goNext();
  }
  function goNext() {
    setRevealed(false);

    if (currentQuestion >= questions.length - 1) {
      setFinished(true);

      return;
    }

    setCurrentQuestion((previous) => previous + 1);
  }

  function goPrevious() {
    setRevealed(false);

    if (currentQuestion === 0) {
      return;
    }

    setCurrentQuestion((previous) => previous - 1);
  }

  if (!questions.length) {
    return null;
  }

  if (finished) {
    return (
      <section className="rounded-3xl bg-white p-8 shadow">
        <h2 className="text-3xl font-bold text-slate-900">Viva Completed</h2>

        <p className="mt-4 text-slate-600">
          You have completed this viva practice session.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-green-50 p-5">
            <p className="text-sm text-slate-500">Completed</p>

            <p className="mt-2 text-2xl font-bold text-green-700">
              {completedQuestions.length}
            </p>
          </div>

          <div className="rounded-2xl bg-yellow-50 p-5">
            <p className="text-sm text-slate-500">Need Revision</p>

            <p className="mt-2 text-2xl font-bold text-yellow-700">
              {revisionQuestions.length}
            </p>
          </div>

          <div className="rounded-2xl bg-sky-50 p-5">
            <p className="text-sm text-slate-500">Total Questions</p>

            <p className="mt-2 text-2xl font-bold text-sky-700">
              {questions.length}
            </p>
          </div>
        </div>

        <button
          onClick={restartViva}
          className="mt-8 rounded-xl bg-violet-700 px-6 py-3 font-semibold text-white"
        >
          Restart Viva
        </button>
      </section>
    );
  }
  if (showResumePrompt && savedProgress) {
    return (
      <section className="rounded-3xl bg-white p-8 shadow">
        <h2 className="text-2xl font-bold text-slate-900">
          Continue Viva Practice?
        </h2>

        <p className="mt-3 text-slate-600">
          We found an unfinished Viva session. Continue from where you stopped?
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={continueViva}
            className="rounded-xl bg-violet-700 px-6 py-3 font-semibold text-white"
          >
            Continue
          </button>

          <button
            onClick={restartViva}
            className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700"
          >
            Restart
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="viva-questions"
      className="scroll-mt-28 rounded-3xl bg-white p-8 shadow"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900">Viva Questions</h2>

        <p className="mt-3 text-slate-600">
          Practise oral examination questions. Answer aloud, then reveal the
          model answer to assess yourself.
        </p>
      </div>

      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full bg-violet-100 px-4 py-2 font-semibold text-violet-800">
          Question {currentQuestion + 1} / {questions.length}
        </span>

        <span className="text-sm text-slate-500">
          Completed: {completedQuestions.length}
        </span>
      </div>

      <div className="rounded-2xl border-l-4 border-violet-600 bg-violet-50 p-6">
        <h3 className="text-xl font-bold text-violet-800">
          {activeQuestion.question}
        </h3>

        {!revealed && (
          <div className="mt-6 rounded-xl border border-dashed border-violet-300 bg-white p-5">
            <p className="font-medium text-slate-700">
              🎤 Oral Examination Practice
            </p>

            <p className="mt-3 text-slate-600">
              Answer this question aloud before revealing the model answer.
            </p>
          </div>
        )}

        {revealed && activeQuestion.answer && (
          <div className="mt-6 rounded-2xl bg-green-50 p-5">
            <h4 className="font-bold text-green-700">✅ Model Answer</h4>

            <p className="mt-3 leading-7 text-slate-700">
              {activeQuestion.answer}
            </p>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-3">
          {!revealed && (
            <button
              onClick={revealAnswer}
              className="rounded-xl bg-violet-700 px-5 py-3 font-semibold text-white"
            >
              Reveal Answer
            </button>
          )}

          {revealed && (
            <>
              <button
                onClick={markRevision}
                className="rounded-xl border border-yellow-300 bg-yellow-50 px-5 py-3 font-semibold text-yellow-800"
              >
                Need Revision
              </button>

              <button
                onClick={markKnown}
                className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white"
              >
                I Know This
              </button>
            </>
          )}
        </div>

        <div className="mt-8 flex justify-between">
          <button
            onClick={goPrevious}
            className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-slate-700"
          >
            Previous
          </button>

          <button
            onClick={goNext}
            className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white"
          >
            Skip
          </button>
        </div>
      </div>
    </section>
  );
}
