export default function SectionLabel({
  children,
  light,
  style,
}: {
  children: React.ReactNode;
  light?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 9,
        letterSpacing: 5,
        textTransform: "uppercase",
        color: light ? "var(--dkd)" : "var(--t4)",
        ...style,
      }}
    >
      {children}
    </p>
  );
}
