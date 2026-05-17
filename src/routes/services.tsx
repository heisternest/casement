import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { services } from "@/data/site";
import {
  ArrowUpRight, Building2, ClipboardList, Hammer, Home, Paintbrush, TrafficCone, type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Home, Building2, TrafficCone, Hammer, Paintbrush, ClipboardList,
};

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Casement Construction" },
      { name: "description", content: "Residential, commercial, infrastructure, renovation, interior finishing, and project management services." },
      { property: "og:title", content: "Construction Services — Casement" },
      { property: "og:description", content: "Six specialized services covering the full construction lifecycle." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="End-to-end construction expertise."
        subtitle="Six specialized practices, one accountable team. Whether you're planning a single residence or a multi-phase civil program, we cover the full project lifecycle."
        crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
      />

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.slug}
                className="group flex flex-col rounded-3xl bg-card border border-border hover:shadow-card hover:-translate-y-1 transition-all overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden bg-secondary shrink-0">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 right-4 text-white/80 font-mono text-sm font-semibold tracking-wider">
                    0{i + 1}
                  </div>
                </div>
                <div className="relative flex flex-col flex-1 p-6 md:p-8">
                  <div className="-mt-12 mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-primary shadow-soft border border-border group-hover:bg-gold group-hover:text-gold-foreground transition-colors relative z-10">
                    {Icon && <Icon className="h-7 w-7" strokeWidth={1.75} />}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed flex-1">{s.description}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-gold transition-colors"
                  >
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
