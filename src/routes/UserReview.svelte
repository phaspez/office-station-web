<script>
  import { _ } from "svelte-i18n";
  import { Avatar, Rating } from "flowbite-svelte";
</script>

<div class="grid py-4 grid-cols-1 gap-3 md:grid-cols-2">
  <div class="p-1 px-3">
    <div>
      <div class="flex items-center space-x-4">
        <Avatar rounded>JL</Avatar>
        <div class="space-y-1 font-medium dark:text-white">
          <div class="px-2">Jese Leos</div>
          <Rating rating={5.0} />
        </div>
      </div>

      <p class="text-gray-800 dark:text-gray-200">
        {$_("userreview1")}
      </p>
    </div>
  </div>
  <div class="p-1 px-3">
    <div>
      <div class="flex items-center space-x-4">
        <Avatar
          rounded
          src="https://flowbite-svelte.com/images/profile-picture-2.webp"
        ></Avatar>
        <div class="space-y-1 font-medium dark:text-white">
          <div class="px-2">John Doe</div>
          <Rating rating={5.0} />
        </div>
      </div>
      <p class="text-gray-800 dark:text-gray-200">
        {$_("userreview.2")}
      </p>
    </div>
  </div>
  <div class="p-1 px-3">
    <div>
      <div class="flex items-center space-x-4">
        <Avatar rounded href=""></Avatar>
        <div class="space-y-1 font-medium dark:text-white">
          <div class="px-2">Lorem Ipsum</div>
          <Rating rating={5.0} />
        </div>
      </div>

      <p class="text-gray-800 dark:text-gray-200">
        {$_("userreview3")}
      </p>
    </div>
  </div>
  <div class="p-1 px-3">
    <div>
      <div class="flex items-center space-x-4">
        <Avatar
          rounded
          src="https://flowbite-svelte.com/images/profile-picture-1.webp"
        ></Avatar>
        <div class="space-y-1 font-medium dark:text-white">
          <div class="px-2">Tom Wanjala</div>
          <Rating rating={5.0} />
        </div>
      </div>
      <p class="text-gray-800 dark:text-gray-200">
        {$_("userreview4")}
      </p>
    </div>
  </div>
</div>
