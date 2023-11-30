<!-- 
  Đây là file chứa các định dạng HTML và CSS dùng làm hiệu ứng di chuyển khi thành phần con của
  thành phần này xuất hiện trên màn hình. Sử dụng như một hiệu năng để wrap các thành phần khá.
  cho trang web.

  Sử dụng svelte-intersection-observer để phát hiện các phần tử con xuất hiện trên màn hình để
  hiển thị hiệu ứng di chuyển.
-->

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
    transition: all 1200ms;
  }
  .hide-r {
    opacity: 0;
    filter: blur(10px);
    transform: translateX(-100%);
    transition-delay: 400ms;
    transition: all 1200ms;
  }

  .show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
</style>
