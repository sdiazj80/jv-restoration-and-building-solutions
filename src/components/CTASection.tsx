import Image from "next/image";
import Link from "next/link";

export function CTASection({
  headline = "Let's build something that lasts.",
  description = "Schedule a free inspection. No pressure. No runaround. Just honest work.",
  image = "/images/licensed-support/aerial-neighborhood-01.jpg",
}: {
  headline?: string;
  description?: string;
  image?: string;
  dark?: boolean;
}) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-black">
      <Image
        src={image}
        alt=""
        fill
        className="object-cover opacity-30"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-6">
          Take Action
        </p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter text-balance">
          {headline}
        </h2>
        <p className="mt-8 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+12105510119"
            className="group inline-flex items-center gap-3 bg-gold-500 px-10 py-5 text-sm font-bold text-black uppercase tracking-[0.2em] transition-all hover:bg-gold-400 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call (210) 551-0119
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border-2 border-neutral-700 px-10 py-5 text-sm font-bold text-white uppercase tracking-[0.2em] transition-all hover:border-gold-500 hover:text-gold-500"
          >
            Request Estimate →
          </Link>
        </div>
      </div>
    </section>
  );
}
