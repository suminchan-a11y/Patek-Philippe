# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Patek Philippe Boutique The Gardens Mall — a luxury digital experience site for The Hour Glass Group × Patek Philippe, targeting Southeast Asia. Built from Figma "Exploration 12" (file `aFpkOPWbwDqoBupnXpz1oP`).

## Deployment

- **Firebase Hosting**: project `patek-philippe-v3`
- **Live URL**: https://patek-philippe-v3.web.app
- **Password**: Client-side gate via `PasswordGate.tsx` (sessionStorage-based)
- **Deploy**: `rm -rf .next && npm run build && npx firebase-tools deploy --only hosting --project patek-philippe-v3`

## Commands

```bash
npm run dev          # Dev server on port 3004
npm run build        # Static export to /out/
npm run start        # Serve production build on port 3004
```

## What's Been Built

### Pages & Routes

| Route | Page | Components |
|-------|------|------------|
| `/` | Homepage | Hero (video bg), Boutique (video), Gondolo, Guillochage (video), CraftVideo, SearchBar (sticky), AppointmentCTA (form), Footer |
| `/for-you` | Curated "For You" | ForYouHero (AI curated response), ForYouCTA ×2, ForYouProductRow ×4 (Nautilus + Aquanaut + Grand Complications), AppointmentCTA, Footer |
| `/aquanaut` | Aquanaut Collection | AquanautHero, AquanautGrid (4 rows, mixed layouts), AppointmentCTA, Footer |
| `/aquanaut/5168g-001` | Product Detail (PDP) | ProductGallery (3-image carousel + thumbnails), ProductInfo, ProductDescription, ProductGallery2 (split panels), AppointmentCTA, Footer |

### Key Features

- **Nav Bar**: Dual-state — transparent with white text/icons over hero sections, white bg with black text when scrolled. 88px height, 56px centered Calatrava logo, "THE GARDENS MALL, KL" location, "+ COLLECTION" + hamburger menu
- **Explore Collection Overlay**: Full-screen image gallery with 9 collection names, dot indicator, crossfade background images, float-up staggered entrance animation
- **SearchBar**: Frosted glass pill (15% white bg, 39px blur), rotating prompts (6 phrases), Lora 14px. Triggers loading screen → navigates to `/for-you`
- **Loading Screen**: Black bg with blurred image overlay, pulsing Calatrava logo (50%→70%→50%), cycling text ("Curating collections" / "Crafting inspirations"), 4s duration
- **Password Gate**: Client-side auth screen, sessionStorage-based persistence
- **AppointmentCTA**: Form with 3 fields (Name, Email, Contact) with Figma-extracted icons, submit button with hover state (#533833 → #2B1C1A)
- **Product Gallery Carousel**: 3 hero images with crossfade, thumbnail navigation + arrow buttons, bottom-right positioned
- **Video stitching**: FFmpeg + yt-dlp for hero video (4 clips stitched), Boutique interior video, Guillochage Patek video (0:24–0:36 loop)

### Components

```
app/components/
├── Nav.tsx                  — Dual-state nav (transparent hero / white solid)
├── ExploreOverlay.tsx       — Collection grid overlay with crossfade images
├── SearchBar.tsx             — Frosted glass search with rotating prompts
├── LoadingScreen.tsx         — AI "thinking" loading transition
├── LoadingListener.tsx       — Custom event listener for loading trigger
├── PasswordGate.tsx          — Client-side password protection
├── Hero.tsx                  — Homepage hero with video bg
├── HeroCurtain.tsx           — Parallax wrapper for Hero → Boutique
├── Boutique.tsx              — Interior video section
├── Gondolo.tsx               — Split panel: watch + chandelier
├── Guillochage.tsx           — Split panel: wall pattern + video
├── CraftVideo.tsx            — Full-screen video with text drift
├── AppointmentCTA.tsx        — Form with 3 fields + submit button
├── Footer.tsx                — Dark footer with 3 columns + logo
├── SmoothScroll.tsx          — Lenis wrapper
├── ForYouHero.tsx            — AI curated response hero
├── ForYouCTA.tsx             — Reusable CTA banner (heading + body)
├── ForYouProductRow.tsx      — Flexible product card row (equal/mixed widths)
├── AquanautHero.tsx          — Collection hero with title + subtitle
├── AquanautGrid.tsx          — Product grid (4 rows, standard + feature cards)
├── ProductGallery.tsx        — PDP hero carousel with thumbnails
├── ProductGallery2.tsx       — PDP split panel gallery
├── ProductInfo.tsx           — PDP product name + specs + CTA
├── ProductDescription.tsx    — PDP "Flyback chronograph" description
├── ComplicationsBanner.tsx   — Full-bleed banner with gradient + reveal
├── HelpCards.tsx             — 3 action cards with arrow buttons
├── WatchGrid.tsx             — 3-card product grid (For You page legacy)
└── ForYouHeader.tsx          — "FOR YOU" header (legacy, replaced by ForYouHero)
```

## Tech Stack

- **Next.js 15.3** (App Router, `output: "export"`, static site)
- **React 19** + **Framer Motion 12** (scroll-driven parallax, viewport reveals)
- **Lenis 1.1** (smooth inertia-based scrolling, duration 1.2s)
- **TypeScript 5** (strict mode)
- **Firebase Hosting** (static deployment, `cleanUrls: true`)
- **No Tailwind** — all styling is inline. CSS classes only for animations (`.cta-link`, `.reveal-up`, `.nav-link-hover`) in `globals.css`.
- Images use `<img>` with eslint-disable comment — no `next/image` `<Image>` (static export requires `unoptimized: true`).

## Architecture

### Parallax Scroll Chain (Homepage)

```
page.tsx
└─ 500vh outer wrapper (clipPath: inset(0))
   ├─ 400vh layer (z:4)
   │   ├─ 300vh layer (z:3)
   │   │   ├─ HeroCurtain (200vh, z:2)
   │   │   │   ├─ Hero (relative, 100vh) — scrolls away
   │   │   │   └─ Boutique (sticky top:0) — revealed behind
   │   │   └─ Gondolo (sticky, mt:-100vh) — revealed behind Boutique
   │   └─ Guillochage (sticky, mt:-100vh) — revealed behind Gondolo
   └─ CraftVideo (sticky, z:1, mt:-100vh) — revealed last
SearchBar (sticky bottom:40, outside chain)
AppointmentCTA
Footer
```

### Nav States

- **Both states**: 88px height, 56px Calatrava logo centered, 12px Open Sans text
- **Hero state** (transparent): white text/icons, white logo, triggered by `#hero` IntersectionObserver
- **Scrolled state** (white bg): black text/icons, dark logo, 8px top/bottom padding
- **Hide on scroll down**, show on scroll up (60px threshold)
- ExploreOverlay (z:250) slides down from top; nav hides via `translateY(-100%)`
- Location dropdown: transparent bg, white text, left-aligned

### Animation Patterns

- **Easing:** `[0.25, 0.1, 0.1, 1]` for all motion. No bounce, no spring. Minimum 0.8s duration.
- **CTA easing:** `cubic-bezier(0.16, 1, 0.3, 1)` for underline sweeps, 0.6s.
- **Text float-away:** Headings drift upward via `useTransform(scrollYProgress, ...)` as their section scrolls out. No opacity fade unless explicitly requested.
- **Entrance reveals:** CSS `@keyframes revealUp` (not Framer Motion `initial/animate`) to avoid SSR opacity:0 caching bugs.

### Interaction Patterns

#### IntersectionObserver Reveal (float-up entrance)
- Threshold: `0.3`, disconnect after first trigger (one-shot)
- Inline style transition: `opacity 1.0s + transform 1.0s` with staggered delays (0s → 0.15s → 0.3s)
- Start: `opacity: 0, translateY(40px)` → End: `opacity: 1, translateY(0)`
- Used on: ComplicationsBanner, AppointmentCTA, ProductDescription

#### Page Entrance Reveal (on navigation)
- CSS `revealUp` keyframe, stagger delays 0.1s → 0.25s → 0.4s → 0.5s+
- Used on: ForYouHero, AquanautHero, ProductGallery, ProductInfo

#### Hover Enlarge (image zoom)
- `overflow: hidden` container, `scale(1.05)` on hover, 0.8s transition
- Used on: product cards, gallery images

#### Loading Screen Transition
- SearchBar dispatches `CustomEvent("showLoading")` on submit
- `LoadingListener` in root layout catches event, renders `LoadingScreen`
- 4s duration with logo pulse + cycling text, then navigates to `/for-you`

### Critical: SSR Cache Bug

**Never use Framer Motion `initial={{ opacity: 0 }}` for entrance animations.** Use CSS `@keyframes` (class `reveal-up`) or scroll-driven `useTransform` instead. If text/fonts disappear: `kill server → rm -rf .next → npm run dev`

### Critical: Font Cache Bug

**Never run `npm run build` during active development.** Always `rm -rf .next` before starting `npm run dev` after a build.

## Design Tokens

```
White:          #FFFFFF
Off-White:      #D9D9D9  (footer text)
Warm Brown:     #8C7A66  (CTAs, labels, headings, product text)
Spec Gray:      #626262  (PDP spec labels/values)
Footer BG:      #050608
Black:          #000000
Light Gray:     #EDEDED  (appointment CTA bg)
Btn Submit:     #533833  (submit/CTA buttons)
Btn Hover:      #2B1C1A  (submit button hover)
SearchBar BG:   rgba(255,255,255,0.15) + blur(39px)
```

## Typography

Font assignment is **section-contextual** — not purely by element type.
All Open Sans headings and CTAs use **10% letter-spacing**.

| Style | Font | Size | Weight | Letter-Spacing | Case | Context |
|---|---|---|---|---|---|---|
| Hero Display | Lora | 80px | 400 | -2% | Sentence | Homepage hero |
| Appointment CTA Heading | Lora | 56px | 400 | -2% | Title | Appointment CTA |
| ForYou CTA Heading | Open Sans | 40px | 400 | 10% | UPPER | ForYou CTA banners |
| Section Heading | Open Sans | 40px | 400 | 10% | UPPER | Boutique, Gondolo, Guillochage, Craft |
| Product Name | Open Sans | 16–20px | 400 | 10% | UPPER | Product cards, PDP |
| Nav | Open Sans | 12px | 400 | 5% | UPPER | Nav bar |
| CTA Link | Open Sans | 16px | 400 | 10% | UPPER | All CTA links |
| Body / Address | Lora | 14–16px | 400 | 0 | Normal | Body text, addresses |
| Footer Header | Open Sans | 12px | 400 | 10% | UPPER | Footer column headers |
| Footer Link | Lora | 14px | 400 | 0 | Normal | Footer links |
| SearchBar | Lora | 14px | 400 | 0 | Normal | Search bar prompts |

## Conventions

- All components are client components (`"use client"`) in `app/components/`.
- Backdrop blur always includes both `backdropFilter` and `WebkitBackdropFilter` for Safari.
- Split panels: flex row, `gap: 8`, both panels `flex: 1 1 748px`.
- Section gaps: 8px on homepage (film-strip rhythm), 1px on PDP.
- Pages with hero sections: add `id="hero"` to hero element, no `marginTop` on `<main>`.
- Pages without hero: `marginTop: 88` on `<main>` (nav height).
- Always extract images from Figma — never use placeholder/random images.
- Extract only the image frame from Figma cards (not the parent with text baked in).
