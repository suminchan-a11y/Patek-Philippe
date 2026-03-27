"use client";

const tabs = ["All", "Aquanaut", "Calatrava", "Grand Complications", "Cubitus"];

const revealStyle = (delay: number): React.CSSProperties => ({
  opacity: 0,
  transform: "translateY(40px)",
  animation: `revealUp 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s forwards`,
});

export default function ForYouHeader() {
  return (
    <section
      style={{
        width: "100%",
        padding: "80px 120px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 8,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Title + Subtitle */}
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        <h1
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 64,
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "#8C7A66",
            margin: 0,
            lineHeight: 1,
            ...revealStyle(0.1),
          }}
        >
          FOR YOU
        </h1>
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 20,
            fontWeight: 400,
            color: "rgba(4,4,11,1)",
            margin: 0,
            lineHeight: "145%",
            maxWidth: 561,
            ...revealStyle(0.25),
          }}
        >
          Every single detail and component of a Patek Philippe watch is
          hand-finished by dedicated, trained specialists
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          marginTop: 16,
          ...revealStyle(0.4),
        }}
      >
        {tabs.map((tab) => {
          const isActive = tab === "Aquanaut";
          return (
            <button
              key={tab}
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 18,
                fontWeight: 400,
                color: "rgba(4,4,11,1)",
                backgroundColor: "transparent",
                border: `1px solid rgba(0,0,0,${isActive ? 1 : 0.2})`,
                borderRadius: 80,
                padding: "8px 20px",
                cursor: "pointer",
                lineHeight: "normal",
                whiteSpace: "nowrap",
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </section>
  );
}
