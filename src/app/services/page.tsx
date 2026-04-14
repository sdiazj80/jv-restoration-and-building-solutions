import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Services | JV Restoration — San Antonio Roofing",
  description:
    "Roof repair, replacement, inspections, and storm damage restoration in San Antonio. Free estimates. Call (210) 551-0119.",
};

const services = [
  {
    id: "roof-repair",
    no: "01",
    title: "Roof Repair",
    tag: "Fix & Fortify",
    description:
      "Not every roof issue requires a full replacement. From leaks and missing shingles to flashing damage and wear from age, our repair services address problems fast — before they turn into expensive emergencies.",
    points: [
      "Leak detection and repair",
      "Missing or damaged shingle replacement",
      "Flashing and vent boot repair",
      "Gutter-related roof damage",
      "Emergency repair services",
    ],
    value:
      "Catching a small problem early can save you thousands in water damage, mold remediation, and structural repairs. We inspect, explain, and fix only what needs fixing.",
    image: "/images/licensed-support/roof-shingles-detail-01.jpg",
  },
  {
    id: "roof-replacement",
    no: "02",
    title: "Roof Replacement",
    tag: "Full Rebuild",
    description:
      "When repairs are no longer enough, a full roof replacement protects your home for decades. We handle complete tear-offs and installations using quality materials, proper ventilation, and clean workmanship.",
    points: [
      "Complete tear-off and replacement",
      "Quality shingle and material options",
      "Proper ventilation and underlayment",
      "Clean, professional installation",
      "Final inspection and walkthrough",
    ],
    value:
      "A new roof is one of the most important investments you'll make in your home. We ensure every replacement is done to the highest standards — protecting your home and increasing its value.",
    image: "/images/licensed-support/house-roof-angle-01.jpg",
  },
  {
    id: "roof-inspections",
    no: "03",
    title: "Roof Inspections",
    tag: "Know The Truth",
    description:
      "Our free, thorough roof inspections give you a clear picture of your roof's condition. We document everything and provide honest recommendations — whether your roof needs attention now or can wait.",
    points: [
      "Free comprehensive inspections",
      "Detailed documentation with photos",
      "Honest condition assessment",
      "Preventative maintenance recommendations",
      "Pre-purchase and pre-sale inspections",
    ],
    value:
      "Regular inspections catch issues before they become expensive. Whether buying, selling, or just wanting peace of mind — our inspections give you the information to make smart decisions.",
    image: "/images/licensed-support/roof-inspection-01.jpg",
  },
  {
    id: "storm-damage",
    no: "04",
    title: "Storm Damage Roofing",
    tag: "Fast Recovery",
    description:
      "San Antonio weather can be severe. Hailstorms, high winds, and heavy rain can damage your roof in ways that aren't always visible from the ground. We specialize in identifying and restoring storm damage quickly and completely.",
    points: [
      "Hail damage assessment and repair",
      "Wind damage restoration",
      "Emergency tarping and protection",
      "Complete storm damage documentation",
      "Fast response times",
    ],
    value:
      "After a storm, time matters. Water intrusion from undetected damage leads to mold, structural issues, and costly interior damage. We respond fast to assess and protect your home.",
    image: "/images/licensed-support/storm-clouds-01.jpg",
  },
  {
    id: "insurance-assistance",
    no: "05",
    title: "Insurance Assistance",
    tag: "Claim Support",
    description:
      "Filing an insurance claim for roof damage can be confusing. While we're not a public adjuster, we provide thorough documentation and guidance to support your claim.",
    points: [
      "Thorough damage documentation",
      "Detailed photo reports",
      "Policy coverage guidance",
      "Coordination with adjusters",
      "Support through the claims process",
    ],
    value:
      "Our documentation helps ensure your insurance company has the information they need. We guide you — we don't make promises we can't keep.",
    image: "/images/licensed-support/house-exterior-01.jpg",
    note: "Final claim decisions are made by your insurance provider.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-black pt-32">
        <Image
          src="/images/licensed-support/aerial-residential-02.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/50" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-20 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
            What We Do
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter max-w-5xl">
            Services that <span className="text-gold-500 italic">hold up.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed">
            From routine inspections to full replacements and storm damage
            restoration — quality roofing solutions for San Antonio.
          </p>
        </div>
      </section>

      {/* Services list */}
      {services.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`relative py-24 md:py-32 ${
            idx % 2 === 0 ? "bg-black" : "bg-ink-950"
          } border-t border-neutral-900`}
        >
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div
              className={`grid lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="lg:col-span-6 relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                {/* Floating tag */}
                <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm border border-gold-500/40 px-4 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500">
                    {s.tag}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6">
                <p className="font-display text-7xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-none mb-8">
                  {s.no}
                </p>
                <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
                  {s.title}
                </h2>
                <p className="mt-8 text-lg text-neutral-300 leading-relaxed">
                  {s.description}
                </p>

                <div className="mt-10 border-t border-neutral-900 pt-8">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
                    What&apos;s Included
                  </p>
                  <ul className="space-y-3">
                    {s.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-neutral-300">
                        <span className="mt-2 h-1.5 w-1.5 bg-gold-500 rounded-full shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10 p-6 border-l-2 border-gold-500 bg-gold-500/5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">
                    Why It Matters
                  </p>
                  <p className="text-neutral-300 leading-relaxed">{s.value}</p>
                </div>

                {s.note && (
                  <p className="mt-6 text-sm text-neutral-500 italic">
                    {s.note}
                  </p>
                )}

                <Link
                  href="/contact"
                  className="group mt-10 inline-flex items-center gap-3 bg-gold-500 px-10 py-5 text-sm font-bold text-black uppercase tracking-[0.2em] transition-all hover:bg-gold-400 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
                >
                  Get Free Estimate
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        headline="Ready to protect your roof?"
        description="Free inspection. No-obligation estimate. We're here to help with whatever your roof needs."
      />
    </>
  );
}
