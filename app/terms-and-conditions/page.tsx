import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | Fusion Ace",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink">
            Terms &amp; Conditions
          </h1>

          <p className="mt-6 font-sans text-base leading-relaxed text-stone">
            Welcome to Fusion Ace (www.fusionace.in). By accessing or using
            our website, you agree to comply with and be bound by the
            following terms and conditions.
          </p>

          <div className="mt-10 space-y-10 font-sans text-base leading-relaxed text-stone">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                1. Nature of Services
              </h2>
              <p className="mt-3">
                Fusion Ace is a Real Estate Channel Partner and marketing
                firm. We facilitate the sale and marketing of real estate
                projects developed by third-party builders (the
                &quot;Developers&quot;). We are not the developer, owner, or
                manager of the projects listed on this site.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                2. Information Accuracy
              </h2>
              <p className="mt-3">
                While we strive to provide accurate information, all project
                details—including floor plans, amenities, pricing,
                availability, and completion dates—are provided by the
                Developers.
              </p>
              <p className="mt-3">
                All images and renderings are for representational purposes
                only.
              </p>
              <p className="mt-3">
                We recommend that users verify all project details directly
                with the Developer or via the official RERA (Real Estate
                Regulatory Authority) website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                3. No Professional Advice
              </h2>
              <p className="mt-3">
                The content on this website is for informational purposes
                only and does not constitute financial, investment, or legal
                advice. Real estate investments are subject to market risks.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                4. Intellectual Property
              </h2>
              <p className="mt-3">
                The logos, brand names, and project names (e.g., Godrej,
                Prestige, Sobha, Gera) are the property of their respective
                owners. Fusion Ace uses these for marketing purposes under
                authorized channel partner agreements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                5. Limitation of Liability
              </h2>
              <p className="mt-3">
                Fusion Ace shall not be held liable for any inaccuracies in
                project data, delays in construction by the Developer, or
                any financial loss resulting from a transaction between the
                user and the Developer.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                6. User Responsibility
              </h2>
              <p className="mt-3">
                By using the &quot;Enquiry&quot; or &quot;Contact Us&quot;
                forms, you authorize Fusion Ace and its representatives to
                contact you via Phone, SMS, or Email regarding your query,
                notwithstanding any DNC/NDNC registry.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                7. Changes to Terms
              </h2>
              <p className="mt-3">
                We reserve the right to modify these terms at any time
                without prior notice. Continued use of the site constitutes
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                8. Governing Law
              </h2>
              <p className="mt-3">
                Any disputes arising from use of this website shall be
                governed by applicable jurisdiction laws and resolved in the
                relevant courts.
              </p>
            </section>
          </div>

          <Link
            href="/"
            className="mt-12 inline-block font-sans text-sm font-semibold text-gold-dark underline underline-offset-2"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
