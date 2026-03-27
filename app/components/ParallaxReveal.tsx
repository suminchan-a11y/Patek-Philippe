"use client";

/**
 * Parallax reveal: first child slides away at full scroll speed,
 * second child stays sticky behind it — revealed as the first leaves.
 *
 * Same mechanic as champagnedelossy.com/legacy/.
 */

export default function ParallaxReveal({
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
      {/* Top layer — scrolls away naturally */}
      <div
        style={{
          position: "relative",
          height: "100vh",
          zIndex: 2,
        }}
      >
        {children[0]}
      </div>

      {/* Bottom layer — sticky, revealed as top scrolls past */}
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
