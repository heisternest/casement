import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/site";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function FeaturedProjects() {
  return (
    <section className="bg-secondary border-y border-border">
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="Selected work"
            title="Featured completed projects"
            subtitle="A glimpse at recent projects across residential, commercial, and infrastructure."
          />
          <Link
            to="/projects"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
          >
            View all projects <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
