export function MapSection({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className="relative bg-black border-t border-neutral-900">
      {!compact && (
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10 pt-20 md:pt-24 pb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
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
            <div className="flex flex-col gap-3 md:items-end">
              <a
                href="tel:+12105510119"
                className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-[0.2em] hover:text-gold-500 transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (210) 551-0119
              </a>
              <p className="text-xs text-neutral-400 uppercase tracking-widest">
                San Antonio, TX 78213
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="relative w-full aspect-[21/9] md:aspect-[21/7] overflow-hidden border-t border-b border-neutral-900 bg-neutral-950">
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
    </section>
  );
}
