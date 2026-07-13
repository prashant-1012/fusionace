export default function Founder() {
  return (
    <section id="founder" className="bg-ink py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="flex justify-center lg:justify-start">
            <div className="relative flex h-56 w-56 items-center justify-center rounded-full border-2 border-gold/40 bg-ink-light sm:h-72 sm:w-72">
              <span className="font-display text-6xl font-semibold text-gold sm:text-7xl">
                NK
              </span>
            </div>
          </div>

          <div className="max-w-2xl">
            <span className="font-sans text-sm font-semibold uppercase tracking-wider text-gold">
              Meet Your Consultant
            </span>
            <p className="mt-3 font-display text-2xl font-semibold text-cream sm:text-3xl">
              Hi, I&apos;m Nayeem Munaf Kazi.
            </p>

            <p className="mt-6 font-sans text-base leading-relaxed text-cream/80">
              When I started Fusion Ace, I did it because I was tired of
              seeing home buyers get pushed around by aggressive developer
              sales pitches. Buying a home is likely the biggest financial
              decision of your life, and you deserve a person who sits on
              your side of the table, not the builder&apos;s.
            </p>

            <p className="mt-4 font-sans text-base leading-relaxed text-cream/80">
              As an independent consultant, my goal isn&apos;t just to sell
              you a piece of inventory. It&apos;s to look at your budget,
              your family&apos;s needs, and the hard market facts, and then
              point you toward the project that actually makes sense for
              your future. When you reach out to us, we guide you through
              transparency from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
