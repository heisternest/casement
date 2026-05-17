import { team } from "@/data/site";
import { LinkedInIcon } from "@/components/icons/SocialIcons";

const teamImages = [
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=800",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=800",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=800",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=800",
];

export function TeamSection() {
  return (
    <section className="bg-zinc-950 py-24 md:py-32 overflow-hidden border-t border-white/10">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold mb-4">
            <span className="h-px w-8 bg-gold" />
            Leadership
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
            The people behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold/50">every build.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            A senior team with decades of combined experience leading complex programs from concept through completion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {team.map((m, i) => (
            <div
              key={m.name}
              className="group relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-white/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img 
                  src={teamImages[i % teamImages.length]} 
                  alt={m.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90" />
                
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 transform -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-gold hover:text-zinc-950 hover:border-gold cursor-pointer z-20">
                  <LinkedInIcon className="h-4 w-4" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 z-10">
                <h3 className="text-2xl font-bold text-white mb-1">{m.name}</h3>
                <p className="text-xs text-gold font-bold uppercase tracking-widest mb-3">
                  {m.role}
                </p>
                <p className="text-sm text-white/60 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {m.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
