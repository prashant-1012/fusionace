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
            This page is a placeholder. Fusion Ace&apos;s full privacy policy
            will be published here, covering what information we collect
            through our enquiry form, how it is used to connect you with the
            right consultant, and how it is shared with developer partners
            as part of our channel partner process.
          </p>
          <Link
            href="/"
            className="mt-8 inline-block font-sans text-sm font-semibold text-gold-dark underline underline-offset-2"
          >
            &larr; Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
