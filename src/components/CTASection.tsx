import Link from "next/link";

export function CTASection({
  headline = "Need a Roof Inspection or Estimate?",
  description = "Don't wait until small problems become expensive repairs. Our team provides honest assessments and transparent pricing.",
  dark = true,
}: {
  headline?: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <section
      className={
        dark
          ? "bg-slate-900 text-white py-16 md:py-20"
          : "bg-amber-500 text-slate-900 py-16 md:py-20"
      }
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
          {headline}
        </h2>
        <p
          className={`mt-4 text-lg leading-relaxed ${
            dark ? "text-slate-300" : "text-slate-800"
          }`}
        >
          {description}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+12105510119"
            className={
              dark
                ? "inline-flex items-center gap-2 rounded-lg bg-amber-500 px-8 py-3.5 text-sm font-bold text-slate-900 transition-colors hover:bg-amber-400"
                : "inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
            }
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            Call Now
          </a>
          <Link
            href="/contact"
            className={
              dark
                ? "inline-flex rounded-lg border-2 border-white px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-slate-900"
                : "inline-flex rounded-lg border-2 border-slate-900 px-8 py-3.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-900 hover:text-white"
            }
          >
            Request Free Estimate
          </Link>
        </div>
      </div>
    </section>
  );
}
