import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SectionDivider from "@/components/section-divider";
import Footer from "@/components/footer";
import GsapAnimations from "@/components/gsap-animations";

const AboutSection = dynamic(() => import("@/components/sections/about-section"));
const ProjectsSection = dynamic(() => import("@/components/sections/projects-section"));
const ContactSection = dynamic(() => import("@/components/sections/contact-section"));

export default function Home() {
  return (
    <section className="font-[family-name:var(--font-poppins-sans)]">
      <GsapAnimations />
      <Navbar />
      <Hero />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </section>
  );
}
