<script>
  import { Alert, Input, Checkbox } from "flowbite-svelte";
  import { _ } from "svelte-i18n";

  let proPrice = 4.99;
  let userCounter = 1;
  let isStudentDiscount = false;

  $: userCounter > 9999 ? (userCounter = 9999) : {};
  $: userCounter < 0 ? (userCounter = 0) : {};
  $: totalDiscount = parseFloat(
    (
      (isStudentDiscount ? 0.2 : 0.0) +
      Math.min(Math.floor(userCounter / 5) * 0.05, 0.2)
    ).toFixed(2)
  );
  $: normalPrice = userCounter * proPrice;
  $: sumPrice = normalPrice * (1 - totalDiscount);
</script>

<div class="grid grid-cols-1 md:grid-cols-2 items-center">
  <div class="px-2 lg:align-items-center">
    <div>
      {@html $_("pricingpage.section1.details")}
      <h2>{$_("quantity")}</h2>
      <Input
        type="number"
        id="users"
        min="1"
        max="9999"
        placeholder=""
        bind:value={userCounter}
        required
        defaultClass="max-w-min"
        on:change
      />
      <Checkbox
        class="mb-6 space-x-1 py-2"
        required
        bind:checked={isStudentDiscount}
      >
        {$_("pricingpage.isstudentdiscount")}
      </Checkbox>
    </div>
    <div class="">
      {#if totalDiscount > 0.0}
        <h2 class="text-3xl">
          <strike class="opacity-50">$ {normalPrice.toFixed(2)}</strike>
          <small class="text-sm">{totalDiscount * 100}% off!</small>
        </h2>
      {/if}
      <h2 class="text-3xl">
        $ {sumPrice.toFixed(2)} <small>/{$_("month")}</small>
      </h2>
    </div>
  </div>
  <div class="a align-middle">
    <Alert color="none" class="box-info-green drop-shadow-md m-1">
      {@html $_("pricingpage.studentdiscount")}
    </Alert>
    <Alert color="none" class="box-info-orange drop-shadow-md m-1">
      {@html $_("pricingpage.bulkdiscount")}
    </Alert>
  </div>
</div>
