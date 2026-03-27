"use client";

const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

export default function ProductInfo() {
  return (
    <section
      style={{
        width: "100%",
        padding: "32px 40px 32px 40px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        ...revealStyle(0.25),
      }}
    >
      {/* Left: Name + Model */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 20,
            fontWeight: 400,
            letterSpacing: "0.1em",
            lineHeight: "40%",
            color: "#8C7A66",
            textTransform: "uppercase",
          }}
        >
          Nautilus
        </span>
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 40,
            fontWeight: 300,
            letterSpacing: 0,
            lineHeight: "100%",
            color: "#8C7A66",
            opacity: 0.8,
          }}
        >
          5990/1R-001
        </span>
      </div>

      {/* Right: Specs + CTA */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 206,
        }}
      >
        {/* Specs Grid */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 8,
          }}
        >
          {/* Labels column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 180,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.1em",
                lineHeight: "100%",
                color: "#626262",
                opacity: 0.8,
                textTransform: "uppercase",
              }}
            >
              Case Size
            </span>
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 12,
                fontWeight: 400,
                letterSpacing: "0.1em",
                lineHeight: "100%",
                color: "#626262",
                opacity: 0.8,
                textTransform: "uppercase",
              }}
            >
              Case Material
            </span>
          </div>

          {/* Values column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              width: 180,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "100%",
                color: "#626262",
              }}
            >
              42.2mm
            </span>
            <span
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 12,
                fontWeight: 400,
                lineHeight: "100%",
                color: "#626262",
              }}
            >
              White Gold
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2B1C1A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#533833"; }}
          style={{
            width: 346,
            height: 68,
            borderRadius: 2,
            backgroundColor: "#533833",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
          }}
        >
          SCHEDULE AN APPOINTMENT
        </button>
      </div>
    </section>
  );
}
