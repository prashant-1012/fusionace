import Link from "next/link";
import { Phone, MapPin, ShieldCheck } from "lucide-react";
import HashLink from "./HashLink";
import Logo from "./Logo";

const QUICK_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Our Services", href: "/#services" },
  { label: "Founder", href: "/#founder" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo variant="light" />
            <p className="mt-4 flex items-center gap-2 font-sans text-sm font-medium text-gold">
              <ShieldCheck size={16} />
              Authorized Real Estate Channel Partner
            </p>
            <a
              href="tel:+918446350402"
              className="mt-4 flex items-center gap-2 font-sans text-sm text-cream/80 hover:text-gold"
            >
              <Phone size={16} />
              +91-8446350402
            </a>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-cream/60">
              Compliance
            </h4>
            <p className="mt-4 font-sans text-sm text-cream/80">
              MahaRERA Reg. No:{" "}
              <span className="text-cream/60">To be updated</span>
              <br />
              <a
                href="https://maharera.maharashtra.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold underline underline-offset-2 hover:text-gold-dark"
              >
                maharera.maharashtra.gov.in
              </a>
            </p>
            <p className="mt-4 flex items-start gap-2 font-sans text-sm text-cream/80">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <span>
                2nd Floor, E - Ward Survey No. 143/A-3/15, Dayna Homes, Plot
                No. 09, Akshay Park, Tal Karvir, Nagalapark, Kolhapur,
                Maharashtra, 416003
              </span>
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-cream/60">
              Quick Links
            </h4>
            <nav className="mt-4 flex flex-col gap-2">
              {QUICK_LINKS.map((link) => (
                <HashLink
                  key={link.href}
                  href={link.href}
                  className="font-sans text-sm text-cream/80 hover:text-gold"
                >
                  {link.label}
                </HashLink>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row">
          <p className="font-sans text-xs text-cream/60">
            © 2026 Fusion Ace. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="font-sans text-xs text-cream/60 hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="font-sans text-xs text-cream/60 hover:text-gold"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

        <p className="mt-6 border-t border-cream/10 pt-6 font-sans text-xs leading-relaxed text-cream/40">
          Disclaimer: All project information, including images and
          brochures, are for informational purposes only. Fusion Ace acts as
          a consultant and does not provide any warranties on behalf of the
          developer.
        </p>
      </div>
    </footer>
  );
}
