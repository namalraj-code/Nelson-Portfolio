# Nelson Amalraj — Portfolio

Personal portfolio for Nelson Amalraj, Director of Program & Project Management. The site is built to give a hiring manager the full picture in under ten seconds: who he is, the scale of programs he owns, and three case studies that show how he ships in regulated industries.

## Overview

The portfolio is positioned for senior technical program leadership (Director / Sr. Director) and uses a narrative, case-study-driven layout rather than an engineering-style grid, because the audience evaluates judgment, scale, and outcomes rather than code.

Sections, top to bottom:

- **Hero** — one-line value proposition, animated headline stats (portfolio size, years, savings, team size), and the companies he has delivered for.
- **About** — the operating philosophy in plain language, three delivery principles backed by numbers, industries, and certifications.
- **Featured Case Studies** — three deep dives (Bank of America AI/ML program, Verizon cloud modernization, Texas DSHS registry modernization) each with problem, approach, result, and a metrics panel, plus four "also shipped" highlights.
- **Experience** — a timeline of every role since 1997, collapsed to the most recent five by default.
- **Skills** — grouped competencies (program leadership, AI/ML and cloud delivery, governance, delivery methods, tools) and education.
- **Contact** — direct email, LinkedIn, and phone.

Design notes: warm neutral palette with a brass accent, serif display type paired with a clean sans, light and dark themes (system default, manual toggle persisted in `localStorage`), scroll-reveal transitions, count-up stats, and hover states throughout. Reduced-motion preferences are respected.

## Tech stack

- Next.js 14 (App Router, static output)
- React 18
- Tailwind CSS 3
- TypeScript

No environment variables, databases, or external APIs are required.

## Local setup

Requires Node.js 18.17 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
```

## Project structure

```
.
├── app/
│   ├── globals.css        # Tailwind layers, component classes, reveal + hero styles
│   ├── layout.tsx         # Root layout, metadata, pre-paint theme script, fonts
│   └── page.tsx           # Assembles the single-page site
├── components/
│   ├── Nav.tsx            # Sticky header, mobile menu, CTA
│   ├── Hero.tsx           # Tagline, stats, client list
│   ├── About.tsx
│   ├── CaseStudies.tsx    # Featured work cards + "also shipped"
│   ├── Experience.tsx     # Collapsible timeline
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx    # Light / dark switch
│   ├── Reveal.tsx         # IntersectionObserver scroll-reveal wrapper
│   └── Counter.tsx        # Count-up number animation
├── data/
│   └── portfolio.ts       # All site content in one typed file
├── public/
│   └── favicon.svg
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
```

## Editing content

Every piece of copy — name, tagline, stats, case studies, roles, skills, contact details — lives in `data/portfolio.ts`. Update that file and the components re-render; no component changes are needed for routine edits.

To adjust the palette or typography, edit the `ink` and `brass` color scales and the `fontFamily` entries in `tailwind.config.ts`.
