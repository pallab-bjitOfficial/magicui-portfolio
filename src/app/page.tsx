import AboutSection from '@/components/about-section';
import ContactSection from '@/components/contact-section';
import EducationSection from '@/components/education-section';
import HeroSection from '@/components/hero-section';
import ProjectSection from '@/components/project-section';
import SkillSection from '@/components/skill-section';
import WorkSection from '@/components/work-section';

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
    </main>
  );
}
