import Link from "next/link";

// Placeholder reviews — ready to swap for real Google reviews when available.
// Structure matches Google review format for easy API integration later.
const reviews = [
  {
    author: "Homeowner",
    rating: 5,
    text: "JV Restoration went above and beyond on our roof replacement. The team was professional, showed up when they said they would, and the final result looks incredible. Highly recommend to anyone in San Antonio.",
    location: "San Antonio, TX",
  },
  {
    author: "Local Resident",
    rating: 5,
    text: "After the last hailstorm I was worried about my roof. JV came out, did a thorough inspection, documented everything for my insurance claim, and handled the repair quickly. Honest, straightforward, and fair pricing.",
    location: "San Antonio, TX",
  },
  {
    author: "San Antonio Customer",
    rating: 5,
    text: "Got three quotes for a roof repair and JV was not only the most reasonable — they were the most honest. No pressure to do work that wasn't needed. They just fixed what had to be fixed and moved on.",
    location: "San Antonio, TX",
  },
];

// Leave-a-review URL — can be updated to exact Google Business URL
const REVIEW_URL = "https://g.page/r/jv-restoration-building-solutions/review";

function Star({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      className={`h-5 w-5 ${filled ? "text-gold-500" : "text-neutral-800"}`}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export function Reviews() {
  return (
    <section className="relative bg-black py-24 md:py-32 border-t border-neutral-900">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
              What Customers Say
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Trust, <span className="text-gold-500 italic">earned.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} />
              ))}
              <span className="ml-3 font-display text-2xl font-black text-white">5.0</span>
              <span className="text-sm text-neutral-500 uppercase tracking-widest ml-2">
                Google Rating
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Real feedback from San Antonio homeowners. We&apos;re building our
              reputation one quality job at a time.
            </p>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-900 mb-16">
          {reviews.map((r, i) => (
            <article key={i} className="bg-black p-8 md:p-10 flex flex-col">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} filled={j < r.rating} />
                ))}
              </div>
              <blockquote className="flex-1 text-lg text-neutral-200 leading-relaxed font-medium">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="mt-8 pt-6 border-t border-neutral-900">
                <p className="font-display text-lg font-bold text-white leading-none">
                  {r.author}
                </p>
                <p className="text-xs text-gold-500 uppercase tracking-[0.2em] mt-2">
                  {r.location}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Leave review CTA */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-neutral-900 pt-12">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-black text-white leading-tight">
              Worked with us? <span className="text-gold-500 italic">Share your experience.</span>
            </h3>
            <p className="mt-2 text-neutral-400">
              Your feedback helps other San Antonio homeowners make the right choice.
            </p>
          </div>
          <a
            href={REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 border-2 border-gold-500 bg-transparent px-8 py-4 text-xs font-bold text-gold-500 uppercase tracking-[0.2em] transition-all hover:bg-gold-500 hover:text-black"
          >
            <GoogleIcon />
            Leave a Google Review
          </a>
        </div>
      </div>
    </section>
  );
}

function GoogleIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" />
    </svg>
  );
}
