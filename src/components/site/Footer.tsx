import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/icons/SocialIcons";
import { company, services } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 border-t border-white/10 text-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="container-px mx-auto max-w-7xl py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gold text-gold-foreground font-bold">
              C
            </span>
            <div>
              <div className="font-bold text-base">Casement</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                Construction
              </div>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed max-w-sm">
            {company.description}
          </p>
          <div className="flex gap-2">
            {[
              {
                label: "Facebook",
                icon: FacebookIcon,
              },
              {
                label: "Instagram",
                icon: InstagramIcon,
              },
              {
                label: "LinkedIn",
                icon: LinkedInIcon,
              },
              {
                label: "X",
                icon: XIcon,
              },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gold hover:text-gold-foreground transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gold">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {["Home", "About", "Services", "Projects", "Team", "Contact"].map((l) => (
              <li key={l}>
                <Link
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="hover:text-gold transition-colors"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gold">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm text-white/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to="/services" className="hover:text-gold transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider text-gold">
            Get in touch
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-3">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold" />
              <span>{company.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold" />
              <a href={`tel:${company.phone}`} className="hover:text-gold">{company.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-gold" />
              <a href={`mailto:${company.email}`} className="hover:text-gold">{company.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px mx-auto max-w-7xl py-5 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Casement Construction. All rights reserved.</p>
          <p>Built with discipline, on time and on budget.</p>
        </div>
      </div>
    </footer>
  );
}
