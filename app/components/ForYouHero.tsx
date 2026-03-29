"use client";

import SearchBar from "./SearchBar";
import { useIsMobile } from "../hooks/useIsMobile";

export default function ForYouHero() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          position: "relative",
          width: "100%",
          height: 750,
          overflow: "hidden",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/fy-hero-bg-new.jpg"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Gradient overlay anchored to bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 596,
            background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 40%, rgba(0,0,0,0.85) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "40px 24px 80px",
            gap: 40,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="reveal-up" style={{ display: "flex", alignItems: "center", gap: 8, animationDelay: "0.1s", opacity: 0.6 }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" fill="#FFFFFF" />
                </svg>
                <span
                  style={{
                    fontFamily: "var(--font-open-sans), sans-serif",
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: "0.1em",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  Curated Response
                </span>
              </div>

              <h1
                className="reveal-up"
                style={{
                  fontFamily: "var(--font-open-sans), sans-serif",
                  fontSize: 32,
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  lineHeight: "120%",
                  color: "#EDEDED",
                  textTransform: "uppercase",
                  margin: 0,
                  animationDelay: "0s",
                }}
              >
                I want something to celebrate a&nbsp;milestone
              </h1>
            </div>

            <p
              className="reveal-up"
              style={{
                fontFamily: "var(--font-lora), serif",
                fontSize: 14,
                fontWeight: 400,
                lineHeight: "140%",
                color: "#FFFFFF",
                margin: 0,
                animationDelay: "0.25s",
              }}
            >
              You&apos;ve arrived at one of those moments that deserves more than memory. A Patek Philippe begins here, not as a reward, but as a companion to everything that follows. The piece you choose today will still be on your wrist, or your child&apos;s, when this moment becomes the story you tell. We have brought together a selection with this moment in mind, each one chosen not for what it is, but for what it will&nbsp;mean.
            </p>
          </div>

          <SearchBar inline />
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: 1000,
        overflow: "hidden",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/fy-hero-bg-new.jpg"
        alt=""
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 120,
          top: "45%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          maxWidth: 629,
        }}
      >
        <div className="reveal-up" style={{ display: "flex", alignItems: "center", gap: 8, animationDelay: "0.1s", opacity: 0.6 }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L9.8 6.2L16 8L9.8 9.8L8 16L6.2 9.8L0 8L6.2 6.2L8 0Z" fill="#FFFFFF" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: "0.1em",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            Curated Response
          </span>
        </div>

        <h1
          className="reveal-up"
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 40,
            fontWeight: 400,
            letterSpacing: "0.12em",
            lineHeight: "120%",
            color: "#EDEDED",
            textTransform: "uppercase",
            margin: 0,
            animationDelay: "0s",
          }}
        >
          I want something to
          <br />
          celebrate a milestone
        </h1>

        <p
          className="reveal-up"
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "140%",
            color: "#FFFFFF",
            margin: 0,
            animationDelay: "0.25s",
          }}
        >
          You&apos;ve arrived at one of those moments that deserves more than memory. A Patek Philippe begins here, not as a reward, but as a companion to everything that follows. The piece you choose today will still be on your wrist, or your child&apos;s, when this moment becomes the story you tell. We have brought together a selection with this moment in mind, each one chosen not for what it is, but for what it will mean.
        </p>

        <div className="reveal-up" style={{ animationDelay: "0.4s" }}>
          <SearchBar inline />
        </div>
      </div>

    </section>
  );
}
