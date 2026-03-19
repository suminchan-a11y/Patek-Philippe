import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CraftStory from "./components/CraftStory";
import DualCards from "./components/DualCards";
import FeaturedWatch from "./components/FeaturedWatch";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <CraftStory />
      <DualCards />
      <FeaturedWatch />
      <Footer />
    </main>
  );
}
