<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Dropdown,
    DropdownItem,
    DropdownDivider,
    Button,
  } from "flowbite-svelte";

  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";

  $: activeUrl = $page.url.pathname;

  let themeState = true;
  function toggleTheme() {
    if (themeState) {
      document.documentElement.classList.add("dark");
      console.log("Dark theme");
    } else {
      document.documentElement.classList.remove("dark");
      console.log("Light theme");
    }

    themeState = !themeState;
  }
</script>

<header class="relative">
  <Navbar
    let:hidden
    let:toggle
    class="px-2 bg-slate-200 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b"
  >
    <NavBrand href="/">
      <img src="favicon.png" class="mr-3 h-6 sm:h-9" alt="Office Logo" />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        OfficeStation
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} {activeUrl} class="">
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi class="cursor-pointer">
        Products <ChevronDownOutline
          class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
        />
      </NavLi>
      <Dropdown class="w-44 z-20 text-center">
        <DropdownItem href="/documents">Documents</DropdownItem>
        <DropdownItem href="/">Sheets</DropdownItem>
        <DropdownItem href="/">Slides</DropdownItem>
      </Dropdown>
      <NavLi href="/login">Log in</NavLi>
      <div class="flex">
        <Button
          on:click={toggleTheme}
          color="dark"
          size="sm"
          outline
          class="text-lg max-w-min py-1 border-0"
        >
          {#if themeState}
            <i class="fa-regular fa-lightbulb" />
          {:else}
            <i class="fa-solid fa-lightbulb" />
          {/if}
        </Button>
      </div>
    </NavUl>
  </Navbar>
</header>
