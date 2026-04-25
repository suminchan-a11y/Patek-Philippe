"use client";

import { useEffect, useRef, useState } from "react";

interface WatchCard {
  image: string;
  category: string;
  ref: string;
}

const group1: WatchCard[][] = [
  [
    { image: "/images/collection-2026/r1-l.png", category: "Grand Complications", ref: "5236P-011" },
    { image: "/images/collection-2026/r1-r.png", category: "Grand Complications", ref: "5270P-016" },
  ],
  [
    { image: "/images/collection-2026/r2-l.png", category: "Grand Complications", ref: "5168G-001" },
    { image: "/images/collection-2026/r2-r.png", category: "Grand Complications", ref: "5270P-015" },
  ],
];

const group2: WatchCard[][] = [
  [
    { image: "/images/collection-2026/r3-l.png", category: "Grand Complications", ref: "5270P-017" },
    { image: "/images/collection-2026/r3-r.png", category: "Grand Complications", ref: "6105G-001" },
  ],
  [
    { image: "/images/collection-2026/r4-l.png", category: "Grand Complications", ref: "5322G-001" },
    { image: "/images/collection-2026/r4-r.png", category: "Grand Complications", ref: "5322G-010" },
  ],
];

const group3: WatchCard[][] = [
  [
    { image: "/images/collection-2026/r5-l.png", category: "Grand Complications", ref: "7047G-001" },
    { image: "/images/collection-2026/r5-r.png", category: "Grand Complications", ref: "5374/400P-001" },
  ],
  [
    { image: "/images/collection-2026/r6-l.png", category: "Complications", ref: "5396R-016" },
    { image: "/images/collection-2026/r6-r.png", category: "Complications", ref: "4946G-001" },
  ],
];

const group4: WatchCard[][] = [
  [
    { image: "/images/collection-2026/r7-l.png", category: "Complications", ref: "7129J-001" },
    { image: "/images/collection-2026/r7-r.png", category: "Complications", ref: "5249R-001" },
  ],
  [
    { image: "/images/collection-2026/r8-l.png", category: "Complications", ref: "5227G-015" },
    { image: "/images/collection-2026/r8-r.png", category: "Calatrava", ref: "7200/50G-001" },
  ],
];

const group5: WatchCard[][] = [
  [
    { image: "/images/collection-2026/r9-l.png", category: "Calatrava", ref: "7200/50G-012" },
    { image: "/images/collection-2026/r9-r.png", category: "Golden Ellipse", ref: "5738G-001" },
  ],
  [
    { image: "/images/collection-2026/r10-l.png", category: "Golden Ellipse", ref: "3738/100G-014" },
    { image: "/images/collection-2026/r10-r.png", category: "Cubitus", ref: "5840P-001" },
  ],
];

function WatchCardComponent({ card }: { card: WatchCard }) {
  return (
    <div
      style={{
        width: "50%",
        height: 604,
        backgroundColor: "#F7F7F7",
        boxShadow: "inset 0 0 0 0.5px #BDBDBD",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.image}
        alt={`${card.category} ${card.ref}`}
        style={{
          position: "absolute",
          top: -9,
          left: "50%",
          transform: "translateX(-50%)",
          width: 394,
          height: 564,
          objectFit: "contain",
          transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateX(-50%) scale(1.05)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "translateX(-50%) scale(1)"; }}
      />
      <div
        style={{
          position: "absolute",
          left: 40,
          bottom: 32,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
          }}
        >
          {card.category}
        </span>
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 24,
            fontWeight: 300,
            letterSpacing: "0.12em",
            lineHeight: "100%",
            color: "#8C7A66",
          }}
        >
          {card.ref}
        </span>
      </div>
    </div>
  );
}

function FullBleedImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100%",
        height: 982,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
    </div>
  );
}

function CardRow({ cards }: { cards: WatchCard[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
      }}
    >
      {cards.map((card, i) => <WatchCardComponent key={i} card={card} />)}
    </div>
  );
}

export default function Collection2026Grid() {
  return (
    <section style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      {/* Intro header — Figma node 768:2018 */}
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "80px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 40,
            fontWeight: 300,
            letterSpacing: "0.12em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
            textAlign: "center",
            margin: 0,
          }}
        >
          The new expression of time
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: 0,
            lineHeight: "140%",
            color: "#8C7A66",
            textAlign: "center",
            margin: 0,
            maxWidth: 696,
          }}
        >
          The Patek Philippe 2026 new models marked a measured evolution, balancing heritage with a sharper, more contemporary edge. Each piece reflected thoughtful refinements in form and detail, shaping a collection that felt both familiar and distinctly new.
        </p>
      </div>
      {group1.map((row, i) => <CardRow key={`g1-${i}`} cards={row} />)}
      <FullBleedImage src="/images/collection-2026/fb-1.jpg" />
      {group2.map((row, i) => <CardRow key={`g2-${i}`} cards={row} />)}
      <FullBleedImage src="/images/collection-2026/fb-2.jpg" />
      {group3.map((row, i) => <CardRow key={`g3-${i}`} cards={row} />)}
      <FullBleedImage src="/images/collection-2026/fb-3.jpg" />
      {group4.map((row, i) => <CardRow key={`g4-${i}`} cards={row} />)}
      <FullBleedImage src="/images/collection-2026/fb-4.jpg" />
      {group5.map((row, i) => <CardRow key={`g5-${i}`} cards={row} />)}
    </section>
  );
}
