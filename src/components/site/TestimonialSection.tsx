import { Quote } from "lucide-react";
import { testimonials } from "@/data/site";
import { SectionHeader } from "./SectionHeader";

export function TestimonialSection() {
  // Duplicate testimonials to ensure a seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-secondary border-y border-border overflow-hidden">
      <div className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <SectionHeader
          eyebrow="Client voices"
          title="Trusted by owners, developers, and public agencies"
          align="center"
        />
        
        <div className="mt-16 relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div className="flex shrink-0 gap-5 animate-marquee hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((t, i) => (
              <figure
                key={i}
                className="w-[320px] md:w-[400px] shrink-0 rounded-3xl bg-card border border-border p-8 flex flex-col gap-6 hover:shadow-card transition-all group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-12 h-12 rounded-full object-cover shadow-sm ring-1 ring-border" 
                    />
                    <div>
                      <div className="text-sm font-bold text-foreground">{t.author}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-gold/50 group-hover:text-gold transition-colors" />
                </div>
                
                <blockquote className="text-[15px] text-foreground/80 leading-relaxed italic">
                  "{t.quote}"
                </blockquote>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
