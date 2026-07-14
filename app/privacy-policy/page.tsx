import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Fusion Ace",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-cream pt-32 pb-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <h1 className="font-display text-4xl font-semibold text-ink">
            Privacy Policy
          </h1>

          <p className="mt-6 font-sans text-base leading-relaxed text-stone">
            At Fusion Ace, we value your privacy and are committed to
            protecting your personal data. This Privacy Policy outlines how
            we collect, use, and safeguard your information when you visit
            our website www.fusionace.in.
          </p>

          <div className="mt-10 space-y-10 font-sans text-base leading-relaxed text-stone">
            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                1. Information We Collect
              </h2>
              <p className="mt-3">
                We collect information that you voluntarily provide to us
                when you express an interest in obtaining information about
                our real estate projects. This includes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <span className="font-semibold text-ink">
                    Contact Data:
                  </span>{" "}
                  Name, email address, phone number, and mailing address.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Property Preferences:
                  </span>{" "}
                  Information regarding the type of property or budget you
                  are interested in.
                </li>
                <li>
                  <span className="font-semibold text-ink">
                    Technical Data:
                  </span>{" "}
                  IP address, browser type, and usage patterns collected via
                  cookies to improve your browsing experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                2. How We Use Your Information
              </h2>
              <p className="mt-3">
                We use the information we collect for the following
                purposes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>To contact you regarding property inquiries you have made.</li>
                <li>
                  To provide updates on new project launches, pricing, and
                  offers.
                </li>
                <li>
                  To share your details with our Authorized Builder Partners
                  (e.g., Godrej Properties, Prestige Group, Gera Developers,
                  etc.) only for the specific project you inquired about.
                </li>
                <li>To comply with legal and RERA regulatory requirements.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                3. Data Security
              </h2>
              <p className="mt-3">
                We implement industry-standard security measures (including
                SSL encryption) to protect your personal data from
                unauthorized access, alteration, or disclosure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                4. Third-Party Links
              </h2>
              <p className="mt-3">
                Our website may contain links to third-party builder
                websites. We are not responsible for the privacy practices
                of those external sites and encourage you to read their
                privacy statements.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                5. Your Rights
              </h2>
              <p className="mt-3">You have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Request access to the personal data we hold about you.
                </li>
                <li>
                  Request the correction or deletion of your personal data.
                </li>
                <li>
                  Opt-out of marketing communications at any time by
                  contacting us at{" "}
                  <a
                    href="mailto:hello@fusionace.in"
                    className="font-semibold text-gold-dark underline underline-offset-2"
                  >
                    hello@fusionace.in
                  </a>
                  .
                </li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                6. Cookies
              </h2>
              <p className="mt-3">
                We use cookies to enhance site navigation and analyze site
                usage. You can choose to disable cookies through your
                browser settings, though some features of the site may not
                function properly.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl font-semibold text-ink">
                7. Contact Us
              </h2>
              <p className="mt-3">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <p className="mt-3">
                Email:{" "}
                <a
                  href="mailto:hello@fusionace.in"
                  className="font-semibold text-gold-dark underline underline-offset-2"
                >
                  hello@fusionace.in
                </a>
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
