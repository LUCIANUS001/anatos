"use client";

import AtlasHotspot from "./AtlasHotspot";

export interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  description: string;
}

interface Props {
  hotspots: Hotspot[];
  showLabels: boolean;
  onSelect: (hotspot: Hotspot) => void;
}

export default function AtlasHotspotLayer({
  hotspots,
  showLabels,
  onSelect,
}: Props) {
  return (
    <>
      {hotspots.map((hotspot) => (
        <AtlasHotspot
          key={hotspot.id}
          x={hotspot.x}
          y={hotspot.y}
          title={hotspot.title}
          description={hotspot.description}
          showLabel={showLabels}
          onClick={() => onSelect(hotspot)}
        />
      ))}
    </>
  );
}