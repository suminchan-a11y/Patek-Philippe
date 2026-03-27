"use client";

const filters = ["All", "Aquanaut", "Calatrava", "Grand Complications", "Cubitus"];

interface WatchCard {
  image: string;
  name: string;
  model: string;
  imgY: number;
}

interface FeatureCard {
  image: string;
  feature: true;
}

type CardItem = WatchCard | FeatureCard;

const rows: CardItem[][] = [
  [
    { image: "/images/aquanaut-watch-a.png", name: "AQUANAUT", model: "5168G - 001", imgY: -23 },
    { image: "/images/aquanaut-watch-b.png", name: "AQUANAUT", model: "5168G - 001", imgY: 2 },
    { image: "/images/aquanaut-watch-c.png", name: "AQUANAUT", model: "5168G - 001", imgY: 2 },
  ],
  [
    { image: "/images/aquanaut-watch-d.png", name: "AQUANAUT", model: "5168G - 001", imgY: 19 },
    { image: "/images/aquanaut-feature.png", feature: true },
  ],
  [
    { image: "/images/aquanaut-watch-a.png", name: "AQUANAUT", model: "5168G - 001", imgY: 0 },
    { image: "/images/aquanaut-watch-b.png", name: "AQUANAUT", model: "5168G - 001", imgY: 2 },
    { image: "/images/aquanaut-watch-c.png", name: "AQUANAUT", model: "5168G - 001", imgY: 2 },
  ],
  [
    { image: "/images/aquanaut-watch-d.png", name: "AQUANAUT", model: "5168G - 001", imgY: 19 },
    { image: "/images/aquanaut-watch-a.png", name: "AQUANAUT", model: "5168G - 001", imgY: 26 },
    { image: "/images/aquanaut-watch-c.png", name: "AQUANAUT", model: "5168G - 001", imgY: 2 },
  ],
];

function isFeature(card: CardItem): card is FeatureCard {
  return "feature" in card;
}

const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

function StandardCard({ card, delay }: { card: WatchCard; delay: number }) {
  return (
    <div
      style={{
        width: 504,
        height: 604,
        backgroundColor: "#F7F7F7",
        boxShadow: "inset 0 0 0 0.5px #BDBDBD",
        position: "relative",
        overflow: "hidden",
        flexShrink: 0,
        ...revealStyle(delay),
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.image}
        alt={`${card.name} ${card.model}`}
        style={{
          position: "absolute",
          top: card.imgY,
          left: 91,
          width: 323,
          height: 461,
          objectFit: "contain",
          transition: "transform 0.8s cubic-bezier(0.25, 0.1, 0.1, 1)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      />

      {/* Info block */}
      <div
        style={{
          position: "absolute",
          left: 0,
          bottom: 0,
          paddingLeft: 40,
          paddingBottom: 32,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 32,
            fontWeight: 400,
            lineHeight: "60%",
            letterSpacing: "0%",
            color: "#000000",
            textTransform: "uppercase",
          }}
        >
          {card.name}
        </span>
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 300,
            letterSpacing: "0.07em",
            color: "#000000",
          }}
        >
          {card.model}
        </span>
      </div>
    </div>
  );
}

function FeatureCardComponent({ card, delay }: { card: FeatureCard; delay: number }) {
  return (
    <div
      style={{
        width: 1008,
        height: 604,
        overflow: "hidden",
        flexShrink: 0,
        ...revealStyle(delay),
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={card.image}
        alt="Aquanaut feature"
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
  );
}

export default function AquanautGrid() {
  return (
    <section
      style={{
        width: "100%",
        paddingTop: 80,
        display: "flex",
        flexDirection: "column",
        gap: 80,
      }}
    >
      {/* Filter Bar */}
      <div
        style={{
          paddingLeft: 64,
          ...revealStyle(0.4),
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 37,
          }}
        >
          {filters.map((filter) => (
            <span
              key={filter}
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 24,
                fontWeight: 400,
                color: "#000000",
                cursor: "pointer",
                lineHeight: "20px",
                letterSpacing: "-0.01em",
              }}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>

      {/* Product Grid — rows stacked, no gaps */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {rows.map((row, rowIdx) => (
          <div
            key={rowIdx}
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
            }}
          >
            {row.map((card, cardIdx) => {
              const delay = 0.5 + rowIdx * 0.15 + cardIdx * 0.1;
              return isFeature(card) ? (
                <FeatureCardComponent key={`${rowIdx}-${cardIdx}`} card={card} delay={delay} />
              ) : (
                <StandardCard key={`${rowIdx}-${cardIdx}`} card={card} delay={delay} />
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
