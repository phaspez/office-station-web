<script>
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
    Dropdown,
    DropdownItem,
    Button,
  } from "flowbite-svelte";

  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { page } from "$app/stores";
  import { _, locale } from "svelte-i18n";

  $: activeUrl = $page.url.pathname;

  let themeState = true;
  function toggleTheme() {
    if (themeState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    themeState = !themeState;
  }

  function toggleLanuage(lang = "en-US") {
    $locale = lang;
  }
</script>

<header class="relative z-50 list-none">
  <Navbar
    let:hidden
    let:toggle
    class="px-2 bg-slate-300 bg-opacity-60 dark:bg-slate-800 dark:bg-opacity-60 backdrop-blur-md sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b list-none"
  >
    <NavBrand href="/">
      <img src="svelte-icon.png" class="mr-3 h-6 sm:h-9" alt="Office Logo" />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >
        OfficeStation
      </span>
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden} {activeUrl} class="">
      <NavLi href="/" active={true}>{$_("homepage")}</NavLi>
      <NavLi href="/about">{$_("aboutpage")}</NavLi>
      <NavLi href="/pricing">{$_("pricingpage")}</NavLi>
      <NavLi class="cursor-pointer">
        {$_("productpage")}
        <ChevronDownOutline
          class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
        />
      </NavLi>
      <Dropdown class="w-44 z-20 text-center">
        <DropdownItem href="/products/documents">{$_("Documents")}</DropdownItem
        >
        <DropdownItem href="/products/sheets">{$_("Sheets")}</DropdownItem>
        <DropdownItem href="/products/slides">{$_("Slides")}</DropdownItem>
      </Dropdown>
      <NavLi href="/login">{$_("Log in")}</NavLi>
      <div class="flex">
        <div
          class="border-2 mr-2 border-l border-slate-700 dark:border-slate-400"
        />
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
        <NavLi class="cursor-pointer px-2 mx-2">
          {$locale}
          <ChevronDownOutline
            class="w-3 h-3 ml-2 text-primary-800 dark:text-white inline"
          />
        </NavLi>
        <Dropdown>
          <DropdownItem
            on:click={() => {
              toggleLanuage("en-US");
            }}>English</DropdownItem
          >
          <DropdownItem
            on:click={() => {
              toggleLanuage("vi-VN");
            }}>Tiếng Việt</DropdownItem
          >
        </Dropdown>
      </div>
    </NavUl>
  </Navbar>
</header>
