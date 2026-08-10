"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { AtlasFigure } from "./types";
import AtlasHotspotLayer from "./AtlasHotspotLayer";

import { useState } from "react";
import AtlasInfoCard from "./AtlasInfoCard";
import { AtlasHotspot } from "./types";

interface Props {
  figure: AtlasFigure | null;
  isOpen: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export default function AtlasViewer({
  figure,
  isOpen,
  onClose,
  onPrevious,
  onNext,
}: Props) {
  const [selectedHotspot, setSelectedHotspot] = useState<AtlasHotspot | null>(
    null,
  );
  const [showLabels, setShowLabels] = useState(false);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (!isOpen) return;

      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onPrevious?.();
      }

      if (event.key === "ArrowRight") {
        onNext?.();
      }
    }

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  if (!isOpen || !figure) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95 flex flex-col">
      <div className="flex items-center justify-between p-5">
        <button
          onClick={onClose}
          className="rounded-xl bg-white/10 p-3 text-white hover:bg-white/20"
        >
          <X size={22} />
        </button>

        <button
          onClick={() => setShowLabels(!showLabels)}
          className="rounded-xl bg-white/10 px-4 py-3 text-white hover:bg-white/20"
        >
          {showLabels ? "🙈 Hide Labels" : "👁 Show Labels"}
        </button>

        <div className="flex gap-3">
          <button className="rounded-xl bg-white/10 p-3 text-white hover:bg-white/20">
            <ZoomOut size={20} />
          </button>

          <button className="rounded-xl bg-white/10 p-3 text-white hover:bg-white/20">
            <ZoomIn size={20} />
          </button>
        </div>
      </div>

      <div className="relative flex-1 flex items-center justify-center">
        {onPrevious && (
          <button
            onClick={onPrevious}
            className="absolute left-5 rounded-full bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <ChevronLeft size={28} />
          </button>
        )}

        <div className="relative inline-block">
          <Image
            src={figure.src}
            alt={figure.title}
            width={1400}
            height={1400}
            className="max-h-[80vh] w-auto object-contain"
          />

          {figure.hotspots && (
            <AtlasHotspotLayer
              hotspots={figure.hotspots}
              showLabels={showLabels}
              onSelect={(hotspot) => {
                setSelectedHotspot(hotspot);
              }}
            />
          )}
        </div>

        {onNext && (
          <button
            onClick={onNext}
            className="absolute right-5 rounded-full bg-white/10 p-4 text-white hover:bg-white/20"
          >
            <ChevronRight size={28} />
          </button>
        )}
      </div>

      <div className="border-t border-white/10 p-6">
        <h2 className="text-2xl font-bold text-white">{figure.title}</h2>

        <p className="mt-3 text-slate-300">{figure.caption}</p>
      </div>

      <AtlasInfoCard
        open={selectedHotspot !== null}
        title={selectedHotspot?.title ?? ""}
        description={selectedHotspot?.description ?? ""}
        onClose={() => setSelectedHotspot(null)}
      />
    </div>
  );
}
