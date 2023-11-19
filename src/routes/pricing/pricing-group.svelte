<!-- Different plans to sign up and purchase -->

<script>
  import { Button } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
  import FeatureCheck from "./feature-check.svelte";
</script>

<div class="container my-24 mx-auto md:px-6">
  <!-- Section: Design Block -->
  <section class="mb-32">
    <div
      class="grid px-6 pt-6 md:px-12 lg:grid-cols-3 xl:px-32"
      style="margin-top: -100px"
    >
      <div class="p-0 py-12">
        <div
          class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tr-none lg:rounded-br-none"
        >
          <div
            class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10"
          >
            <p class="mb-4 text-sm uppercase">
              <strong>Basic</strong>
            </p>
            <h3 class="mb-6 text-3xl">
              <strong>Free</strong>
              <small class="text-base text-neutral-500 dark:text-neutral-300" />
            </h3>

            <Button>{$_("pricingpage.download")}</Button>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <FeatureCheck>{$_("appfeature.free.1")}</FeatureCheck>
              <FeatureCheck>{$_("appfeature.free.2")}</FeatureCheck>
              <FeatureCheck>{$_("appfeature.free.3")}</FeatureCheck>
            </ol>
          </div>
        </div>
      </div>

      <div class="">
        <div
          class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 box-info-blue"
          style="z-index: 1"
        >
          <div
            class="border-b-2 border-neutral-100 border-opacity-20 p-6 text-center"
          >
            <p class="mb-4 text-sm uppercase">
              <strong>Pro</strong>
            </p>
            <h3 class="mb-6 text-3xl">
              <strong>$ 4.99</strong>
              <small class="text-base">/{$_("month")}</small>
            </h3>

            <Button>Buy now!</Button>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <FeatureCheck>{$_("appfeature.pro.1")}</FeatureCheck>
              <FeatureCheck>{$_("appfeature.pro.2")}</FeatureCheck>
              <FeatureCheck>{$_("appfeature.pro.3")}</FeatureCheck>
              <FeatureCheck>{$_("appfeature.pro.4")}</FeatureCheck>
            </ol>
          </div>
        </div>
      </div>

      <div class="py-12">
        <div
          class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:rounded-tl-none lg:rounded-bl-none"
        >
          <div
            class="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10"
          >
            <p class="mb-4 text-sm uppercase">
              <strong>Enterprise</strong>
            </p>
            <h3 class="mb-6 text-3xl">
              <strong class="opacity-70">{$_("negotiable")}</strong>
            </h3>

            <Button>Contact Us!</Button>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <FeatureCheck>{$_("appfeature.enterprise.1")}</FeatureCheck>
              <FeatureCheck>{$_("appfeature.enterprise.2")}</FeatureCheck>
              <FeatureCheck>{$_("appfeature.enterprise.3")}</FeatureCheck>
              <FeatureCheck>{$_("appfeature.enterprise.4")}</FeatureCheck>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</div>
<!-- Container for demo purpose -->
