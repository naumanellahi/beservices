import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { LuxButton } from "@/components/LuxButton";
import { SITE } from "@/lib/site";
import heroLiving from "@/assets/hero-living.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact BE Services Ltd — Begin a Project" },
      {
        name: "description",
        content:
          "Speak with BE Services Ltd — a London-based luxury interior design studio. Email Harristone@Beserviceltd.co.uk or call +44 7377 260467.",
      },
      { property: "og:title", content: "Contact BE Services Ltd" },
      {
        property: "og:description",
        content: "Begin a luxury interior design project with our London studio.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative pt-40 pb-16 md:pt-48 md:pb-20">
        <img src={heroLiving} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/55 via-white/65 to-background" />
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <div className="text-[0.7rem] uppercase tracking-[0.4em] text-gradient-gold">
              Begin a project
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-4 max-w-4xl font-display text-5xl md:text-7xl lg:text-[5rem] leading-[1.02]">
              A <span className="italic text-gradient-gold">conversation</span>
              <br /> is the first room.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 md:px-10 pb-24 md:pb-32 grid gap-12 md:grid-cols-12">
        {/* Contact details */}
        <Reveal className="md:col-span-5 space-y-8">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.32em] text-gradient-gold">
              Studio
            </div>
            <h2 className="mt-2 font-display text-3xl text-foreground">
              BE Services Ltd
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Speak directly with our studio team. We respond personally to every
              enquiry within one working day.
            </p>
          </div>

          <ul className="space-y-5">
            <li className="flex items-start gap-4 group">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/30 text-foreground">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Email
                </div>
                <a href={`mailto:${SITE.email}`} className="mt-1 block font-display text-lg text-foreground hover:text-gold transition-colors">
                  {SITE.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/30 text-foreground">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Telephone
                </div>
                <a href={`tel:${SITE.phone}`} className="mt-1 block font-display text-lg text-foreground hover:text-gold transition-colors">
                  {SITE.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/30 text-foreground shrink-0">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <div className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
                  Studio Address
                </div>
                <div className="mt-1 font-display text-lg text-foreground">
                  {SITE.address}
                </div>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3">
            <LuxButton href={`tel:${SITE.phone}`} size="md">
              Call the Studio
            </LuxButton>
            <LuxButton href={`mailto:${SITE.email}`} variant="outline" size="md">
              Email Directly
            </LuxButton>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
            <iframe
              title="BE Services Ltd location"
              src="https://www.google.com/maps?q=5+Wadsworth+Rd,+Perivale,+Greenford+UB6+7JD&output=embed"
              width="100%"
              height="280"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            />
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={150} className="md:col-span-7">
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Turnkey Residential Interior Design",
    message: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New Enquiry — ${form.service}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-white px-5 py-4 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-7 md:p-10 shadow-luxe border border-border/70"
    >
      <div className="text-[0.7rem] uppercase tracking-[0.32em] text-gradient-gold">
        Studio Enquiry
      </div>
      <h3 className="mt-2 font-display text-3xl text-foreground">
        Tell us about your home.
      </h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">
        A few words is all we need to begin. Your message will open in your email
        app, addressed directly to our studio.
      </p>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <input required name="name" value={form.name} onChange={onChange} placeholder="Full name" className={inputCls} maxLength={100} />
        <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="Email address" className={inputCls} maxLength={255} />
        <input name="phone" value={form.phone} onChange={onChange} placeholder="Phone (optional)" className={inputCls} maxLength={32} />
        <select name="service" value={form.service} onChange={onChange} className={inputCls}>
          <option>Turnkey Residential Interior Design</option>
          <option>Interior Architecture</option>
          <option>Architectural Design</option>
          <option>Project Management</option>
          <option>Furniture Design</option>
          <option>Bespoke Joinery</option>
          <option>Luxury Interior Design</option>
          <option>Full Home Interior Design</option>
          <option>Other</option>
        </select>
      </div>
      <textarea
        required
        name="message"
        value={form.message}
        onChange={onChange}
        rows={5}
        maxLength={1000}
        placeholder="Tell us about the project — type of property, location, scope, anything we should know."
        className={`${inputCls} mt-4 resize-none`}
      />

      <div className="mt-6 flex flex-wrap items-center gap-4 justify-between">
        <p className="text-xs text-muted-foreground max-w-xs">
          By sending you agree to our Privacy Policy. We never share your details.
        </p>
        <button
          type="submit"
          className="relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-yellow px-8 py-4 text-[0.78rem] uppercase tracking-[0.22em] font-medium text-primary-foreground shadow-soft hover:shadow-luxe hover:-translate-y-0.5 transition-all duration-500"
        >
          Send Enquiry <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
