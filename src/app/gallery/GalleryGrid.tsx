"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    "All",
    ...Array.from(new Set(images.map((img) => img.category))),
  ];

  const filtered =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <>
      {/* Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition-all ${
              selectedCategory === cat
                ? "bg-gold-500 text-black"
                : "border border-neutral-800 text-neutral-400 hover:border-gold-500 hover:text-gold-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => setLightboxIndex(i)}
            className="group relative aspect-square overflow-hidden bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-gold-500"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-gradient-to-t from-black via-black/80 to-transparent">
              <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gold-500 mb-1">
                {img.category}
              </p>
              <p className="text-sm font-bold text-white leading-tight">
                {img.alt}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 text-white hover:text-gold-500 z-10"
            aria-label="Close lightbox"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div
            className="relative max-w-6xl w-full aspect-[4/3]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightboxIndex]?.src}
              alt={filtered[lightboxIndex]?.alt}
              fill
              className="object-contain"
              sizes="95vw"
              priority
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">
              {filtered[lightboxIndex]?.category}
            </p>
            <p className="font-display text-lg font-bold text-white">
              {filtered[lightboxIndex]?.alt}
            </p>
          </div>

          {lightboxIndex > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex - 1);
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 border border-neutral-800 p-4 text-white hover:border-gold-500 hover:text-gold-500 transition-all"
              aria-label="Previous image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
          )}
          {lightboxIndex < filtered.length - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(lightboxIndex + 1);
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 border border-neutral-800 p-4 text-white hover:border-gold-500 hover:text-gold-500 transition-all"
              aria-label="Next image"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          )}
        </div>
      )}
    </>
  );
}
