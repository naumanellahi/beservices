import { Link } from "@tanstack/react-router";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex flex-col items-center leading-none"
      aria-label="BE Services Ltd — Home"
    >
      <span
        className={`font-display text-2xl tracking-[0.2em] transition-colors ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        BE
      </span>
      <span
        className={`mt-0.5 text-[0.6rem] uppercase tracking-[0.45em] ${
          light ? "text-white/70" : "text-muted-foreground"
        }`}
      >
        Services Ltd
      </span>
    </Link>
  );
}
