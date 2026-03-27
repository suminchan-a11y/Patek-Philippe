"use client";

const watches = [
  { image: "/images/aquanaut-1.png", name: "AQUANAUT", model: "5168G - 001", material: "White Gold" },
  { image: "/images/aquanaut-2.png", name: "AQUANAUT", model: "5168G - 001", material: "White Gold" },
  { image: "/images/aquanaut-3.png", name: "AQUANAUT", model: "5168G - 001", material: "White Gold" },
];

export default function WatchGrid() {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: 8,
      }}
    >
      {watches.map((watch, i) => (
        <div
          key={i}
          onClick={i === 0 ? () => { window.location.href = "/aquanaut/5168g-001"; } : undefined}
          style={{
            flex: "1 1 499px",
            display: "flex",
            flexDirection: "column",
            opacity: 0,
            transform: "translateY(40px)",
            animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${0.5 + i * 0.12}s forwards`,
            cursor: i === 0 ? "pointer" : undefined,
          }}
        >
          {/* Image */}
          <div style={{ width: "100%", height: 566, overflow: "hidden", cursor: "pointer" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={watch.image}
              alt={`${watch.name} ${watch.model}`}
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
              height: 115,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 24px",
            }}
          >
            {/* Left: Name + Model */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <span
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 28,
                  fontWeight: 400,
                  color: "rgba(4,4,11,1)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                {watch.name}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 16,
                  fontWeight: 300,
                  color: "rgba(4,4,11,1)",
                }}
              >
                {watch.model}
              </span>
            </div>

            {/* Right: Material */}
            <span
              style={{
                fontFamily: "var(--font-open-sans), sans-serif",
                fontSize: 14,
                fontWeight: 300,
                color: "rgba(4,4,11,1)",
                textAlign: "right",
              }}
            >
              {watch.material}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
