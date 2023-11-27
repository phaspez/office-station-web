<script>
  //@ts-nocheck
  import "../app.css";
  import Footer from "./footer.svelte";
  import Header from "./header.svelte";
  import "./i18n.js";
  import { onNavigate } from "$app/navigation";

  // transition on route change
  onNavigate((navigation) => {
    if (!document.startViewTransition) {
      return;
    }

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });

  let px = "lg:px-20 px-2 md:px-10 sm:px-5";
</script>

<Header />
<main class="background-light dark:background-dark dark:text-white py-5">
  <div class="py-10" />
  <slot />
</main>
<Footer />
