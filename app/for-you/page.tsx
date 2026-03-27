"use client";

import Nav from "../components/Nav";
import ForYouHero from "../components/ForYouHero";
import ForYouCTA from "../components/ForYouCTA";
import ForYouProductRow from "../components/ForYouProductRow";
import AppointmentCTA from "../components/AppointmentCTA";
import Footer from "../components/Footer";

const row1Cards = [
  { image: "/images/fy-nautilus-small.png", name: "Nautilus", model: "5712/1R-001", material: "Rose Gold" },
  { image: "/images/fy-nautilus-big.png", name: "Nautilus", model: "5990/1R-001", material: "Rose Gold", wide: true, href: "/aquanaut/5168g-001" },
];

const row2Cards = [
  { image: "/images/fy-r2-card1.png", name: "Aquanaut", model: "5168G-010", material: "White Gold" },
  { image: "/images/fy-r2-card2.png", name: "Aquanaut", model: "5168G-001", material: "White Gold" },
  { image: "/images/fy-r2-card3.png", name: "Aquanaut", model: "5269R-001", material: "White Gold" },
];

const row3aCards = [
  { image: "/images/fy-r3-big.png", name: "Grand Complications", model: "5327R-001", material: "White Gold", wide: true },
  { image: "/images/fy-r3-small.png", name: "Grand Complications", model: "5327R-001", material: "White Gold" },
];

const row4Cards = [
  { image: "/images/fy-r4-card1.png", name: "Grand Complications", model: "5327R-001", material: "White Gold" },
  { image: "/images/fy-r4-card2.png", name: "Grand Complications", model: "5327R-001", material: "White Gold" },
  { image: "/images/fy-r4-card3.png", name: "Grand Complications", model: "5327R-001", material: "White Gold" },
];

export default function ForYouPage() {
  return (
    <>
      <Nav />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <ForYouHero />

        <ForYouCTA
          heading={"A curation\nconsidered for you"}
          body="Some milestones ask for restraint. Others ask to be worn every day as proof. The Nautilus carries nearly five decades of conviction that a sports watch in steel or gold could be as significant as any dress piece. The Aquanaut arrived later, built for those who measure their achievements not in ceremony but in motion. Both are made to outlast the moment that occasions them. Choose the one that matches not the milestone itself, but the life that follows it."
        />

        <ForYouProductRow cards={row1Cards} />
        <ForYouProductRow cards={row2Cards} />

        <ForYouCTA
          heading={"A collection you\nmay appreciate"}
          body="A Grand Complication is not assembled, it is reasoned. Each additional function represents years of calculation, hand-fitting parts measured in microns, and the stubborn conviction that mechanical watchmaking has not yet reached its limit. The pieces here track the moon, account for leap years across a century, and speak the time aloud when asked. They are not made for everyone. They are made for those who understand that the most demanding things to create are also the most enduring things to own."
        />

        <ForYouProductRow cards={row3aCards} />
        <ForYouProductRow cards={row4Cards} />

        <AppointmentCTA />
        <Footer />
      </main>
    </>
  );
}
