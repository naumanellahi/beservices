import type { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div
          className={`text-[0.7rem] uppercase tracking-[0.4em] ${
            light ? "text-primary" : "text-gradient-gold"
          } font-medium`}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className={`mt-4 font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.05] ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
