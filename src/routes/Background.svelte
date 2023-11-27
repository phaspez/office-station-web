<script>
  export var color = "blue";
</script>

<main class={color + " bg-opacity-30"}>
  <slot />
</main>

<style lang="postcss">
  .blue {
    @apply bg-gradient-to-r from-green-300/40 via-blue-500/40 to-purple-600/40;
  }

  .purple {
    @apply bg-gradient-to-r from-pink-300/40 via-purple-300/40 to-indigo-400/40;
  }

  .lavender {
    @apply bg-gradient-to-r from-indigo-300/40 to-purple-400/40;
  }

  .sublime {
    @apply bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-rose-400/40 via-fuchsia-500/40 to-indigo-500/40;
  }
</style>
