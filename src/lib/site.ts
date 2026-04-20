export const SITE = {
  name: "BE SERVICES LTD",
  short: "BE Services",
  tagline: "Luxury Interior Design & Architecture — London",
  email: "Harristone@Beserviceltd.co.uk",
  phone: "+447377260467",
  phoneDisplay: "+44 7377 260467",
  address: "5 Wadsworth Rd, Perivale, Greenford, England, UB6 7JD",
  website: "www.Beserviceltd.co.uk",
  companyNumber: "15069356",
  incorporated: "14 August 2023",
  developer: {
    name: "NAUMAN ELLAHI",
    url: "https://Naumanellahi.vercel.app",
  },
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export type ServiceItem = {
  slug: string;
  title: string;
  group: "Core" | "Design & Planning" | "Specialised";
  short: string;
  description: string;
  image: string;
  gallery: string[];
  process: { title: string; body: string }[];
};
