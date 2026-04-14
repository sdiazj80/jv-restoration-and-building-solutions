import type { Metadata } from "next";
import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | JV Restoration & Building Solutions",
  description:
    "Browse our portfolio of roofing projects in San Antonio — roof replacements, storm damage repairs, and residential roofing work by JV Restoration.",
};

const featuredImages = [
  { src: "/images/licensed-support/house-exterior-08.jpg", alt: "Completed Residential Roof – San Antonio", category: "Roof Replacement" },
  { src: "/images/licensed-support/craftsman-home-01.jpg", alt: "Premium Roof Installation", category: "Roof Replacement" },
  { src: "/images/licensed-support/house-roof-angle-01.jpg", alt: "New Shingle Roof – Residential", category: "Residential" },
  { src: "/images/licensed-support/suburban-home-01.jpg", alt: "Suburban Roofing Project", category: "Residential" },
];

const galleryImages = [
  { src: "/images/licensed-support/house-exterior-01.jpg", alt: "Residential Roof – San Antonio", category: "Residential" },
  { src: "/images/licensed-support/house-exterior-02.jpg", alt: "Roof Replacement Complete", category: "Roof Replacement" },
  { src: "/images/licensed-support/house-exterior-03.jpg", alt: "Home Exterior – New Roof", category: "Residential" },
  { src: "/images/licensed-support/house-exterior-04.jpg", alt: "Completed Roofing Project", category: "Roof Replacement" },
  { src: "/images/licensed-support/house-exterior-05.jpg", alt: "Residential Roofing", category: "Residential" },
  { src: "/images/licensed-support/house-exterior-06.jpg", alt: "Roof Inspection Complete", category: "Inspection" },
  { src: "/images/licensed-support/house-exterior-07.jpg", alt: "Full Roof Replacement", category: "Roof Replacement" },
  { src: "/images/licensed-support/house-exterior-10.jpg", alt: "Residential Home – New Roof", category: "Residential" },
  { src: "/images/licensed-support/house-exterior-11.jpg", alt: "Modern Roof Installation", category: "Roof Replacement" },
  { src: "/images/licensed-support/roofing-worker-01.jpg", alt: "Roofer at Work", category: "Roof Repair" },
  { src: "/images/licensed-support/roof-shingles-detail-01.jpg", alt: "Roof Tile Detail", category: "Roof Repair" },
  { src: "/images/licensed-support/roof-shingles-detail-02.jpg", alt: "Shingle Close-Up", category: "Roof Repair" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <Image
          src="/images/licensed-support/aerial-neighborhood-01.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Our Work
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Real projects, real results. Browse our roofing work across San
            Antonio and see the quality craftsmanship we bring to every job.
          </p>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                  <span className="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-slate-900">
                    {img.category}
                  </span>
                  <p className="mt-2 text-sm text-white font-medium">
                    {img.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Gallery */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            All Projects
          </h2>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTASection
        headline="Like What You See?"
        description="Let us bring the same quality craftsmanship to your roof. Schedule a free inspection today."
        dark={false}
      />
    </>
  );
}
