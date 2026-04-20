import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "dark";
type Size = "sm" | "md" | "lg";

const base =
  "relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-500 ease-out overflow-hidden whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-yellow text-primary-foreground shadow-soft hover:shadow-luxe hover:-translate-y-0.5",
  ghost:
    "bg-white/80 text-foreground hover:bg-white shadow-soft backdrop-blur",
  outline:
    "border border-foreground/15 text-foreground hover:bg-secondary hover:border-foreground/30",
  dark: "bg-foreground text-background hover:bg-foreground/90",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-xs uppercase tracking-[0.18em]",
  md: "px-6 py-3 text-[0.78rem] uppercase tracking-[0.2em]",
  lg: "px-8 py-4 text-[0.85rem] uppercase tracking-[0.22em]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkProps = CommonProps & {
  to: string;
  href?: never;
} & Partial<Pick<ComponentProps<typeof Link>, "params" | "search">>;

type AnchorProps = CommonProps & {
  href: string;
  to?: never;
  target?: string;
  rel?: string;
};

type ButtonProps = CommonProps & {
  to?: never;
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function LuxButton(props: LinkProps | AnchorProps | ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("to" in props && props.to) {
    return (
      <Link to={props.to as never} className={cls}>
        {children}
      </Link>
    );
  }
  if ("href" in props && props.href) {
    return (
      <a
        href={props.href}
        target={(props as AnchorProps).target}
        rel={(props as AnchorProps).rel}
        className={cls}
      >
        {children}
      </a>
    );
  }
  const b = props as ButtonProps;
  return (
    <button type={b.type ?? "button"} onClick={b.onClick} className={cls}>
      {children}
    </button>
  );
}
