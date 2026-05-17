import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { BlogCard } from "@/components/site/BlogCard";
import { blogs } from "@/data/site";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Blogs & Insights — Casement Construction" },
      { name: "description", content: "Read our latest articles on construction trends, project management, and sustainable building practices." },
      { property: "og:title", content: "Blogs & Insights — Casement Construction" },
      { property: "og:description", content: "Industry insights and company news." },
    ],
  }),
  component: BlogsIndexPage,
});

function BlogsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thoughts on building the future."
        subtitle="Explore our latest articles, case studies, and insights from the field."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blogs" }]}
      />

      <section className="container-px mx-auto max-w-7xl py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        {blogs.length === 0 && (
          <p className="text-center text-muted-foreground py-16">
            No articles published yet. Check back soon!
          </p>
        )}
      </section>

      <CTASection />
    </>
  );
}
