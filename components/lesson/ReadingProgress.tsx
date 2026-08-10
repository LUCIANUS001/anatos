"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const current = window.scrollY;

      const percentage = totalHeight > 0 ? (current / totalHeight) * 100 : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-transparent">
      <div
        className="h-full bg-sky-600 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
