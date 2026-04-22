"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
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
    bodyText: "The Kissing Cabinet's true enchantment unfolds as it gracefully turns inside out, revealing hidden forms and secret compartments which resembles very much like the Nautilus collection. - Australian industrial designer Adam Goodrum and French marquetry artisan Arthur Seigneur.",
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
    bodyText: "The city's grid, worn like a second skin — the Aquanaut carries that same urban geometry, built for those who move through it with quiet confidence.",
    mobileBodyFontSize: 16,
  },
  { image: "/images/fy-r3-card2.jpg", name: "Aquanaut", model: "5327R-001", material: "White Gold" },
];

const mobileGroup1Cards = [
  row1Cards[0],
  row1Cards[1],
  row2Cards[1],
  row2Cards[2],
  row2Cards[0],
];

const DEFAULT_EDITORIAL =
  "Some milestones require restraint, while others are worn daily as proof. The Nautilus embodies decades of belief that a sports watch can be as significant as any dress piece. The Aquanaut, built for those who value motion over ceremony, is designed to outlast the moments it celebrates. Choose the one that reflects not just the milestone, but the life that follows.";

const INTELLIGENCE_API = "https://intelligence-one-beta.vercel.app/api/compose";

function ForYouContent() {
  const isMobile = useIsMobile();
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const [heroText, setHeroText] = useState("");
  const [editorialText, setEditorialText] = useState("");

  useEffect(() => {
    if (!query) return;
    fetch(INTELLIGENCE_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.heroText) setHeroText(data.heroText);
        if (data.editorialText) setEditorialText(data.editorialText);
      })
      .catch(() => {});
  }, [query]);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: isMobile ? 0 : 8,
      }}
    >
      <ForYouHero query={query} heroText={heroText} />

      <ForYouCTA
        heading={"A curation\nconsidered for you"}
        body={editorialText || DEFAULT_EDITORIAL}
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
  );
}

export default function ForYouPage() {
  return (
    <>
      <Nav />
      <Suspense fallback={null}>
        <ForYouContent />
      </Suspense>
    </>
  );
}
