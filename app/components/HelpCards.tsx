"use client";

const cards = [
  { image: "/images/help-collection.png", title: "DISCOVER THE COLLECTION" },
  { image: "/images/help-services.png", title: "VIEW OUR SERVICES" },
  { image: "/images/help-appointment.png", title: "BOOK AN APPOINTMENT" },
];

export default function HelpCards() {
  return (
    <section
      style={{
        width: "100%",
        padding: "60px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 60,
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 32,
          fontWeight: 400,
          color: "rgba(4,4,11,1)",
          textAlign: "center",
          margin: 0,
          lineHeight: "115%",
          letterSpacing: "0%",
        }}
      >
        Your time matters to us.<br />How can we help you?
      </h2>

      {/* Card Grid */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 24,
          width: "100%",
          maxWidth: 1432,
        }}
      >
        {cards.map((card, i) => (
          <div
            key={i}
            style={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            {/* Image */}
            <div style={{ width: "100%", height: 347, overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>

            {/* Footer Row */}
            <div
              style={{
                height: 88,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {/* Title */}
              <span
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 20,
                  fontWeight: 400,
                  color: "rgba(4,4,11,1)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                }}
              >
                {card.title}
              </span>

              {/* Arrow Button */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  backgroundColor: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="#FFFFFF"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
