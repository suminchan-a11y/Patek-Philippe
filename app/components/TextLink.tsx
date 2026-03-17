"use client";

import Link from "next/link";

export default function TextLink({
  href,
  children,
  light,
  style,
}: {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  style?: React.CSSProperties;
}) {
  const baseColor = light ? "var(--dkd)" : "var(--t4)";
  const hoverColor = light ? "var(--dkt)" : "var(--t1)";

  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "0.7rem",
        fontWeight: 400,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: baseColor,
        borderBottom: `1px solid ${light ? "rgba(255,255,255,0.15)" : "rgba(154,149,144,0.3)"}`,
        paddingBottom: 3,
        transition: "color 0.8s ease-in-out, border-color 0.8s ease-in-out",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = hoverColor;
        e.currentTarget.style.borderColor = hoverColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = baseColor;
        e.currentTarget.style.borderColor = light
          ? "rgba(255,255,255,0.15)"
          : "rgba(154,149,144,0.3)";
      }}
    >
      {children}
    </Link>
  );
}
