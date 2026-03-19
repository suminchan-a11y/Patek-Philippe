export default function Footer() {
  const boutiques = [
    "Ion Orchard",
    "Marina Bay Sands",
    "Ngee Ann City",
    "Raffles Hotel",
    "Suria KLCC",
    "Pavilion KL",
    "Siam Paragon",
    "ICONSIAM",
    "Central Embassy",
  ];

  const about = ["The team", "Contact us"];

  const legal = ["Glossary", "Cookie setting", "Legal notice", "Privacy notice"];

  return (
    <footer
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#00162C",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px 60px 40px",
      }}
    >
      {/* Top divider */}
      <div
        style={{
          width: "100%",
          height: 1,
          background: "rgba(255,255,255,0.2)",
          marginBottom: 60,
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        {/* Left: Logo */}
        <div style={{ flex: "0 0 auto" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/pp-logo-footer.png"
            alt="Patek Philippe"
            style={{
              width: 100,
              height: "auto",
              objectFit: "contain",
              opacity: 0.9,
            }}
          />
        </div>

        {/* Right columns */}
        <div style={{ display: "flex", gap: 100 }}>
          {/* Our Boutique column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-open-sans)",
                fontSize: 24,
                fontWeight: 300,
                letterSpacing: 1,
                textTransform: "uppercase" as const,
                color: "#FFFFFF",
                marginBottom: 24,
              }}
            >
              Our Boutique
            </h3>
            <ul style={{ listStyle: "none" }}>
              {boutiques.map((b) => (
                <li key={b} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    {b}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About column */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-open-sans)",
                fontSize: 24,
                fontWeight: 300,
                letterSpacing: 1,
                textTransform: "uppercase" as const,
                color: "#FFFFFF",
                marginBottom: 24,
              }}
            >
              About
            </h3>
            <ul style={{ listStyle: "none" }}>
              {about.map((a) => (
                <li key={a} style={{ marginBottom: 10 }}>
                  <a
                    href="#"
                    style={{
                      fontFamily: "var(--font-lora)",
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#FFFFFF",
                    }}
                  >
                    {a}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom legal */}
      <div>
        <div
          style={{
            width: "100%",
            height: 1,
            background: "rgba(255,255,255,0.2)",
            marginBottom: 24,
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
          }}
        >
          {legal.map((l) => (
            <a
              key={l}
              href="#"
              style={{
                fontFamily: "var(--font-lora)",
                fontSize: 14,
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
