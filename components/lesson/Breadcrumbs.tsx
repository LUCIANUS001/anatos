import Link from "next/link";

interface BreadcrumbsProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumbs({
  items,
}: BreadcrumbsProps) {
  return (
    <nav className="mb-8 text-sm text-slate-500">

      <ol className="flex flex-wrap items-center gap-2">

        {items.map((item, index) => (

          <li key={index} className="flex items-center gap-2">

            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-sky-700"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-slate-800">
                {item.label}
              </span>
            )}

            {index < items.length - 1 && (
              <span>/</span>
            )}

          </li>

        ))}

      </ol>

    </nav>
  );
}