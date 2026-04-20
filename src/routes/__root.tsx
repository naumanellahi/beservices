import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { LuxButton } from "@/components/LuxButton";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-cream px-4">
      <div className="max-w-md text-center">
        <div className="text-gradient-gold text-[0.7rem] uppercase tracking-[0.4em]">
          Error 404
        </div>
        <h1 className="mt-4 font-display text-7xl text-foreground">Lost in the plan</h1>
        <p className="mt-5 text-base text-muted-foreground">
          The page you are looking for has been moved or no longer exists.
        </p>
        <div className="mt-8 flex justify-center">
          <LuxButton to="/" size="md">
            Return Home
          </LuxButton>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "BE Services Ltd — Luxury Interior Design & Architecture, London" },
      {
        name: "description",
        content:
          "BE Services Ltd is a London-based luxury interior design and architecture studio crafting refined, turnkey homes across the UK.",
      },
      { name: "author", content: "BE Services Ltd" },
      { name: "theme-color", content: "#fef3c7" },
      { property: "og:title", content: "BE Services Ltd — Luxury Interior Design & Architecture, London" },
      {
        property: "og:description",
        content: "Refined turnkey residential interiors and architecture, designed in London.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "BE Services Ltd — Luxury Interior Design & Architecture, London" },
      { name: "description", content: "Golden Glow Interiors is a premium, modern, and image-rich website for BE SERVICES LTD, showcasing luxury interior design and architecture." },
      { property: "og:description", content: "Golden Glow Interiors is a premium, modern, and image-rich website for BE SERVICES LTD, showcasing luxury interior design and architecture." },
      { name: "twitter:description", content: "Golden Glow Interiors is a premium, modern, and image-rich website for BE SERVICES LTD, showcasing luxury interior design and architecture." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0UOfsLjQqvSON9b2ul6wE21sKuz1/social-images/social-1776703527982-BE-favicon.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0UOfsLjQqvSON9b2ul6wE21sKuz1/social-images/social-1776703527982-BE-favicon.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
