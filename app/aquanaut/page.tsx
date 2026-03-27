"use client";

import Nav from "../components/Nav";
import AquanautHero from "../components/AquanautHero";
import AquanautGrid from "../components/AquanautGrid";
import AppointmentCTA from "../components/AppointmentCTA";
import Footer from "../components/Footer";

export default function AquanautPage() {
  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
          marginTop: 88,
        }}
      >
        <AquanautHero />
        <AquanautGrid />
        <AppointmentCTA />
        <Footer />
      </main>
    </>
  );
}
