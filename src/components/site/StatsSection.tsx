import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 border-t border-white/10">
      {/* Subtle glowing orb in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gold/5 blur-[120px] pointer-events-none" />
      
      <div className="container-px relative z-10 mx-auto max-w-7xl py-16 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center group cursor-default">
              <div className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-4 group-hover:scale-105 transition-transform duration-500">
                {s.value}
              </div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold to-transparent mb-5 opacity-40 group-hover:opacity-100 group-hover:w-24 transition-all duration-500" />
              <div className="text-xs md:text-sm font-semibold text-white/50 uppercase tracking-[0.2em] group-hover:text-gold transition-colors duration-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
