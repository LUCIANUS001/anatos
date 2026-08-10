"use client";

import { AtlasFigure as AtlasFigureType } from "./types";
import AtlasFigure from "./AtlasFigure";

interface Props {
  figures: AtlasFigureType[];
}

export default function AtlasGallery({ figures }: Props) {
  if (!figures.length) return null;

  return (
    <section className="my-10">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {figures.map((figure) => (
          <AtlasFigure
            key={figure.id}
            figure={{
              ...figure,
              layout: "gallery",
            }}
          />
        ))}
      </div>
    </section>
  );
}
