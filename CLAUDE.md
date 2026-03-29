# CLAUDE.md
## MCP Rules — Read First
- Do NOT call any Figma screenshot or image capture tools at session start
- Do NOT auto-scan Figma files on startup
- Only call Figma MCP tools when explicitly asked
- Use figma_get_component_for_development for all component data
- No get_screenshot calls unless explicitly requested
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
| `/` | Homepage | Hero (video bg / mobile: static img), PromoSection (PromoHeader + PromoArrows + PromoCarousel), FeatureSection, CollectionHeader, CollectionCarousel, CraftVideo, SearchBar (sticky / mobile: hidden), AppointmentCTA, Footer |
| `/for-you` | Curated "For You" | ForYouHero, ForYouCTA ×2, ForYouProductRow ×3 (Nautilus 5990/1R-001 links to PDP), AppointmentCTA, Footer |
| `/aquanaut` | Aquanaut Collection | AquanautHero, ForYouCTA ("Vibrant and Colorful"), AquanautGrid (6 rows × 2 cards + 2 full-bleed images), AppointmentCTA, Footer |
| `/aquanaut/5168g-001` | Product Detail (PDP) | ProductGallery (3-image carousel, thumbs+arrows), ProductInfo, ProductGalleryFull ×2 (gradient+caption), WatchCharacteristics (accordion), ProductDescription, ProductGallery2 (split), ProductHeroFull, AppointmentCTA, Footer |

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
├── Boutique.tsx              — Interactive video section: 3 hover items, crossfade videos, scale text
├── Gondolo.tsx               — Split panel: watch + chandelier
├── Guillochage.tsx           — Split panel: wall pattern + video
├── CraftVideo.tsx            — Full-screen video with text drift
├── AppointmentCTA.tsx        — Form with 3 fields (floating labels, hints) + submit button
├── Footer.tsx                — Dark footer with 3 columns + logo
├── SmoothScroll.tsx          — Lenis wrapper
├── ForYouHero.tsx            — AI curated response hero
├── ForYouCTA.tsx             — Reusable CTA banner (heading + body)
├── ForYouProductRow.tsx      — Flexible product card row (equal/mixed widths)
├── AquanautHero.tsx          — Collection hero with title + subtitle
├── AquanautGrid.tsx          — Product grid (4 rows, standard + feature cards)
├── ProductGallery.tsx        — PDP hero carousel (thumbs LEFT, arrows RIGHT)
├── ProductGalleryFull.tsx    — PDP full-bleed image with gradient overlay + caption
├── ProductGallery2.tsx       — PDP split panel gallery
├── ProductHeroFull.tsx       — PDP 982px full-bleed watch image
├── ProductInfo.tsx           — PDP product name + specs + CTA
├── ProductDescription.tsx    — PDP centered heading + body
├── WatchCharacteristics.tsx  — PDP accordion (ref-based height animation)
├── PromoSection.tsx          — Homepage promo orchestrator (header + arrows + carousel)
├── PromoHeader.tsx           — "A City That Keeps Its Own Time" header
├── PromoArrows.tsx           — Carousel navigation arrows (hidden on mobile)
├── PromoCarousel.tsx         — Horizontal scroll cards (desktop + mobile variants)
├── FeatureSection.tsx        — "The Improbable Art" full-bleed image + text
├── CollectionHeader.tsx      — "Pieces Worth Knowing" header
├── CollectionCarousel.tsx    — Video carousel with dots + mute
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

## Session Log (2026-03-28 — prior session)

### Completed in Prior Session

1. **Product Detail Page (PDP) fully redesigned** (`/aquanaut/5168g-001`)
2. **WatchCharacteristics accordion with smooth animation**
3. **Aquanaut Collection page redesigned** (`/aquanaut`)
4. **For You page link** — Nautilus 5990/1R-001 card now links to PDP
5. **Nav location dropdown** — font size changed from 14px to 12px
6. **Mobile responsive design — Homepage** (Figma node `415:4717`, 393px)

---

## Session Log (2026-03-28/29 — current session)

### Completed This Session

1. **For You page mobile responsive** (`/for-you`)
   - ForYouHero: 750px, content in gradient overlay at bottom, 32px heading, 14px body, SearchBar inline
   - ForYouCTA: padding 80/24, heading 32px, body 14px/140%, max-width 299px
   - ForYouProductRow: single column, 450px image height, no hover zoom
   - Card reorder on mobile: group 1 = [Cubitus, corridor, Nautilus5990, Nautilus5712, KissingCabinet]
   - Page gap 0 on mobile

2. **Nautilus PDP mobile responsive** (`/aquanaut/5168g-001`)
   - ProductGallery: single static image 750px, dark overlay, no carousel/thumbnails
   - ProductInfo: vertical layout, padding 40/24, model 24px, full-width CTA button (2px radius)
   - ProductGalleryFull: simple 600px full-bleed image on mobile (no gradient/caption)
   - WatchCharacteristics: padding 80/24 on mobile
   - ProductDescription: heading 32px, body 14px, padding 80/24
   - ProductGallery2: 3 stacked images (600px each) — absorbs ProductHeroFull images
   - ProductHeroFull: hidden on mobile
   - Custom `mobileObjectPosition` and `mobileObjectFit` props for per-image positioning
   - Replaced pdp-gallery-3.jpg with wrist shot from Figma node 578:3012
   - pdp-gallery-3 caption line breaks: "Time-zone pushers integrated \ninto the case at 9 o'clock."

3. **Aquanaut collection page mobile responsive** (`/aquanaut`)
   - AquanautHero: 750px, dedicated mobile image (aq-hero-mobile.jpg, crown close-up), 32px heading, 14px body, content at bottom
   - AquanautGrid: single column cards (full-width), text at TOP-left on mobile (was bottom-left), 325×465px watch images anchored to bottom, 0.5px #BDBDBD borders, 750px full-bleed images (was 982px)
   - aq-pp-1 image: object-position 60% center on mobile
   - Page gap 0 on mobile

4. **Nav bar updates (all pages)**
   - Desktop height: 64px (was 88px)
   - Mobile height: 56px (was 72px)
   - Letter-spacing: 12% for location name and "+ Collection" (was 5%)
   - Location icon click opens dropdown on mobile (was text-only click target)
   - Location dropdown: 15px blur background (was 7.5px), width 252px, positioned at nav height
   - Nav transparent on hero: `inHero` defaults to `true`, observer retries with setTimeout if hero not mounted
   - MenuOverlay: removed black dots from desktop menu items

5. **SearchBar redesign (all pages)**
   - Desktop: black 30% bg (was white 15%), 75px blur (was 39px), 0.25px #858585 border, drop shadow, 375px width, 12/21 padding
   - Mobile inline: same dark design (was frosted white), 339px width
   - Mobile sticky: hidden (inline in hero handles mobile)
   - Homepage mobile hero: SearchBar inline at bottom of hero content

6. **Homepage mobile hero redesign** (Figma `415:1616`)
   - 650px height, gradient overlay 386px from bottom at 60% opacity
   - "Begin your story" 56px Lora centered, body 14px, 269px max-width
   - SearchBar inline with 40px bottom padding
   - Extracted as `MobileHero` subcomponent

7. **Mobile ExploreOverlay** ("+" button dropdown)
   - Dark gradient bg (black 60% → #2B2220 at bottom)
   - 9 collection names: 14px Open Sans, 12% letter-spacing, white, left-aligned
   - Padding 40px left, 24px right, 80px bottom, vertically centered
   - "✕ CLOSE" at top-right, z-index 10 (above list)
   - Staggered slide-up animation

8. **Desktop fixes**
   - CollectionCarousel arrow gap: 16px (was 24px)
   - PromoCarousel: wide card caption left padding 24px (was 80px)
   - Boutique section: content overlay left padding 24px (was 64px)
   - Hero heading bottom margin: 24px (was 16px)
   - Removed 8px gaps on AppointmentCTA/Footer for Aquanaut, PDP, and Homepage pages
   - Removed 8px gap above WatchCharacteristics on PDP

9. **useIsMobile hook rewritten**
   - Uses `useState` with lazy initializer (`window.innerWidth`) for instant detection
   - Eliminates desktop→mobile flash on page load/refresh

### Files Modified This Session

```
app/hooks/useIsMobile.ts              — Rewritten: lazy initializer for instant mobile detection
app/page.tsx                          — Footer negative margin to remove 8px gap
app/for-you/page.tsx                  — Mobile card reorder, gap 0, CTA heading line breaks
app/aquanaut/page.tsx                 — Mobile gap 0, negative margins on CTA/Footer
app/aquanaut/5168g-001/page.tsx       — Mobile restructure, gallery wrappers, negative margins
app/components/Hero.tsx               — MobileHero subcomponent, gradient overlay, SearchBar inline
app/components/ForYouHero.tsx         — Mobile: 750px, gradient overlay, content at bottom
app/components/ForYouCTA.tsx          — Mobile: 32px heading, 14px body, 24px padding
app/components/ForYouProductRow.tsx   — Mobile: single column, 450px images, mobileBodyFontSize prop
app/components/AquanautHero.tsx       — Mobile: 750px, dedicated mobile image, 32px heading
app/components/AquanautGrid.tsx       — Mobile: single column, text top-left, 750px full-bleed images
app/components/ProductGallery.tsx     — Mobile: single static image 750px, no carousel
app/components/ProductInfo.tsx        — Mobile: vertical layout, 24px model, full-width CTA
app/components/ProductGalleryFull.tsx — Mobile: 600px no-caption, mobileObjectPosition/mobileObjectFit props
app/components/ProductDescription.tsx — Mobile: 32px heading, 14px body, 24px padding
app/components/ProductGallery2.tsx    — Mobile: 3 stacked images with per-image objectPosition
app/components/ProductHeroFull.tsx    — Mobile: hidden (returns null)
app/components/WatchCharacteristics.tsx — Mobile: 24px side padding
app/components/Nav.tsx                — Height 64/56px, 12% letter-spacing, location icon click, 15px blur dropdown, hero observer retry
app/components/SearchBar.tsx          — Dark design (black 30%, blur 75px, border), mobile sticky hidden
app/components/ExploreOverlay.tsx     — Mobile: dark gradient list, no images, 14px text
app/components/MenuOverlay.tsx        — Removed black dots from desktop
app/components/CollectionCarousel.tsx — Arrow gap 16px
app/components/PromoCarousel.tsx      — Wide card caption padding 24px
app/components/Boutique.tsx           — Content overlay left padding 24px
```

### Images Added This Session

```
public/images/aq-hero-mobile.jpg     — Aquanaut mobile hero (crown close-up), extracted from Figma
public/images/pdp-gallery-3.jpg      — Replaced with wrist shot from Figma node 578:3012
```

### Session 3 Completed (2026-03-29)

1. **Nav transparency fixed** — replaced IntersectionObserver with scroll-based `getBoundingClientRect()` check
2. **Desktop location dropdown** — 15px blur background overlay, white text, click-away dismiss, "THE GARDENS MALL, KL" title on mobile dropdown
3. **SearchBar redesign**
   - Unified sticky behavior: `position: sticky; bottom: 40px` on both mobile and desktop
   - Close/dismiss button (16x16, black circle, white X) — top-right, only shows outside hero
   - Auto-reappears when user scrolls back to hero section
   - `dismissedRef` (ref-based, not state) for reliable dismiss
   - Wrapper div structure: outer div handles sticky + sizing, inner pill handles visuals
   - `inline` prop for non-sticky usage (ForYouHero)
   - Background: `rgba(0,0,0,0.60)` + 50px blur
4. **Mobile hero → 100vh** with video background (was 650px static image)
5. **Hero video stitched** — Patek Boutique (0:01-0:03) + Patek Boutique_2 (0:01-0:03) + hero_final (full 17s)
   - Desktop: `hero-video-new.mp4` (1920x1080)
   - Mobile: `hero-video-mobile.mp4` (1080x1920)
6. **Framer Motion hydration fix** — split Hero into `MobileHero` + `DesktopHero` so `useScroll` only runs on desktop
7. **Appointment CTA**
   - Form state lifted to parent for validation
   - Error messages: red "! message" at 10px below underline, clears on click anywhere
   - Success modal: animated SVG tick (stroke-dashoffset draw animation), "We will be in touch", "Return to Boutique" button
   - Input text color changed to #2B1C1A
8. **CraftVideo audio** — 5s chime extracted from Patek "Striking a Sound" (0:27-0:32)
   - Auto-plays on scroll into view, loops, pauses when scrolled away
   - Mute/unmute button (bottom-right, dark glass circle, speaker icon)
   - Pre-unlocks audio on first user click (PasswordGate interaction)
9. **ForYou page SearchBar** — replaced "Welcome to Patek Philippe" text+arrow with SearchBar inline component

### Current State

- **All changes committed**: `0394e85`
- **Deployed to Firebase**: https://patek-philippe-v3.web.app
- **All 4 pages mobile responsive**: Homepage, For You, Aquanaut, PDP
- **No known bugs**

### Decisions Made & Why

| Decision | Why |
|----------|-----|
| `useIsMobile` with lazy `useState` initializer | `useSyncExternalStore` caused hydration mismatches. Lazy initializer reads `window.innerWidth` synchronously on client, eliminating desktop→mobile flash. |
| Single sticky SearchBar on mobile + desktop | One SearchBar in page.tsx (after CraftVideo) with `sticky; bottom: 40`. Mobile hero is 100vh so bar overlays hero. `inline` prop for non-sticky usage in ForYouHero. |
| `MobileHero` as separate function component | Cleaner separation of mobile/desktop hero logic. Avoids deeply nested conditionals. |
| `inHero` defaults to `true` | All pages have hero sections. Starting transparent prevents white flash, observer corrects when scrolled past hero. |
| Dark SearchBar design (black 30% bg) | Figma design change from frosted white to dark glass. Applied consistently across all SearchBar instances (desktop sticky, mobile inline). |
| `mobileObjectPosition` prop on ProductGalleryFull | Different images need different crop positions on mobile's 600px height. Per-instance prop avoids one-size-fits-all. |
| Removed ProductHeroFull on mobile, images moved to ProductGallery2 | Mobile PDP has 3 stacked images in one section instead of separate split panel + full-bleed. Simpler layout, matches Figma. |
| ExploreOverlay mobile: simple list (no image crossfade) | Figma mobile design shows plain dark gradient with text list. No background images or hover states needed on mobile. |
| Nav scroll-based hero check (getBoundingClientRect) | IntersectionObserver had timing/race issues with isMobile hydration. Scroll handler is synchronous and reliable. |
| `dismissedRef` instead of `useState` for SearchBar dismiss | React state batching caused dismiss to not work. Ref updates synchronously, forceRender triggers UI update. |
| DesktopHero / MobileHero split | `useScroll` with `target: ref` throws "ref not hydrated" when MobileHero renders (ref never attached). Split ensures hooks only run when their DOM exists. |
| Audio pre-unlock on click | Browsers block autoplay audio. Playing muted then pausing on first user click (PasswordGate) unlocks the audio element for later programmatic play. |

## Mobile Responsive

- **Breakpoint**: 768px via `useIsMobile()` hook in `app/hooks/useIsMobile.ts`
- **Approach**: Conditional rendering inside each component (not CSS media queries) — because all styling is inline and components need structural changes (row→column, hide elements)
- **Homepage mobile**: Complete (Figma `415:4717`, 393px viewport)
- **Other pages**: Not yet responsive
- **Mobile Nav**: 72px height, 32px logo, location pin + hamburger icons only (no text)
- **Mobile typography**: headings 32px (was 40px), hero 56px (was 80px), body 14px (was 16px)
- **Mobile sections**: 650px height for Hero, FeatureSection, CraftVideo
- **Accordion animation**: Always use ref-based `scrollHeight` measurement, never hardcoded `maxHeight` — see `WatchCharacteristics.tsx` for pattern

## Conventions

- All components are client components (`"use client"`) in `app/components/`.
- Backdrop blur always includes both `backdropFilter` and `WebkitBackdropFilter` for Safari.
- Split panels: flex row, `gap: 8`, both panels `flex: 1 1 748px`.
- Section gaps: 8px on homepage (film-strip rhythm), 1px on PDP.
- Pages with hero sections: add `id="hero"` to hero element, no `marginTop` on `<main>`.
- Pages without hero: `marginTop: 88` on `<main>` (nav height).
- Always extract images from Figma — never use placeholder/random images.
- Extract only the image frame from Figma cards (not the parent with text baked in).
