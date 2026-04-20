import type { ReactNode } from "react";
import { Reveal } from "@/components/Reveal";
import { LuxButton } from "@/components/LuxButton";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="pt-40 pb-12 md:pt-48 md:pb-16 bg-gradient-cream">
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <Reveal>
            <div className="text-[0.7rem] uppercase tracking-[0.4em] text-gradient-gold">
              {eyebrow}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-4 text-sm uppercase tracking-[0.28em] text-muted-foreground">
              Last updated: {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[820px] px-5 md:px-10 pb-24 md:pb-32">
        <Reveal>
          <article className="prose-legal space-y-6 text-foreground/85 leading-relaxed">
            {children}
          </article>
        </Reveal>

        <div className="mt-14 pt-10 border-t border-border flex flex-wrap gap-3">
          <LuxButton to="/contact" size="md">Contact the Studio</LuxButton>
          <LuxButton to="/" variant="outline" size="md">Return Home</LuxButton>
        </div>
      </section>
    </>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-10 font-display text-2xl md:text-3xl text-foreground">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-base leading-relaxed text-foreground/80">{children}</p>;
}
