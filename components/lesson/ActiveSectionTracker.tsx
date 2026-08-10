"use client";

import { useEffect, useState } from "react";

interface Props {
  sections: string[];
}

export default function ActiveSectionTracker({ sections }: Props) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActive(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
      }
    );

    sections.forEach((section) => {
      const id = section.toLowerCase().replace(/\s+/g, "-");
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [sections]);

  return active;
}