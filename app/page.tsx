import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Training from "../components/Training";
import Donations from "../components/Donations";
import PowerOutput from "../components/PowerOutput";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Sponsors from "../components/Sponsors";
import NutritionAndRecovery from "../components/NutritionAndRecovery";
import DynamicSections from "../components/DynamicSections";
import Investment from "../components/Investment";
import RaceResults from "../components/RaceResults";

export default function Home() {
  return (
    <>
      <Hero />
      <Biography />
      <Timeline />
      <RaceResults />
      <Training />
      <NutritionAndRecovery />
      <Investment />
      <PowerOutput />
      <DynamicSections />
      <Donations />
      <Sponsors />
      <Contact />
    </>
  );
}
