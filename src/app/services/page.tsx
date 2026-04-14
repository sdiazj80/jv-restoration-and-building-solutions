import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Roofing Services | JV Restoration & Building Solutions",
  description:
    "Professional roofing services in San Antonio — roof repair, replacement, inspections, storm damage restoration, and insurance claim assistance. Free estimates.",
};

const services = [
  {
    id: "roof-repair",
    title: "Roof Repair",
    tagline: "Fix Problems Before They Get Worse",
    image: "/images/licensed-support/roof-shingles-detail-01.jpg",
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
      "Catching a small problem early can save you thousands in water damage, mold remediation, and structural repairs. We inspect, explain what we find, and fix only what needs fixing.",
  },
  {
    id: "roof-replacement",
    title: "Roof Replacement",
    tagline: "When It's Time for a New Roof, We Do It Right",
    image: "/images/licensed-support/house-roof-angle-01.jpg",
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
  },
  {
    id: "roof-inspections",
    title: "Roof Inspections",
    tagline: "Know Exactly What's Going On Up There",
    image: "/images/licensed-support/roof-inspection-01.jpg",
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
      "Regular inspections catch issues before they become expensive. Whether you're buying a home, selling one, or just want peace of mind, our inspections give you the information you need to make smart decisions.",
  },
  {
    id: "storm-damage",
    title: "Storm Damage Roofing",
    tagline: "Hail, Wind, and Storm Damage — Restored Fast",
    image: "/images/licensed-support/storm-clouds-01.jpg",
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
      "After a storm, time matters. Water intrusion from undetected damage can lead to mold, structural issues, and costly interior damage. We respond quickly to assess and protect your home.",
  },
  {
    id: "insurance-assistance",
    title: "Insurance Claim Assistance",
    tagline: "Guidance Through the Claims Process",
    image: "/images/licensed-support/house-exterior-01.jpg",
    description:
      "Filing an insurance claim for roof damage can be confusing and overwhelming. While we're not a public adjuster, we provide thorough documentation and guidance to support your claim and help the process go smoothly.",
    points: [
      "Thorough damage documentation",
      "Detailed photo reports",
      "Assistance understanding your policy coverage",
      "Coordination with insurance adjusters",
      "Guidance through the claims process",
    ],
    value:
      "Our documentation helps ensure your insurance company has the information they need to process your claim. We're here to guide you — not make promises we can't keep.",
    note: "Note: We provide documentation and guidance to support your insurance claim. Final claim decisions are made by your insurance provider.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <Image
          src="/images/licensed-support/aerial-residential-02.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Our Services
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Professional Roofing Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
            From routine inspections to full replacements and storm damage
            restoration — we deliver quality roofing solutions for San Antonio
            homes and businesses.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        {services.map((service, idx) => (
          <div
            key={service.id}
            id={service.id}
            className={idx % 2 === 1 ? "bg-slate-50" : "bg-white"}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
              {/* Service Image */}
              <div className="relative aspect-[21/9] rounded-2xl overflow-hidden mb-12">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-2">
                    {service.tagline}
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                  {service.note && (
                    <p className="mt-3 text-sm text-slate-500 italic">
                      {service.note}
                    </p>
                  )}
                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-amber-500 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-amber-400"
                    >
                      Get Free Estimate
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
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div>
                  <div className="rounded-xl bg-white p-6 shadow-sm border border-slate-200">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900 mb-4">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-3">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <svg
                            className="h-5 w-5 shrink-0 text-amber-500 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-sm text-slate-700">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 rounded-xl bg-amber-500/5 border border-amber-500/20 p-5">
                    <h4 className="text-sm font-semibold text-slate-900 mb-1">
                      Why It Matters
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-600">
                      {service.value}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <CTASection
        headline="Ready to Protect Your Roof?"
        description="Schedule a free inspection or get a no-obligation estimate. We're here to help with whatever your roof needs."
      />
    </>
  );
}
