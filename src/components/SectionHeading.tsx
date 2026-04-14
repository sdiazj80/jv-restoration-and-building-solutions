export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  invert = false,
}: {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={centered ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
      {label && (
        <p
          className={`text-xs font-bold uppercase tracking-[0.3em] mb-5 ${
            invert ? "text-gold-600" : "text-gold-500"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter text-balance ${
          invert ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            invert ? "text-neutral-700" : "text-neutral-400"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
