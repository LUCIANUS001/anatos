interface MedicalCardProps {
  title: string;
  description?: string;
  icon?: string;
}

export default function MedicalCard({
  title,
  description,
  icon = "🩺",
}: MedicalCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-start gap-4">
        <div className="text-3xl">{icon}</div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-slate-900">{title}</h3>

          {description && (
            <p className="mt-3 whitespace-pre-line leading-7 text-slate-600">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
