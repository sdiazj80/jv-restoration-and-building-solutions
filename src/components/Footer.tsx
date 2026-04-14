import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-neutral-900 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-20">
        {/* Giant CTA Headline */}
        <div className="mb-16 pb-16 border-b border-neutral-900">
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500 mb-4">
                Let&apos;s Work
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter">
                Ready for a roof that{" "}
                <span className="text-gold-500 italic">actually lasts?</span>
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
              <a
                href="tel:+12105510119"
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-700 px-8 py-4 text-xs font-bold text-white uppercase tracking-[0.2em] transition-all hover:border-gold-500 hover:text-gold-500"
              >
                Call Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold-500 px-8 py-4 text-xs font-bold text-black uppercase tracking-[0.2em] transition-all hover:bg-gold-400 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                Get Estimate →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-16 w-16 shrink-0">
                <Image
                  src="/jv-logo.png"
                  alt="JV Restoration logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white tracking-tight leading-none">
                  JV RESTORATION
                </p>
                <p className="text-[10px] font-medium text-gold-500 tracking-[0.2em] uppercase mt-1">
                  Building Solutions
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 max-w-xs">
              San Antonio&apos;s modern roofing brand. Built on quality work,
              real materials, and zero bullshit.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                "Roof Repair",
                "Roof Replacement",
                "Roof Inspections",
                "Storm Damage",
                "Insurance Assistance",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-500">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12105510119"
                  className="block text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <span className="block text-[10px] uppercase tracking-widest text-neutral-600 mb-0.5">Phone</span>
                  (210) 551-0119
                </a>
              </li>
              <li>
                <a
                  href="mailto:jvcontracting210@gmail.com"
                  className="block text-sm text-neutral-400 transition-colors hover:text-white break-all"
                >
                  <span className="block text-[10px] uppercase tracking-widest text-neutral-600 mb-0.5">Email</span>
                  jvcontracting210@gmail.com
                </a>
              </li>
              <li>
                <div className="block text-sm text-neutral-400">
                  <span className="block text-[10px] uppercase tracking-widest text-neutral-600 mb-0.5">Location</span>
                  San Antonio, TX 78213
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-neutral-600">
            © {new Date().getFullYear()} JV Restoration & Building Solutions LLC. All rights reserved.
          </p>
          <p className="text-xs text-neutral-600 uppercase tracking-widest">
            San Antonio · Texas
          </p>
        </div>
      </div>
    </footer>
  );
}
