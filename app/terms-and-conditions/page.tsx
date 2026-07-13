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
            This page is a placeholder. Fusion Ace&apos;s full terms of
            service will be published here, covering the scope of our
            consultancy services, our role as an independent channel
            partner, and the terms under which we work with home buyers and
            investors.
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
