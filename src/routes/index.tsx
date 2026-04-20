import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4.asset.json";
import heroPoster from "@/assets/hero-living.jpg";
import bedroom from "@/assets/int-bedroom.jpg";
import kitchen from "@/assets/int-kitchen.jpg";
import dining from "@/assets/int-dining.jpg";
import staircase from "@/assets/int-staircase.jpg";
import joinery from "@/assets/int-joinery.jpg";
import architecture from "@/assets/architecture.jpg";
import processPlan from "@/assets/process-plan.jpg";
import processMaterials from "@/assets/process-materials.jpg";
import furniture from "@/assets/furniture.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import { LuxButton } from "@/components/LuxButton";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { CtaBanner } from "@/components/CtaBanner";
import { SERVICES } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BE Services Ltd — Luxury Interior Design Studio in London" },
      {
        name: "description",
        content:
          "Bright, refined turnkey homes from a London luxury interior design studio. Architecture, joinery, furniture and styling — delivered as one.",
      },
      {
        property: "og:title",
        content: "BE Services Ltd — Luxury Interior Design Studio",
      },
      {
        property: "og:description",
        content:
          "London-based studio designing bright, considered homes — architecture to the final styled detail.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <ServicesPreview />
      <AboutPreview />
      <InspirationGrid />
      <ProcessSection />
      <PortfolioPreview />
      <CtaBanner />
    </>
  );
}

function Hero() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Video layer */}
      <div className="absolute inset-0">
        <img
          src={heroPoster}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <video
          ref={videoRef}
          src={heroVideo.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setLoaded(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Light overlay (NOT dark) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/10 to-white/55" />
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-soft/40 via-transparent to-white/30" />
      </div>

      {/* Floating accents */}
      <div className="pointer-events-none absolute top-1/4 left-[8%] h-3 w-3 rounded-full bg-primary/80 animate-float-slow" />
      <div className="pointer-events-none absolute top-[60%] right-[12%] h-2 w-2 rounded-full bg-gold/80 animate-float-slower" />
      <div className="pointer-events-none absolute top-[40%] right-[20%] h-24 w-24 rounded-full bg-primary/20 blur-2xl animate-float-slow" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 md:px-10 md:pb-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass-light px-4 py-1.5 text-[0.7rem] uppercase tracking-[0.32em] text-foreground/80 ring-1 ring-foreground/10">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              London Luxury Interior Studio
            </span>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.98] text-foreground">
              Homes designed
              <br />
              to feel like{" "}
              <span className="italic text-gradient-gold">light itself.</span>
            </h1>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/75 leading-relaxed">
              BE Services Ltd is a London studio composing bright, considered
              residences — from the architecture of a room to the weight of a
              fabric, every layer is drawn by hand and delivered as one.
            </p>
          </Reveal>
          <Reveal delay={420}>
            <div className="mt-9 flex flex-wrap gap-3">
              <LuxButton to="/contact" size="lg">
                Get Free Advice
              </LuxButton>
              <LuxButton to="/services" variant="ghost" size="lg">
                Book Consultation
              </LuxButton>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom marquee fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}

function MarqueeStrip() {
  const items = [
    "Turnkey Residential",
    "Interior Architecture",
    "Bespoke Joinery",
    "Furniture Design",
    "Project Management",
    "London + UK-Wide",
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {items.map((it, i) => (
          <div key={it} className="flex items-center gap-3">
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
              {it}
            </span>
            {i < items.length - 1 && (
              <span className="hidden md:inline-block h-1 w-1 rounded-full bg-gold/60" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesPreview() {
  const cards = [
    { service: SERVICES[0], image: SERVICES[0].image, span: "md:col-span-7 md:row-span-2" },
    { service: SERVICES[1], image: staircase, span: "md:col-span-5" },
    { service: SERVICES[7], image: joinery, span: "md:col-span-5" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <Reveal>
          <SectionTitle
            eyebrow="What we do"
            title={
              <>
                A studio crafting
                <br />
                <span className="italic text-gradient-gold">complete homes.</span>
              </>
            }
            subtitle="From the first measured survey to the final styled bookshelf — delivered as one continuous, considered service."
          />
        </Reveal>
        <Reveal delay={120}>
          <LuxButton to="/services" variant="outline" size="md">
            All Services <ArrowRight className="h-4 w-4" />
          </LuxButton>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-12 md:auto-rows-[280px]">
        {cards.map(({ service, image, span }, i) => (
          <Reveal key={service.slug} delay={i * 120} className={span}>
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="group relative block h-full min-h-[280px] overflow-hidden rounded-3xl bg-secondary hover-lift"
            >
              <div className="img-zoom-wrap absolute inset-0">
                <img
                  src={image}
                  alt={service.title}
                  loading="lazy"
                  className="img-zoom h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/15 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <div className="text-[0.7rem] uppercase tracking-[0.3em] text-primary">
                  {service.group}
                </div>
                <h3 className="mt-2 font-display text-2xl md:text-3xl text-white">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-md text-sm text-white/80 leading-relaxed">
                  {service.short}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.28em] text-primary">
                  Discover <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-gradient-cream">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32 grid gap-14 md:grid-cols-12 items-center">
        <Reveal className="md:col-span-6">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-primary/40 blur-2xl animate-float-slow" />
            <div className="img-zoom-wrap rounded-[2rem] overflow-hidden shadow-luxe">
              <img
                src={architecture}
                alt="BE Services architectural exterior"
                loading="lazy"
                className="img-zoom h-[520px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-10 w-44 md:w-56 rounded-2xl bg-white shadow-luxe p-5">
              <div className="text-3xl font-display text-foreground">2023</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                Studio incorporated in the United Kingdom
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="md:col-span-6">
          <SectionTitle
            eyebrow="The Studio"
            title={
              <>
                Quietly <span className="italic text-gradient-gold">extraordinary</span>{" "}
                interiors, made in London.
              </>
            }
          />
          <div className="mt-6 space-y-5 text-foreground/75 text-base md:text-lg leading-relaxed">
            <p>
              BE Services Ltd was founded with a simple belief: a luxury home
              should feel calm, generous and unmistakably personal — never
              borrowed from a catalogue.
            </p>
            <p>
              From our London studio we craft turnkey residences across the UK,
              moving fluidly between architecture, joinery, furniture and the
              soft layers of styling that bring a home to life.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "100%", v: "In-house design" },
              { k: "UK", v: "Wide delivery" },
              { k: "1:1", v: "Studio attention" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl text-foreground">{s.k}</div>
                <div className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <LuxButton to="/about" variant="outline" size="md">
              Our Story
            </LuxButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function InspirationGrid() {
  const cells = [
    { img: kitchen, label: "Kitchens" },
    { img: bedroom, label: "Bedrooms" },
    { img: dining, label: "Dining Rooms" },
    { img: joinery, label: "Bespoke Joinery" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
      <Reveal>
        <SectionTitle
          eyebrow="Inspiration"
          align="center"
          title={
            <>
              Light, material,
              <br />
              <span className="italic text-gradient-gold">and the rituals between.</span>
            </>
          }
          subtitle="A glimpse into the moods, palettes and detailing that define a BE Services interior."
        />
      </Reveal>
      <div className="mt-14 grid gap-5 grid-cols-2 md:grid-cols-4">
        {cells.map((c, i) => (
          <Reveal key={c.label} delay={i * 100}>
            <div className="img-zoom-wrap relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src={c.img}
                alt={c.label}
                loading="lazy"
                className="img-zoom h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
                  Inspiration
                </div>
                <div className="mt-1 font-display text-xl text-white">{c.label}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      n: "01",
      title: "Discover",
      body: "We listen first — to your home, your routines, the way you want each room to feel.",
      img: processPlan,
    },
    {
      n: "02",
      title: "Design",
      body: "Concepts, layouts, materials and bespoke joinery developed in our London studio.",
      img: processMaterials,
    },
    {
      n: "03",
      title: "Deliver",
      body: "We orchestrate every trade and timeline, then style the home into a single resolved whole.",
      img: furniture,
    },
  ];
  return (
    <section className="bg-foreground text-background overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
        <Reveal>
          <SectionTitle
            eyebrow="The Process"
            light
            title={
              <>
                Three movements,
                <br />
                <span className="italic text-primary">one calm result.</span>
              </>
            }
            subtitle={
              <span className="text-background/70">
                A studio process refined over years of UK residential delivery — clear, considered, and quietly thorough at every stage.
              </span>
            }
          />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 140}>
              <div className="group">
                <div className="img-zoom-wrap aspect-[4/5] overflow-hidden rounded-2xl">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="img-zoom h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 flex items-baseline gap-4">
                  <div className="font-display text-4xl text-primary">{s.n}</div>
                  <h3 className="font-display text-2xl text-white">{s.title}</h3>
                </div>
                <p className="mt-3 text-background/70 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreview() {
  const items = [
    { img: proj1, title: "Marble Hallway", place: "Mayfair" },
    { img: proj2, title: "Curved Penthouse", place: "Canary Wharf" },
    { img: proj3, title: "Powder Room Detail", place: "Notting Hill" },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <Reveal>
          <SectionTitle
            eyebrow="Selected Work"
            title={
              <>
                A portfolio
                <br />
                <span className="italic text-gradient-gold">of quiet detail.</span>
              </>
            }
          />
        </Reveal>
        <Reveal delay={140}>
          <LuxButton to="/projects" variant="outline" size="md">
            View Portfolio <ArrowRight className="h-4 w-4" />
          </LuxButton>
        </Reveal>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {items.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <Link
              to="/projects"
              className="group block"
            >
              <div className="img-zoom-wrap aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="img-zoom h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <h3 className="font-display text-xl text-foreground">{p.title}</h3>
                  <div className="mt-1 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                    {p.place}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
