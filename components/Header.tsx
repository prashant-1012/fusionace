"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import HashLink from "./HashLink";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Home", id: "home", href: "/#home" },
  { label: "Why Us", id: "why-us", href: "/#why-us" },
  { label: "Our Services", id: "services", href: "/#services" },
  { label: "Founder", id: "founder", href: "/#founder" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.getElementById(link.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const solid = !isHome || scrolled || menuOpen;

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.hash) {
        window.history.replaceState(null, "", "/");
      }
    }
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        solid ? "bg-ink shadow-md shadow-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" onClick={handleLogoClick} className="shrink-0">
          <Logo variant="light" />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <HashLink
              key={link.href}
              href={link.href}
              className={`font-sans text-sm font-medium transition-colors hover:text-gold ${
                activeId === link.id ? "text-gold" : "text-cream/90"
              }`}
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        <HashLink
          href="/#enquire"
          className="hidden rounded-full bg-gold px-6 py-2.5 font-sans text-sm font-semibold text-white transition-colors hover:bg-gold-dark md:inline-block"
        >
          Contact us
        </HashLink>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
          className="text-cream md:hidden"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-cream/10 bg-ink px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <HashLink
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-sans text-base font-medium hover:text-gold ${
                  activeId === link.id ? "text-gold" : "text-cream/90"
                }`}
              >
                {link.label}
              </HashLink>
            ))}
            <HashLink
              href="/#enquire"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-gold px-6 py-2.5 text-center font-sans text-sm font-semibold text-white hover:bg-gold-dark"
            >
              Contact us
            </HashLink>
          </nav>
        </div>
      )}
    </header>
  );
}
