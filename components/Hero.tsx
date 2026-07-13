import Image from "next/image";
import HashLink from "./HashLink";
import LeadForm from "./LeadForm";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16 md:pt-32"
    >
      <Image
        src="/images/hero-bg.png"
        alt="Modern residential apartment towers at dusk"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-cream sm:text-5xl lg:text-[3.4rem]">
            Don&apos;t just buy what a single developer is selling.{" "}
            <span className="text-gold">Compare your options with an expert.</span>
          </h1>
          <p className="mt-6 font-sans text-base leading-relaxed text-cream/85 sm:text-lg">
            We are independent real estate consultants, not builders. Fusion
            Ace partners with top developers to give you an unbiased,
            side-by-side look at the best properties, real pricing, and
            hidden pros and cons. Completely free to buyers.
          </p>
          <HashLink
            href="/#enquire"
            className="mt-8 inline-block rounded-full bg-gold px-8 py-3.5 font-sans text-sm font-semibold text-ink transition-colors hover:bg-gold-dark"
          >
            Enquire Now
          </HashLink>
        </div>

        <div className="w-full max-w-md justify-self-center lg:justify-self-end">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
