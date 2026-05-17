import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-zinc-950">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity"
        >
          <source src="/hero.webm" type="video/webm" />
        </video>
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
      </div>

      <div className="container-px relative z-10 mx-auto max-w-7xl pt-24 pb-20 w-full">
        <div className="max-w-3xl fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-4 py-2 text-sm font-medium text-white shadow-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Trusted construction partner since 2010
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.05] text-white">
            Building Strong{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">
              Foundations
            </span>{" "}
            for the Future
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
            Reliable construction, civil engineering, and project management — delivered
            with safety, quality, and discipline on every job site.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-zinc-950 shadow-lg hover:bg-gold/90 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Work
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-bold text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              <PlayCircle className="h-5 w-5 text-gold" />
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
