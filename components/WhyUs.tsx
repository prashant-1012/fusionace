import Image from "next/image";

const CARDS = [
  {
    title: "Unbiased, Side-by-Side Comparisons",
    image: "/images/why-us-comparisons.png",
    alt: "Consultant reviewing a property floor plan on a laptop",
    description:
      "As independent consultants, we give you an honest, objective look at multiple competing projects in your budget so you can make a smart, balanced comparison.",
  },
  {
    title: "Zero Extra Cost to You",
    image: "/images/why-us-zero-cost.png",
    alt: "Handshake sealing an agreement",
    description:
      "Our consultancy services are completely free for home buyers and investors. We are compensated through standard channel partner agreements with the developers, meaning you get expert guidance without any cost.",
  },
  {
    title: "RERA Approved Projects",
    image: "/images/why-us-rera-approved.png",
    alt: "Approval gesture representing vetted, RERA-approved projects",
    description:
      "We don't represent everyone. We strictly filter out developers with poor track records, legal delays, or low construction quality. If we show you a project, it's because it passed our strict internal checklist.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-sand py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="max-w-2xl">
          <span className="font-sans text-sm font-semibold uppercase tracking-wider text-gold-dark">
            Why Fusion Ace
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Why Consult with Us?
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
