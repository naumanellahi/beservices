import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2, P } from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/legal/refund")({
  head: () => ({ meta: [{ title: "Refund Policy — BE Services Ltd" }, { name: "description", content: "Refund terms for design services and deposits." }] }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Refund Policy" updated="January 2026">
      <P>This policy explains the circumstances under which refunds may apply to design fees, deposits and procurement services delivered by BE Services Ltd.</P>
      <H2>1. Design Fees</H2>
      <P>Design fees are charged in stages against a signed scope of works. Once a stage has commenced, fees for that stage are non-refundable as they reflect studio time already spent.</P>
      <H2>2. Procurement Deposits</H2>
      <P>Deposits paid for furniture, joinery and bespoke items are non-refundable once the order is placed with our suppliers, as these items are made or specified to your home.</P>
      <H2>3. Cancellations</H2>
      <P>If you wish to cancel a project, please notify us in writing. Any unspent retainer balance will be refunded within 30 days, less reasonable studio time and supplier commitments incurred up to the cancellation date.</P>
      <H2>4. Faulty Items</H2>
      <P>Where a procured item arrives faulty or not as specified, we will manage the return or replacement on your behalf in accordance with the supplier's policy and your statutory rights under UK consumer law.</P>
      <H2>5. Contact</H2>
      <P>To discuss a refund, please email {SITE.email}.</P>
    </LegalLayout>
  ),
});
