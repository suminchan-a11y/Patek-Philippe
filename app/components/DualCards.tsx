"use client";

interface CardProps {
  image: string;
  heading: string;
  subtitle: string;
  cta: string;
}

function Card({ image, heading, subtitle, cta }: CardProps) {
  return (
    <div
      style={{
        width: "50%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60%",
          background:
            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Text content */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          textAlign: "center",
          color: "#FFFFFF",
          padding: "0 40px",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-open-sans)",
            fontSize: 56,
            fontWeight: 400,
            letterSpacing: "0.05em",
            lineHeight: 1.1,
            textTransform: "uppercase" as const,
            marginBottom: 12,
          }}
        >
          {heading}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: 20,
            fontWeight: 400,
            lineHeight: 1,
            marginBottom: 20,
          }}
        >
          {subtitle}
        </p>
        <a
          href="#"
          className="cta-link"
          style={{
            fontFamily: "var(--font-open-sans)",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.02em",
            color: "#FFFFFF",
          }}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

export default function DualCards() {
  return (
    <section
      style={{
        display: "flex",
        width: "100%",
        height: "100vh",
        minHeight: 982,
      }}
    >
      <Card
        image="/images/boutique.png"
        heading="Enter the Boutique"
        subtitle="The rarest pieces. The unhurried experience."
        cta="Step Inside"
      />
      <Card
        image="/images/bluedial.png"
        heading="I Have a Piece in Mind"
        subtitle="Describe it. Our digital guide will find it."
        cta="Ask Our Digital Guide"
      />
    </section>
  );
}
