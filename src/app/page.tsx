import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { ContactForm } from "@/components/ContactForm";
import { MapSection } from "@/components/MapSection";
import { Reviews } from "@/components/Reviews";

/* ════════════════════════════════════════════════════════════ */
/* HERO — Full bleed cinematic                                  */
/* ════════════════════════════════════════════════════════════ */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/licensed-support/craftsman-home-01.jpg"
          alt="Premium residential roofing in San Antonio"
          fill
          priority
          sizes="100vw"
          className="object-cover animate-slow-zoom"
        />
      </div>
      {/* Layered overlays for cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />

      {/* Decorative gold line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[40vh] w-px bg-gradient-to-b from-transparent via-gold-500/60 to-transparent hidden lg:block" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-32 lg:py-40 w-full">
        <div className="max-w-4xl animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-12 bg-gold-500" />
            <p className="text-xs font-bold uppercase tracking-[0.4em] text-gold-500">
              San Antonio · Est. 2024
            </p>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-black text-white leading-[0.85] tracking-[-0.04em]">
            Roofs built
            <br />
            <span className="text-gold-500">to outlast</span>
            <br />
            the <em className="text-forest-500 not-italic">storm.</em>
          </h1>

          <p className="mt-10 text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            JV Restoration is San Antonio&apos;s no-nonsense roofing team. Storm
            damage, replacements, inspections — done right the first time.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-gold-500 px-10 py-5 text-sm font-bold text-black uppercase tracking-[0.2em] transition-all hover:bg-gold-400 hover:shadow-[0_0_50px_rgba(212,175,55,0.5)]"
            >
              Free Inspection
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="tel:+12105510119"
              className="inline-flex items-center justify-center gap-3 border-2 border-neutral-700 bg-black/40 backdrop-blur-sm px-10 py-5 text-sm font-bold text-white uppercase tracking-[0.2em] transition-all hover:border-gold-500 hover:text-gold-500"
            >
              <PhoneIcon /> (210) 551-0119
            </a>
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="absolute left-0 right-0 bottom-0 border-t border-neutral-800/80 bg-black/60 backdrop-blur-md">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { v: "FREE", l: "Inspections" },
                { v: "100%", l: "Local Team" },
                { v: "24HR", l: "Response" },
                { v: "∞", l: "Quality Focus" },
              ].map((s) => (
                <div key={s.l} className="border-l border-gold-500/40 pl-4">
                  <p className="font-display text-3xl md:text-4xl font-black text-white leading-none">
                    {s.v}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 mt-2">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════ */
/* MARQUEE — Trust indicators                                   */
/* ════════════════════════════════════════════════════════════ */
function Marquee() {
  const items = [
    "ROOF REPAIR",
    "ROOF REPLACEMENT",
    "STORM DAMAGE",
    "INSPECTIONS",
    "HAIL DAMAGE",
    "INSURANCE CLAIMS",
    "RESIDENTIAL",
    "COMMERCIAL",
  ];
  const doubled = [...items, ...items];
  return (
    <section className="relative border-y border-neutral-900 bg-black py-8 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center mx-8 shrink-0">
            <span aria-hidden="true" className="font-display text-2xl md:text-4xl font-black text-transparent tracking-tight uppercase [-webkit-text-stroke:1px_theme(colors.gold-500)]">
              {item}
            </span>
            <span className="mx-8 text-gold-500 text-2xl">◆</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════ */
/* SERVICES — Bold split layout                                 */
/* ════════════════════════════════════════════════════════════ */
function Services() {
  const services = [
    {
      no: "01",
      title: "Roof Repair",
      tag: "Fix & Fortify",
      description:
        "Leaks, missing shingles, flashing damage — identified fast, fixed right. We stop small problems before they become expensive.",
      image: "/images/licensed-support/roof-shingles-detail-01.jpg",
    },
    {
      no: "02",
      title: "Roof Replacement",
      tag: "Full Rebuild",
      description:
        "Complete tear-off and new install with quality materials, proper ventilation, and craftsmanship that stands up to Texas weather.",
      image: "/images/licensed-support/house-roof-angle-01.jpg",
    },
    {
      no: "03",
      title: "Roof Inspections",
      tag: "Know The Truth",
      description:
        "Free thorough inspections with full photo documentation. Honest assessments — not sales pitches designed to upsell you.",
      image: "/images/licensed-support/roof-inspection-01.jpg",
    },
    {
      no: "04",
      title: "Storm Damage",
      tag: "Fast Recovery",
      description:
        "Hail, wind, debris — we respond fast, document thoroughly, and restore your roof to full protection. We guide you through insurance.",
      image: "/images/licensed-support/storm-clouds-01.jpg",
    },
  ];

  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
              What We Do
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Work that <span className="text-gold-500 italic">holds up.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-lg text-neutral-400 leading-relaxed">
              Four services. One standard. From minor repairs to full
              replacements, every job is approached like it&apos;s our own home
              at stake.
            </p>
          </div>
        </div>

        <div className="divide-y divide-neutral-900 border-y border-neutral-900">
          {services.map((s) => (
            <Link
              key={s.no}
              href="/services"
              className="group relative grid md:grid-cols-12 gap-8 py-10 md:py-14 items-center transition-all hover:bg-neutral-950/50"
            >
              {/* Number */}
              <div className="md:col-span-2">
                <p aria-hidden="true" className="font-display text-5xl md:text-6xl font-black text-neutral-500 transition-colors group-hover:text-gold-500">
                  {s.no}
                </p>
              </div>
              {/* Image */}
              <div className="md:col-span-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-opacity group-hover:bg-black/0" />
                </div>
              </div>
              {/* Content */}
              <div className="md:col-span-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-3">
                  {s.tag}
                </p>
                <h3 className="font-display text-3xl md:text-5xl font-black text-white leading-none tracking-tight mb-4">
                  {s.title}
                </h3>
                <p className="text-neutral-400 leading-relaxed">
                  {s.description}
                </p>
              </div>
              {/* Arrow */}
              <div className="md:col-span-1 flex md:justify-end">
                <div className="flex h-12 w-12 items-center justify-center border border-neutral-800 transition-all group-hover:border-gold-500 group-hover:bg-gold-500">
                  <svg className="h-4 w-4 text-white transition-colors group-hover:text-black" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════ */
/* PROOF / STATS — Image + data                                 */
/* ════════════════════════════════════════════════════════════ */
function Proof() {
  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/licensed-support/roofing-worker-01.jpg"
                alt="JV Restoration roofer at work"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 md:-right-12 bg-gold-500 text-black px-8 py-6 shadow-2xl">
              <p className="font-display text-4xl md:text-5xl font-black leading-none tracking-tighter">
                Hands
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] mt-2">
                On The Roof
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
              Why JV
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
              We don&apos;t just <span className="text-gold-500 italic">sell roofs.</span>
            </h2>
            <p className="mt-8 text-lg text-neutral-400 leading-relaxed">
              We install them. We inspect them. We stand on top of them in the
              Texas sun. And we stand behind every one we touch.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
              {[
                { v: "Local", l: "San Antonio owned & operated" },
                { v: "Honest", l: "No upselling, no pressure" },
                { v: "Fast", l: "Response within 24 hours" },
                { v: "Quality", l: "Real materials, real work" },
              ].map((item) => (
                <div key={item.v}>
                  <p className="font-display text-3xl md:text-4xl font-black text-gold-500 leading-none tracking-tight">
                    {item.v}
                  </p>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {item.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════ */
/* PROCESS — Vertical timeline                                  */
/* ════════════════════════════════════════════════════════════ */
function Process() {
  const steps = [
    { n: "01", t: "Schedule Inspection", d: "Call or submit the form. We set up a convenient time at no cost." },
    { n: "02", t: "On-Site Inspection", d: "Thorough roof check with full photo documentation — no detail missed." },
    { n: "03", t: "Clear Options", d: "Honest findings, straightforward pricing. No pressure. No surprises." },
    { n: "04", t: "Work Completed", d: "Clean job site. Quality materials. Craftsmanship you can count on." },
  ];
  return (
    <section className="relative bg-gradient-to-b from-black via-forest-900/20 to-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
            The Process
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter max-w-4xl mx-auto text-balance">
            Four steps. <span className="text-gold-500 italic">No runaround.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-px bg-neutral-900 border border-neutral-900">
          {steps.map((s, i) => (
            <div key={s.n} className="group relative bg-black p-8 md:p-10 transition-colors hover:bg-neutral-950">
              <p aria-hidden="true" className="font-display text-6xl md:text-7xl font-black text-neutral-500 leading-none tracking-tighter transition-colors group-hover:text-gold-500">
                {s.n}
              </p>
              <h3 className="font-display text-xl md:text-2xl font-black text-white mt-6 leading-tight">
                {s.t}
              </h3>
              <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                {s.d}
              </p>
              {i < 3 && (
                <div className="hidden md:block absolute right-0 top-10 h-0.5 w-8 bg-gold-500/40 translate-x-full" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════ */
/* GALLERY PREVIEW — Bold mosaic                                */
/* ════════════════════════════════════════════════════════════ */
function GalleryPreview() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
              The Work
            </p>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
              Proof over <span className="text-gold-500 italic">promises.</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 text-sm font-bold text-white uppercase tracking-[0.2em] border-b border-gold-500 pb-2 self-start hover:text-gold-500 transition-colors"
          >
            View Full Gallery
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Bold asymmetric grid */}
        <div className="grid grid-cols-12 gap-3">
          <GalleryTile src="/images/licensed-support/house-exterior-08.jpg" alt="Completed Residential Roof" tag="Replacement" className="col-span-12 md:col-span-7 aspect-[16/10]" />
          <GalleryTile src="/images/licensed-support/house-roof-angle-01.jpg" alt="New Shingle Install" tag="Replacement" className="col-span-12 md:col-span-5 aspect-[16/10]" />
          <GalleryTile src="/images/licensed-support/suburban-home-01.jpg" alt="Suburban Roof" tag="Residential" className="col-span-6 md:col-span-4 aspect-square" />
          <GalleryTile src="/images/licensed-support/house-exterior-01.jpg" alt="Roof Repair" tag="Repair" className="col-span-6 md:col-span-4 aspect-square" />
          <GalleryTile src="/images/licensed-support/craftsman-home-01.jpg" alt="Premium Install" tag="Replacement" className="col-span-12 md:col-span-4 aspect-square" />
        </div>
      </div>
    </section>
  );
}

function GalleryTile({
  src,
  alt,
  tag,
  className,
}: {
  src: string;
  alt: string;
  tag: string;
  className: string;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 50vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">
          {tag}
        </p>
        <p className="font-display text-lg font-bold text-white leading-tight">
          {alt}
        </p>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════ */
/* PROBLEM — Alternating dark panels                            */
/* ════════════════════════════════════════════════════════════ */
function Problem() {
  const problems = [
    { t: "Damage hides in plain sight", d: "By the time you see a leak, the damage is already extensive. Most issues aren't visible from the ground." },
    { t: "Small issues compound fast", d: "A loose shingle becomes water damage, mold, and structural repairs. Early action saves thousands." },
    { t: "Storms cause invisible damage", d: "Hail and wind compromise your roof without obvious signs. Only a pro can spot the real damage." },
    { t: "Insurance claims are confusing", d: "We document damage thoroughly and guide you through the process — no hype, just support." },
  ];
  return (
    <section className="relative bg-ink-950 py-24 md:py-32 border-y border-neutral-900">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
            The Reality
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
            What most people <span className="text-gold-500 italic">don&apos;t see</span> until it&apos;s too late.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-neutral-900">
          {problems.map((p, i) => (
            <div key={i} className="bg-black p-10 md:p-12">
              <div className="flex gap-6">
                <div className="font-display text-3xl font-black text-gold-500 leading-none shrink-0 w-10">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                    {p.t}
                  </h3>
                  <p className="mt-4 text-neutral-400 leading-relaxed">
                    {p.d}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════ */
/* CONTACT BLOCK                                                */
/* ════════════════════════════════════════════════════════════ */
function ContactBlock() {
  return (
    <section className="relative bg-black py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
              Get In Touch
            </p>
            <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
              Tell us what&apos;s <span className="text-gold-500 italic">happening.</span>
            </h2>
            <p className="mt-8 text-lg text-neutral-400 leading-relaxed max-w-lg">
              Whether you need an inspection, a repair, or a full replacement — reach out. We respond within 24 hours.
            </p>

            <div className="mt-12 space-y-8">
              <a href="tel:+12105510119" className="group block">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">Phone</p>
                <p className="font-display text-3xl md:text-4xl font-black text-white group-hover:text-gold-500 transition-colors tracking-tight">
                  (210) 551-0119
                </p>
              </a>
              <a href="mailto:jvcontracting210@gmail.com" className="group block">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">Email</p>
                <p className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-gold-500 transition-colors break-all">
                  jvcontracting210@gmail.com
                </p>
              </a>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">Service Area</p>
                <p className="font-display text-xl font-bold text-white">
                  San Antonio, TX 78213
                </p>
                <p className="text-sm text-neutral-400 mt-1">
                  & surrounding areas
                </p>
              </div>
            </div>
          </div>
          <div className="border border-neutral-900 bg-neutral-950 p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-3">
              Quick Form
            </p>
            <h3 className="font-display text-3xl font-black text-white leading-none tracking-tight mb-8">
              Request an estimate.
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ════════════════════════════════════════════════════════════ */
/* PAGE                                                         */
/* ════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Proof />
      <Problem />
      <Process />
      <GalleryPreview />
      <Reviews />
      <MapSection />
      <CTASection
        headline="Your roof is one storm away."
        description="Don't wait. Get a free inspection today — we'll tell you exactly where you stand."
      />
      <ContactBlock />
    </>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}
