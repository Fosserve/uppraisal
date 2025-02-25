import HeroSection from "./components/hero_section";
import FeaturesSection from "./components/features_section";
import WorkWithUs from "./components/stats";
import Testimonials from "./components/testimonials";
import TeamSection from "./components/team_section";
import LogoCloud from "./components/logoCloud";
import Faqs from "./components/faqs";
import Timeline from "./components/timeline";
import Header from "./components/header";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection/>
    <FeaturesSection/>
    <Timeline />
    <Testimonials />
    <TeamSection />
    <WorkWithUs/>
    <LogoCloud/>
    <Faqs />
    </>
  );
}
