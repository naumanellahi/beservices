import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2, P } from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/legal/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — BE Services Ltd" }, { name: "description", content: "Terms governing use of the BE Services Ltd website and services." }] }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="January 2026">
      <P>These Terms govern your use of the BE Services Ltd website and the design services we provide. By using this site or engaging us, you accept these terms in full.</P>
      <H2>1. About Us</H2>
      <P>BE Services Ltd is a company registered in England and Wales (Company No. {SITE.companyNumber}), with its registered address at {SITE.address}.</P>
      <H2>2. Use of the Website</H2>
      <P>You agree to use this website lawfully and not to misuse, copy or republish content without our written permission. All design work, imagery and written material remain our intellectual property.</P>
      <H2>3. Services & Quotations</H2>
      <P>Quotations are valid for 30 days unless otherwise agreed in writing. Engagement of services is subject to a signed studio agreement that sets out scope, fees and project programme.</P>
      <H2>4. Liability</H2>
      <P>To the fullest extent permitted by law, BE Services Ltd accepts no liability for indirect or consequential loss arising from use of this website. Liability for the services we deliver is governed by your individual studio agreement.</P>
      <H2>5. Governing Law</H2>
      <P>These Terms are governed by the laws of England and Wales, and any dispute will be subject to the exclusive jurisdiction of its courts.</P>
      <H2>6. Contact</H2>
      <P>Questions regarding these Terms may be sent to {SITE.email}.</P>
    </LegalLayout>
  ),
});
