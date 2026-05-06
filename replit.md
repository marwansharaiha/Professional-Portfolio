# Marwan Sharaiha — Personal Portfolio

A professional single-page portfolio website for Marwan Sharaiha, senior digital marketing strategist.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio site (reads PORT env)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, shadcn/ui, Framer Motion
- Routing: Wouter
- Icons: lucide-react, react-icons/si
- No backend — fully static, all data is hardcoded in components

## Where things live

- `artifacts/portfolio/src/pages/Home.tsx` — main single-page portfolio (all sections)
- `artifacts/portfolio/src/index.css` — full theme (Playfair Display + Plus Jakarta Sans, navy/amber palette)
- `artifacts/portfolio/src/App.tsx` — root app with ThemeProvider and routing
- `artifacts/portfolio/src/components/ThemeToggle.tsx` — dark/light mode toggle

## Architecture decisions

- Presentation-first, no backend: all content is static — no API, no database
- Single-page app with smooth-scroll navigation and section anchors
- Framer Motion used for scroll-triggered section reveals and staggered entrance animations
- Dark mode implemented via class toggle on `document.documentElement` with localStorage persistence
- react-icons/si used for brand logos (Meta, Google, WordPress); lucide-react for all other icons

## Product

A professional personal website showcasing Marwan's 20+ year career in digital marketing and media strategy across the MENA region and Europe. Sections: Hero, Impact & Scale, Career Trajectory (timeline), Core Expertise & Tech Stack, Education & Certifications, Personal Ventures, Beyond Work, and Contact.

## User preferences

- No emojis in the UI
- Professional and authoritative tone
- Dark mode toggle included

## Gotchas

- react-icons/si v5 renamed some icons — `SiLinkedin` and `SiGoogleanalytics` no longer exist; use lucide-react alternatives (`Linkedin`, `BarChart3`)
- Google Fonts @import must be the FIRST line of index.css, before @import "tailwindcss"

## Pointers

- See the `pnpm-workspace` skill for workspace structure and TypeScript setup
- See the `react-vite` skill for frontend conventions
