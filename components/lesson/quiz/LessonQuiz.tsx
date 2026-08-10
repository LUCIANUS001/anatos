"use client";

import { useEffect, useMemo, useState } from "react";

import QuizDashboard from "./QuizDashboard";
import QuizHeader from "./QuizHeader";
import QuizProgress from "./QuizProgress";
import QuizQuestion from "./QuizQuestion";
import QuizNavigation from "./QuizNavigation";
import QuizResult from "./QuizResults";
import QuizReview from "./QuizReview";
import { updateLessonProgress } from "@/lib/progress/progress";
import { refreshLessonCompletion } from "@/lib/progress/completion";

import {
  LessonQuizProps,
  UserAnswer,
  QuizResult as QuizResultType,
} from "./types";

export default function LessonQuiz({
  title,
  questions,
  passingScore = 50,
  lessonId = "humerus",
}: LessonQuizProps & { lessonId?: string }) {
  const [started, setStarted] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const [timeLeft, setTimeLeft] = useState(60 * 60);

  const [resumeAvailable, setResumeAvailable] = useState(false);

  const [showResumePrompt, setShowResumePrompt] = useState(false);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<UserAnswer[]>([]);

  const current = questions[currentQuestion];

  useEffect(() => {
    if (!started || submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          clearInterval(timer);

          setSubmitted(true);

          updateLessonProgress(lessonId, {
            mcqScore: result.correctAnswers,
            mcqTotal: result.totalQuestions,
          });

          refreshLessonCompletion(lessonId);

          localStorage.removeItem("anatos-quiz-progress");

          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [started, submitted]);

  useEffect(() => {
    const savedProgress = localStorage.getItem("anatos-quiz-progress");

    if (!savedProgress) return;

    const progress = JSON.parse(savedProgress);

    setResumeAvailable(true);
    setShowResumePrompt(true);

    setCurrentQuestion(progress.currentQuestion);

    setAnswers(progress.answers);

    setTimeLeft(progress.timeLeft);

    setStarted(progress.started);
  }, []);

  useEffect(() => {
    if (!started || submitted) return;

    const progress = {
      currentQuestion,
      answers,
      timeLeft,
      started,
    };

    localStorage.setItem("anatos-quiz-progress", JSON.stringify(progress));
  }, [currentQuestion, answers, timeLeft, started, submitted]);

  function handleSelectAnswer(answer: string) {
    setAnswers((previous) => {
      const existing = previous.find((item) => item.questionId === current.id);

      if (existing) {
        return previous.map((item) =>
          item.questionId === current.id
            ? {
                ...item,
                selectedAnswer: answer,
              }
            : item,
        );
      }

      return [
        ...previous,
        {
          questionId: current.id,
          selectedAnswer: answer,
        },
      ];
    });
  }

  function goNext() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((previous) => previous + 1);
    }
  }

  function goPrevious() {
    if (currentQuestion > 0) {
      setCurrentQuestion((previous) => previous - 1);
    }
  }

  function retryQuiz() {
    setStarted(false);

    setSubmitted(false);

    setCurrentQuestion(0);

    setAnswers([]);
  }

  function submitQuiz() {
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit this assessment?",
    );

    if (!confirmSubmit) return;

    setSubmitted(true);

    updateLessonProgress("humerus", {
      mcqTotal: questions.length,
      mcqScore: result.correctAnswers,
      completed: result.passed,
    });

    refreshLessonCompletion("humerus");

    setSubmitted(true);
  }

  const minutes = Math.floor(timeLeft / 60);

  const seconds = timeLeft % 60;

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const result: QuizResultType = useMemo(() => {
    let correct = 0;

    questions.forEach((question) => {
      const answer = answers.find((item) => item.questionId === question.id);

      if (answer && answer.selectedAnswer === question.answer) {
        correct++;
      }
    });

    const wrong = answers.length - correct;

    const unanswered = questions.length - answers.length;

    const percentage = Math.round((correct / questions.length) * 100);

    return {
      totalQuestions: questions.length,

      correctAnswers: correct,

      wrongAnswers: wrong,

      unansweredQuestions: unanswered,

      score: correct,

      percentage,

      passed: percentage >= passingScore,
    };
  }, [answers, questions, passingScore]);

  if (!started) {
    return (
      <QuizDashboard
        title={title}
        totalQuestions={questions.length}
        passingScore={passingScore}
        timeLimit={60}
        difficulty="Medium"
        onStart={() => {
          setStarted(true);
          setTimeLeft(60 * 60);
        }}
      />
    );
  }

  // PART 2 STARTS HERE
  if (submitted) {
    return (
      <section className="space-y-10">
        <QuizResult result={result} onRetry={retryQuiz} />

        <QuizReview questions={questions} answers={answers} />
      </section>
    );
  }

  const selectedAnswer = answers.find(
    (item) => item.questionId === current.id,
  )?.selectedAnswer;

  function continueQuiz() {
    setShowResumePrompt(false);
  }

  function restartSavedQuiz() {
    localStorage.removeItem("anatos-quiz-progress");

    setCurrentQuestion(0);

    setAnswers([]);

    setTimeLeft(60 * 60);

    setStarted(false);

    setShowResumePrompt(false);
  }

  if (showResumePrompt) {
    return (
      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">
          Continue Assessment?
        </h2>

        <p className="mt-2 text-sm text-slate-600">
          You have an unfinished quiz. Would you like to continue from where you
          stopped?
        </p>

        <div className="mt-6 flex gap-4">
          <button
            onClick={continueQuiz}
            className="rounded-xl bg-sky-700 px-5 py-3 text-sm font-medium text-white"
          >
            Continue
          </button>

          <button
            onClick={restartSavedQuiz}
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700"
          >
            Restart
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>

          <p className="text-sm text-slate-500">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <div className="rounded-xl bg-red-100 px-5 py-3">
          <p className="text-xs font-semibold uppercase text-red-600">
            Time Left
          </p>

          <p className="text-2xl font-extrabold text-red-700">
            ⏱ {formattedTime}
          </p>
        </div>
      </div>

      <QuizProgress
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
      />

      <QuizQuestion
        question={current}
        questionNumber={currentQuestion + 1}
        totalQuestions={questions.length}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={handleSelectAnswer}
      />

      <QuizNavigation
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        onPrevious={goPrevious}
        onNext={goNext}
        onSubmit={submitQuiz}
      />
    </section>
  );
}
