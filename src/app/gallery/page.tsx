import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | JV Restoration — San Antonio Roofing",
  description:
    "Real roofing projects in San Antonio — replacements, storm damage repairs, residential work.",
};

const featuredImages = [
  { src: "/images/licensed-support/house-exterior-08.jpg", alt: "Completed Residential Roof — San Antonio", category: "Roof Replacement" },
  { src: "/images/licensed-support/craftsman-home-01.jpg", alt: "Premium Roof Installation", category: "Roof Replacement" },
  { src: "/images/licensed-support/house-roof-angle-01.jpg", alt: "New Shingle Roof — Residential", category: "Residential" },
  { src: "/images/licensed-support/suburban-home-01.jpg", alt: "Suburban Roofing Project", category: "Residential" },
];

const galleryImages = [
  { src: "/images/licensed-support/house-exterior-01.jpg", alt: "Residential Roof", category: "Residential" },
  { src: "/images/licensed-support/house-exterior-02.jpg", alt: "Roof Replacement", category: "Roof Replacement" },
  { src: "/images/licensed-support/house-exterior-03.jpg", alt: "New Roof", category: "Residential" },
  { src: "/images/licensed-support/house-exterior-04.jpg", alt: "Completed Project", category: "Roof Replacement" },
  { src: "/images/licensed-support/house-exterior-05.jpg", alt: "Residential Roofing", category: "Residential" },
  { src: "/images/licensed-support/house-exterior-06.jpg", alt: "Inspection Complete", category: "Inspection" },
  { src: "/images/licensed-support/house-exterior-07.jpg", alt: "Full Roof Replacement", category: "Roof Replacement" },
  { src: "/images/licensed-support/house-exterior-10.jpg", alt: "Residential — New Roof", category: "Residential" },
  { src: "/images/licensed-support/house-exterior-11.jpg", alt: "Modern Install", category: "Roof Replacement" },
  { src: "/images/licensed-support/roofing-worker-01.jpg", alt: "Roofer at Work", category: "Roof Repair" },
  { src: "/images/licensed-support/roof-shingles-detail-01.jpg", alt: "Roof Tile Detail", category: "Roof Repair" },
  { src: "/images/licensed-support/roof-shingles-detail-02.jpg", alt: "Shingle Close-Up", category: "Roof Repair" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-black pt-32">
        <Image
          src="/images/licensed-support/aerial-neighborhood-01.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-20 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
            The Work
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter">
            Proof. <span className="text-gold-500 italic">Not promises.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed">
            Real projects across San Antonio. Browse our work and see the
            quality we bring to every job.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="bg-black py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-3">
                Featured
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tighter">
                Highlighted work
              </h2>
            </div>
            <p className="hidden md:block text-sm text-neutral-500 uppercase tracking-widest">
              {featuredImages.length} projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {featuredImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden bg-neutral-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i < 2}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-3">
                    {img.category}
                  </p>
                  <p className="font-display text-2xl md:text-3xl font-black text-white leading-tight tracking-tight">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="bg-ink-950 border-t border-neutral-900 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-3">
                All Projects
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-black text-white tracking-tighter">
                Full archive
              </h2>
            </div>
          </div>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTASection
        headline="Want work like this on your home?"
        description="Free inspection. Honest assessment. Schedule today."
      />
    </>
  );
}
