import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2, P } from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/legal/cookies")({
  head: () => ({ meta: [{ title: "Cookie Policy — BE Services Ltd" }, { name: "description", content: "How BE Services Ltd uses cookies on this website." }] }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Cookie Policy" updated="January 2026">
      <P>This Cookie Policy explains how BE Services Ltd uses cookies and similar technologies on www.Beserviceltd.co.uk.</P>
      <H2>1. What Are Cookies?</H2>
      <P>Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and improve the browsing experience.</P>
      <H2>2. Cookies We Use</H2>
      <P>We use only essential cookies required for the website to function correctly. We do not use marketing or third-party tracking cookies without your explicit consent.</P>
      <H2>3. Embedded Content</H2>
      <P>Some pages embed content from third parties such as Google Maps. These services may set their own cookies, governed by their respective privacy policies.</P>
      <H2>4. Managing Cookies</H2>
      <P>You can manage or disable cookies through your browser settings. Note that disabling essential cookies may affect website functionality.</P>
      <H2>5. Contact</H2>
      <P>For questions about our cookie use, email {SITE.email}.</P>
    </LegalLayout>
  ),
});
