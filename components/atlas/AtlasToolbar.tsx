"use client";

export type AtlasTab =
  | "images"
  | "compare"
  | "radiology"
  | "ai";

interface Props {
  active: AtlasTab;
  onChange: (tab: AtlasTab) => void;
}

export default function AtlasToolbar({
  active,
  onChange,
}: Props) {
  const tabs: {
    id: AtlasTab;
    icon: string;
    label: string;
  }[] = [
    {
      id: "images",
      icon: "🖼",
      label: "Images",
    },
    {
      id: "compare",
      icon: "🔄",
      label: "Compare",
    },
    {
      id: "radiology",
      icon: "🩻",
      label: "Radiology",
    },
    {
      id: "ai",
      icon: "🤖",
      label: "AI",
    },
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`rounded-xl px-5 py-3 text-sm font-semibold transition-all ${
            active === tab.id
              ? "bg-sky-600 text-white shadow"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          {tab.icon} {tab.label}
        </button>
      ))}
    </div>
  );
}