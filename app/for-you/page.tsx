"use client";

import Nav from "../components/Nav";
import ForYouHero from "../components/ForYouHero";
import ForYouCTA from "../components/ForYouCTA";
import ForYouProductRow from "../components/ForYouProductRow";
import AppointmentCTA from "../components/AppointmentCTA";
import Footer from "../components/Footer";
import { useIsMobile } from "../hooks/useIsMobile";

const row1Cards = [
  { image: "/images/fy-r1-card1.jpg", name: "Cubitus", model: "7128/1R-001", material: "Rose Gold" },
  {
    image: "/images/fy-r1-card2.jpg",
    name: "",
    model: "",
    material: "",
    wide: true,
    bodyText: "Every arch a frame within a frame, the same geometry that defines the Nautilus rendered in stone as if the watch were always meant to be found at the end of this corridor.",
  },
];

const row2Cards = [
  {
    image: "/images/fy-r2-card1.jpg",
    name: "",
    model: "",
    material: "",
    bodyText: "The Kissing Cabinet\u2019s true enchantment unfolds as it gracefully turns inside out, revealing hidden forms and secret compartments which resembles very much like the Nautilus collection. - Australian industrial designer Adam Goodrum and French marquetry artisan Arthur\u00A0Seigneur.",
  },
  { image: "/images/fy-r2-card2.jpg", name: "Nautilus", model: "5990/1R-001", material: "Rose Gold", href: "/aquanaut/5168g-001" },
  { image: "/images/fy-r2-card3.jpg", name: "Nautilus", model: "5980/60G-001", material: "White gold" },
];

const row3Cards = [
  {
    image: "/images/fy-r3-card1.jpg",
    name: "",
    model: "",
    material: "",
    wide: true,
    bodyText: "The city\u2019s grid, worn like a second skin \u2014 the Aquanaut carries that same urban geometry, built for those who move through it with quiet confidence.",
    mobileBodyFontSize: 16,
  },
  { image: "/images/fy-r3-card2.jpg", name: "Aquanaut", model: "5327R-001", material: "White Gold" },
];

/* Mobile reorder: product cards first, body-text cards last within group 1 */
const mobileGroup1Cards = [
  row1Cards[0],           // Cubitus (product)
  row1Cards[1],           // Corridor (body text)
  row2Cards[1],           // Nautilus 5990 (product)
  row2Cards[2],           // Nautilus 5712 (product)
  row2Cards[0],           // Kissing Cabinet (body text) — moved to end
];

export default function ForYouPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 0 : 8,
        }}
      >
        <ForYouHero />

        <ForYouCTA
          heading={"A curation\nconsidered for you"}
          body="Some milestones require restraint, while others are worn daily as proof. The Nautilus embodies decades of belief that a sports watch can be as significant as any dress piece. The Aquanaut, built for those who value motion over ceremony, is designed to outlast the moments it celebrates. Choose the one that reflects not just the milestone, but the life that follows."
        />

        {isMobile ? (
          <ForYouProductRow cards={mobileGroup1Cards} />
        ) : (
          <>
            <ForYouProductRow cards={row1Cards} />
            <ForYouProductRow cards={row2Cards} />
          </>
        )}

        <ForYouCTA
          heading={"A collection\nyou may\nappreciate"}
          body="A Grand Complication is reasoned, not assembled. Each function represents years of calculation and hand-fitting parts. These pieces track the moon, account for leap years, and speak the time aloud. They are for those who understand that the most demanding creations are the most enduring to own."
        />

        <ForYouProductRow cards={row3Cards} />

        <AppointmentCTA />
        <Footer />
      </main>
    </>
  );
}
