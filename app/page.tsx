import { HeroSection } from "./Components/Pages/Home/Hero-Section";
import { KnowTechs } from "./Components/Pages/Home/known-techs";
import { HighlightedProjects } from "./Components/Pages/Home/highlighted-projects";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <KnowTechs />
      <HighlightedProjects />
    </>
  );
}
