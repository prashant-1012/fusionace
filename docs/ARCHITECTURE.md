# Architecture & Design Decisions

## Tech stack

- **Next.js 16** (App Router, TypeScript) — scaffolded via `create-next-app`.
- **Tailwind CSS v4** (`@tailwindcss/postcss`, CSS-first config via `@theme` in `app/globals.css` — no `tailwind.config.ts` needed in v4).
- **lucide-react** for icons.
- **next/font** (Google Fonts, self-hosted at build time) for typography.
- No backend yet — lead form submit handler is stubbed client-side (see Hero/LeadForm section of PROGRESS.md).

## Folder structure

```
/
├── app/
│   ├── layout.tsx        # root layout, fonts, metadata
│   ├── page.tsx           # the one-page site: composes all sections
│   ├── globals.css        # Tailwind import + design tokens (@theme)
│   ├── privacy-policy/    # placeholder page
│   └── terms-and-conditions/ # placeholder page
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── LeadForm.tsx
│   ├── WhyUs.tsx
│   ├── WhatWeDo.tsx
│   ├── Founder.tsx
│   ├── Footer.tsx
│   └── Logo.tsx
├── public/
│   └── images/             # extracted from docx, see docs/CONTENT.md for mapping
├── docs/
│   ├── CONTENT.md           # verbatim copy source-of-truth
│   ├── CONTEXT.md           # project/business context
│   ├── ARCHITECTURE.md      # this file
│   └── PROGRESS.md          # running checklist
└── Nayeem Fusion Ace Website.docx   # original source doc
```

## Design system

### Why not "generic blue SaaS"

Real estate + consultancy positioning calls for something that reads as premium, editorial, and calm rather than a tech-product blue/white template. Chose a warm, editorial palette with a serif display font for headings — closer to a boutique advisory firm than a SaaS dashboard.

### Color palette (defined as CSS variables / Tailwind v4 `@theme` tokens in `globals.css`)

| Token | Hex | Usage |
|---|---|---|
| `--color-ink` | `#132821` | Deep charcoal-green. Header/footer backgrounds, primary headings, dark sections. |
| `--color-ink-light` | `#1E3C31` | Lighter tint of ink, used for gradients/hover states on dark bg. |
| `--color-cream` | `#FAF6EF` | Primary page background (warm off-white, not stark white). |
| `--color-sand` | `#F1EADB` | Alternate section background for visual rhythm. |
| `--color-gold` | `#B8873A` | Primary accent — CTAs, links, highlights, active nav underline. |
| `--color-gold-dark` | `#9C6F2C` | Hover state for gold elements. |
| `--color-stone` | `#5B6459` | Muted/secondary text on light backgrounds. |
| `--color-white` | `#FFFFFF` | Cards, form fields. |

This is a **deep green + warm gold + cream** palette — evokes trust, growth, and premium real estate without touching blue.

### Typography

- **Display/headings:** `Fraunces` (serif, editorial, confident) via `next/font/google`.
- **Body/UI:** `Manrope` (clean geometric sans, warmer than Inter) via `next/font/google`.

### Spacing / layout system

- Container: `max-w-7xl mx-auto px-6 md:px-8`.
- Section vertical rhythm: `py-16 md:py-24` per section, alternating `bg-cream` / `bg-sand` for visual separation without hard borders.
- Card radius: `rounded-2xl`, soft shadows (`shadow-sm` / `shadow-md` on hover) — no harsh drop shadows.
- Grid: 3-column card sections use `grid md:grid-cols-3 gap-8`, stacking to 1 column on mobile.

### Component breakdown

- **Header** — sticky (`sticky top-0 z-50`), transparent-over-hero on load, solid `bg-ink` (or cream w/ shadow) on scroll; smooth-scroll nav links to section ids.
- **Hero** — full-bleed background image (`hero-bg.png`) with dark gradient overlay for text legibility, headline/sub-headline, and the `LeadForm` card floated on top (desktop: side-by-side; mobile: stacked below).
- **LeadForm** — client component (`"use client"`), controlled inputs, inline validation (required fields, email format, phone format), stubbed `onSubmit` with `// TODO: wire to backend/CRM`.
- **WhyUs** / **WhatWeDo** — identical 3-column card pattern, reused visual style but distinct content/images, built as two separate components (content differs enough it's not worth over-abstracting into one generic component per project conventions).
- **Founder** — bio text + photo/placeholder avatar, split layout.
- **Footer** — dark `bg-ink`, multi-column (logo/tagline, compliance info, links), disclaimer in smaller muted text at the very bottom.

### Images

All `next/image` with explicit `fill` or width/height, `sizes` prop tuned per breakpoint, and `priority` only on the hero background (LCP element).
