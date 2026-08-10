"use client";

import { QuizQuestion, UserAnswer } from "./types";

interface QuizReviewProps {
  questions: QuizQuestion[];
  answers: UserAnswer[];
}

export default function QuizReview({
  questions,
  answers,
}: QuizReviewProps) {

  return (

    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">


      <div>

        <h2 className="text-2xl font-semibold text-slate-900">
          Answer Review
        </h2>


        <p className="mt-2 text-sm leading-6 text-slate-600">
          Review your answers and understand the explanations behind each question.
        </p>

      </div>



      <div className="mt-8 space-y-5">


        {questions.map((question, index) => {


          const userAnswer = answers.find(
            (answer) =>
              answer.questionId === question.id
          );


          const isCorrect =
            userAnswer?.selectedAnswer === question.answer;



          return (

            <article
              key={question.id}
              className="rounded-xl border border-slate-200 p-5"
            >


              <div className="flex items-start justify-between gap-4">


                <h3 className="text-base font-semibold leading-7 text-slate-900">
                  {index + 1}. {question.question}
                </h3>


                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    isCorrect
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >

                  {isCorrect ? "Correct" : "Incorrect"}

                </span>


              </div>




              <div className="mt-5 space-y-3 text-sm">


                <div className="rounded-lg bg-slate-50 p-4">

                  <p className="text-slate-500">
                    Your Answer
                  </p>

                  <p
                    className={`mt-1 font-medium ${
                      isCorrect
                        ? "text-emerald-700"
                        : "text-red-700"
                    }`}
                  >
                    {userAnswer?.selectedAnswer ?? "Not answered"}
                  </p>

                </div>




                <div className="rounded-lg bg-emerald-50 p-4">

                  <p className="text-slate-500">
                    Correct Answer
                  </p>

                  <p className="mt-1 font-medium text-emerald-700">
                    {question.answer}
                  </p>

                </div>




                {question.explanation && (

                  <div className="rounded-lg border border-sky-100 bg-sky-50 p-4">

                    <p className="font-medium text-sky-700">
                      Explanation
                    </p>


                    <p className="mt-2 leading-6 text-slate-700">
                      {question.explanation}
                    </p>


                  </div>

                )}


              </div>


            </article>

          );

        })}


      </div>


    </section>

  );

}