import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/site/HeroSection";
import { StatsSection } from "@/components/site/StatsSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { FeaturedProjects } from "@/components/site/FeaturedProjects";
import { WhyChoose } from "@/components/site/WhyChoose";
import { TestimonialSection } from "@/components/site/TestimonialSection";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casement Construction — Building Strong Foundations for the Future" },
      { name: "description", content: "Reliable construction, civil engineering, and project management. 15+ years, 120+ completed projects, 98% client satisfaction." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection limit={6} />
      <FeaturedProjects />
      <WhyChoose />
      <TestimonialSection />
      <CTASection />
    </>
  );
}
