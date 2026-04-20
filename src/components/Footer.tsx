import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const LEGAL = [
  { to: "/legal/privacy", label: "Privacy Policy" },
  { to: "/legal/terms", label: "Terms & Conditions" },
  { to: "/legal/refund", label: "Refund Policy" },
  { to: "/legal/return", label: "Return Policy" },
  { to: "/legal/cookies", label: "Cookie Policy" },
];

export function Footer() {
  const featured = SERVICES.slice(0, 6);
  return (
    <footer className="relative bg-foreground text-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-24 grid gap-14 md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="font-display text-3xl tracking-[0.2em]">BE</div>
          <div className="mt-1 text-[0.65rem] uppercase tracking-[0.45em] text-background/60">
            Services Ltd
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
            A London-based studio crafting refined, considered homes — from
            architectural reconfiguration to the final styled detail.
          </p>
          <div className="mt-7 space-y-3 text-sm text-background/75">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-start gap-3 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 mt-0.5 text-primary" />
              <span>{SITE.email}</span>
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-start gap-3 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <span>{SITE.phoneDisplay}</span>
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>{SITE.address}</span>
            </div>
          </div>
        </div>

        {/* Navigate */}
        <div className="md:col-span-2">
          <div className="text-[0.7rem] uppercase tracking-[0.3em] text-primary">
            Navigate
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-background/75 hover:text-primary transition-colors"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="md:col-span-3">
          <div className="text-[0.7rem] uppercase tracking-[0.3em] text-primary">
            Services
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {featured.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-background/75 hover:text-primary transition-colors"
                >
                  {s.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/services"
                className="text-primary/90 hover:text-primary transition-colors"
              >
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="md:col-span-3">
          <div className="text-[0.7rem] uppercase tracking-[0.3em] text-primary">
            Legal
          </div>
          <ul className="mt-5 space-y-3 text-sm">
            {LEGAL.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-background/75 hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-7 text-[0.65rem] uppercase tracking-[0.3em] text-background/45">
            Company No. {SITE.companyNumber}
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.7rem] uppercase tracking-[0.22em] text-background/55">
          <div>
            © 2026 BE SERVICES LTD. All Rights Reserved.
          </div>
          <div>
            Designed & Developed by{" "}
            <a
              href={SITE.developer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              {SITE.developer.name}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
