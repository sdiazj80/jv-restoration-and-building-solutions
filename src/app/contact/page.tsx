import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { Reviews } from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Contact | JV Restoration — San Antonio Roofing",
  description:
    "Get a free roof inspection or estimate from JV Restoration in San Antonio. Call (210) 551-0119 or send us a message.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden bg-black pt-32">
        <Image
          src="/images/licensed-support/house-exterior-08.jpg"
          alt=""
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-20 w-full">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
            Contact
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.85] tracking-tighter">
            Let&apos;s <span className="text-gold-500 italic">talk.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-neutral-300 leading-relaxed">
            Have a question or ready to get started? Reach out by phone, email,
            or the form below. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="bg-black py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Contact info */}
            <div className="lg:col-span-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
                Direct Lines
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter mb-12">
                Multiple ways to <span className="text-gold-500 italic">reach us.</span>
              </h2>

              <div className="space-y-10">
                <a href="tel:+12105510119" className="group block border-l-2 border-gold-500 pl-6 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">
                    Call / Text
                  </p>
                  <p className="font-display text-3xl md:text-4xl font-black text-white group-hover:text-gold-500 transition-colors tracking-tight leading-none">
                    (210) 551-0119
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">Available during business hours</p>
                </a>

                <a href="mailto:jvcontracting210@gmail.com" className="group block border-l-2 border-neutral-800 pl-6 py-2 hover:border-gold-500 transition-colors">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">
                    Email
                  </p>
                  <p className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-gold-500 transition-colors break-all leading-tight">
                    jvcontracting210@gmail.com
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">Response within 24 hours</p>
                </a>

                <div className="border-l-2 border-neutral-800 pl-6 py-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">
                    Service Area
                  </p>
                  <p className="font-display text-xl md:text-2xl font-bold text-white leading-tight">
                    San Antonio, TX 78213
                  </p>
                  <p className="text-sm text-neutral-500 mt-2">
                    Serving San Antonio & surrounding areas
                  </p>
                </div>
              </div>

              <div className="mt-16 p-6 border border-gold-500/30 bg-gold-500/5">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-500 mb-2">
                  Storm Emergency
                </p>
                <p className="text-sm text-neutral-300 leading-relaxed">
                  Roof damage from a recent storm? Call us directly — we
                  prioritize urgent situations and can often respond same-day
                  with emergency tarping.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <div className="border border-neutral-900 bg-neutral-950 p-8 md:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-3">
                  Request an Estimate
                </p>
                <h3 className="font-display text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tighter mb-10">
                  Free. Honest. <span className="text-gold-500 italic">Fast.</span>
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="relative bg-black border-t border-neutral-900">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-5">
                Find Us
              </p>
              <h2 className="font-display text-5xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter">
                San Antonio <span className="text-gold-500 italic">based.</span>
              </h2>
              <p className="mt-6 text-lg text-neutral-400 max-w-xl leading-relaxed">
                Local team. Local knowledge. We serve San Antonio and the
                surrounding areas with pride.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden border-t border-b border-neutral-900 bg-neutral-950">
          {/* Dark overlay filter to integrate map with design */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55385.55498871889!2d-98.57247807031249!3d29.470967500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865c5f7fd0c75e1d%3A0x5678c13a3c4bb84c!2sSan%20Antonio%2C%20TX%2078213!5e0!3m2!1sen!2sus!4v1702000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(0.85) saturate(0.6)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="JV Restoration service area — San Antonio, TX"
            className="absolute inset-0"
          />
        </div>

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Free Inspections",
              "Free Estimates",
              "Residential & Commercial",
              "Serving Surrounding Areas",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-2 w-2 bg-gold-500" />
                <p className="text-sm font-bold text-white uppercase tracking-widest">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
    </>
  );
}
