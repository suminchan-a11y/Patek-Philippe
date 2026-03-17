"use client";

import { useState } from "react";
import TextLink from "./TextLink";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 0",
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
  fontWeight: 300,
  color: "var(--t1)",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid var(--bdr)",
  outline: "none",
  transition: "border-color 0.8s ease-in-out",
  borderRadius: 0,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-sans)",
  fontSize: 9,
  letterSpacing: 5,
  textTransform: "uppercase",
  color: "var(--t4)",
  display: "block",
  marginBottom: 4,
  marginTop: 32,
};

export default function ConciergeForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "80px 0" }}>
        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "var(--t1)",
            marginBottom: 16,
          }}
        >
          Thank you.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(0.92rem, 1.05vw, 1rem)",
            fontWeight: 300,
            lineHeight: 1.95,
            color: "var(--t3)",
          }}
        >
          A member of our team will be in touch within two working days to
          confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      style={{ maxWidth: 560 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
        <div>
          <label style={labelStyle}>Salutation</label>
          <select
            style={{
              ...inputStyle,
              appearance: "none",
              cursor: "pointer",
            }}
          >
            <option value="">Select</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
        </div>
        <div>
          <label style={labelStyle}>Full Name</label>
          <input
            type="text"
            required
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--t1)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--bdr)")}
          />
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            required
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--t1)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--bdr)")}
          />
        </div>
        <div>
          <label style={labelStyle}>Phone</label>
          <input
            type="tel"
            style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--t1)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--bdr)")}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Preferred Date</label>
        <input
          type="date"
          style={inputStyle}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--t1)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--bdr)")}
        />
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          rows={4}
          style={{
            ...inputStyle,
            resize: "vertical",
          }}
          onFocus={(e) => (e.currentTarget.style.borderColor = "var(--t1)")}
          onBlur={(e) => (e.currentTarget.style.borderColor = "var(--bdr)")}
        />
      </div>

      <div style={{ marginTop: 48 }}>
        <button
          type="submit"
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            fontWeight: 400,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--t4)",
            background: "none",
            border: "none",
            borderBottom: "1px solid rgba(154,149,144,0.3)",
            paddingBottom: 3,
            cursor: "pointer",
            transition: "color 0.8s ease-in-out, border-color 0.8s ease-in-out",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--t1)";
            e.currentTarget.style.borderColor = "var(--t1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--t4)";
            e.currentTarget.style.borderColor = "rgba(154,149,144,0.3)";
          }}
        >
          Request an Appointment
        </button>
      </div>
    </form>
  );
}
