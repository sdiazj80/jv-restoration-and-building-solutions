import type { Metadata } from "next";
import { CTASection } from "@/components/CTASection";
import { GalleryGrid } from "./GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | JV Restoration & Building Solutions",
  description:
    "Browse our portfolio of real roofing projects in San Antonio — roof replacements, storm damage repairs, and residential roofing work by JV Restoration.",
};

const featuredImages = [
  { src: "/images/roof-1.jpg", alt: "Roof Replacement – San Antonio", category: "Roof Replacement" },
  { src: "/images/roof-2.jpg", alt: "Storm Damage Repair", category: "Storm Damage" },
  { src: "/images/roof-3.jpg", alt: "Residential Roofing Project", category: "Residential" },
  { src: "/images/roof-4.jpg", alt: "Completed Roof Installation", category: "Roof Replacement" },
];

const galleryImages = [
  { src: "/images/roof-5.jpg", alt: "Roof Inspection in Progress", category: "Inspection" },
  { src: "/images/roof-6.jpg", alt: "Before & After Roof Repair", category: "Roof Repair" },
  { src: "/images/roof-7.jpg", alt: "New Shingle Installation", category: "Roof Replacement" },
  { src: "/images/roof-8.jpg", alt: "Hail Damage Assessment", category: "Storm Damage" },
  { src: "/images/roof-9.jpg", alt: "Residential Roof – San Antonio", category: "Residential" },
  { src: "/images/roof-10.jpg", alt: "Flashing Repair Detail", category: "Roof Repair" },
  { src: "/images/roof-11.jpg", alt: "Complete Tear-Off in Progress", category: "Roof Replacement" },
  { src: "/images/roof-12.jpg", alt: "Finished Roof – Aerial View", category: "Residential" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Our Work
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Real projects, real results. Every photo below is from an actual JV
            Restoration roofing job in San Antonio — no stock images.
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
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-800/90 text-slate-400 p-6 text-center">
                  <svg
                    className="h-10 w-10 mb-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
                    />
                  </svg>
                  <p className="text-sm font-semibold text-slate-300">
                    {img.alt}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Add image: public{img.src}
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-block rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-slate-900">
                    {img.category}
                  </span>
                  <p className="mt-1 text-sm text-white font-medium">
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
