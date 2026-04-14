import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";

/* ───────────────────────── HERO ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/licensed-support/craftsman-home-01.jpg"
        alt="Beautiful residential home with professionally installed roof in San Antonio"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 border border-amber-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-6 backdrop-blur-sm">
            San Antonio&apos;s Trusted Roofers
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
            Protect Your Home With a Roof{" "}
            <span className="text-amber-400">Built to Last</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-200 max-w-2xl">
            From storm damage repairs to complete roof replacements, JV
            Restoration delivers honest assessments, quality craftsmanship, and
            results you can see. Serving San Antonio homeowners and businesses
            with pride.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-8 py-4 text-sm font-bold text-slate-900 transition-colors hover:bg-amber-400 shadow-lg shadow-amber-500/25"
            >
              <InspectionIcon />
              Get Free Roof Inspection
            </Link>
            <a
              href="tel:+12105510119"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/20 hover:border-white/50"
            >
              <PhoneIcon />
              Call Now — (210) 551-0119
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────── TRUST STRIP ─────────────────────── */
function TrustStrip() {
  const items = [
    { icon: <CheckCircle />, text: "Free Inspections" },
    { icon: <CheckCircle />, text: "Free Estimates" },
    { icon: <CheckCircle />, text: "Residential & Commercial" },
    { icon: <CheckCircle />, text: "Storm Damage Specialists" },
    { icon: <CheckCircle />, text: "San Antonio Based" },
  ];
  return (
    <section className="bg-amber-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm font-semibold text-slate-900"
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────── SERVICES PREVIEW ────────────────────── */
const services = [
  {
    title: "Roof Repair",
    description:
      "Leaks, missing shingles, and weather damage fixed fast. We stop small problems before they become expensive emergencies.",
    icon: <WrenchIcon />,
    image: "/images/licensed-support/roof-shingles-detail-01.jpg",
  },
  {
    title: "Roof Replacement",
    description:
      "When repairs aren't enough, we deliver full roof replacements with premium materials and clean, professional installation.",
    icon: <HomeIcon />,
    image: "/images/licensed-support/house-roof-angle-01.jpg",
  },
  {
    title: "Roof Inspections",
    description:
      "Free, thorough inspections that catch issues early. Know exactly what's going on with your roof — no surprises.",
    icon: <SearchIcon />,
    image: "/images/licensed-support/roof-inspection-01.jpg",
  },
  {
    title: "Storm Damage Roofing",
    description:
      "Hail, wind, and storm damage restored quickly. We help you navigate the process and get your roof back to full protection.",
    icon: <StormIcon />,
    image: "/images/licensed-support/storm-clouds-01.jpg",
  },
];

function ServicesPreview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="What We Do"
          title="Professional Roofing Services"
          description="Comprehensive roofing solutions for San Antonio homes and businesses — from quick repairs to complete replacements."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-xl border border-slate-200 overflow-hidden transition-all hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 transition-colors group-hover:bg-amber-500 group-hover:text-white">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {s.description}
                </p>
                <Link
                  href="/services"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-600 transition-colors hover:text-amber-500"
                >
                  Learn More
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROOF / CREDIBILITY ──────────────────── */
function ProofSection() {
  return (
    <section className="relative bg-slate-900 py-16 md:py-24 overflow-hidden">
      <Image
        src="/images/licensed-support/aerial-neighborhood-01.jpg"
        alt="Aerial view of residential neighborhood"
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-2">
              Why San Antonio Trusts Us
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-balance">
              Roofing Done Right, Every Time
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-300">
              We&apos;re not a fly-by-night operation. JV Restoration is a local
              San Antonio team that stands behind every job. Our work speaks for
              itself — and so do the homeowners we&apos;ve helped protect.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { value: "Free", label: "Inspections & Estimates" },
                { value: "100%", label: "Satisfaction Focus" },
                { value: "Local", label: "San Antonio Based" },
                { value: "Fast", label: "Response Times" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-amber-400">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/licensed-support/roofing-worker-01.jpg"
              alt="Professional roofer working on a roof"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROBLEM SECTION ──────────────────────── */
function ProblemSection() {
  const problems = [
    {
      title: "Damage Isn't Always Visible",
      description:
        "Roof damage from storms and wear often hides beneath the surface. By the time you see a leak inside, the damage may already be extensive.",
    },
    {
      title: "Small Issues Become Expensive",
      description:
        "A missing shingle or minor crack can lead to water damage, mold, and structural problems if ignored. Early action saves thousands.",
    },
    {
      title: "Storm Damage Goes Unnoticed",
      description:
        "Hail and wind can compromise your roof's integrity without any obvious signs from the ground. A professional inspection reveals the truth.",
    },
    {
      title: "Insurance Claims Are Confusing",
      description:
        "Navigating the insurance process after storm damage is overwhelming. We provide documentation and guidance to support your claim.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why It Matters"
          title="Don't Wait Until It's Too Late"
          description="Most roof problems start small. Here's why acting now protects your home and your wallet."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-xl bg-white p-6 shadow-sm border border-slate-100"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-700/10 text-red-700">
                <AlertIcon />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROCESS SECTION ──────────────────────── */
function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Schedule Your Inspection",
      description: "Call us or fill out our form. We'll set up a convenient time to inspect your roof at no cost.",
    },
    {
      step: "02",
      title: "Professional Roof Inspection",
      description: "Our team performs a thorough inspection and documents everything — no detail overlooked.",
    },
    {
      step: "03",
      title: "Clear Options Provided",
      description: "We present honest findings with straightforward options and transparent pricing. No pressure, no surprises.",
    },
    {
      step: "04",
      title: "Quality Work Completed",
      description: "Our crew gets to work. Clean job site, quality materials, and craftsmanship you can count on.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="Simple, Transparent Process"
          description="From inspection to completion, we make every step clear and stress-free."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-2xl font-bold text-slate-900">
                {s.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── GALLERY PREVIEW ──────────────────────────── */
function GalleryPreview() {
  const images = [
    { src: "/images/licensed-support/house-exterior-08.jpg", alt: "Completed Residential Roof – San Antonio" },
    { src: "/images/licensed-support/house-exterior-01.jpg", alt: "New Roof Installation" },
    { src: "/images/licensed-support/suburban-home-01.jpg", alt: "Suburban Home Roofing Project" },
    { src: "/images/licensed-support/house-roof-angle-01.jpg", alt: "Residential Roof Replacement" },
    { src: "/images/licensed-support/house-exterior-04.jpg", alt: "Roof Repair – San Antonio" },
    { src: "/images/licensed-support/house-exterior-07.jpg", alt: "Residential Roofing" },
  ];

  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Work"
          title="Real Projects, Real Results"
          description="Browse our recent roofing projects across San Antonio."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-200"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-sm font-medium text-white">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            View Full Gallery
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ──────────── CONTACT BLOCK ───────────────────────────── */
function ContactBlock() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeading
              label="Get In Touch"
              title="Ready to Get Started?"
              description="Whether you need an inspection, a repair, or a full replacement — we're here to help. Reach out today."
              centered={false}
            />
            <div className="mt-8 space-y-5">
              <a
                href="tel:+12105510119"
                className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-amber-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-white">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Call Us</p>
                  <p className="text-lg font-bold text-slate-900">(210) 551-0119</p>
                </div>
              </a>
              <a
                href="mailto:jvcontracting210@gmail.com"
                className="flex items-center gap-4 rounded-xl bg-slate-50 p-4 transition-colors hover:bg-amber-500/5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-white">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email</p>
                  <p className="text-lg font-bold text-slate-900">jvcontracting210@gmail.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-white">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Location</p>
                  <p className="text-lg font-bold text-slate-900">San Antonio, TX 78213</p>
                  <p className="text-sm text-slate-500">Serving San Antonio & surrounding areas</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Request a Free Estimate
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────── PAGE ────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServicesPreview />
      <ProofSection />
      <ProblemSection />
      <ProcessSection />
      <GalleryPreview />
      <CTASection />
      <ContactBlock />
    </>
  );
}

/* ──────────── ICONS ───────────────────────────────────── */
function PhoneIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function InspectionIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function WrenchIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.49 5.49a2.121 2.121 0 01-3-3l5.49-5.49m2.02 2.02c.603-.603.871-1.44.743-2.26a4.5 4.5 0 016.205-4.66l-2.83 2.83a1.5 1.5 0 002.122 2.122l2.828-2.829a4.5 4.5 0 01-4.66 6.206c-.82-.128-1.657.14-2.26.743L7.57 20.32" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  );
}

function StormIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
  );
}
