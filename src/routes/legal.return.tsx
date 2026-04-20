import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout, H2, P } from "@/components/LegalLayout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/legal/return")({
  head: () => ({ meta: [{ title: "Return Policy — BE Services Ltd" }, { name: "description", content: "Returns process for goods procured through BE Services Ltd." }] }),
  component: () => (
    <LegalLayout eyebrow="Legal" title="Return Policy" updated="January 2026">
      <P>BE Services Ltd procures furniture, joinery, lighting and accessories on behalf of clients. The following terms apply to returns of those goods.</P>
      <H2>1. Bespoke & Made-to-Order Items</H2>
      <P>Bespoke joinery, custom furniture and made-to-order pieces are not eligible for return as they are produced specifically for your home.</P>
      <H2>2. Stocked Items</H2>
      <P>Stocked goods may be returned within 14 days of delivery if unused, in original packaging and in re-saleable condition. Return shipping costs are payable by the client.</P>
      <H2>3. Damaged or Defective Goods</H2>
      <P>Please notify us within 48 hours of delivery if an item arrives damaged. We will arrange inspection, replacement or repair with the supplier on your behalf.</P>
      <H2>4. Process</H2>
      <P>To begin a return, contact our studio at {SITE.email}. We will issue a returns reference and coordinate collection where possible.</P>
      <H2>5. Statutory Rights</H2>
      <P>This policy operates alongside, and does not affect, your statutory consumer rights under UK law.</P>
    </LegalLayout>
  ),
});
