<script>
  //@ts-nocheck
  import IntersectionObserver from "svelte-intersection-observer";

  export let once = false;
  export let direction = "left"; // "left"|"right"

  let dir = direction == "right" ? false : true;
  let node;
</script>

<IntersectionObserver element={node} let:intersecting {once}>
  <div bind:this={node} class="overflow-clip">
    <div
      class={"overflow-hidden " +
        (dir ? "hide-l" : "hide-r") +
        " " +
        (intersecting ? "show" : "")}
    >
      <slot />
    </div>
  </div>
</IntersectionObserver>

<style>
  .hide-l {
    opacity: 0;
    filter: blur(10px);
    transform: translateX(100%);
    transition-delay: 400ms;
    transition: all 800ms;
  }
  .hide-r {
    opacity: 0;
    filter: blur(10px);
    transform: translateX(-100%);
    transition-delay: 400ms;
    transition: all 800ms;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
</style>
