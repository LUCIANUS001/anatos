"use client";

import { useEffect, useState } from "react";

interface LessonOutlineProps {
  sections: string[];
}

export default function LessonOutline({ sections }: LessonOutlineProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = 140;

      let current = "";

      for (const section of sections) {
        const id = section.toLowerCase().replace(/\s+/g, "-");

        const element = document.getElementById(id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= offset) {
          current = id;
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections, activeSection]);

  return (
    <aside className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-2xl bg-white p-6 shadow">
      <h2 className="text-xl font-bold text-slate-900">Lesson Outline</h2>

      <ul className="mt-5 space-y-2">
        {sections.map((section, index) => {
          const id = section.toLowerCase().replace(/\s+/g, "-");

          const isActive = activeSection === id;

          return (
            <li key={index}>
              <a
                href={`#${id}`}
                className={`block rounded-lg px-3 py-2 transition-all duration-200 ${
                  isActive
                    ? "bg-sky-100 text-sky-700 font-semibold border-l-4 border-sky-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-sky-700"
                }`}
              >
                {section}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
