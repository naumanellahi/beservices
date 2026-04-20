import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LuxButton } from "./LuxButton";
import { NAV } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border/60 shadow-[0_2px_24px_-12px_rgba(0,0,0,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10 md:py-5">
        {/* CTA Left */}
        <div className="flex flex-1 items-center">
          <div className="hidden md:block">
            <LuxButton to="/contact" size="sm">
              Get Free Quote
            </LuxButton>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/80"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Logo Center */}
        <div className="flex flex-1 justify-center">
          <Logo />
        </div>

        {/* Menu Right */}
        <nav className="hidden md:flex flex-1 items-center justify-end gap-8">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[0.78rem] uppercase tracking-[0.22em] text-foreground/70 hover:text-foreground transition-colors underline-grow"
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 md:hidden justify-end">
          <span className="w-10" aria-hidden />
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-border transition-[max-height] duration-500 ${
          open ? "max-h-[420px]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="py-3 text-sm uppercase tracking-[0.22em] text-foreground/80 border-b border-border/50 last:border-0"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-5">
            <LuxButton to="/contact" size="md" className="w-full">
              Get Free Quote
            </LuxButton>
          </div>
        </nav>
      </div>
    </header>
  );
}
