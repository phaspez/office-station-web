<script>
  import "../app.css";
  import Footer from "./footer.svelte";
  import Header from "./header.svelte";
</script>

<Header />
<main
  class="bg-white dark:bg-slate-800 dark:text-white py-5 px-2 lg:px-20 md:px-10 sm:px-5"
>
  <div class="py-10" />
  <slot />
</main>
<Footer />

<style>
</style>
