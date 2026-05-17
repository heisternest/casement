import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/data/site";

export function CTASection() {
  return (
    <section className="container-px mx-auto max-w-7xl py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-950 border border-white/10 text-white p-10 md:p-16">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gold/10 blur-[120px] pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
        <div className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              <span className="h-px w-8 bg-gold" /> Start your project
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
              Ready to break ground? Let's build it together.
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl">
              Send us a brief and we'll come back within two business days with a clear
              budget, timeline, and delivery plan.
            </p>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-between gap-2 rounded-full bg-gold px-6 py-4 text-sm font-semibold text-gold-foreground hover:shadow-gold transition-all"
            >
              Request a free consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-between gap-2 rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white hover:bg-white/5 transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> {company.phone}
              </span>
              <span className="text-white/50 text-xs">{company.hours}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
