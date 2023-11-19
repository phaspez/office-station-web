<script>
  import PricingFaq from "./pricing-faq.svelte";
  import PricingGroup from "./pricing-group.svelte";
  import PricingBulkPurchase from "./pricing-bulk-purchase.svelte";
  import { _ } from "svelte-i18n";
</script>

<h1 class="headline">{$_("pricingpage")}</h1>
<p class="headline-details">{$_("pricingpage.details")}</p>
<PricingGroup />

<h1 class="text-4xl font-semibold">{$_("pricingpage.section1")}</h1>
<section>
  {@html $_("pricingpage.section1.details")}
  <section>
    <PricingBulkPurchase />
  </section>
</section>

<section>
  <h1 class="text-4xl font-semibold">{$_("pricingpage.section2")}</h1>
  <section>
    <PricingFaq />
  </section>
</section>
