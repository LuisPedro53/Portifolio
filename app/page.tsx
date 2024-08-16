import { HeroSection } from "./Components/Pages/Home/Hero-Section";
import { KnowTechs } from "./Components/Pages/Home/known-techs";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
    </>
  );
}
