import type { Metadata } from "next";
import { StorySection }   from "@/components/about/story-section";
import { MissionSection } from "@/components/about/mission-section";
import { WhySection }     from "@/components/about/why-section";
import { TeamSection }    from "@/components/about/team-section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about READ PLUS Training Institute — our story, mission, and the dedicated teachers serving Indian expat families in Al Ain.",
};

export default function AboutPage() {
  return (
    <>
      <StorySection />
      <MissionSection />
      <WhySection />
      <TeamSection />
    </>
  );
}
