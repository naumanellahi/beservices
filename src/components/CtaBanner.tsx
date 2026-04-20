import { LuxButton } from "./LuxButton";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-yellow px-8 py-16 md:px-20 md:py-24">
          {/* Floating decorative shapes */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/30 blur-3xl animate-float-slow" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/40 blur-3xl animate-float-slower" />
          <div className="pointer-events-none absolute top-10 right-20 h-3 w-3 rounded-full bg-white/70 animate-float-slow" />

          <div className="relative grid gap-8 md:grid-cols-12 items-end">
            <Reveal className="md:col-span-7">
              <div className="text-[0.7rem] uppercase tracking-[0.4em] text-foreground/70">
                Begin a project
              </div>
              <h3 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
                A studio conversation,
                <br />
                without obligation.
              </h3>
              <p className="mt-5 max-w-xl text-foreground/75 text-base md:text-lg leading-relaxed">
                Share a few words about your home and the way you want it to
                feel. We will respond personally within one working day.
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5 flex md:justify-end">
              <div className="flex flex-wrap gap-3">
                <LuxButton to="/contact" variant="dark" size="lg">
                  Book Consultation
                </LuxButton>
                <LuxButton to="/services" variant="ghost" size="lg">
                  View Services
                </LuxButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
