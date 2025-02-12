import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Achievements from "../components/Achievements";
import Training from "../components/Training";
import Donations from "../components/Donations";
import PowerOutput from "../components/PowerOutput";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
import Sponsors from "../components/Sponsors";
import NutritionAndRecovery from "../components/NutritionAndRecovery";
import DynamicSections from "../components/DynamicSections";

export default function Home() {
  return (
    <>
      <Hero />
      <Biography />
      <Timeline />
      {/* <Achievements /> */}
      <Training />
      <NutritionAndRecovery />
      <PowerOutput />
      <DynamicSections />
      {/* <Testimonials /> */}
      <Donations />
      <Sponsors />
      <Contact />
    </>
  );
}
