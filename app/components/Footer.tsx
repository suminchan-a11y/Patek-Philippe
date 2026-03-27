"use client";

const boutiqueLinks = [
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

const collectionLinks = [
  "Aquanaut",
  "Calatrava",
  "Complications",
  "Cubitus",
  "Golden Ellipse",
  "Gondolo",
  "Grand Complications",
  "Nautilus",
  "Twenty-4",
];

const serviceLinks = [
  "Reserve An Appointment",
  "Maintenance",
];

const headerStyle: React.CSSProperties = {
  fontFamily: "var(--font-open-sans), sans-serif",
  fontSize: 12,
  fontWeight: 400,
  letterSpacing: "0.1em",
  lineHeight: "110%",
  color: "#8C7A66",
  textTransform: "uppercase",
  margin: 0,
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--font-lora), serif",
  fontSize: 14,
  fontWeight: 400,
  color: "#D9D9D9",
  textDecoration: "none",
  lineHeight: "20px",
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#050608",
        padding: "80px 80px 80px 80px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top divider line — 6% white */}
      <div
        style={{
          width: 1344,
          height: 1,
          backgroundColor: "rgba(255,255,255,0.06)",
          alignSelf: "center",
          marginBottom: 64,
        }}
      />

      {/* Main content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
          width: "100%",
        }}
      >
        {/* Content area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 64,
          }}
        >
          {/* Top row: Visit Us + Logo — space-between */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Visit Us */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <h3 style={{ ...headerStyle, opacity: 0.9 }}>
                VISIT US
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-lora), serif",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "20px",
                    color: "#D9D9D9",
                    margin: 0,
                    maxWidth: 253,
                  }}
                >
                  Lot G226-227, Ground Floor<br />
                  The Gardens Mall, Medan Syed Putra<br />
                  Utara, 59200 Kuala Lumpur, Malaysia
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-lora), serif",
                    fontSize: 14,
                    fontWeight: 400,
                    lineHeight: "22px",
                    color: "#D9D9D9",
                    margin: 0,
                  }}
                >
                  Visit us today
                  <br />
                  10:00am - 5:00pm
                </p>
              </div>
            </div>

            {/* Logo */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/pp-footer-logo.png"
              alt="Patek Philippe"
              style={{ width: 238, height: 130, objectFit: "contain" }}
            />
          </div>

          {/* Columns row: Our Boutiques + Collections + Services */}
          <div
            style={{
              display: "flex",
              gap: 40,
            }}
          >
            {/* Column 1: Our Boutiques */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                width: 199,
              }}
            >
              <h3 style={headerStyle}>OUR BOUTIQUES</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {boutiqueLinks.map((link) => (
                  <a key={link} href="#" style={linkStyle}>
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Collections */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
                width: 199,
              }}
            >
              <h3 style={headerStyle}>COLLECTIONS</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {collectionLinks.map((link) => (
                  <a key={link} href="#" style={linkStyle}>
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 3: Services */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <h3 style={{ ...headerStyle, opacity: 0.9 }}>SERVICES</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {serviceLinks.map((link) => (
                  <a key={link} href="#" style={linkStyle}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Divider — warm brown, full opacity */}
          <div
            style={{
              width: "100%",
              maxWidth: 1352,
              height: 0.5,
              backgroundColor: "#8C7A66",
            }}
          />
        </div>

        {/* Copyright */}
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 14,
            fontWeight: 400,
            lineHeight: "22px",
            color: "#D9D9D9",
          }}
        >
          © 2026 Patek Philippe Boutique The Gardens Mall. All rights reserved
        </span>
      </div>
    </footer>
  );
}
