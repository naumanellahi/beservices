import heroLiving from "@/assets/hero-living.jpg";
import bedroom from "@/assets/int-bedroom.jpg";
import kitchen from "@/assets/int-kitchen.jpg";
import dining from "@/assets/int-dining.jpg";
import bathroom from "@/assets/int-bathroom.jpg";
import office from "@/assets/int-office.jpg";
import staircase from "@/assets/int-staircase.jpg";
import joinery from "@/assets/int-joinery.jpg";
import proj1 from "@/assets/proj-1.jpg";
import proj2 from "@/assets/proj-2.jpg";
import proj3 from "@/assets/proj-3.jpg";
import processPlan from "@/assets/process-plan.jpg";
import processMaterials from "@/assets/process-materials.jpg";
import furniture from "@/assets/furniture.jpg";
import architecture from "@/assets/architecture.jpg";
import fullHome from "@/assets/full-home.jpg";
import spacePlanning from "@/assets/space-planning.jpg";
import type { ServiceItem } from "./site";

const standardProcess = [
  {
    title: "Discovery & Brief",
    body: "We begin with a conversation — understanding how you live, what you love, and the way you want a space to feel before a single line is drawn.",
  },
  {
    title: "Concept & Design",
    body: "Our studio develops layered concepts, mood directions and material palettes, presented through detailed visuals and curated samples.",
  },
  {
    title: "Refinement & Specification",
    body: "Every joinery line, finish and fitting is specified to a meticulous standard, balancing beauty, durability and the rhythms of daily life.",
  },
  {
    title: "Delivery & Styling",
    body: "We coordinate trades, timelines and installations, then style the finished space so it reads as a single, considered whole on day one.",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "turnkey-residential-interior-design",
    title: "Turnkey Residential Interior Design",
    group: "Core",
    short:
      "A complete, key-in-hand service — from first sketch to the final styled cushion.",
    description:
      "Our turnkey residential service is for clients who want their home delivered fully resolved, calm and complete. We lead every layer of the design and build, from architectural reconfiguration through bespoke joinery, fabrics, lighting and the smallest decorative detail. The result is a residence that feels considered in every corner, ready to be lived in the moment you walk through the door.",
    image: heroLiving,
    gallery: [heroLiving, fullHome, dining],
    process: standardProcess,
  },
  {
    slug: "interior-architecture",
    title: "Interior Architecture",
    group: "Core",
    short:
      "Re-shaping the bones of a home so light, proportion and flow work in your favour.",
    description:
      "Interior architecture is where we re-think the structure of a space — moving walls, opening sightlines, shaping ceilings and choreographing how natural light moves through a room across the day. Every plan is drawn with proportion, hierarchy and emotion in mind, so the architecture itself becomes the first piece of luxury in the home.",
    image: staircase,
    gallery: [staircase, architecture, dining],
    process: standardProcess,
  },
  {
    slug: "architectural-design",
    title: "Architectural Design",
    group: "Core",
    short:
      "From extensions to ground-up homes, designed with restraint and warmth.",
    description:
      "We produce architectural designs that feel quietly confident — refined facades, generous openings and enduring materials chosen to age beautifully. Whether you are extending a London townhouse or creating something from the ground up, we draw with both the planning context and your daily life equally in mind.",
    image: architecture,
    gallery: [architecture, staircase, fullHome],
    process: standardProcess,
  },
  {
    slug: "project-management",
    title: "Project Management",
    group: "Core",
    short:
      "A single point of contact orchestrating trades, timelines and budgets.",
    description:
      "Beautiful design only matters if it is delivered with care. Our in-house project management team runs your programme end-to-end — coordinating contractors, suppliers and specialists, controlling cost and protecting the design intent at every milestone. You enjoy the journey; we take care of everything behind it.",
    image: processPlan,
    gallery: [processPlan, processMaterials, furniture],
    process: standardProcess,
  },
  {
    slug: "furniture-design",
    title: "Furniture Design",
    group: "Core",
    short:
      "Bespoke pieces designed for the exact dimensions and rituals of your home.",
    description:
      "When the right piece does not exist, we design it. From sculptural sofas to dining tables and statement beds, our bespoke furniture is drawn for your specific room — its scale, its light and the way you actually use it. Each piece is made by trusted UK and European workshops to a standard intended to outlast trends.",
    image: furniture,
    gallery: [furniture, joinery, heroLiving],
    process: standardProcess,
  },
  {
    slug: "space-planning",
    title: "Space Planning",
    group: "Design & Planning",
    short:
      "Layouts engineered for flow, function and quiet visual harmony.",
    description:
      "A great interior begins long before any finish is chosen — it begins in the plan. Our space planning service studies how your household truly moves through a home and reorganises rooms so that circulation, storage, sightlines and social zones all work in concert. The result is a home that simply feels easier to live in.",
    image: spacePlanning,
    gallery: [spacePlanning, processPlan, fullHome],
    process: standardProcess,
  },
  {
    slug: "furniture-selection",
    title: "Furniture Selection",
    group: "Design & Planning",
    short:
      "Curated furnishings sourced from the world's most refined makers.",
    description:
      "We curate every piece in your home from a deep network of UK, Italian, French and Scandinavian houses — balancing comfort, craftsmanship and longevity with your personal taste. Each selection is presented in context with samples, scaled drawings and material pairings so nothing arrives as a surprise.",
    image: furniture,
    gallery: [furniture, heroLiving, dining],
    process: standardProcess,
  },
  {
    slug: "bespoke-joinery",
    title: "Bespoke Joinery",
    group: "Design & Planning",
    short:
      "Hand-crafted cabinetry, millwork and architectural detail — made to fit only your home.",
    description:
      "Our bespoke joinery is where craftsmanship is most visible. Wardrobes, kitchens, bookcases, panelling and bar areas are designed millimetre-perfect to your space, hand-built in the UK from honest materials and finished with brass, leather or natural stone details. It is the layer that quietly elevates a project from beautiful to extraordinary.",
    image: joinery,
    gallery: [joinery, kitchen, office],
    process: standardProcess,
  },
  {
    slug: "luxury-interior-design",
    title: "Luxury Interior Design",
    group: "Specialised",
    short:
      "Refined, layered interiors created for clients who value the rare.",
    description:
      "Our luxury interior design service is for those who want their home to read as quietly extraordinary. We work with rare stones, specialist plasterers, master upholsterers and lighting artisans to create interiors with depth and patina — spaces that feel personal, collected and unmistakably yours rather than copied from anywhere.",
    image: heroLiving,
    gallery: [heroLiving, dining, staircase],
    process: standardProcess,
  },
  {
    slug: "living-room-interior-design",
    title: "Living Room Interior Design",
    group: "Specialised",
    short:
      "The room your home revolves around — designed to host, to gather, to exhale.",
    description:
      "We design living rooms as the emotional centre of the home — balanced for conversation, reading, family evenings and quiet entertaining. Layered seating, considered lighting, art placement and acoustically-aware fabrics combine into a room that feels warm at every hour of the day.",
    image: heroLiving,
    gallery: [heroLiving, proj2, furniture],
    process: standardProcess,
  },
  {
    slug: "bedroom-interior-design",
    title: "Bedroom Interior Design",
    group: "Specialised",
    short:
      "Sanctuary spaces — soft, restful and entirely tuned to how you sleep.",
    description:
      "A bedroom should feel like an exhale. We design principal suites, guest rooms and children's rooms with layered linens, dimmable warm light, considered storage and acoustic calm — sanctuaries within the home that genuinely restore you.",
    image: bedroom,
    gallery: [bedroom, joinery, bathroom],
    process: standardProcess,
  },
  {
    slug: "kitchen-interior-design",
    title: "Kitchen Interior Design",
    group: "Specialised",
    short:
      "Heart-of-the-home kitchens, where craft, cooking and gathering meet.",
    description:
      "Our kitchens are designed as architecture as much as function — bespoke cabinetry, honed stone, professional appliances and warm metals brought together in a layout that performs for both quiet weekday breakfasts and full-table Sunday lunches.",
    image: kitchen,
    gallery: [kitchen, dining, fullHome],
    process: standardProcess,
  },
  {
    slug: "full-home-interior-design",
    title: "Full Home Interior Design",
    group: "Specialised",
    short:
      "A whole-home vision, choreographed room by room into one calm narrative.",
    description:
      "We design entire homes as a single, flowing composition — palette, light, materials and detail tuned so each room feels distinct yet unmistakably part of the same story. From entrance hall to principal suite, every space is resolved to the same standard.",
    image: fullHome,
    gallery: [fullHome, heroLiving, staircase],
    process: standardProcess,
  },
];

export const SERVICE_GROUPS: Array<{
  key: ServiceItem["group"];
  label: string;
  caption: string;
}> = [
  { key: "Core", label: "Core Services", caption: "The foundations of every BE Services project." },
  { key: "Design & Planning", label: "Design & Planning", caption: "The layered craft behind a resolved interior." },
  { key: "Specialised", label: "Specialised Interiors", caption: "Rooms designed around the way you live." },
];
