<script>
  import { Button } from "flowbite-svelte";
  import { _ } from "svelte-i18n";
</script>

<div class="grid grid-cols-1 md:grid-cols-3">
  <div class="grid grid-cols-2">
    <i class="fa-brands fa-windows text-8xl text-center"></i>
    <div>
      <p>Windows 8.1, 10, 11</p>
      <Button>{$_("getstarted")}</Button>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <i class="fa-brands fa-linux text-8xl text-center"></i>
    <div>
      <p>Linux, Ubuntu</p>
      <Button>{$_("getstarted")}</Button>
    </div>
  </div>
  <div class="grid grid-cols-2">
    <i class="fa-brands fa-apple text-8xl text-center"></i>
    <div>
      <p>MacOS</p>
      <Button>{$_("getstarted")}</Button>
    </div>
  </div>
</div>
