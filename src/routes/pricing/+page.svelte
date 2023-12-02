<script>
  import PricingFaq from "./pricing-faq.svelte";
  import PricingGroup from "./pricing-group.svelte";
  import PricingBulkPurchase from "./pricing-bulk-purchase.svelte";
  import { _ } from "svelte-i18n";
  import AnimOnVisible from "../AnimOnVisible.svelte";
  import Background from "../Background.svelte";
</script>

<div class="innercenter">
  <h1 class="headline">{$_("pricingpage")}</h1>
  <p class="headline-details pt-0 lg:pr-96">{$_("pricingpage.details")}</p>
  <PricingGroup />
</div>

<Background>
  <h1 class="text-4xl innercenter font-semibold">
    {$_("pricingpage.section1")}
  </h1>
  <div class="innercenter py-5">
    <AnimOnVisible>
      <div>
        <PricingBulkPurchase />
      </div>
    </AnimOnVisible>
  </div>
</Background>

<Background color="sublime">
  <h1 class="text-4xl innercenter font-semibold">
    {$_("pricingpage.section2")}
  </h1>
  <div class="innercenter py-5">
    <div>
      <PricingFaq />
    </div>
  </div>
</Background>
