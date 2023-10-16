<script>
  import "../app.css";
  import Footer from "./footer.svelte";
  import Header from "./header.svelte";

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  const toggler = () => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      console.log("Dark theme");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light theme");
    }
  };
</script>

<Header theme_toggler />
<main>
  <slot />
</main>
<Footer />

<style>
</style>
