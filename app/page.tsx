import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";
import CraftVideo from "./components/CraftVideo";
import PromoSection from "./components/PromoSection";
import FeatureSection from "./components/FeatureSection";
import CollectionHeader from "./components/CollectionHeader";
import CollectionCarousel from "./components/CollectionCarousel";
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
        <Hero />
        <PromoSection />
        <FeatureSection />
        <CollectionHeader />
        <CollectionCarousel />
        <CraftVideo />
        <SearchBar />
        <AppointmentCTA />
        <div style={{ marginTop: -8 }}>
          <Footer />
        </div>
      </main>
    </>
  );
}
