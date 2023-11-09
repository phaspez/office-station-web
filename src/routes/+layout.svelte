<script>
  import "../app.css";
  import Footer from "./footer.svelte";
  import Header from "./header.svelte";
  import "./i18n.js";
</script>

<Header />
<main
  class="background-light dark:background-dark dark:text-white py-5 px-2 lg:px-20 md:px-10 sm:px-5"
>
  <div class="py-10" />
  <slot />
</main>
<Footer />
