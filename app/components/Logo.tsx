/* eslint-disable @next/next/no-img-element */
export default function Logo({
  variant = "black",
  height = 40,
  style,
}: {
  variant?: "white" | "black";
  height?: number;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={variant === "white" ? "/logos/patek-white.png" : "/logos/patek-black.png"}
      alt="Patek Philippe"
      style={{
        height,
        width: "auto",
        display: "block",
        ...style,
      }}
    />
  );
}
