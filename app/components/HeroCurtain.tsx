"use client";

/**
 * Parallax reveal: Hero slides away at full scroll speed,
 * Boutique stays sticky behind it.
 *
 * Layout (200vh wrapper):
 *   ┌─────────────────────────────┐
 *   │  Hero      (relative, z:2) │  ← scrolls away normally
 *   │  Boutique  (sticky top:0)  │  ← stays in place, revealed as hero leaves
 *   └─────────────────────────────┘
 */

export default function HeroCurtain({
  children,
}: {
  children: [React.ReactElement, React.ReactElement];
}) {
  return (
    <div
      style={{
        position: "relative",
        height: "200vh",
      }}
    >
      {/* Hero — scrolls away naturally at full speed */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          zIndex: 2,
        }}
      >
        {children[0]}
      </div>

      {/* Boutique — sticky, stays in place as hero scrolls past */}
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          zIndex: 1,
          marginTop: "-100vh",
        }}
      >
        {children[1]}
      </div>
    </div>
  );
}
