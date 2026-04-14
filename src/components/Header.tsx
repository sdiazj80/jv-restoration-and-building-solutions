"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-500 font-bold text-slate-900 text-lg">
              JV
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold leading-tight text-white tracking-wide">
                JV Restoration
              </p>
              <p className="text-xs text-slate-400 leading-tight">
                & Building Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-amber-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+12105510119"
              className="hidden lg:inline-flex items-center gap-2 rounded-lg bg-amber-500 px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-amber-400"
            >
              <PhoneIcon />
              (210) 551-0119
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex rounded-lg border border-amber-500 px-4 py-2 text-sm font-semibold text-amber-400 transition-colors hover:bg-amber-500 hover:text-slate-900"
            >
              Free Estimate
            </Link>
            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center rounded-lg p-2 text-slate-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900">
          <nav className="flex flex-col px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-amber-400"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+12105510119"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-bold text-slate-900"
            >
              <PhoneIcon />
              Call (210) 551-0119
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
