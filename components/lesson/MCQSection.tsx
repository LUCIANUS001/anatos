"use client";

import { useState } from "react";

interface MCQOption {
  id: string;
  text: string;
}

interface MCQ {
  question: string;
  options: MCQOption[];
  answer: string;
  explanation?: string;
}

interface MCQSectionProps {
  questions: MCQ[];
}

export default function MCQSection({
  questions,
}: MCQSectionProps) {

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);


  const question = questions[currentQuestion];


  const progress = Math.round(
    ((currentQuestion + 1) / questions.length) * 100
  );


  function submitAnswer() {

    if (!selectedAnswer) return;


    if (selectedAnswer === question.answer) {
      setScore((previous) => previous + 1);
    }


    setSubmitted(true);
  }



  function nextQuestion() {

    if (currentQuestion === questions.length - 1) {
      setFinished(true);
      return;
    }


    setCurrentQuestion((previous) => previous + 1);

    setSelectedAnswer("");

    setSubmitted(false);
  }



  function restartQuiz() {

    setCurrentQuestion(0);

    setSelectedAnswer("");

    setSubmitted(false);

    setScore(0);

    setFinished(false);
  }



  if (!questions.length) {
    return (
      <section className="rounded-3xl bg-white p-8 shadow">
        <p className="text-slate-600">
          No MCQ questions available.
        </p>
      </section>
    );
  }



  if (finished) {

    const percentage = Math.round(
      (score / questions.length) * 100
    );


    return (
      <section
        id="mcqs"
        className="rounded-3xl bg-white p-8 shadow"
      >

        <div className="text-center">

          <h2 className="text-3xl font-bold text-slate-900">
            Assessment Completed 🎉
          </h2>


          <div className="mt-8 rounded-3xl bg-sky-50 p-8">

            <p className="text-lg text-slate-600">
              Your Final Score
            </p>

            <p className="mt-4 text-5xl font-bold text-sky-700">
              {score}/{questions.length}
            </p>


            <p className="mt-3 text-2xl font-semibold text-teal-700">
              {percentage}%
            </p>

          </div>


          <p className="mt-6 text-slate-700">

            {percentage >= 80
              ? "Excellent performance. You have a strong understanding of the humerus."
              : percentage >= 50
              ? "Good attempt. Review the areas where you missed questions."
              : "Keep studying. Review the lesson and try again."}

          </p>


          <button
            onClick={restartQuiz}
            className="mt-8 rounded-xl bg-sky-700 px-8 py-3 font-semibold text-white hover:bg-sky-800"
          >
            Restart Assessment
          </button>

        </div>

      </section>
    );
  }



  const isCorrect =
    selectedAnswer === question.answer;



  return (
    <section
      id="mcqs"
      className="rounded-3xl bg-white p-8 shadow"
    >

      <div className="mb-8">

        <h2 className="text-3xl font-bold text-slate-900">
          Multiple Choice Questions
        </h2>


        <p className="mt-3 leading-7 text-slate-600">
          Answer each question and test your understanding of the humerus.
        </p>

      </div>



      <div className="mb-8">

        <div className="mb-2 flex justify-between text-sm font-medium text-slate-600">

          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>


          <span>
            {progress}%
          </span>

        </div>


        <div className="h-3 rounded-full bg-slate-200">

          <div
            className="h-3 rounded-full bg-sky-600 transition-all"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>




      <div className="rounded-2xl border-l-4 border-sky-600 bg-sky-50 p-6">


        <h3 className="text-xl font-bold text-slate-900">
          {currentQuestion + 1}. {question.question}
        </h3>



        <div className="mt-6 space-y-3">

          {question.options.map((option) => (

            <label
              key={option.id}
              className={`
                flex cursor-pointer items-center gap-3 rounded-xl border bg-white p-4 transition

                ${
                  selectedAnswer === option.id
                    ? "border-sky-600 ring-2 ring-sky-200"
                    : "border-slate-200 hover:border-sky-300"
                }

              `}
            >

              <input
                type="radio"
                name="mcq"
                value={option.id}
                checked={selectedAnswer === option.id}
                disabled={submitted}
                onChange={() =>
                  setSelectedAnswer(option.id)
                }
              />


              <span>
                <strong>
                  {option.id}.
                </strong>{" "}
                {option.text}
              </span>


            </label>

          ))}

        </div>



        {!submitted ? (

          <button
            onClick={submitAnswer}
            disabled={!selectedAnswer}
            className="mt-8 rounded-xl bg-sky-700 px-6 py-3 font-semibold text-white hover:bg-sky-800 disabled:bg-slate-300"
          >
            Submit Answer
          </button>

        ) : (

          <div className="mt-8">

            <div
              className={`
                rounded-xl p-5

                ${
                  isCorrect
                    ? "bg-green-50 border border-green-300"
                    : "bg-red-50 border border-red-300"
                }

              `}
            >

              <h4
                className={`
                  font-bold

                  ${
                    isCorrect
                      ? "text-green-700"
                      : "text-red-700"
                  }

                `}
              >

                {isCorrect
                  ? "✅ Correct Answer"
                  : `❌ Incorrect. Correct Answer: ${question.answer}`}

              </h4>



              {question.explanation && (

                <p className="mt-3 text-slate-700">
                  {question.explanation}
                </p>

              )}

            </div>



            <button
              onClick={nextQuestion}
              className="mt-6 rounded-xl bg-teal-600 px-8 py-3 font-semibold text-white hover:bg-teal-700"
            >

              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}

            </button>


          </div>

        )}


      </div>


    </section>
  );
}