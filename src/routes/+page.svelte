<script>
  import { Button } from "flowbite-svelte";
  import Helloworld from "./helloworld.svelte";
</script>

<Helloworld />

<!-- ------------------------------------------------------ -->
<section>
  <div class="filler" />
</section>

<p class="headline">Elevate Your Productivity with OfficeStation.</p>
<p class="headline-details">
  Improve productivity with lightweight office apps. Documents, Sheets and
  Slides.
</p>
<Button>Get started!</Button>

<section>
  <div class="filler" />
</section>

<section>
  <h1>Lightweight Office apps</h1>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="subsection" />
    <div class="subsection">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div class="box-info">
        <h2>Info box</h2>
        <p>
          Did you know that this is special info box that tell you useful
          information?
        </p>
      </div>
    </div>
  </div>
</section>

<section>
  <h1>Online Access to your files</h1>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="subsection">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div class="box-info">
        <h2>Info box</h2>
        <p>
          Did you know that this is special info box that tell you useful
          information?
        </p>
      </div>
    </div>
    <div class="subsection" />
  </div>
</section>

<section>
  <h1>Microsoft Office Complatible</h1>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="subsection" />
    <div class="subsection">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div class="box-info">
        <h2>Info box</h2>
        <p>
          Did you know that this is special info box that tell you useful
          information?
        </p>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .subsection {
    @apply py-5;
  }

  section {
    @apply py-5;
  }

  section p {
    @apply py-3;
  }

  .filler {
    height: 600px;
  }
</style>
