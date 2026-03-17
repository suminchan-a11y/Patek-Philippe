import HomeHero from "./components/home/HomeHero";
import HomePhilosophy from "./components/home/HomePhilosophy";
import HomeCollections from "./components/home/HomeCollections";
import HomeBoutique from "./components/home/HomeBoutique";
import HomeAppointment from "./components/home/HomeAppointment";

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomePhilosophy />
      <HomeCollections />
      <HomeBoutique />
      <HomeAppointment />
    </>
  );
}
