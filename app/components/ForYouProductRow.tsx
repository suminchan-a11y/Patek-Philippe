"use client";

interface CardData {
  image: string;
  name: string;
  model: string;
  material: string;
  wide?: boolean;
  href?: string;
}

function ProductCard({ card }: { card: CardData }) {
  const isWide = card.wide;
  return (
    <div
      onClick={card.href ? () => { window.location.href = card.href!; } : undefined}
      style={{
        flex: isWide ? "1 1 1005px" : "0 0 499px",
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        cursor: card.href ? "pointer" : undefined,
      }}
    >
      {/* Image */}
      <div style={{ width: "100%", height: 566, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.image}
          alt={`${card.name} ${card.model}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
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
      </div>
    </div>
  );
}

interface ForYouProductRowProps {
  cards: CardData[];
}

export default function ForYouProductRow({ cards }: ForYouProductRowProps) {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        width: "100%",
      }}
    >
      {cards.map((card, i) => (
        <ProductCard key={i} card={card} />
      ))}
    </section>
  );
}
