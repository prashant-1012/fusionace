import Image from "next/image";

const CARDS = [
  {
    title: "Deep-Dive Needs Analysis",
    image: "/images/whatwedo-needs-analysis.png",
    alt: "Consultant meeting with a couple to understand their needs",
    description:
      "We sit down to understand what you actually want. Your budget, preferred neighborhoods, commute times, and family needs. We map out what's realistic in the current market.",
  },
  {
    title: "Curated Project Shortlists",
    image: "/images/whatwedo-project-shortlist.png",
    alt: "Couple reviewing a curated shortlist of properties on a tablet",
    description:
      "Instead of making you visit dozens of confusing sites, we match your criteria against our database of verified top-tier developer inventories. You get a personalized shortlist of the top 3 or 4 properties that actually make sense.",
  },
  {
    title: "Site Visits & Safe Closing",
    image: "/images/whatwedo-site-visit.png",
    alt: "Family touring an apartment with a real estate agent",
    description:
      "We arrange private viewings, accompany you to the site, point out the pros and cons the builder might gloss over, and assist you with the booking paperwork to ensure a transparent transaction.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <span className="font-sans text-sm font-semibold uppercase tracking-wider text-gold-dark">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            What We Actually Do
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="min-h-[3.5rem] font-display text-xl font-semibold text-ink sm:min-h-[3.75rem]">
                  {card.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-stone">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
