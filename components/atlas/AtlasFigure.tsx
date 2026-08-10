"use client";

import { useState } from "react";
import Image from "next/image";

import AtlasViewer from "./AtlasViewer";
import { AtlasFigure as AtlasFigureType } from "./types";

interface Props {
  figure: AtlasFigureType;
}

export default function AtlasFigure({ figure }: Props) {
  const [viewerOpen, setViewerOpen] = useState(false);

  const layout = figure.layout ?? "wide";

  const widthClass = {
    inline: "max-w-md",
    left: "max-w-lg mr-auto",
    right: "max-w-lg ml-auto",
    center: "max-w-xl mx-auto",
    wide: "w-full",
    full: "w-full",
    gallery: "w-full",
    comparison: "w-full",
  }[layout];

  return (
    <>
      <figure className={`my-8 ${widthClass}`}>
        <div
          onClick={() => setViewerOpen(true)}
          className="cursor-zoom-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <Image
            src={figure.src}
            alt={figure.title}
            width={1200}
            height={800}
            className="h-auto w-full object-cover transition duration-300 hover:scale-[1.02]"
          />
        </div>

        <figcaption className="mt-3">
          <h4 className="font-semibold text-slate-900">{figure.title}</h4>

          <p className="mt-1 text-sm leading-6 text-slate-600">
            {figure.caption}
          </p>

          {figure.credit && (
            <p className="mt-2 text-xs italic text-slate-400">
              Source: {figure.credit}
            </p>
          )}
        </figcaption>
      </figure>

      <AtlasViewer
        figure={figure}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </>
  );
}
