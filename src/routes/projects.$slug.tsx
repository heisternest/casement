import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, MapPin, User2, Tag, Clock, Check } from "lucide-react";
import { projects } from "@/data/site";
import { ProjectCard } from "@/components/site/ProjectCard";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Casement Construction` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: loaderData.project.title },
          { property: "og:description", content: loaderData.project.description },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-7xl py-32 text-center">
      <h1 className="text-3xl font-bold">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-primary hover:text-gold">
        ← Back to projects
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="container-px mx-auto max-w-7xl py-32 text-center">
      <p className="text-muted-foreground">{error.message}</p>
    </div>
  ),
  component: ProjectDetailPage,
});

function ProjectDetailPage() {
  const { project } = Route.useLoaderData();
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* Hero image */}
      <section className="relative">
        <div className="relative h-[55vh] min-h-[420px] md:h-[65vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="container-px mx-auto max-w-7xl pb-12 md:pb-16 text-primary-foreground flex flex-col items-start">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/80 hover:text-gold mb-6 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" /> All projects
              </Link>
              <span className="inline-flex items-center rounded-full bg-gold text-primary px-3 py-1 text-xs font-semibold">
                {project.category}
              </span>
              <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]">
                {project.title}
              </h1>
              <p className="mt-4 inline-flex items-center gap-1.5 text-primary-foreground/80">
                <MapPin className="h-4 w-4" /> {project.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta strip */}
      <section className="border-b border-border bg-card">
        <div className="container-px mx-auto max-w-7xl py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: User2, label: "Client", value: project.client },
            { icon: Calendar, label: "Year completed", value: String(project.year) },
            { icon: Tag, label: "Category", value: project.category },
            { icon: Clock, label: "Duration", value: project.duration },
          ].map((m) => (
            <div key={m.label} className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary flex-shrink-0">
                <m.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {m.label}
                </div>
                <div className="text-sm font-semibold text-foreground mt-0.5">
                  {m.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview + Scope */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-28 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Project overview
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            {project.description}
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.overview}
          </p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-secondary border border-border p-8">
            <h3 className="text-lg font-bold text-foreground">Scope of work</h3>
            <ul className="mt-5 space-y-3">
              {project.scope.map((s: string) => (
                <li key={s} className="flex gap-3 text-sm text-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold flex-shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-gold-foreground" strokeWidth={3} />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary border-y border-border">
        <div className="container-px mx-auto max-w-7xl py-20">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Gallery
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            On-site, in detail.
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[project.image, project.image, project.image].map((img, i) => (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl bg-card aspect-[4/3] ${
                  i === 0 ? "md:col-span-2 md:aspect-[16/10]" : ""
                }`}
              >
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container-px mx-auto max-w-7xl py-20 md:py-24">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          Related projects
        </h2>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {related.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
