"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface VivaItem {
  question: string;
  answer: string;
}

interface VivaAccordionProps {
  questions: VivaItem[];
}

export default function VivaAccordion({ questions }: VivaAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {questions.map((item, index) => {
        const open = openIndex === index;

        return (
          <div
            key={index}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <span className="font-semibold text-slate-900">
                {index + 1}. {item.question}
              </span>

              {open ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
            </button>

            {open && (
              <div className="border-t bg-slate-50 p-5 leading-8 text-slate-700">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
