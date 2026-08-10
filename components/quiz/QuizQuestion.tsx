import type { QuizQuestion as QuizQuestionType } from "./types";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer: string;
  onSelectAnswer: (answer: string) => void;
  showResult: boolean;
}

export default function QuizQuestion({
  question,
  selectedAnswer,
  onSelectAnswer,
  showResult,
}: QuizQuestionProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow">

      <h2 className="text-2xl font-bold text-slate-900">
        {question.question}
      </h2>


      <div className="mt-8 space-y-4">

        {question.options.map((option) => {

          const isSelected =
            selectedAnswer === option.id;

          const isCorrect =
            showResult &&
            option.id === question.answer;

          const isWrong =
            showResult &&
            isSelected &&
            option.id !== question.answer;


          return (
            <button
              key={option.id}
              onClick={() => onSelectAnswer(option.id)}
              disabled={showResult}
              className={`
                w-full rounded-xl border p-4 text-left transition

                ${
                  isCorrect
                    ? "border-green-500 bg-green-50 text-green-800"
                    : ""
                }

                ${
                  isWrong
                    ? "border-red-500 bg-red-50 text-red-800"
                    : ""
                }

                ${
                  isSelected && !showResult
                    ? "border-sky-600 bg-sky-50"
                    : ""
                }

                ${
                  !isSelected && !showResult
                    ? "border-slate-200 hover:border-sky-400 hover:bg-sky-50"
                    : ""
                }
              `}
            >

              <strong>
                {option.id}.
              </strong>{" "}

              {option.text}

            </button>
          );

        })}

      </div>


      {showResult && (
        <div className="mt-6 rounded-xl bg-slate-50 p-5">

          <p className="font-bold text-slate-900">
            Correct Answer: {question.answer}
          </p>

          {question.explanation && (
            <p className="mt-3 leading-7 text-slate-700">
              {question.explanation}
            </p>
          )}

        </div>
      )}

    </div>
  );
}