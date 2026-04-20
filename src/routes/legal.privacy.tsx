import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2, P } from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/legal/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — BE Services Ltd" }, { name: "description", content: "How BE Services Ltd collects, uses and protects your personal data." }] }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="January 2026">
      <P>BE Services Ltd ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use and safeguard the personal information you share with us.</P>
      <H2>1. Information We Collect</H2>
      <P>We collect information you provide directly — such as your name, email, phone number and project details — when you contact us, request a quote or book a consultation.</P>
      <H2>2. How We Use Your Information</H2>
      <P>We use your information to respond to enquiries, deliver our design services, manage projects and communicate updates. We never sell your personal data to third parties.</P>
      <H2>3. Data Storage & Security</H2>
      <P>Your data is stored securely on systems compliant with UK GDPR. We retain personal information only for as long as necessary to fulfil the purposes outlined in this policy.</P>
      <H2>4. Cookies</H2>
      <P>Our website uses essential cookies to function correctly. See our Cookie Policy for further detail.</P>
      <H2>5. Your Rights</H2>
      <P>Under UK GDPR you have the right to access, correct, delete or restrict the processing of your personal data. To exercise these rights, contact us at {SITE.email}.</P>
      <H2>6. Contact</H2>
      <P>For privacy queries, write to {SITE.email} or {SITE.address}.</P>
    </LegalLayout>
  ),
});
