import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES, SERVICE_GROUPS } from "@/lib/services";
import heroLiving from "@/assets/hero-living.jpg";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Luxury Interior Design & Architecture | BE Services" },
      {
        name: "description",
        content:
          "Turnkey residential design, interior architecture, bespoke joinery and full project management — the complete range of BE Services Ltd.",
      },
      { property: "og:title", content: "Services — BE Services Ltd" },
      {
        property: "og:description",
        content:
          "Turnkey residential design, interior architecture, joinery and project management — delivered as one.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="relative h-[60svh] min-h-[460px] w-full overflow-hidden">
        <img src={heroLiving} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/45 via-white/15 to-white/55" />
        <div className="relative z-10 mx-auto h-full max-w-[1400px] px-5 md:px-10 flex items-end pb-16 md:pb-20">
          <div>
            <Reveal>
              <div className="text-[0.7rem] uppercase tracking-[0.4em] text-foreground/70">
                Our Services
              </div>
            </Reveal>
            <Reveal delay={150}>
              <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-foreground">
                Every layer of <span className="italic text-gradient-gold">a home,</span>
                <br />drawn under one roof.
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32 space-y-24 md:space-y-32">
        {SERVICE_GROUPS.map((group, gi) => {
          const items = SERVICES.filter((s) => s.group === group.key);
          return (
            <div key={group.key}>
              <Reveal>
                <SectionTitle
                  eyebrow={`0${gi + 1} — ${group.label}`}
                  title={group.label}
                  subtitle={group.caption}
                />
              </Reveal>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {items.map((s, i) => (
                  <Reveal key={s.slug} delay={i * 90}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="group block rounded-3xl overflow-hidden bg-white shadow-soft hover-lift"
                    >
                      <div className="img-zoom-wrap aspect-[4/3] overflow-hidden">
                        <img
                          src={s.image}
                          alt={s.title}
                          loading="lazy"
                          className="img-zoom h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:p-7">
                        <div className="text-[0.65rem] uppercase tracking-[0.3em] text-gradient-gold">
                          {s.group}
                        </div>
                        <h3 className="mt-3 font-display text-xl md:text-2xl text-foreground leading-tight">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {s.short}
                        </p>
                        <div className="mt-5 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-foreground/80 group-hover:text-foreground">
                          Read more <ArrowRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      <CtaBanner />
    </>
  );
}
