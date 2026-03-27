"use client";

import { useEffect, useRef, useState } from "react";

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "none",
  outline: "none",
  background: "transparent",
  fontFamily: "var(--font-open-sans), sans-serif",
  fontSize: 14,
  fontWeight: 400,
  letterSpacing: "0.1em",
  lineHeight: "110%",
  color: "#8C7A66",
  textTransform: "uppercase" as const,
};

function FormField({ label, icon, type = "text" }: { label: string; icon: React.ReactNode; type?: string }) {
  return (
    <div style={{ width: 300, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type={type}
          placeholder={label}
          style={inputStyle}
        />
        <div style={{ flexShrink: 0 }}>{icon}</div>
      </div>
      <div style={{ width: 300, height: 0.5, backgroundColor: "rgba(140,122,102,0.8)" }} />
    </div>
  );
}

const fieldLabelStyle: React.CSSProperties = {
  fontFamily: "var(--font-open-sans), sans-serif",
  fontSize: 14,
  fontWeight: 400,
  letterSpacing: "0.1em",
  lineHeight: "110%",
  color: "#8C7A66",
  textTransform: "uppercase",
};

export default function AppointmentCTA() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const itemStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s, transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s`,
  });

  return (
    <section
      ref={ref}
      style={{
        height: 800,
        backgroundColor: "#EDEDED",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 80,
        gap: 64,
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-lora), serif",
          fontSize: 56,
          fontWeight: 400,
          letterSpacing: "-0.02em",
          lineHeight: "110%",
          color: "#8C7A66",
          textAlign: "center",
          margin: 0,
          ...itemStyle(0),
        }}
      >
        Request your Appointment
      </h2>

      {/* Form Fields */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 64,
          ...itemStyle(0.15),
        }}
      >
        {/* Fields Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px 24px",
            width: 676,
          }}
        >
          {/* Name Field */}
          <FormField
            label="NAME"
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <g clipPath="url(#clip-name)">
                  <path d="M9.71094 9.65625C9.47656 9.39062 9.21875 9.15625 8.9375 8.95312C8.65625 8.75 8.35417 8.57552 8.03125 8.42969C7.70833 8.28385 7.38021 8.17708 7.04688 8.10938C6.71354 8.04167 6.36458 8.00521 6 8C5.54167 8 5.09896 8.0599 4.67188 8.17969C4.24479 8.29948 3.84635 8.46615 3.47656 8.67969C3.10677 8.89323 2.77083 9.15365 2.46875 9.46094C2.16667 9.76823 1.90625 10.1068 1.6875 10.4766C1.46875 10.8464 1.29948 11.2448 1.17969 11.6719C1.0599 12.099 1 12.5417 1 13H0C0 12.375 0.0911458 11.7734 0.273438 11.1953C0.455729 10.6172 0.71875 10.0833 1.0625 9.59375C1.40625 9.10417 1.8125 8.66927 2.28125 8.28906C2.75 7.90885 3.28125 7.60938 3.875 7.39062C3.28646 7.00521 2.82812 6.52083 2.5 5.9375C2.17188 5.35417 2.00521 4.70833 2 4C2 3.44792 2.10417 2.92969 2.3125 2.44531C2.52083 1.96094 2.80469 1.53646 3.16406 1.17188C3.52344 0.807292 3.94792 0.520833 4.4375 0.3125C4.92708 0.104167 5.44792 0 6 0C6.55208 0 7.07031 0.104167 7.55469 0.3125C8.03906 0.520833 8.46354 0.804688 8.82812 1.16406C9.19271 1.52344 9.47917 1.94792 9.6875 2.4375C9.89583 2.92708 10 3.44792 10 4C10 4.34375 9.95833 4.67969 9.875 5.00781C9.79167 5.33594 9.66667 5.64583 9.5 5.9375C9.33333 6.22917 9.13802 6.4974 8.91406 6.74219C8.6901 6.98698 8.42708 7.20312 8.125 7.39062C8.5625 7.55729 8.97396 7.77083 9.35938 8.03125C9.74479 8.29167 10.0964 8.59635 10.4141 8.94531L9.71094 9.65625ZM3 4C3 4.41667 3.07812 4.80469 3.23438 5.16406C3.39062 5.52344 3.60417 5.84115 3.875 6.11719C4.14583 6.39323 4.46354 6.60938 4.82812 6.76562C5.19271 6.92188 5.58333 7 6 7C6.41146 7 6.79948 6.92188 7.16406 6.76562C7.52865 6.60938 7.84635 6.39583 8.11719 6.125C8.38802 5.85417 8.60417 5.53646 8.76562 5.17188C8.92708 4.80729 9.00521 4.41667 9 4C9 3.58854 8.92188 3.20052 8.76562 2.83594C8.60938 2.47135 8.39583 2.15365 8.125 1.88281C7.85417 1.61198 7.53385 1.39583 7.16406 1.23438C6.79427 1.07292 6.40625 0.994792 6 1C5.58333 1 5.19531 1.07812 4.83594 1.23438C4.47656 1.39062 4.15885 1.60417 3.88281 1.875C3.60677 2.14583 3.39062 2.46615 3.23438 2.83594C3.07812 3.20573 3 3.59375 3 4ZM14.4375 7C14.6562 7 14.8594 7.03906 15.0469 7.11719C15.2344 7.19531 15.401 7.30208 15.5469 7.4375C15.6927 7.57292 15.8021 7.73698 15.875 7.92969C15.9479 8.1224 15.9896 8.32812 16 8.54688C16 8.75 15.9609 8.94792 15.8828 9.14062C15.8047 9.33333 15.6927 9.5026 15.5469 9.64844L9.94531 15.25L7 15.9844L7.73438 13.0391L13.3359 7.44531C13.487 7.29427 13.6562 7.18229 13.8438 7.10938C14.0312 7.03646 14.2292 7 14.4375 7ZM14.8359 8.94531C14.9453 8.83594 15 8.70312 15 8.54688C15 8.38542 14.9479 8.25521 14.8438 8.15625C14.7396 8.05729 14.6042 8.00521 14.4375 8C14.3646 8 14.2943 8.01042 14.2266 8.03125C14.1589 8.05208 14.099 8.09115 14.0469 8.14844L8.64062 13.5547L8.375 14.6094L9.42969 14.3438L14.8359 8.94531Z" fill="#8C7A66" />
                </g>
                <defs>
                  <clipPath id="clip-name">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          />

          {/* Email Field */}
          <FormField
            label="EMAIL"
            type="email"
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="1" y="3" width="14" height="10" rx="1" stroke="#8C7A66" strokeWidth="1" fill="none" />
                <path d="M1 4L8 9L15 4" stroke="#8C7A66" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            }
          />

          {/* Contact Field */}
          <FormField
            label="CONTACT"
            type="tel"
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.6667 1.3335V2.66683M11.9433 14.6668C11.9433 13.606 11.5219 12.5885 10.7718 11.8384C10.0216 11.0883 9.0042 10.6668 7.94333 10.6668C6.88247 10.6668 5.86505 11.0883 5.11491 11.8384C4.36476 12.5885 3.94333 13.606 3.94333 14.6668M5.33333 1.3335V2.66683M10.6667 8.00016C10.6667 9.47292 9.47276 10.6668 8 10.6668C6.52724 10.6668 5.33333 9.47292 5.33333 8.00016C5.33333 6.5274 6.52724 5.3335 8 5.3335C9.47276 5.3335 10.6667 6.5274 10.6667 8.00016ZM3.33333 2.66683H12.6667C13.403 2.66683 14 3.26378 14 4.00016V13.3335C14 14.0699 13.403 14.6668 12.6667 14.6668H3.33333C2.59695 14.6668 2 14.0699 2 13.3335V4.00016C2 3.26378 2.59695 2.66683 3.33333 2.66683Z" stroke="#8C7A66" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          />
        </div>

        {/* Submit Button */}
        <button
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2B1C1A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#533833"; }}
          style={{
            width: 147,
            height: 54,
            borderRadius: 2,
            backgroundColor: "#533833",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 16,
            fontWeight: 400,
            letterSpacing: "0.1em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
          }}
        >
          SUBMIT
        </button>
      </div>
    </section>
  );
}
