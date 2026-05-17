import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { CTASection } from "@/components/site/CTASection";
import { ProjectCard } from "@/components/site/ProjectCard";
import { BuildingViewer } from "@/components/site/BuildingViewer";
import { projects } from "@/data/site";

const categories = ["All", "Residential", "Commercial", "Infrastructure", "Renovation"] as const;

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Completed Projects — Casement Construction" },
      { name: "description", content: "Browse Casement's portfolio of completed residential, commercial, infrastructure, and renovation projects." },
      { property: "og:title", content: "Projects — Casement Construction" },
      { property: "og:description", content: "Selected work across the mid-Atlantic." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* Premium Dark Projects Hero with integrated 3D Viewer */}
      <section className="relative overflow-hidden bg-zinc-950 text-white min-h-[70vh] flex items-center border-b border-white/10">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,1)_1px,_transparent_0)] bg-[size:32px_32px]" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
        
        <div className="relative container-px mx-auto max-w-7xl pt-32 pb-24 lg:pt-48 lg:pb-32 grid lg:grid-cols-12 gap-16 lg:gap-8 items-center z-10">
          <div className="lg:col-span-5 fade-up z-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-6" style={{ animationDelay: "0ms" }}>
              <span className="h-px w-8 bg-gold" />
              Portfolio
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05]" style={{ animationDelay: "100ms" }}>
              Projects across <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">four states.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-md leading-relaxed" style={{ animationDelay: "200ms" }}>
              Explore a selection of recent work — from boutique residential to major civil infrastructure. 
              Drag the 3D model to preview our structural modeling capabilities.
            </p>
          </div>

          <div className="lg:col-span-7 relative z-10 fade-up" style={{ animationDelay: "300ms" }}>
            <div className="relative w-full aspect-square md:aspect-[21/9] lg:aspect-[4/3] group">
              <div className="absolute inset-0 bg-gold/30 blur-[100px] rounded-full opacity-20 pointer-events-none mix-blend-screen transition-opacity duration-700 group-hover:opacity-40" />
              <BuildingViewer className="relative w-full h-full cursor-grab active:cursor-grabbing z-10" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold border transition-all ${
                filter === c
                  ? "bg-primary text-primary-foreground border-primary shadow-soft"
                  : "bg-card text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-16">
            No projects in this category yet.
          </p>
        )}
      </section>

      <CTASection />
    </>
  );
}
