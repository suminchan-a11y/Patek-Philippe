"use client";

const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

export default function AquanautHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: 812,
        overflow: "hidden",
      }}
    >
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/aquanaut-hero.png"
        alt="Aquanaut collection"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Bottom gradient overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 400,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Content — bottom left */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 80,
          right: 80,
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 80,
            fontWeight: 400,
            letterSpacing: "0.1em",
            lineHeight: "82%",
            color: "#FFFFFF",
            textTransform: "uppercase",
            margin: 0,
            ...revealStyle(0.1),
          }}
        >
          AQUANAUT
        </h1>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 20,
            fontWeight: 400,
            lineHeight: "143%",
            color: "#FFFFFF",
            margin: 0,
            maxWidth: 452,
            ...revealStyle(0.25),
          }}
        >
          For more than 185 years, Patek Philippe watches have captivated
          connoisseurs and horology enthusiasts with their exceptional artistry.
        </p>
      </div>
    </section>
  );
}
