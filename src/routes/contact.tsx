import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { company } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Casement Construction" },
      { name: "description", content: "Get in touch with Casement Construction. Request a free consultation for your construction project." },
      { property: "og:title", content: "Contact Casement Construction" },
      { property: "og:description", content: "Talk to our team. We typically respond within two business days." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const items = [
    { icon: MapPin, label: "Headquarters", value: company.address },
    { icon: Phone, label: "Direct Line", value: company.phone, href: `tel:${company.phone}` },
    { icon: Mail, label: "Email Address", value: company.email, href: `mailto:${company.email}` },
    { icon: Clock, label: "Operating Hours", value: company.hours },
  ];

  return (
    <>
      {/* Premium Dark Hero */}
      <section className="relative overflow-hidden bg-zinc-950 pt-32 pb-24 md:pt-48 md:pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-gold)_0%,_transparent_40%)] opacity-10" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container-px relative z-10 mx-auto max-w-7xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-6 fade-up" style={{ animationDelay: "0ms" }}>
            <span className="h-px w-8 bg-gold" />
            Contact Us
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter max-w-4xl leading-[1.05] fade-up" style={{ animationDelay: "100ms" }}>
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">extraordinary.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed fade-up" style={{ animationDelay: "200ms" }}>
            Tell us about your project — our pre-construction team will review your requirements and get back within two business days with a clear next step.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="bg-background relative -mt-10 rounded-t-[2.5rem] z-20 pt-20 md:pt-32">
        <div className="container-px mx-auto max-w-7xl grid lg:grid-cols-12 gap-16 lg:gap-24 mb-20 md:mb-32">
          
          {/* Left Column (Visual Left, Code First): Contact Info */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight leading-tight mb-4">
                Reach out to our offices.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're ready to break ground or just exploring feasibility, our experts are here to help.
              </p>
            </div>

            <div className="grid gap-4">
              {items.map((it) => (
                <div
                  key={it.label}
                  className="group relative flex gap-5 rounded-3xl border border-border bg-card p-6 hover:border-gold/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-gold group-hover:text-gold-foreground transition-colors flex-shrink-0">
                    <it.icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                      {it.label}
                    </div>
                    {it.href ? (
                      <a
                        href={it.href}
                        className="inline-flex items-center gap-1.5 text-base font-bold text-foreground hover:text-gold transition-colors break-words"
                      >
                        {it.value}
                        <ArrowUpRight className="h-4 w-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                      </a>
                    ) : (
                      <div className="text-base font-bold text-foreground break-words">
                        {it.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[2.5rem] border border-white/10 bg-zinc-950 p-8 md:p-12 shadow-2xl relative overflow-hidden">
              {/* Decorative glows inside the form card */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-3">Send a message</h3>
                <p className="text-[15px] text-white/60 mb-10 leading-relaxed max-w-lg">
                  Provide a few details about your project, and we'll route your inquiry to the appropriate specialist.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>

        </div>

        {/* Full Width Map */}
        <div className="container-px mx-auto max-w-7xl pb-20 md:pb-32">
          <div className="relative w-full rounded-[2.5rem] border border-border overflow-hidden h-[400px] md:h-[500px] bg-zinc-950 group cursor-crosshair shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 to-transparent opacity-90" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 transform group-hover:scale-105 transition-transform duration-1000 ease-out">
              <div className="relative">
                <div className="absolute inset-0 bg-gold blur-3xl opacity-30 animate-pulse" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gold text-zinc-950 shadow-2xl transition-transform group-hover:scale-110 duration-500">
                  <MapPin className="h-7 w-7" strokeWidth={2.5} />
                </div>
              </div>
              <div className="mt-8 text-sm font-bold text-white uppercase tracking-[0.2em]">Visit our Headquarters</div>
              <div className="mt-3 text-base md:text-lg text-white/70 max-w-sm leading-relaxed">{company.address}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
