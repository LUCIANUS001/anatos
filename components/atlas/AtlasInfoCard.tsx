"use client";

import { X } from "lucide-react";

interface Props {
  open: boolean;
  title: string;
  description: string;
  onClose: () => void;
}

export default function AtlasInfoCard({
  open,
  title,
  description,
  onClose,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">🦴 {title}</h2>

          <button
            onClick={onClose}
            className="rounded-full p-2 hover:bg-slate-100"
          >
            <X size={22} />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-sky-700">Description</h3>

            <p className="mt-2 text-slate-700 leading-7">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
