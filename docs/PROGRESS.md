# Progress Checklist

_Last updated: 2026-07-13_

Read [CONTEXT.md](CONTEXT.md), [ARCHITECTURE.md](ARCHITECTURE.md), and [CONTENT.md](CONTENT.md) at the start of any new session before continuing.

## Step 1 — Content & assets
- [x] Extract docx text → `docs/CONTENT.md`
- [x] Extract 7 images from docx, rename descriptively, save to `public/images/`
- [x] Map each image to its section (documented in CONTENT.md)

## Step 2 — Project setup
- [x] Scaffold Next.js 16 (App Router, TypeScript, Tailwind v4)
- [x] Folder structure: `app/`, `components/`, `public/images/`, `docs/`
- [x] Install `lucide-react`

## Step 3 — Docs
- [x] `docs/CONTEXT.md`
- [x] `docs/ARCHITECTURE.md`
- [x] `docs/PROGRESS.md` (this file)

## Step 4 — Build sections
- [x] Header (sticky, transparent-over-hero → solid on scroll, nav, mobile menu, smooth scroll, Contact CTA)
- [x] Hero section (bg image, headline, sub-headline, CTA)
- [x] Lead capture form (Name/Email/Phone/Location-Budget, client-side validation, stubbed submit w/ success state — see `components/LeadForm.tsx` TODO)
- [x] "Why Consult with Us?" 3-column section
- [x] "What We Actually Do" 3-column section
- [x] "Meet Your Consultant" founder bio (placeholder avatar — see open items)
- [x] Footer (compliance info, disclaimer, links)
- [x] Privacy Policy placeholder page (`/privacy-policy`)
- [x] Terms & Conditions placeholder page (`/terms-and-conditions`)

## Step 5 — Polish & verification
- [x] Responsive check (mobile 390px / desktop 1440px, via Playwright screenshots)
- [x] Smooth scroll verified for all nav links (tested: header nav → Founder section)
- [x] Dev server runs clean, no console errors (verified via headless Chromium console listener)
- [x] `npm run lint` — 0 errors
- [x] `npm run build` — production build succeeds, all 4 routes prerender as static
- [x] Lead form validation tested (empty submit shows inline errors; valid submit shows success state)

## Everything in the original spec is now built.

Remaining work is limited to the open items below, which need real assets/data from the user rather than more building.

## Bug fixes

- **2026-07-13 — "Contact us" (and other nav links) did nothing when already scrolled down the page.** Root cause: Next.js `<Link>` only auto-scrolls to a URL hash on a fresh page load, not on same-page navigation. Fixed by adding `components/HashLink.tsx`, a thin wrapper around `next/link` that manually calls `scrollIntoView({ behavior: "smooth" })` when the target id is already present in the DOM, falling back to normal navigation otherwise (e.g. linking back from `/privacy-policy`). Used in `Header.tsx`, `Hero.tsx`, and `Footer.tsx` for all in-page section links; `Footer.tsx`'s Privacy Policy/Terms links stay as plain `next/link` since those are real route changes.
- **2026-07-13 — Nav didn't highlight the section currently in view while scrolling.** Added scroll-spy to `Header.tsx` via `IntersectionObserver` (rootMargin `-45% 0px -50% 0px`, i.e. a thin band near vertical center of viewport) watching the four section ids (`home`, `why-us`, `services`, `founder`). The matching nav link turns gold (`text-gold`) in both desktop and mobile nav. No-op on `/privacy-policy` / `/terms-and-conditions` since those ids don't exist there.
- **2026-07-13 — Header was invisible (white-on-white) on Privacy Policy / Terms & Conditions pages.** The header is transparent by default so it can sit on the dark hero image on the homepage; those subpages have a plain light `bg-cream` background right under it with no dark hero, so cream text on a transparent header over a cream page became unreadable. Fixed in `Header.tsx` with `usePathname()` — the header now forces itself solid (`bg-ink`) on any route other than `/`, while the homepage keeps the transparent-over-hero effect at the top and solidifies on scroll as before.
- **2026-07-13 — Clicking the logo added `#home` to the URL.** The logo reused `HashLink`, which intentionally pushes the target section's hash into the URL (needed for the real nav links). For the logo, "go home" should just be a clean `/`. Replaced with a plain `next/link` plus a custom click handler: on the homepage it smooth-scrolls to the top and strips any existing hash via `history.replaceState`; from other pages it navigates normally to `/`.
- **2026-07-14 — Privacy Policy / Terms & Conditions replaced with real legal copy.** The user supplied an updated source doc (`Nayeem Fusion Ace Website (1).docx`) containing full legal text for both pages (was previously "Need to confirm" / absent from the original doc). Extracted verbatim and built out `app/privacy-policy/page.tsx` and `app/terms-and-conditions/page.tsx` as structured sectioned pages (numbered `h2` sections, matching the site's Fraunces/Manrope + ink/gold/stone design system), replacing the old single-paragraph placeholder copy. `npm run lint` and `npm run build` both pass.

## Open items / needs user input

- **Founder photo missing from docx.** Using a styled "NK" initials placeholder in `components/Founder.tsx` (user decision, 2026-07-13). Replace with a real `next/image` once a photo is supplied.
- **MahaRERA registration number** not available in source doc (literally "Need to confirm"). Footer shows "To be updated" (user decision, 2026-07-13). Replace the text in `components/Footer.tsx` once the number is confirmed.
- **No logo file in docx** — using a text wordmark ("Fusion Ace") in `components/Logo.tsx`. Replace if a logo asset exists.
- **Lead form has no backend.** `components/LeadForm.tsx` stubs the submit handler with a `console.log` and a `// TODO` comment — needs a real endpoint/CRM integration before launch.
