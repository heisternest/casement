import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, User2, Tag } from "lucide-react";
import { blogs } from "@/data/site";
import { BlogCard } from "@/components/site/BlogCard";
import { CTASection } from "@/components/site/CTASection";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const blog = blogs.find((b) => b.slug === params.slug);
    if (!blog) throw notFound();
    return { blog };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.blog.title} — Casement Construction` },
          { name: "description", content: loaderData.blog.excerpt },
          { property: "og:title", content: loaderData.blog.title },
          { property: "og:description", content: loaderData.blog.excerpt },
          { property: "og:image", content: loaderData.blog.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="container-px mx-auto max-w-7xl py-32 text-center">
      <h1 className="text-3xl font-bold">Article not found</h1>
      <Link to="/blogs" className="mt-6 inline-block text-primary hover:text-gold">
        ← Back to blogs
      </Link>
    </div>
  ),
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { blog } = Route.useLoaderData();
  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <>
      <article>
        {/* Header Section */}
        <section className="bg-secondary border-b border-border pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="container-px mx-auto max-w-4xl text-center">
            <Link
              to="/blogs"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center rounded-full bg-gold/10 text-gold px-3 py-1 text-xs font-semibold">
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground mb-8">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User2 className="h-4 w-4" /> {blog.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" /> {blog.date}
              </span>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <div className="container-px mx-auto max-w-5xl -mt-8 md:-mt-12 relative z-10">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl border border-border shadow-soft bg-card">
            <img
              src={blog.image}
              alt={blog.title}
              width={1920}
              height={1080}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <section className="container-px mx-auto max-w-3xl py-16 md:py-24">
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
            {/* Split content by double newlines to simulate paragraphs for simple rendering */}
            {blog.content.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-6 text-lg leading-relaxed text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-primary border border-border">
                <User2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Written by</p>
                <p className="text-base text-muted-foreground">{blog.author}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <Tag className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{blog.category}</span>
            </div>
          </div>
        </section>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-secondary border-t border-border py-20 md:py-24">
          <div className="container-px mx-auto max-w-7xl">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                More from our team
              </h2>
              <Link to="/blogs" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold transition-colors">
                View all <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.slug} blog={p} />
              ))}
            </div>
            
            <div className="mt-8 text-center sm:hidden">
              <Link to="/blogs" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold transition-colors">
                View all articles <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
