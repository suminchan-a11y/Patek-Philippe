"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";

interface WatchCard {
  image: string;
  name: string;
  model: string;
}

const rows: WatchCard[][] = [
  [
    { image: "/images/aq-watch-1.png", name: "Aquanaut", model: "5168G - 001" },
    { image: "/images/aq-watch-2.png", name: "Aquanaut", model: "5168G - 001" },
  ],
  [
    { image: "/images/aq-watch-3.png", name: "Aquanaut", model: "5168G - 001" },
    { image: "/images/aq-watch-4.png", name: "Aquanaut", model: "5168G - 001" },
  ],
];

const rows2: WatchCard[][] = [
  [
    { image: "/images/aq-watch-2.png", name: "Aquanaut", model: "5168G - 001" },
    { image: "/images/aq-watch-5.png", name: "Aquanaut", model: "5168G - 001" },
  ],
  [
    { image: "/images/aq-watch-6.png", name: "Aquanaut", model: "5168G - 001" },
    { image: "/images/aq-watch-2.png", name: "Aquanaut", model: "5168G - 001" },
  ],
];

const rows3: WatchCard[][] = [
  [
    { image: "/images/aq-watch-1.png", name: "Aquanaut", model: "5168G - 001" },
    { image: "/images/aq-watch-6.png", name: "Aquanaut", model: "5168G - 001" },
  ],
  [
    { image: "/images/aq-watch-2.png", name: "Aquanaut", model: "5168G - 001" },
    { image: "/images/aq-watch-5.png", name: "Aquanaut", model: "5168G - 001" },
  ],
];

function WatchCardComponent({ card, isMobile }: { card: WatchCard; isMobile: boolean }) {
  return (
    <div
      style={{
        width: isMobile ? "100%" : "50%",
        height: 604,
        backgroundColor: "#F7F7F7",
        boxShadow: "inset 0 0 0 0.5px #BDBDBD",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Watch image — centered */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.image}
        alt={`${card.name} ${card.model}`}
        style={{
          position: "absolute",
          top: isMobile ? undefined : -9,
          bottom: isMobile ? 0 : undefined,
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? 325 : 394,
          height: isMobile ? 465 : 564,
          objectFit: "contain",
          transition: isMobile ? undefined : "transform 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
        onMouseEnter={isMobile ? undefined : (e) => {
          e.currentTarget.style.transform = "translateX(-50%) scale(1.05)";
        }}
        onMouseLeave={isMobile ? undefined : (e) => {
          e.currentTarget.style.transform = "translateX(-50%) scale(1)";
        }}
      />

      {/* Info block */}
      <div
        style={{
          position: "absolute",
          left: 40,
          ...(isMobile ? { top: 32 } : { bottom: 32 }),
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
            letterSpacing: isMobile ? "0.1em" : "0.12em",
            lineHeight: "110%",
            color: "#8C7A66",
            textTransform: "uppercase",
          }}
        >
          {card.name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 24,
            fontWeight: isMobile ? 400 : 300,
            letterSpacing: isMobile ? "0.1em" : "0.12em",
            lineHeight: "100%",
            color: "#8C7A66",
          }}
        >
          {card.model}
        </span>
      </div>
    </div>
  );
}

function FullBleedImage({ src, isMobile, objectPosition }: { src: string; isMobile: boolean; objectPosition?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
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
        height: isMobile ? 750 : 982,
        overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: objectPosition || "center center",
          display: "block",
        }}
      />
    </div>
  );
}

function CardRow({ cards, isMobile }: { cards: WatchCard[]; isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
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
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition:
          "opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1), transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1)",
      }}
    >
      {cards.map((card, i) => (
        <WatchCardComponent key={i} card={card} isMobile={isMobile} />
      ))}
    </div>
  );
}

export default function AquanautGrid() {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Group 1: 2 rows of cards */}
      {rows.map((row, i) => (
        <CardRow key={`g1-${i}`} cards={row} isMobile={isMobile} />
      ))}

      {/* Full-bleed image 1 */}
      <FullBleedImage src="/images/aq-pp-1.jpg" isMobile={isMobile} objectPosition={isMobile ? "60% center" : undefined} />

      {/* Group 2: 2 rows of cards */}
      {rows2.map((row, i) => (
        <CardRow key={`g2-${i}`} cards={row} isMobile={isMobile} />
      ))}

      {/* Full-bleed image 2 */}
      <FullBleedImage src="/images/aq-pp-2.jpg" isMobile={isMobile} />

      {/* Group 3: 2 rows of cards */}
      {rows3.map((row, i) => (
        <CardRow key={`g3-${i}`} cards={row} isMobile={isMobile} />
      ))}
    </section>
  );
}
