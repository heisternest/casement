import { createFileRoute } from "@tanstack/react-router";

import { TeamSection } from "@/components/site/TeamSection";
import { CTASection } from "@/components/site/CTASection";
import { values, timeline } from "@/data/site";
import { Target, Eye } from "lucide-react";

const timelineImages = [
  "https://images.unsplash.com/photo-1541888081622-671e62615d02?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Casement Construction" },
      { name: "description", content: "Founded in 2010, Casement Construction has grown into a trusted partner for residential, commercial, and infrastructure projects." },
      { property: "og:title", content: "About Casement Construction" },
      { property: "og:description", content: "Our story, mission, values, and the people behind every project." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Custom Hero with Video */}
      <section className="relative overflow-hidden bg-zinc-950 text-white min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="https://videos.pexels.com/video-files/3201931/3201931-uhd_2560_1440_25fps.mp4" type="video/mp4" />
          </video>
          {/* Intense gradient overlay to make text pop and transition perfectly to next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-zinc-950/40 to-zinc-950" />
        </div>
        <div className="relative container-px mx-auto max-w-7xl py-32 md:py-48 z-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-6 fade-up" style={{ animationDelay: "0ms" }}>
            <span className="h-px w-8 bg-gold" />
            Our Story
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-[1.05] fade-up" style={{ animationDelay: "100ms" }}>
            Built on <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/60">craft,</span> discipline, and trust.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed fade-up" style={{ animationDelay: "200ms" }}>
            Since 2010, Casement has grown from a small renovation crew into a full-service construction firm delivering across four states — without ever losing the hands-on culture that started it all.
          </p>
        </div>
      </section>

      {/* Story Composition */}
      <section className="bg-background relative -mt-10 rounded-t-[3rem] z-20 py-24 md:py-32">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          <div className="lg:col-span-6 relative">
            {/* Overlapping premium imagery */}
            <div className="relative z-10 w-4/5 rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border border-border">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200" 
                alt="Construction workers" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-10 -right-4 w-3/5 rounded-[2rem] overflow-hidden aspect-square shadow-2xl border-4 border-background z-20">
              <img 
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&q=80&w=800" 
                alt="Building structure" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-2">
              <span className="h-px w-8 bg-gold" />
              The Foundation
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              We build every project like it's our first.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Casement Construction was founded in Baltimore with a simple
                premise: that exceptional construction is the result of exceptional people, paired
                with disciplined, uncompromising planning.
              </p>
              <p>
                Fifteen years on, that premise still drives
                how we estimate, plan, and run every site.
                Today we self-perform structural concrete and steel, manage major
                commercial fit-outs, and lead public-works programs across four
                states. 
              </p>
              <p className="font-medium text-foreground">
                Owners come back to us because we deliver exactly what we promised —
                and we have the courage to say so up front when something needs to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision (Dark Bento) */}
      <section className="bg-zinc-950 border-y border-white/10">
        <div className="container-px mx-auto max-w-7xl py-24 md:py-32 grid md:grid-cols-2 gap-6 lg:gap-10">
          {[
            { icon: Target, label: "Our Mission", title: "Deliver work that owners can trust.", text: "We exist to remove the friction from construction — through clear planning, honest reporting, and craftsmanship that holds up over decades." },
            { icon: Eye, label: "Our Vision", title: "Be the most trusted partner in the East.", text: "We measure success by repeat clients, safety performance, and the quality of the buildings and infrastructure we leave behind." },
          ].map((item) => (
            <div key={item.label} className="group rounded-[2.5rem] bg-zinc-900/50 border border-white/10 p-10 md:p-14 hover:bg-zinc-900 transition-colors duration-500">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold mb-10 group-hover:scale-110 transition-transform duration-500">
                <item.icon className="h-8 w-8" strokeWidth={1.5} />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 mb-3">
                {item.label}
              </div>
              <h3 className="text-3xl font-bold text-white leading-tight mb-5">{item.title}</h3>
              <p className="text-lg text-white/60 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4">
            <span className="h-px w-8 bg-gold" />
            Core Values
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-[1.1]">
            Five principles, applied to every single project.
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="group relative rounded-3xl border border-border bg-card p-8 hover:shadow-card hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -bottom-6 -right-4 text-8xl font-black text-foreground/[0.03] group-hover:text-gold/[0.05] transition-colors select-none pointer-events-none">
                0{i + 1}
              </div>
              <div className="relative z-10">
                <div className="text-2xl font-bold text-gold mb-6">0{i + 1}.</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-zinc-950 border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_50%)] opacity-5 pointer-events-none" />
        
        <div className="container-px mx-auto max-w-7xl py-24 md:py-32 relative z-10">
          <div className="flex flex-col items-center text-center mb-20">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4">
              <span className="h-px w-8 bg-gold" />
              Our Journey
              <span className="h-px w-8 bg-gold" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              A timeline of milestones.
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Glowing Center Line */}
            <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2" />
            <div className="absolute left-[24px] md:left-1/2 top-4 h-1/3 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent md:-translate-x-1/2" />
            
            <div className="space-y-16 md:space-y-24">
              {timeline.map((t, i) => (
                <div
                  key={t.year}
                  className="relative pl-16 md:pl-0 md:grid md:grid-cols-2 md:gap-16 md:items-center group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-1 md:top-1/2 md:-translate-y-1/2 h-12 w-12 rounded-full bg-zinc-900 border-4 border-zinc-950 flex items-center justify-center md:-translate-x-1/2 z-10 group-hover:border-gold/30 transition-colors duration-500">
                    <span className="h-3 w-3 rounded-full bg-gold shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:scale-150 transition-transform duration-500" />
                  </div>
                  
                  {/* Year */}
                  <div className={`mb-2 md:mb-0 ${i % 2 === 0 ? "md:text-right" : "md:order-2 md:text-left"}`}>
                    <div className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-tighter transition-all duration-500 group-hover:scale-105 group-hover:from-gold group-hover:to-gold/20 inline-block origin-center">
                      {t.year}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${i % 2 === 0 ? "" : "md:order-1 md:text-right"}`}>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors duration-500">{t.title}</h3>
                    <p className="text-base md:text-lg text-white/60 leading-relaxed">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamSection />
      <CTASection />
    </>
  );
}
