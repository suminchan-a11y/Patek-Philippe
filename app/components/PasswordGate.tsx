"use client";

import { useState, useEffect } from "react";

const CORRECT_PASSWORD = "Aleph2026!";
const STORAGE_KEY = "pp-auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  // Check if already authenticated
  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const handleSubmit = () => {
    if (password === CORRECT_PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Don't flash content while checking auth
  if (checking) return null;

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#050608",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
      }}
    >
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logos/pp-loading-logo.png"
        alt="Patek Philippe"
        style={{
          width: 100,
          height: 100,
          objectFit: "contain",
          opacity: 0.7,
        }}
      />

      {/* Password form */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "#8C7A66",
            textTransform: "uppercase",
          }}
        >
          Enter Password
        </span>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
            autoFocus
            style={{
              width: 260,
              height: 48,
              padding: "0 16px",
              border: `1px solid ${error ? "rgba(200,80,80,0.6)" : "rgba(140,122,102,0.3)"}`,
              borderRadius: 4,
              backgroundColor: "rgba(255,255,255,0.05)",
              fontFamily: "var(--font-lora), serif",
              fontSize: 14,
              fontWeight: 400,
              color: "#FFFFFF",
              outline: "none",
              caretColor: "#8C7A66",
              transition: "border-color 0.3s",
            }}
          />

          <button
            onClick={handleSubmit}
            style={{
              width: 48,
              height: 48,
              borderRadius: 4,
              backgroundColor: "#533833",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2B1C1A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#533833"; }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {error && (
          <span
            style={{
              fontFamily: "var(--font-lora), serif",
              fontSize: 12,
              color: "rgba(200,80,80,0.8)",
            }}
          >
            Incorrect password
          </span>
        )}
      </div>
    </div>
  );
}
