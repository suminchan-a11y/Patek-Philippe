"use client";

export default function FullBleedVideo({
  src,
  style,
}: {
  src: string;
  style?: React.CSSProperties;
}) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        ...style,
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
