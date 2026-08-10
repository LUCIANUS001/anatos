"use client";

import { QuizQuestion as QuizQuestionType } from "./types";

interface QuizQuestionProps {
  question: QuizQuestionType;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: string;
  onSelectAnswer: (answer: string) => void;
}

export default function QuizQuestion({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
}: QuizQuestionProps) {

  return (

    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">


      <div className="flex items-center justify-between">

        <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700">
          Question {questionNumber} of {totalQuestions}
        </span>


        {question.difficulty && (

          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${
              question.difficulty === "Easy"
                ? "bg-emerald-50 text-emerald-700"
                : question.difficulty === "Medium"
                ? "bg-amber-50 text-amber-700"
                : "bg-red-50 text-red-700"
            }`}
          >
            {question.difficulty}
          </span>

        )}

      </div>



      <h2 className="mt-6 text-xl font-semibold leading-8 text-slate-900">
        {question.question}
      </h2>



      {question.image && (

        <div className="mt-6">

          <img
            src={question.image}
            alt="Question illustration"
            className="w-full rounded-xl border border-slate-200"
          />

        </div>

      )}



      <div className="mt-6 space-y-3">


        {question.options.map((option) => (

          <button

            key={option.id}

            type="button"

            onClick={() => onSelectAnswer(option.id)}

            className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
              
              selectedAnswer === option.id

                ? "border-sky-600 bg-sky-50"

                : "border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50"

            }`}

          >


            <span
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                
                selectedAnswer === option.id

                  ? "bg-sky-700 text-white"

                  : "bg-slate-100 text-slate-600"

              }`}
            >

              {option.id}

            </span>



            <span className="text-sm leading-6 text-slate-700">
              {option.text}
            </span>


          </button>

        ))}


      </div>


    </section>

  );

}