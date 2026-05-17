import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { TeamSection } from "@/components/site/TeamSection";
import { CTASection } from "@/components/site/CTASection";
import { Briefcase, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";

const openings = [
  { title: "Senior Project Manager", location: "Baltimore, MD", type: "Full-time" },
  { title: "Site Superintendent", location: "Washington, DC", type: "Full-time" },
  { title: "Estimator — Civil Works", location: "Baltimore, MD", type: "Full-time" },
  { title: "Junior Quantity Surveyor", location: "Richmond, VA", type: "Full-time" },
];

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team & Careers — Casement Construction" },
      { name: "description", content: "Meet the leadership behind Casement Construction and explore current career openings." },
      { property: "og:title", content: "Team & Careers — Casement" },
      { property: "og:description", content: "Senior leadership and open roles across the mid-Atlantic." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team & careers"
        title="The people who make every project possible."
        subtitle="A senior leadership team backed by 50+ skilled professionals across estimating, engineering, and field operations."
        crumbs={[{ label: "Home", to: "/" }, { label: "Team" }]}
      />

      <TeamSection />

      {/* Careers */}
      <section className="bg-secondary border-y border-border">
        <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <span className="h-px w-8 bg-gold" /> Careers
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                Build your career with us.
              </h2>
              <p className="mt-4 text-muted-foreground">
                We're growing — and we're hiring senior and junior talent across the
                mid-Atlantic.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            {openings.map((j) => (
              <Link
                to="/contact"
                key={j.title}
                className="group flex flex-wrap items-center gap-4 rounded-2xl bg-card border border-border p-6 hover:shadow-card hover:-translate-y-0.5 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary">
                    {j.title}
                  </h3>
                  <div className="mt-1 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" /> {j.location}
                    </span>
                    <span>· {j.type}</span>
                  </div>
                </div>
                <span className="text-sm font-semibold text-primary group-hover:text-gold">
                  Apply →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
