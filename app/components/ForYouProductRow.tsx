"use client";

import { useIsMobile } from "../hooks/useIsMobile";

interface CardData {
  image: string;
  name: string;
  model: string;
  material: string;
  wide?: boolean;
  href?: string;
  bodyText?: string;
  mobileBodyFontSize?: number;
}

function ProductCard({ card, isMobile }: { card: CardData; isMobile: boolean }) {
  const isWide = card.wide;
  const bodyFontSize = isMobile ? (card.mobileBodyFontSize || 14) : 16;

  return (
    <div
      onClick={card.href ? () => { window.location.href = card.href!; } : undefined}
      style={{
        flex: isMobile ? "none" : (isWide ? "1 1 1005px" : "0 0 499px"),
        width: isMobile ? "100%" : undefined,
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        cursor: card.href ? "pointer" : undefined,
      }}
    >
      {/* Image */}
      <div style={{ width: "100%", height: isMobile ? 450 : 566, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.image}
          alt={`${card.name} ${card.model}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: isMobile ? undefined : "transform 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
          }}
          onMouseEnter={isMobile || card.bodyText ? undefined : (e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={isMobile || card.bodyText ? undefined : (e) => { e.currentTarget.style.transform = "scale(1)"; }}
        />
      </div>

      {/* Info Row */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "24px 24px 32px",
        }}
      >
        {card.bodyText ? (
          <p
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: bodyFontSize,
              fontWeight: 400,
              letterSpacing: isMobile ? "0.01em" : 0,
              lineHeight: "140%",
              color: "#8C7A66",
              margin: 0,
            }}
          >
            {card.bodyText}
          </p>
        ) : (
          <>
            {/* Left: Name + Model */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#8C7A66",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  lineHeight: "110%",
                }}
              >
                {card.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 16,
                  fontWeight: 400,
                  color: "#8C7A66",
                  letterSpacing: "0.1em",
                  lineHeight: "100%",
                  opacity: 0.7,
                }}
              >
                {card.model}
              </span>
            </div>

            {/* Right: Material */}
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 14,
                fontWeight: 400,
                color: "#8C7A66",
                lineHeight: "100%",
              }}
            >
              {card.material}
            </span>
          </>
        )}
      </div>
    </div>
  );
}

interface ForYouProductRowProps {
  cards: CardData[];
}

export default function ForYouProductRow({ cards }: ForYouProductRowProps) {
  const isMobile = useIsMobile();

  return (
    <section
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: 8,
        width: "100%",
      }}
    >
      {cards.map((card, i) => (
        <ProductCard key={i} card={card} isMobile={isMobile} />
      ))}
    </section>
  );
}
