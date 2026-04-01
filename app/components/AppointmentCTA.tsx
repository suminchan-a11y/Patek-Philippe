"use client";

import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "../hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";

const ease = [0.25, 0.1, 0.1, 1] as const;

function FormField({
  label,
  icon,
  type = "text",
  hint = "",
  fullWidth = false,
  value,
  onChange,
  error = "",
}: {
  label: string;
  icon: React.ReactNode;
  type?: string;
  hint?: string;
  fullWidth?: boolean;
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) {
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const isActive = focused || value.length > 0;

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{ width: fullWidth ? "100%" : 300, display: "flex", flexDirection: "column", justifyContent: "space-between", cursor: "text" }}
    >
      <div style={{ height: 40, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: isActive ? 12 : 16,
              fontWeight: 400,
              letterSpacing: "0.1em",
              lineHeight: "110%",
              color: "#8C7A66",
              textTransform: "uppercase",
              transition: "font-size 0.3s cubic-bezier(0.25, 0.1, 0.1, 1)",
            }}
          >
            {label}
          </span>
          <div style={{ flexShrink: 0 }}>{icon}</div>
        </div>
        <div>
          <input
            ref={inputRef}
            type={type}
            value={value}
            placeholder={isActive ? hint : ""}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              width: "100%",
              display: "block",
              height: isActive ? 14 : 0,
              opacity: isActive ? 1 : 0,
              border: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "var(--font-open-sans), sans-serif",
              fontSize: 14,
              fontWeight: 400,
              letterSpacing: "0.1em",
              lineHeight: "110%",
              color: "#2B1C1A",
              textTransform: "uppercase",
              padding: 0,
              marginBottom: isActive ? 5 : 0,
              caretColor: "#8C7A66",
              transition: "height 0.3s cubic-bezier(0.25, 0.1, 0.1, 1), opacity 0.3s cubic-bezier(0.25, 0.1, 0.1, 1), margin-bottom 0.3s cubic-bezier(0.25, 0.1, 0.1, 1)",
            }}
          />
          <div style={{ width: "100%", height: 0.5, backgroundColor: error ? "red" : "rgba(140,122,102,0.8)" }} />
        </div>
      </div>
      {error && (
        <span
          style={{
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 10,
            fontWeight: 400,
            color: "red",
            marginTop: 6,
          }}
        >
          ! {error}
        </span>
      )}
    </div>
  );
}

const nameIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <g clipPath="url(#clip-name)">
      <path d="M9.71094 9.65625C9.47656 9.39062 9.21875 9.15625 8.9375 8.95312C8.65625 8.75 8.35417 8.57552 8.03125 8.42969C7.70833 8.28385 7.38021 8.17708 7.04688 8.10938C6.71354 8.04167 6.36458 8.00521 6 8C5.54167 8 5.09896 8.0599 4.67188 8.17969C4.24479 8.29948 3.84635 8.46615 3.47656 8.67969C3.10677 8.89323 2.77083 9.15365 2.46875 9.46094C2.16667 9.76823 1.90625 10.1068 1.6875 10.4766C1.46875 10.8464 1.29948 11.2448 1.17969 11.6719C1.0599 12.099 1 12.5417 1 13H0C0 12.375 0.0911458 11.7734 0.273438 11.1953C0.455729 10.6172 0.71875 10.0833 1.0625 9.59375C1.40625 9.10417 1.8125 8.66927 2.28125 8.28906C2.75 7.90885 3.28125 7.60938 3.875 7.39062C3.28646 7.00521 2.82812 6.52083 2.5 5.9375C2.17188 5.35417 2.00521 4.70833 2 4C2 3.44792 2.10417 2.92969 2.3125 2.44531C2.52083 1.96094 2.80469 1.53646 3.16406 1.17188C3.52344 0.807292 3.94792 0.520833 4.4375 0.3125C4.92708 0.104167 5.44792 0 6 0C6.55208 0 7.07031 0.104167 7.55469 0.3125C8.03906 0.520833 8.46354 0.804688 8.82812 1.16406C9.19271 1.52344 9.47917 1.94792 9.6875 2.4375C9.89583 2.92708 10 3.44792 10 4C10 4.34375 9.95833 4.67969 9.875 5.00781C9.79167 5.33594 9.66667 5.64583 9.5 5.9375C9.33333 6.22917 9.13802 6.4974 8.91406 6.74219C8.6901 6.98698 8.42708 7.20312 8.125 7.39062C8.5625 7.55729 8.97396 7.77083 9.35938 8.03125C9.74479 8.29167 10.0964 8.59635 10.4141 8.94531L9.71094 9.65625ZM3 4C3 4.41667 3.07812 4.80469 3.23438 5.16406C3.39062 5.52344 3.60417 5.84115 3.875 6.11719C4.14583 6.39323 4.46354 6.60938 4.82812 6.76562C5.19271 6.92188 5.58333 7 6 7C6.41146 7 6.79948 6.92188 7.16406 6.76562C7.52865 6.60938 7.84635 6.39583 8.11719 6.125C8.38802 5.85417 8.60417 5.53646 8.76562 5.17188C8.92708 4.80729 9.00521 4.41667 9 4C9 3.58854 8.92188 3.20052 8.76562 2.83594C8.60938 2.47135 8.39583 2.15365 8.125 1.88281C7.85417 1.61198 7.53385 1.39583 7.16406 1.23438C6.79427 1.07292 6.40625 0.994792 6 1C5.58333 1 5.19531 1.07812 4.83594 1.23438C4.47656 1.39062 4.15885 1.60417 3.88281 1.875C3.60677 2.14583 3.39062 2.46615 3.23438 2.83594C3.07812 3.20573 3 3.59375 3 4ZM14.4375 7C14.6562 7 14.8594 7.03906 15.0469 7.11719C15.2344 7.19531 15.401 7.30208 15.5469 7.4375C15.6927 7.57292 15.8021 7.73698 15.875 7.92969C15.9479 8.1224 15.9896 8.32812 16 8.54688C16 8.75 15.9609 8.94792 15.8828 9.14062C15.8047 9.33333 15.6927 9.5026 15.5469 9.64844L9.94531 15.25L7 15.9844L7.73438 13.0391L13.3359 7.44531C13.487 7.29427 13.6562 7.18229 13.8438 7.10938C14.0312 7.03646 14.2292 7 14.4375 7ZM14.8359 8.94531C14.9453 8.83594 15 8.70312 15 8.54688C15 8.38542 14.9479 8.25521 14.8438 8.15625C14.7396 8.05729 14.6042 8.00521 14.4375 8C14.3646 8 14.2943 8.01042 14.2266 8.03125C14.1589 8.05208 14.099 8.09115 14.0469 8.14844L8.64062 13.5547L8.375 14.6094L9.42969 14.3438L14.8359 8.94531Z" fill="#8C7A66" />
    </g>
    <defs><clipPath id="clip-name"><rect width="16" height="16" fill="white" /></clipPath></defs>
  </svg>
);

const emailIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="3" width="14" height="10" rx="1" stroke="#8C7A66" strokeWidth="0.75" fill="none" />
    <path d="M1 4L8 9L15 4" stroke="#8C7A66" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const phoneIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M13.0038 5.3065C12.5282 7.16149 11.5628 8.85458 10.2087 10.2087C8.85458 11.5628 7.16149 12.5282 5.3065 13.0038C3.87917 13.3672 2.6665 12.1398 2.6665 10.6665V9.99984C2.6665 9.63184 2.96584 9.3365 3.33184 9.29984C3.93877 9.2395 4.53455 9.09617 5.1025 8.87384L6.11584 9.88717C7.76575 9.09623 9.09623 7.76575 9.88717 6.11584L8.87384 5.1025C9.09639 4.53458 9.23996 3.9388 9.3005 3.33184C9.3365 2.96517 9.63184 2.6665 9.99984 2.6665H10.6665C12.1398 2.6665 13.3672 3.87917 13.0038 5.3065Z" stroke="#8C7A66" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function AnimatedTick() {
  return (
    <div style={{ width: 80, height: 80, position: "relative" }}>
      {/* Circle */}
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", inset: 0 }}>
        <circle
          cx="40"
          cy="40"
          r="38"
          stroke="rgba(140,122,102,0.3)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="238.76"
          strokeDashoffset="238.76"
          style={{
            animation: "drawCircle 0.8s cubic-bezier(0.25, 0.1, 0.1, 1) 0.3s forwards",
          }}
        />
      </svg>
      {/* Tick */}
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" style={{ position: "absolute", inset: 0 }}>
        <polyline
          points="27,42 36,50 54,32"
          stroke="#8C7A66"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="40"
          strokeDashoffset="40"
          style={{
            animation: "drawTick 0.5s cubic-bezier(0.25, 0.1, 0.1, 1) 0.9s forwards",
          }}
        />
      </svg>
      <style>{`
        @keyframes drawCircle {
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawTick {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  const isMobile = useIsMobile();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease }}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.5, ease }}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isMobile ? "calc(100% - 48px)" : 520,
          backgroundColor: "#EDEDED",
          padding: isMobile ? "48px 24px" : "56px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            width: 32,
            height: 32,
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <line x1="1" y1="1" x2="15" y2="15" stroke="#8C7A66" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="15" y1="1" x2="1" y2="15" stroke="#8C7A66" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Animated tick */}
        <AnimatedTick />

        {/* Heading */}
        <h3
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: isMobile ? 28 : 36,
            fontWeight: 400,
            letterSpacing: "-0.02em",
            lineHeight: "120%",
            color: "#533833",
            textAlign: "center",
            margin: 0,
            marginTop: 12,
          }}
        >
          We will be in touch
        </h3>

        {/* Body */}
        <p
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: 15,
            fontWeight: 400,
            lineHeight: "170%",
            color: "#8C7A66",
            textAlign: "center",
            margin: 0,
            marginTop: 20,
            maxWidth: 380,
          }}
        >
          Your appointment request has been received. A member of our team at The Gardens Mall boutique will reach out to confirm your visit.
        </p>

        {/* Return button */}
        <button
          onClick={onClose}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#2B1C1A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#533833"; }}
          style={{
            width: isMobile ? "100%" : 280,
            height: 56,
            borderRadius: 2,
            backgroundColor: "#533833",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-open-sans), sans-serif",
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: "0.12em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            transition: "background-color 0.4s cubic-bezier(0.25, 0.1, 0.1, 1)",
            marginTop: 32,
          }}
        >
          Return to Boutique
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function AppointmentCTA() {
  const ref = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const [visible, setVisible] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

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

  const handleSubmit = () => {
    const newErrors: { name?: string; email?: string; phone?: string } = {};
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email address";
    if (!phone.trim()) newErrors.phone = "Please enter a valid contact number";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  // Clear errors when clicking anywhere
  useEffect(() => {
    const clearErrors = () => {
      if (Object.keys(errors).length > 0) setErrors({});
    };
    document.addEventListener("click", clearErrors);
    return () => document.removeEventListener("click", clearErrors);
  }, [errors]);

  const itemStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s, transform 1.0s cubic-bezier(0.25, 0.1, 0.1, 1) ${delay}s`,
  });

  return (
    <>
      <section
        ref={ref}
        style={{
          height: isMobile ? undefined : 800,
          backgroundColor: "#EDEDED",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "64px 24px" : 80,
          gap: isMobile ? 40 : 64,
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-lora), serif",
            fontSize: isMobile ? 40 : 56,
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

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: isMobile ? 40 : 64,
            width: isMobile ? "100%" : undefined,
            ...itemStyle(0.15),
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              gap: isMobile ? 32 : 65,
              width: isMobile ? "100%" : 1030,
            }}
          >
            <FormField label="NAME" hint="your name" icon={nameIcon} fullWidth={isMobile} value={name} onChange={(v) => { setName(v); setErrors((e) => ({ ...e, name: undefined })); }} error={errors.name} />
            <FormField label="EMAIL" hint="your@email.com" type="email" icon={emailIcon} fullWidth={isMobile} value={email} onChange={(v) => { setEmail(v); setErrors((e) => ({ ...e, email: undefined })); }} error={errors.email} />
            <FormField label="CONTACT NUMBER" hint="+60" type="tel" icon={phoneIcon} fullWidth={isMobile} value={phone} onChange={(v) => { setPhone(v); setErrors((e) => ({ ...e, phone: undefined })); }} error={errors.phone} />
          </div>

          <button
            onClick={handleSubmit}
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

      <AnimatePresence>
        {showSuccess && <SuccessModal onClose={() => setShowSuccess(false)} />}
      </AnimatePresence>
    </>
  );
}
