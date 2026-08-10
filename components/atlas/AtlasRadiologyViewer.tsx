"use client";

import Image from "next/image";
import { AtlasFigure } from "./types";

interface Props {
  figures: AtlasFigure[];
}

export default function AtlasRadiologyViewer({ figures }: Props) {
  if (figures.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center text-slate-500">
        No radiology images available.
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {figures.map((figure) => (
        <div
          key={figure.id}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <Image
            src={figure.src}
            alt={figure.title}
            width={1200}
            height={900}
            className="rounded-xl w-full h-auto"
          />

          <h3 className="mt-4 text-lg font-bold">
            {figure.title}
          </h3>

          <p className="mt-2 text-slate-600">
            {figure.caption}
          </p>
        </div>
      ))}
    </div>
  );
}