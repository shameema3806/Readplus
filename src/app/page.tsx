import { HeroSection }     from "@/components/home/hero-section";
import { BentoGrid }       from "@/components/home/bento-grid";
import { ProgramsSection } from "@/components/home/programs-section";
import { StatsSection }    from "@/components/home/stats-section";
import { Testimonials }    from "@/components/home/testimonials";
import { CtaSection }      from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <BentoGrid />
      <ProgramsSection />
      <Testimonials />
      <CtaSection />
    </>
  );
}
