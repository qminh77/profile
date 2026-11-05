# Nguyen Quoc Minh — Portfolio

A typographic portfolio for Nguyen Quoc Minh, software engineer focused on full-stack web platforms and applied AI. The interface is built around **Obel Mono 1.001** and a black-and-paper system with one signal orange.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4 + shadcn/ui primitives
- `next/font/local` for self-hosted Obel Mono
- `next-themes` for light/dark themes
- Canvas, IntersectionObserver, and CSS motion for the editorial effects

## Type system

Obel Mono 1.001 Roman and Italic are self-hosted from `app/fonts/` and exposed as `--font-obel` in `app/fonts.ts`. The full UI uses the same typeface for display, labels, tables, and body copy. The font is licensed under the SIL Open Font License 1.1; see `public/fonts/OFL.txt`.

## Effects

- `components/code-rain.tsx` — canvas matrix rain of code glyphs in the hero
- `components/terminal.tsx` — in-view typewriter terminal inside the profile chapter
- `components/scramble-text.tsx` — text-scramble hover effect on project titles
- Cursor-following project preview, pointer spotlight, portrait scanline, marquee ticker, scroll reveals, live HCMC clock, and nav scroll progress
- Motion is disabled or reduced under `prefers-reduced-motion`

## Structure

```text
app/
  fonts.ts            Obel Mono local font setup
  globals.css         Tokens, type system, layout primitives, motion
  layout.tsx          Root layout and metadata
  page.tsx            Six-chapter page composition
components/
  hero.tsx            Cover: oversized name, portrait plate, index band
  chapter.tsx         Sticky rail, ghost numeral, scroll reveal
  projects.tsx        Filterable work index and cursor preview
  terminal.tsx        Typed runtime panel
  code-rain.tsx       Hero matrix rain
  footer.tsx          Contact, colophon, type specimen
lib/site.ts           Site constants and chapter metadata
public/fonts/         Font license and author notes
```

## Commands

```bash
npm run dev     # start development
npm run lint    # eslint
npm run build   # production build
npm run start   # serve the production build
```
