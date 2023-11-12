<script>
  import PricingFaq from "./pricing-faq.svelte";
  import PricingGroup from "./pricing-group.svelte";
  import PricingBulkPurchase from "./pricing-bulk-purchase.svelte";
</script>

<h1 class="headline">Pricing</h1>
<p class="headline-details">We offer simple plans for anyone.</p>
<PricingGroup />

<h1 class="text-4xl font-semibold">Save more with group purchase</h1>
<section>
  <p>
    We offer generous discounts on OfficeStation Pro subscriptions for your
    group, business, school or district.
  </p>
  <p>
    For bigger orders and organizations, we recommend to contact us to neogiate
    for enterprise plans.
  </p>
  <section>
    <PricingBulkPurchase />
  </section>
</section>

<section>
  <h1 class="text-4xl font-semibold">Frequently Asked Questions</h1>
  <section>
    <PricingFaq />
  </section>
</section>
