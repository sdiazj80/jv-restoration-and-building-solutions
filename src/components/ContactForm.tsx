"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border border-gold-500/40 bg-gold-500/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gold-500">
          <svg className="h-7 w-7 text-black" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">
          Message Sent
        </p>
        <h3 className="font-display text-2xl font-bold text-white">
          We&apos;ll be in touch.
        </h3>
        <p className="mt-2 text-sm text-neutral-400">
          Response within 24 hours. For urgent issues, call (210) 551-0119.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b border-neutral-700 px-0 py-4 text-base text-white placeholder-neutral-600 transition-colors focus:border-gold-500 focus:outline-none";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-2"
    >
      <div>
        <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-1">
          Full Name
        </label>
        <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
        <div>
          <label htmlFor="phone" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-1">
            Phone
          </label>
          <input type="tel" id="phone" name="phone" required className={inputClass} placeholder="(210) 555-0000" />
        </div>
        <div>
          <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-1">
            Email
          </label>
          <input type="email" id="email" name="email" className={inputClass} placeholder="you@email.com" />
        </div>
      </div>
      <div className="pt-4">
        <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-1">
          How Can We Help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClass + " resize-none"}
          placeholder="Tell us about your roof…"
        />
      </div>
      <button
        type="submit"
        className="group mt-8 inline-flex items-center justify-center gap-3 bg-gold-500 px-10 py-5 text-sm font-bold text-black uppercase tracking-[0.2em] transition-all hover:bg-gold-400 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] w-full sm:w-auto"
      >
        Send Message
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </form>
  );
}
