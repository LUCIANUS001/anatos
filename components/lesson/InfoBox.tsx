interface InfoBoxProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export default function InfoBox({
  title,
  icon,
  children,
}: InfoBoxProps) {
  return (
    <div className="my-6 rounded-2xl border-l-4 border-sky-600 bg-sky-50 p-6">
      <h3 className="flex items-center gap-3 text-xl font-bold text-sky-800">
        <span>{icon}</span>
        {title}
      </h3>

      <div className="mt-4 leading-7 text-slate-700">
        {children}
      </div>
    </div>
  );
}