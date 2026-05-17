import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-primary">
        <span className="absolute inset-0 rounded-md bg-gold opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="relative font-bold text-primary-foreground group-hover:text-gold-foreground text-lg leading-none">
          C
        </span>
      </span>
      <span
        className={`flex flex-col leading-tight ${light ? "text-primary-foreground" : "text-foreground"}`}
      >
        <span className="font-bold text-base tracking-tight">Casement</span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Construction
        </span>
      </span>
    </Link>
  );
}
