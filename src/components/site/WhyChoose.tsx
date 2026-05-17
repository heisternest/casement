import { ShieldCheck, Sparkles, Users, Clock } from "lucide-react";
import whyImg from "@/assets/why-choose.jpg";

const reasons = [
  { icon: ShieldCheck, title: "Safety-first culture", text: "Industry-leading safety record on every active site." },
  { icon: Sparkles, title: "Engineered quality", text: "Rigorous QA from foundations through finishes." },
  { icon: Clock, title: "On-time, every time", text: "Disciplined planning and transparent reporting." },
  { icon: Users, title: "One accountable team", text: "Single point of contact from kickoff to handover." },
];

export function WhyChoose() {
  return (
    <section className="container-px mx-auto max-w-7xl py-24 md:py-32">
      <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Premium Image Composition */}
        <div className="lg:col-span-5 relative group">
          {/* Decorative background shape */}
          <div className="absolute -inset-4 bg-gold/10 rounded-[2.5rem] transform -rotate-3 transition-transform duration-700 ease-out group-hover:rotate-0" />
          
          {/* Main Image */}
          <div className="rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl relative z-10 border border-border">
            <img
              src={whyImg}
              alt="Construction professional reviewing blueprints"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            {/* Gradient to make the bottom badge pop */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-transparent opacity-60" />
          </div>
          
          {/* Floating Glassmorphism Badge */}
          <div className="absolute bottom-8 -right-6 lg:-right-12 bg-zinc-900/80 backdrop-blur-xl border border-white/10 text-white rounded-3xl p-6 shadow-2xl max-w-[260px] z-20 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
            <div className="flex items-center gap-4 mb-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-zinc-950 font-black text-2xl shadow-lg">
                98<span className="text-sm font-bold">%</span>
              </div>
              <div className="flex -space-x-3">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" alt="Client" />
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-zinc-900 object-cover" alt="Client" />
                <div className="w-10 h-10 rounded-full border-2 border-zinc-900 bg-zinc-800 flex items-center justify-center text-xs font-bold text-white z-10">+</div>
              </div>
            </div>
            <div className="text-sm font-medium text-white/80 leading-snug">
              Of our clients return to us for their next major project.
            </div>
          </div>
        </div>

        {/* Right Side: Bento-style Features */}
        <div className="lg:col-span-7">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-4">
              <span className="h-px w-8 bg-gold" />
              Why Casement
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
              A construction partner that delivers exactly what was promised.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We combine the rigor of a large-scale contractor with the responsiveness of a hands-on team. Owners get absolute clarity, total control, and a build they can be proud of.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((r, index) => (
              <div
                key={r.title}
                className="group relative p-8 rounded-3xl bg-secondary/40 border border-transparent hover:border-gold/30 hover:bg-card transition-all duration-300 overflow-hidden"
              >
                {/* Large background number */}
                <div className="absolute -top-4 -right-4 text-8xl font-black text-foreground/[0.03] group-hover:text-gold/[0.05] transition-colors pointer-events-none select-none">
                  0{index + 1}
                </div>
                
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-background shadow-sm text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  <r.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
