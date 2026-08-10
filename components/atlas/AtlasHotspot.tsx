"use client";

interface Props {
  x: number;
  y: number;
  title: string;
  description: string;
  showLabel: boolean;
  onClick: () => void;
}

export default function AtlasHotspot({
  x,
  y,
  title,
  description,
  showLabel,
  onClick,
}: Props) {
  return (
    <div
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      <button
        onClick={onClick}
        className="h-5 w-5 rounded-full border-2 border-white bg-red-600 shadow-lg transition hover:scale-125"
        title={title}
      >
        <span className="sr-only">{description}</span>
      </button>

      {showLabel && (
        <div className="mt-2 whitespace-nowrap rounded-lg bg-slate-900 px-2 py-1 text-xs font-medium text-white shadow-lg">
          {title}
        </div>
      )}
    </div>
  );
}