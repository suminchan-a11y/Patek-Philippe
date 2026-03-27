"use client";

import { useRef } from "react";

const ease = [0.25, 0.1, 0.1, 1] as const;

export default function Gondolo() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        height: "100vh",
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Left Panel — Watch + Text */}
      <div
        style={{
          flex: "1 1 748px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-5% 0px 0px",
            height: "110%",
            willChange: "transform",
            transform: "translateY(-10.4557px)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/gondolo-watch.avif"
            alt="Gondolo watch"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "69.5% center",
            }}
          />
        </div>

        {/* Gradient + blur behind text */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0) 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 280,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            maskImage:
              "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, black 60%, transparent 100%)",
          }}
        />

        {/* Text — center aligned */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: 0,
            right: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 40,
              fontWeight: 400,
              letterSpacing: "0.1em",
              lineHeight: "110%",
              color: "#FFFFFF",
              textTransform: "uppercase" as const,
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            Gondolo
          </h2>
          <a
            href="#"
            className="cta-link cta-link-white"
          >
            View collection
          </a>
        </div>
      </div>

      {/* Right Panel — Chandelier with hover state */}
      <ChandelierPanel />
    </section>
  );
}

function ChandelierPanel() {
  return (
    <div
      style={{
        flex: "1 1 748px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-2% 0px 0px",
          height: "110%",
          willChange: "transform",
          transform: "translateY(-48.5541px)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/chandelier.png"
          alt="Boutique chandelier"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
