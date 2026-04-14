export function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
