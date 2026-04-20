import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { CtaBanner } from "@/components/CtaBanner";
import { LuxButton } from "@/components/LuxButton";
import { SITE } from "@/lib/site";
import heroLiving from "@/assets/hero-living.jpg";
import staircase from "@/assets/int-staircase.jpg";
import joinery from "@/assets/int-joinery.jpg";
import processMaterials from "@/assets/process-materials.jpg";
import architecture from "@/assets/architecture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About BE Services Ltd — A London Luxury Interior Studio" },
      {
        name: "description",
        content:
          "BE Services Ltd is a London-based luxury interior design and architecture studio founded in 2023, dedicated to craftsmanship and considered detail.",
      },
      { property: "og:title", content: "About BE Services Ltd" },
      {
        property: "og:description",
        content:
          "A London-based luxury interior studio crafting refined, turnkey homes across the UK.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero />
      <Story />
      <Values />
      <CtaBanner />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative h-[70svh] min-h-[520px] w-full overflow-hidden">
      <img
        src={heroLiving}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/55" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-end px-5 md:px-10 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <Reveal>
            <div className="text-[0.7rem] uppercase tracking-[0.4em] text-foreground/70">
              About the Studio
            </div>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="mt-4 font-display text-5xl md:text-7xl lg:text-[5rem] leading-[1.02] text-foreground">
              A studio of <span className="italic text-gradient-gold">restraint,</span>
              <br /> warmth and craft.
            </h1>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32 grid gap-14 md:grid-cols-12 items-start">
      <Reveal className="md:col-span-5 md:sticky md:top-32">
        <div className="text-[0.7rem] uppercase tracking-[0.4em] text-gradient-gold">
          Founded {SITE.incorporated}
        </div>
        <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05] text-foreground">
          A London studio,
          <br />
          <span className="italic text-gradient-gold">made for the long view.</span>
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Company Number
            </div>
            <div className="mt-1 font-display text-xl">{SITE.companyNumber}</div>
          </div>
          <div>
            <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
              Studio
            </div>
            <div className="mt-1 font-display text-xl">London, UK</div>
          </div>
        </div>
      </Reveal>

      <div className="md:col-span-7 space-y-10">
        <Reveal>
          <p className="text-lg md:text-xl leading-relaxed text-foreground/80">
            BE Services Ltd was incorporated on 14 August 2023 with a clear
            ambition — to design British homes that feel resolved, generous
            and quietly extraordinary. From the studio in Greenford, our team
            works hand-in-hand with clients across London and the wider UK,
            translating private lives into private architecture.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="img-zoom-wrap rounded-[2rem] overflow-hidden shadow-luxe">
            <img
              src={architecture}
              alt="BE Services exterior architectural project"
              loading="lazy"
              className="img-zoom h-[440px] w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-base md:text-lg leading-relaxed text-foreground/75">
            Every project begins as a conversation, not a brief. We ask how a
            family wakes, where they read, which corner catches the
            late-afternoon sun. Those small observations become the seeds of
            architecture, layout and material — the difference between a
            beautiful room and a room that feels like home.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-base md:text-lg leading-relaxed text-foreground/75">
            Our practice spans architecture, interior architecture, bespoke
            joinery, furniture design and full project management. By keeping
            these disciplines in-house, we are able to protect a single
            authorial voice from first sketch to handover — so that what is
            drawn is what is built, and what is built feels effortless.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="img-zoom-wrap aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={staircase} alt="Staircase project" loading="lazy" className="img-zoom h-full w-full object-cover" />
            </div>
            <div className="img-zoom-wrap aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={joinery} alt="Joinery detail" loading="lazy" className="img-zoom h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    {
      title: "Craftsmanship",
      body: "We work with a trusted circle of UK and European makers — joiners, upholsterers, plasterers and stone specialists — to bring every drawing to life.",
    },
    {
      title: "Restraint",
      body: "True luxury is the absence of clutter. We design with editing in mind, allowing material, light and proportion to do the talking.",
    },
    {
      title: "Detail",
      body: "From the radius of a bullnose to the alignment of a brass shadow gap — the smallest details quietly carry the entire project.",
    },
    {
      title: "Discretion",
      body: "We work privately, calmly and without spectacle, protecting the trust our clients place in us throughout every stage.",
    },
  ];

  return (
    <section className="bg-secondary/50 border-y border-border/60">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-24 md:py-32 grid gap-14 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <SectionTitle
            eyebrow="What we believe"
            title={
              <>
                Four ideas
                <br />
                <span className="italic text-gradient-gold">we keep returning to.</span>
              </>
            }
          />
          <div className="mt-8">
            <LuxButton to="/services" size="md">
              Explore Services
            </LuxButton>
          </div>
          <div className="mt-10 img-zoom-wrap rounded-[1.75rem] overflow-hidden">
            <img
              src={processMaterials}
              alt="Material moodboard"
              loading="lazy"
              className="img-zoom h-[360px] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 space-y-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="rounded-2xl bg-white p-7 md:p-9 shadow-soft hover-lift">
                <div className="text-[0.7rem] uppercase tracking-[0.32em] text-gradient-gold">
                  Principle 0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-2xl md:text-3xl text-foreground">
                  {v.title}
                </h3>
                <p className="mt-3 text-foreground/75 leading-relaxed">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
