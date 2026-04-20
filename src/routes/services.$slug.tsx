import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LuxButton } from "@/components/LuxButton";
import { CtaBanner } from "@/components/CtaBanner";
import { SectionTitle } from "@/components/SectionTitle";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.service;
    if (!s) return { meta: [{ title: "Service — BE Services Ltd" }] };
    return {
      meta: [
        { title: `${s.title} — BE Services Ltd` },
        { name: "description", content: s.short },
        { property: "og:title", content: `${s.title} — BE Services Ltd` },
        { property: "og:description", content: s.short },
        { property: "og:image", content: s.image },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center">
        <div className="text-[0.7rem] uppercase tracking-[0.4em] text-gradient-gold">404</div>
        <h1 className="mt-3 font-display text-5xl">Service not found</h1>
        <div className="mt-8">
          <LuxButton to="/services">All Services</LuxButton>
        </div>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[78svh] min-h-[560px] w-full overflow-hidden">
        <img src={service.image} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/65" />
        <div className="relative z-10 mx-auto h-full max-w-[1400px] px-5 md:px-10 flex items-end pb-16 md:pb-24">
          <div className="max-w-3xl">
            <Reveal>
              <div className="text-[0.7rem] uppercase tracking-[0.4em] text-foreground/70">
                {service.group} Service
              </div>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] text-foreground">
                {service.title}
              </h1>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-foreground/75 leading-relaxed">
                {service.short}
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-8 flex flex-wrap gap-3">
                <LuxButton to="/contact" size="md">Get a Quote</LuxButton>
                <LuxButton to="/contact" variant="ghost" size="md">Book Consultation</LuxButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-28 grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <SectionTitle
            eyebrow="Overview"
            title={
              <>
                A considered
                <br />
                <span className="italic text-gradient-gold">approach.</span>
              </>
            }
          />
        </Reveal>
        <Reveal delay={120} className="md:col-span-7">
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            {service.description}
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Single in-house team from concept to handover",
              "Bespoke joinery, furniture and lighting drawn for your home",
              "Discreet, calm project management at every stage",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/80">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/30">
                  <Check className="h-3 w-3 text-foreground" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* Gallery — 3 images */}
      <section className="bg-secondary/50 border-y border-border/60">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28">
          <Reveal>
            <SectionTitle eyebrow="Gallery" title={<>Selected <span className="italic text-gradient-gold">visuals.</span></>} />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-12 md:auto-rows-[260px]">
            <Reveal className="md:col-span-7 md:row-span-2">
              <div className="img-zoom-wrap relative h-full min-h-[400px] overflow-hidden rounded-2xl">
                <img src={service.gallery[0]} alt="" loading="lazy" className="img-zoom h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <div className="img-zoom-wrap relative h-full min-h-[260px] overflow-hidden rounded-2xl">
                <img src={service.gallery[1]} alt="" loading="lazy" className="img-zoom h-full w-full object-cover" />
              </div>
            </Reveal>
            <Reveal delay={240} className="md:col-span-5">
              <div className="img-zoom-wrap relative h-full min-h-[260px] overflow-hidden rounded-2xl">
                <img src={service.gallery[2]} alt="" loading="lazy" className="img-zoom h-full w-full object-cover" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-28">
        <Reveal>
          <SectionTitle
            eyebrow="The Process"
            title={<>How we <span className="italic text-gradient-gold">deliver.</span></>}
            subtitle="A studio-led journey designed to feel calm, clear and considered at every step."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          {service.process.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-2xl bg-white p-7 shadow-soft hover-lift">
                <div className="font-display text-3xl text-gradient-gold">0{i + 1}</div>
                <h3 className="mt-3 font-display text-xl text-foreground">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="bg-secondary/40 border-t border-border/60">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <SectionTitle eyebrow="Continue" title="Other services" />
              <LuxButton to="/services" variant="outline" size="sm">All <ArrowRight className="h-3.5 w-3.5" /></LuxButton>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {others.map((o, i) => (
              <Reveal key={o.slug} delay={i * 100}>
                <Link
                  to="/services/$slug"
                  params={{ slug: o.slug }}
                  className="group block rounded-2xl overflow-hidden bg-white shadow-soft hover-lift"
                >
                  <div className="img-zoom-wrap aspect-[4/3] overflow-hidden">
                    <img src={o.image} alt={o.title} loading="lazy" className="img-zoom h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground">{o.title}</h3>
                    <div className="mt-3 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.28em] text-foreground/70">
                      Discover <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
