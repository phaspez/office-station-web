<script>
  import { Alert, Input, Checkbox } from "flowbite-svelte";

  let proPrice = 4.99;
  let userCounter = 1;
  let isStudentDiscount = false;

  $: userCounter > 9999 ? (userCounter = 9999) : {};
  $: totalDiscount = parseFloat(
    (
      (isStudentDiscount ? 0.2 : 0.0) +
      Math.min(Math.floor(userCounter / 5) * 0.05, 0.2)
    ).toFixed(2)
  );
  $: normalPrice = userCounter * proPrice;
  $: sumPrice = normalPrice * (1 - totalDiscount);
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
  <div class="px-2 lg:align-items-center">
    <div>
      <h2>Quantity</h2>
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
        class="mb-6 space-x-1"
        required
        bind:checked={isStudentDiscount}
      >
        Is your group eligible for student discount?
      </Checkbox>
    </div>
    <div class="">
      {#if totalDiscount > 0.0}
        <h2 class="text-3xl">
          <strike class="opacity-50">$ {normalPrice.toFixed(2)}</strike>
          <small class="text-sm">{totalDiscount * 100}% off!</small>
        </h2>
      {/if}
      <h2 class="text-3xl">$ {sumPrice.toFixed(2)} <small>/month</small></h2>
    </div>
  </div>
  <div>
    <Alert color="none" class="box-info-green drop-shadow-md m-1">
      <h2>Student Discount</h2>
      Receive 20% off your purchases if you and your team is eligible for students
      discount.
    </Alert>
    <Alert color="none" class="box-info-orange drop-shadow-md m-1">
      <h2>Bulk Purchase Discount</h2>
      5% off your purchases for each 5 people in your group, up to 20% off.
    </Alert>
  </div>
</div>
