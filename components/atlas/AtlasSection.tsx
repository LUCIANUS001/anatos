"use client";

import { useState } from "react";

import AtlasFigure from "./AtlasFigure";
import AtlasViewer from "./AtlasViewer";

import {
  AtlasFigure as AtlasFigureType,
  AtlasSection as AtlasSectionType,
} from "./types";

import AtlasCompareViewer from "./AtlasCompareViewer";

import AtlasToolbar, { AtlasTab } from "./AtlasToolbar";

import AtlasRadiologyViewer from "./AtlasRadiologyViewer";

interface Props {
  section?: AtlasSectionType;
}

export default function AtlasSection({ section }: Props) {
  if (!section) return null;

  const figures: AtlasFigureType[] = [
    ...(section.figures ?? []),
    ...(section.gallery ?? []),
  ];

  const radiologyFigures = figures.filter((figure) =>
    ["xray", "ct", "mri", "cadaver", "3d"].includes(figure.type ?? ""),
  );

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<AtlasTab>("images");

  function openViewer(index: number) {
    setCurrentIndex(index);
  }

  function closeViewer() {
    setCurrentIndex(null);
  }

  function previous() {
    if (currentIndex === null) return;

    setCurrentIndex(currentIndex === 0 ? figures.length - 1 : currentIndex - 1);
  }

  function next() {
    if (currentIndex === null) return;

    setCurrentIndex(currentIndex === figures.length - 1 ? 0 : currentIndex + 1);
  }

  return (
    <>
      <div className="my-10 space-y-8">
        <AtlasToolbar active={activeTab} onChange={setActiveTab} />
        {activeTab === "images" &&
          figures.map((figure, index) => (
            <div
              key={figure.id}
              onClick={() => openViewer(index)}
              className="cursor-zoom-in"
            >
              <AtlasFigure figure={figure} />
            </div>
          ))}

        {activeTab === "compare" &&
          section.comparison?.map((comparison, index) => (
            <AtlasCompareViewer
              key={index}
              left={comparison.left}
              right={comparison.right}
            />
          ))}

        {activeTab === "radiology" && (
          <AtlasRadiologyViewer figures={radiologyFigures} />
        )}

        {activeTab === "ai" && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
            <h2 className="text-2xl font-bold text-slate-800">
              🤖 AnatOS AI Tutor
            </h2>

            <p className="mt-4 text-slate-600">
              AI Atlas Assistant will be connected here in the next phase.
            </p>
          </div>
        )}
      </div>

      <AtlasViewer
        figure={currentIndex !== null ? figures[currentIndex] : null}
        isOpen={currentIndex !== null}
        onClose={closeViewer}
        onPrevious={previous}
        onNext={next}
      />
    </>
  );
}
