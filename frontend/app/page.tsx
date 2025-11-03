import HeroSection from "../components/HeroSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ClientsSection from "../components/ClientsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}