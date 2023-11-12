<script>
  import { Button } from "flowbite-svelte";
</script>

<div class="container my-24 mx-auto md:px-6">
  <!-- Section: Design Block -->
  <section class="mb-32">
    <style>
      .background-radial-gradient {
        background-color: hsl(218, 41%, 15%);
        background-image: radial-gradient(
            650px circle at 0% 0%,
            hsl(218, 41%, 35%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%
          ),
          radial-gradient(
            1250px circle at 100% 100%,
            hsl(218, 41%, 45%) 15%,
            hsl(218, 41%, 30%) 35%,
            hsl(218, 41%, 20%) 75%,
            hsl(218, 41%, 19%) 80%,
            transparent 100%
          );
      }
    </style>

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

            <Button>Download now!</Button>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >Documents, Sheets and Slides
              </li>
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >5 GB Cloud Storage
              </li>
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >Free, forever!
              </li>
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
              <small class="text-base">/month</small>
            </h3>

            <Button>Buy now!</Button>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >Advanced app usages
              </li>
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >100 GB OfficeStation Cloud Storage
              </li>
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >Free Updates
              </li>
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >Premium Support
              </li>
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
              <strong class="opacity-70">Negotiable</strong>
            </h3>

            <Button>Contact Us!</Button>
          </div>
          <div class="p-6">
            <ol class="list-inside">
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >Flexible Pricing Plans
              </li>
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >200 GB OfficeStation Cloud per User
              </li>
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >1 TB of OfficeStation Cloud for your team
              </li>
              <li class="mb-4 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  /></svg
                >Priority Support
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->
</div>
<!-- Container for demo purpose -->
