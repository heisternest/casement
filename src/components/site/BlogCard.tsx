import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar } from "lucide-react";
import type { Blog } from "@/data/site";

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link
      to="/blogs/$slug"
      params={{ slug: blog.slug }}
      className="group block rounded-3xl overflow-hidden bg-card border border-border hover:shadow-card hover:-translate-y-1 transition-all flex flex-col h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary shrink-0">
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-background/90 backdrop-blur px-3 py-1 text-xs font-semibold text-foreground">
          {blog.category}
        </div>
        <div className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold text-gold-foreground opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all">
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <span>{blog.author}</span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" /> {blog.date}
          </span>
        </div>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {blog.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {blog.excerpt}
        </p>
      </div>
    </Link>
  );
}
