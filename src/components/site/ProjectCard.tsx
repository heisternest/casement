import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { Project } from "@/data/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block rounded-3xl overflow-hidden bg-card border border-border hover:shadow-card hover:-translate-y-1 transition-all"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-foreground">
          {project.category}
        </div>
        <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-gold-foreground opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {project.location}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="mt-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
