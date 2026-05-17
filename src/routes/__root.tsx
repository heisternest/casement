import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/seo";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: `${SITE_NAME} — Commercial, Civil, and Residential Builders`,
      },
      {
        name: "description",
        content: "Trusted construction partner for residential, commercial, and infrastructure projects across the mid-Atlantic.",
      },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:title", content: `${SITE_NAME} — Commercial, Civil, and Residential Builders` },
      {
        property: "og:description",
        content: "Trusted construction partner for residential, commercial, and infrastructure projects across the mid-Atlantic.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_NAME} — Commercial, Civil, and Residential Builders` },
      {
        name: "twitter:description",
        content: "Trusted construction partner for residential, commercial, and infrastructure projects across the mid-Atlantic.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: SITE_URL,
      },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}
