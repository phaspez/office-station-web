<script>
  // @ts-nocheck
  import { AccordionItem, Accordion } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
</script>

<Accordion
  activeClasses="border-1 dark:bg-gray-800"
  inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800"
  class="bg-gray-200 dark:bg-slate-700 rounded-2xl"
>
  <AccordionItem class="">
    <span slot="header">{$_("pricingpage.faq.differecefreepro.q")}</span>
    {@html $_("pricingpage.faq.differecefreepro")}
  </AccordionItem>
  <AccordionItem>
    <span slot="header">{$_("pricingpage.faq.eligibility.q")}</span>
    {@html $_("pricingpage.faq.eligibility")}
  </AccordionItem>
  <AccordionItem>
    <span slot="header">{$_("pricingpage.faq.changingplan.q")}</span>
    {@html $_("pricingpage.faq.changingplan")}
  </AccordionItem>
  <AccordionItem>
    <span slot="header">{$_("pricingpage.faq.enterprise.q")}</span>
    {@html $_("pricingpage.faq.enterprise")}
  </AccordionItem>
</Accordion>
