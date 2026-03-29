"use client";

import Nav from "../components/Nav";
import AquanautHero from "../components/AquanautHero";
import ForYouCTA from "../components/ForYouCTA";
import AquanautGrid from "../components/AquanautGrid";
import AppointmentCTA from "../components/AppointmentCTA";
import Footer from "../components/Footer";
import { useIsMobile } from "../hooks/useIsMobile";

export default function AquanautPage() {
  const isMobile = useIsMobile();

  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: isMobile ? 0 : 8,
        }}
      >
        <AquanautHero />

        <ForYouCTA
          heading={"Vibrant and colorful"}
          body="The Aquanaut made its debut in 1997 as a statement of casual elegance. Its distinctive design featuring a case and rounded octagonal bezel reminiscent of the Nautilus was an immediate success. The blend of polished and satin-brushed finishes, paired with a matching checkerboard-patterned dial and strap, exuded originality and dynamism."
          bgColor="#FFFFFF"
        />

        <AquanautGrid />
        <div style={{ marginTop: isMobile ? 0 : -8 }}>
          <AppointmentCTA />
        </div>
        <div style={{ marginTop: isMobile ? 0 : -8 }}>
          <Footer />
        </div>
      </main>
    </>
  );
}
