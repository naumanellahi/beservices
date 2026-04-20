import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { CtaBanner } from "@/components/CtaBanner";
import heroLiving from "@/assets/hero-living.jpg";
import bedroom from "@/assets/int-bedroom.jpg";
import kitchen from "@/assets/int-kitchen.jpg";
import dining from "@/assets/int-dining.jpg";
import bathroom from "@/assets/int-bathroom.jpg";
import office from "@/assets/int-office.jpg";
import staircase from "@/assets/int-staircase.jpg";
import joinery from "@/assets/int-joinery.jpg";
import architecture from "@/assets/architecture.jpg";
import fullHome from "@/assets/full-home.jpg";
import furniture from "@/assets/furniture.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Luxury Interior Portfolio | BE Services Ltd" },
      {
        name: "description",
        content:
          "A curated portfolio of luxury residential interiors, architecture and bespoke joinery from BE Services Ltd, London.",
      },
      { property: "og:title", content: "Projects — BE Services Ltd" },
      {
        property: "og:description",
        content:
          "Selected interiors, architecture and joinery from our London studio.",
      },
    ],
  }),
  component: ProjectsPage,
});

const ITEMS = [
  { img: heroLiving, title: "Cream Reception Room", place: "London", h: "tall" },
  { img: kitchen, title: "Marble Island Kitchen", place: "Surrey", h: "med" },
  { img: bedroom, title: "Linen Principal Suite", place: "Mayfair", h: "med" },
  { img: staircase, title: "Sculpted Stair Hall", place: "Hampstead", h: "tall" },
  { img: dining, title: "Walnut Dining Room", place: "Chelsea", h: "med" },
  { img: bathroom, title: "Arched Bath Suite", place: "Kensington", h: "tall" },
  { img: joinery, title: "Walk-In Wardrobe", place: "Notting Hill", h: "med" },
  { img: office, title: "Library Study", place: "St John's Wood", h: "med" },
  { img: architecture, title: "Garden Wing Extension", place: "Richmond", h: "tall" },
  { img: fullHome, title: "Open Plan Living", place: "Wimbledon", h: "med" },
  { img: furniture, title: "Bespoke Boucle Chair", place: "Studio", h: "tall" },
  { img: proj1, title: "Marble Entrance Hall", place: "Mayfair", h: "tall" },
  { img: proj2, title: "Curved Penthouse", place: "Canary Wharf", h: "med" },
  { img: proj3, title: "Powder Room Detail", place: "Notting Hill", h: "tall" },
];

function ProjectsPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20 bg-gradient-cream">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="text-[0.7rem] uppercase tracking-[0.4em] text-gradient-gold">
              Selected Projects
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-[5rem] leading-[1.02]">
              Interiors that{" "}
              <span className="italic text-gradient-gold">whisper,</span>
              <br /> never shout.
            </h1>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A glimpse of recent residential work — from a single sculptural
              stair hall to whole-home turnkey deliveries across the UK.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-5 md:px-10 py-16 md:py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
          {ITEMS.map((item, i) => (
            <Reveal key={i} delay={(i % 6) * 80} className="break-inside-avoid mb-5">
              <figure className="group relative overflow-hidden rounded-2xl bg-secondary">
                <div className="img-zoom-wrap">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className={`img-zoom w-full object-cover ${
                      item.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"
                    }`}
                  />
                </div>
                <figcaption className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-foreground/70 via-foreground/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="text-[0.65rem] uppercase tracking-[0.3em] text-primary">
                    {item.place}
                  </div>
                  <div className="mt-1 font-display text-xl text-white">
                    {item.title}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
