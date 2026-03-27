import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import HeroCurtain from "./components/HeroCurtain";
import Hero from "./components/Hero";
import Boutique from "./components/Boutique";
import Gondolo from "./components/Gondolo";
import Guillochage from "./components/Guillochage";
import CraftVideo from "./components/CraftVideo";
import AppointmentCTA from "./components/AppointmentCTA";
import Footer from "./components/Footer";

export default function Home() {
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
        {/* Chained parallax: Hero → Boutique → Gondolo → Guillochage → CraftVideo */}
        <div style={{ position: "relative", height: "500vh", clipPath: "inset(0)" }}>
          {/* Layer 4 (top): HeroCurtain + Gondolo + Guillochage scroll-away = 400vh */}
          <div style={{ position: "relative", height: "400vh", zIndex: 4 }}>
            {/* Layer 3: HeroCurtain + Gondolo = 300vh */}
            <div style={{ position: "relative", height: "300vh", zIndex: 3 }}>
              {/* HeroCurtain (200vh): Hero scrolls away, Boutique sticky */}
              <div style={{ position: "relative", height: "200vh", zIndex: 2 }}>
                <HeroCurtain>
                  <Hero />
                  <Boutique />
                </HeroCurtain>
              </div>
              {/* Gondolo: sticky behind Boutique, scrolls away revealing Guillochage */}
              <div
                style={{
                  position: "sticky",
                  top: 0,
                  height: "100vh",
                  zIndex: 1,
                  marginTop: "-100vh",
                }}
              >
                <Gondolo />
              </div>
            </div>
            {/* Guillochage: sticky behind Gondolo, scrolls away revealing CraftVideo */}
            <div
              style={{
                position: "sticky",
                top: 0,
                height: "100vh",
                zIndex: 1,
                marginTop: "-100vh",
              }}
            >
              <Guillochage />
            </div>
          </div>
          {/* CraftVideo: sticky at bottom, revealed as Guillochage scrolls away */}
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              zIndex: 1,
              marginTop: "-100vh",
            }}
          >
            <CraftVideo />
          </div>
        </div>
        <SearchBar />
        <AppointmentCTA />
        <Footer />
      </main>
    </>
  );
}
