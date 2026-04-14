import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About | JV Restoration & Building Solutions",
  description:
    "San Antonio's modern roofing brand. Built on honest work, quality materials, and results you can see.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black pt-32">
        <Image
          src="/images/licensed-support/roofing-worker-01.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-20 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
            About JV Restoration
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter max-w-5xl">
            Built on <span className="text-gold-500 italic">hard work.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="relative bg-black py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
                Our Story
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
                A San Antonio roofer who actually <span className="text-gold-500 italic">shows up.</span>
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-8 text-lg text-neutral-300 leading-relaxed">
              <p>
                JV Restoration & Building Solutions was founded on a simple
                idea: homeowners deserve a roofer they can actually trust. Too
                many companies cut corners, push unnecessary work, or vanish
                after cashing the check. We built this company to be different.
              </p>
              <p>
                Based in San Antonio, we serve homeowners and businesses across
                the city and surrounding areas. Our team knows Texas weather —
                from relentless summer heat to sudden hailstorms — and we build
                roofs that can take it.
              </p>
              <p>
                Every project starts with an honest assessment. We tell you
                exactly what we see, what needs attention, and what the options
                are. No pressure. No upselling. Just <span className="text-gold-500 font-semibold">straight talk from people who know roofing.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values — alternating rows */}
      <section className="relative bg-ink-950 py-24 md:py-32 border-y border-neutral-900">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="mb-20 max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
              What We Stand For
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Six principles. <span className="text-gold-500 italic">Zero compromise.</span>
            </h2>
          </div>

          <div className="divide-y divide-neutral-900 border-y border-neutral-900">
            {[
              { n: "01", t: "Honest Assessments", d: "We never recommend work that isn't needed. Our inspections are thorough, our recommendations based on facts — not sales targets." },
              { n: "02", t: "Quality Craftsmanship", d: "We use quality materials and take the time to do every job right. We don't cut corners — your roof protects everything underneath." },
              { n: "03", t: "Reliability You Can Count On", d: "When we say we'll be there, we're there. When we give a timeline, we hit it. Your time and trust matter." },
              { n: "04", t: "Local San Antonio Team", d: "We live and work here. This is our community, and we treat every home like it belongs to a neighbor — because it does." },
              { n: "05", t: "Clean Job Sites", d: "We respect your property. Our crew keeps the work area clean, removes all debris, and leaves your home better than we found it." },
              { n: "06", t: "Storm Damage Experts", d: "Texas weather is unpredictable. We specialize in identifying and repairing hail, wind, and storm damage — and guiding you through insurance." },
            ].map((v) => (
              <div key={v.n} className="group grid md:grid-cols-12 gap-6 py-10 md:py-12 items-baseline">
                <p aria-hidden="true" className="md:col-span-2 font-display text-5xl md:text-6xl font-black text-neutral-500 tracking-tighter group-hover:text-gold-500 transition-colors">
                  {v.n}
                </p>
                <h3 className="md:col-span-4 font-display text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                  {v.t}
                </h3>
                <p className="md:col-span-6 text-neutral-400 leading-relaxed text-lg">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-black py-16">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Free Inspections",
              "Free Estimates",
              "Residential & Commercial",
              "Insurance Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-2 w-2 bg-gold-500 rounded-full" />
                <p className="text-sm font-bold text-white uppercase tracking-widest">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's talk about your roof."
        description="Schedule a free inspection. Get honest answers. Move forward on your terms."
      />
    </>
  );
}
