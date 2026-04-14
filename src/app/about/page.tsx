import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us | JV Restoration & Building Solutions",
  description:
    "Learn about JV Restoration & Building Solutions — San Antonio's trusted roofing professionals committed to quality, honesty, and protecting your home.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            About Us
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built on Hard Work, Driven by Results
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
            JV Restoration & Building Solutions is a San Antonio roofing company
            that believes every homeowner deserves honest service, quality
            craftsmanship, and a roof they can count on.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeading
                label="Our Story"
                title="Roofing San Antonio Homes the Right Way"
                centered={false}
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-600">
                <p>
                  JV Restoration & Building Solutions was founded on a simple
                  idea: homeowners deserve a roofing contractor they can trust.
                  Too many companies cut corners, push unnecessary work, or
                  disappear after cashing the check. We built this company to be
                  different.
                </p>
                <p>
                  Based in San Antonio, we serve homeowners and businesses across
                  the city and surrounding areas. Our team understands the unique
                  challenges that Texas weather brings — from intense summer
                  heat to sudden hailstorms — and we build roofs that stand up
                  to it all.
                </p>
                <p>
                  Every project starts with an honest assessment. We tell you
                  exactly what we see, what needs attention, and what your
                  options are. No pressure, no upselling — just straightforward
                  guidance from people who know roofing.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/licensed-support/roofing-worker-01.jpg"
                alt="JV Restoration roofer at work on a residential roof"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What Sets Us Apart"
            title="Our Commitment to You"
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Honest Assessments",
                description:
                  "We never recommend work that isn't needed. Our inspections are thorough, and our recommendations are based on facts — not sales targets.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: "Quality Craftsmanship",
                description:
                  "We use quality materials and take the time to do every job right. We don't cut corners, because your roof protects everything underneath it.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.49 5.49a2.121 2.121 0 01-3-3l5.49-5.49m2.02 2.02c.603-.603.871-1.44.743-2.26a4.5 4.5 0 016.205-4.66l-2.83 2.83a1.5 1.5 0 002.122 2.122l2.828-2.829a4.5 4.5 0 01-4.66 6.206c-.82-.128-1.657.14-2.26.743L7.57 20.32" />
                  </svg>
                ),
              },
              {
                title: "Reliability You Can Count On",
                description:
                  "When we say we'll be there, we're there. When we give you a timeline, we stick to it. We understand that your time and trust matter.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Local San Antonio Team",
                description:
                  "We live and work in San Antonio. This is our community, and we treat every home like it belongs to a neighbor — because it does.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
              },
              {
                title: "Clean Job Sites",
                description:
                  "We respect your property. Our crew keeps the work area clean, removes all debris, and leaves your home looking better than we found it.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                  </svg>
                ),
              },
              {
                title: "Storm Damage Experts",
                description:
                  "Texas weather is unpredictable. We specialize in identifying and repairing hail, wind, and storm damage — and we help guide you through the insurance process.",
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3" />
                  </svg>
                ),
              },
            ].map((v) => (
              <div key={v.title} className="rounded-xl bg-white p-6 shadow-sm border border-slate-100">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600">
                  {v.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Let's Talk About Your Roof"
        description="Whether you need a quick inspection or a full replacement, we're ready to help. Call us today or request a free estimate online."
      />
    </>
  );
}
