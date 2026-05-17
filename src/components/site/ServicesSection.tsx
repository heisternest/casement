import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Building2,
  ClipboardList,
  Hammer,
  Home,
  Paintbrush,
  TrafficCone,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

const iconMap: Record<string, LucideIcon> = {
  Home,
  Building2,
  TrafficCone,
  Hammer,
  Paintbrush,
  ClipboardList,
};

export function ServicesSection({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <SectionHeader
          eyebrow="What we do"
          title="Services built around your project"
          subtitle="From feasibility through final handover, we cover the full lifecycle of construction with one accountable team."
        />
        <Link
          to="/services"
          className="hidden lg:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-gold transition-colors"
        >
          All services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((s) => {
          const Icon = iconMap[s.icon];
          return (
            <Link
              key={s.slug}
              to="/services"
              className="group relative h-[420px] rounded-3xl overflow-hidden flex flex-col justify-end shadow-lg"
            >
              {/* Image Background */}
              <img 
                src={s.image} 
                alt={s.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90" />
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/90 backdrop-blur-sm text-zinc-950 mb-6 shadow-xl">
                  {Icon && <Icon className="h-6 w-6" strokeWidth={2} />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/70 line-clamp-2 text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <div className="inline-flex items-center gap-2 text-sm font-bold text-gold uppercase tracking-wider">
                  Explore Service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
