import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | JV Restoration & Building Solutions",
  description:
    "Contact JV Restoration & Building Solutions for a free roof inspection or estimate. Call (210) 551-0119 or send us a message. San Antonio, TX.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-slate-900 py-16 md:py-20 overflow-hidden">
        <Image
          src="/images/licensed-support/house-exterior-08.jpg"
          alt=""
          fill
          className="object-cover opacity-15"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Get Your Free Roof Inspection
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300 leading-relaxed">
            Have a question or ready to get started? Reach out by phone, email,
            or fill out the form below. We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-5">
                  <a
                    href="tel:+12105510119"
                    className="flex items-center gap-4 rounded-xl bg-slate-50 p-5 transition-colors hover:bg-amber-500/5 border border-slate-100"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-white shrink-0">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Call Us
                      </p>
                      <p className="text-lg font-bold text-slate-900">
                        (210) 551-0119
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:jvcontracting210@gmail.com"
                    className="flex items-center gap-4 rounded-xl bg-slate-50 p-5 transition-colors hover:bg-amber-500/5 border border-slate-100"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-white shrink-0">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Email
                      </p>
                      <p className="text-lg font-bold text-slate-900">
                        jvcontracting210@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 rounded-xl bg-slate-50 p-5 border border-slate-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-500 text-white shrink-0">
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Service Area
                      </p>
                      <p className="text-lg font-bold text-slate-900">
                        San Antonio, TX 78213
                      </p>
                      <p className="text-sm text-slate-500">
                        Serving San Antonio & surrounding areas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="rounded-xl bg-slate-900 p-6 text-white">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4">
                  Response Time
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We respond to all inquiries within 24 hours. For emergency
                  roof situations, call us directly and we&apos;ll prioritize
                  your request.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl bg-slate-50 p-6 sm:p-8 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Request a Free Estimate
                </h2>
                <p className="text-sm text-slate-500 mb-6">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours with a free estimate.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
